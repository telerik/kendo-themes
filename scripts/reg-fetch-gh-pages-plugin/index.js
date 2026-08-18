"use strict";

/**
 * Custom reg-suit publisher plugin.
 *
 * `reg-publish-gh-pages-plugin` only implements `publish()` — its `fetch()`
 * is a documented no-op, which means reg-suit never had a real baseline to
 * diff against and every run was reported as "all new".
 *
 * This plugin keeps the same, working gh-pages deploy logic for `publish()`
 * (delegated to the official plugin) and adds a real `fetch()`: it reads the
 * previously published "actual" snapshot for the expected commit key back
 * from the `gh-pages` branch so reg-cli has something to compare against.
 */

const { execFileSync } = require("node:child_process");
const fs = require("node:fs");

const { GhPagesPublisherPlugin } = require("reg-publish-gh-pages-plugin/lib/publisher");

class GhPagesFetchPublisherPlugin {
  init(config) {
    this.logger = config.logger;
    this.workingDirs = config.workingDirs;
    this.branch = config.options.branch || "gh-pages";
    this.outDir = config.options.outDir || "";

    // publish() is battle-tested already - delegate to it as-is.
    this._publisher = new GhPagesPublisherPlugin();
    this._publisher.init(config);
  }

  publish(key) {
    return this._publisher.publish(key);
  }

  fetch(expectedKey) {
    if (!expectedKey) {
      this.logger.info("No expected key. Treating as new.");
      return Promise.resolve();
    }

    const remoteDir = [this.outDir, expectedKey].filter(Boolean).join("/");
    const remotePath = `${remoteDir}/actual`;
    const expectedDir = this.workingDirs.expectedDir;

    if (!this._fetchBranch()) {
      return Promise.resolve();
    }

    fs.rmSync(expectedDir, { recursive: true, force: true });
    fs.mkdirSync(expectedDir, { recursive: true });

    if (!this._extract(remotePath, expectedDir)) {
      this.logger.warn(
        `No published report found for key "${expectedKey}" (${remotePath} on ${this.branch}). Treating as new.`,
      );
      return Promise.resolve();
    }

    this.logger.info(`Fetched expected images from ${this.branch}:${remotePath}`);
    return Promise.resolve();
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
