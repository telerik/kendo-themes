"use strict";

/**
 * Custom reg-suit publisher plugin.
 *
 * `reg-publish-gh-pages-plugin` bundles both `fetch()` and `publish()`, but
 * neither is usable as-is for this repo's report volume:
 *  - its `fetch()` is a documented no-op, so reg-suit never had a real
 *    baseline to diff against and every run was reported as "all new".
 *  - its `publish()` shells out to `git commit`/`git push` against a
 *    `git worktree` checkout of the *entire* gh-pages history. A real (not
 *    "new") comparison mirrors `actual/`+`expected/` for every compared item
 *    (~9,900 files for this repo), and that commit reliably crashes the
 *    runner with ENOBUFS - see PR #5997 discussion for the full analysis.
 *
 * This plugin implements a real `fetch()` (reads the previously published
 * "actual" snapshot for the expected commit key back from `gh-pages`) and
 * leaves `publish()` to only build the report locally + hand off the
 * publish target to the workflow, which pushes it with
 * `peaceiris/actions-gh-pages` instead - a purpose-built action that doesn't
 * choke on large generated-asset commits.
 *
 * Report key: `publish()` normally namespaces the report under the commit
 * hash key reg-suit computed (`reg-keygen-git-hash-plugin`). For PR/feature
 * branch runs, the workflow instead sets `REG_REPORT_KEY=pr-<number>` before
 * invoking reg-suit, so every push to the same PR republishes over the same
 * `reports/pr-<number>/` folder instead of piling up one folder per commit.
 * `_visual-regression.yml`'s cleanup workflow deletes that folder once the PR
 * closes. Baseline publishes from `develop` (`ci_develop.yml`, `baseline:
 * true`) never set that env var, so they keep the per-commit key - later
 * `fetch()` calls look up an exact baseline commit, not a PR.
 */

const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const { getRepoInfo } = require("reg-publish-gh-pages-plugin/lib/git-util");

class GhPagesFetchPublisherPlugin {
  init(config) {
    this.logger = config.logger;
    this.workingDirs = config.workingDirs;
    this.branch = config.options.branch || "gh-pages";
    this.outDir = config.options.outDir || "";
    this.includeCommitHash = config.options.includeCommitHash ?? false;
    this.baseBranch = config.options.baseBranch || "develop";
  }

  publish(key) {
    const info = getRepoInfo();
    // REG_REPORT_KEY (set by the workflow for PR runs) overrides the default
    // commit-hash key so every push to the same PR republishes in place.
    const reportKey = process.env.REG_REPORT_KEY || key;
    const targetDir = [this.outDir, this.includeCommitHash ? reportKey : ""].filter(Boolean).join("/");

    if (!targetDir) {
      this.logger.warn("Publish skipped. Set outDir option or enable includeCommitHash.");
      return Promise.resolve({ reportUrl: undefined });
    }

    // Don't push here - just leave the report on disk and tell the workflow
    // where to publish it from/to. The actual gh-pages push is done by the
    // `peaceiris/actions-gh-pages` step in _visual-regression.yml.
    const publishInfo = { sourceDir: this.workingDirs.base, targetDir };
    fs.writeFileSync(path.join(process.cwd(), "reg-publish-info.json"), JSON.stringify(publishInfo));

    const reportUrl = info ? [`https://${info.owner}.github.io`, info.repo, targetDir].join("/").replace(/\/?$/, "/") : undefined;

    if (reportUrl) {
      this.logger.info(`Report URL: ${reportUrl}`);
    } else {
      this.logger.warn("Unable to determine repository info. Report URL will not be available.");
    }

    return Promise.resolve({ reportUrl });
  }

  // The key reg-keygen-git-hash-plugin passes in is unreliable as a baseline
  // lookup: it can be a `[skip ci]` release commit or a commit from another
  // feature branch, neither of which ever publishes a baseline. Resolve from
  // the fork point off the base branch instead.
  fetch(expectedKey) {
    const expectedDir = this.workingDirs.expectedDir;
    const base = this._forkPoint() || expectedKey;

    if (!base) {
      this.logger.info("No base commit. Treating as new.");
      return Promise.resolve();
    }

    if (!this._fetchBranch()) {
      return Promise.resolve();
    }

    for (const { key } of this._baselineCandidates(base)) {
      const remotePath = `${[this.outDir, key].filter(Boolean).join("/")}/actual`;

      fs.rmSync(expectedDir, { recursive: true, force: true });
      fs.mkdirSync(expectedDir, { recursive: true });

      if (this._extract(remotePath, expectedDir)) {
        this.logger.info(`Fetched expected images from ${this.branch}:${remotePath}`);
        return Promise.resolve();
      }
    }

    this.logger.warn(`No published baseline found for fork point ${base} on ${this.branch}. Treating as new.`);
    return Promise.resolve();
  }

  _git(args) {
    return execFileSync("git", args, { encoding: "utf8", stdio: "pipe" }).trim();
  }

  _forkPoint() {
    try {
      return this._git(["merge-base", "HEAD", `origin/${this.baseBranch}`]);
    } catch {
      return undefined;
    }
  }

  // Published baselines nearest to `base` first: ancestors (exact content match
  // once release commits are skipped), then newer ones ordered by how far ahead they are.
  _baselineCandidates(base) {
    const prefix = this.outDir ? `${this.outDir}/` : "";
    let entries;
    try {
      entries = this._git(["ls-tree", "--name-only", `origin/${this.branch}`, prefix || "./"]).split("\n");
    } catch {
      return [];
    }

    const candidates = [];
    for (const entry of entries) {
      const key = entry.slice(prefix.length);
      // PR reports (pr-<n>) and feature-run reports (.source-sha marker) are not baselines.
      if (!/^[0-9a-f]{40}$/.test(key)) {
        continue;
      }
      try {
        if (this._git(["ls-tree", "--name-only", `origin/${this.branch}`, "--", `${prefix}${key}/.source-sha`])) {
          continue;
        }
        let isAncestor = true;
        try {
          execFileSync("git", ["merge-base", "--is-ancestor", key, base], { stdio: "pipe" });
        } catch {
          isAncestor = false;
        }
        const distance = isAncestor
          ? Number(this._git(["rev-list", "--count", `${key}..${base}`]))
          : Number(
              this._git(["rev-list", "--count", "--invert-grep", "--grep=^chore(release):", `${base}..${key}`]),
            );
        candidates.push({ key, isAncestor, distance });
      } catch {
        // Commit not in the local clone - can't be placed relative to `base`.
      }
    }

    return candidates.sort((a, b) => Number(b.isAncestor) - Number(a.isAncestor) || a.distance - b.distance);
  }

  _fetchBranch() {
    try {
      execFileSync(
        "git",
        ["fetch", "--depth", "1", "origin", `+refs/heads/${this.branch}:refs/remotes/origin/${this.branch}`],
        { stdio: "pipe" },
      );
      return true;
    } catch (e) {
      this.logger.warn(`Unable to fetch "${this.branch}" branch. Treating as new. (${e.message})`);
      return false;
    }
  }

  _extract(remotePath, destDir) {
    try {
      const archive = execFileSync("git", ["archive", `origin/${this.branch}`, "--", remotePath], {
        stdio: ["pipe", "pipe", "pipe"],
        maxBuffer: 1024 * 1024 * 1024,
      });
      const strip = remotePath.split("/").length;
      execFileSync("tar", ["-x", "-C", destDir, `--strip-components=${strip}`], {
        input: archive,
        stdio: ["pipe", "pipe", "pipe"],
      });
      // git archive succeeds even for an empty/non-matching pathspec, producing
      // an (almost) empty tar. Verify something was actually extracted.
      return fs.readdirSync(destDir).length > 0;
    } catch {
      return false;
    }
  }
}

const pluginFactory = () => ({
  publisher: new GhPagesFetchPublisherPlugin(),
});

module.exports = pluginFactory;
