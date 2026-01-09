# Security Guidelines

> Last updated: 2026-01-09

## Overview

This document defines secret management practices for the kendo-themes repository.

## Do / Don't

### ✅ Do

| Practice | Example |
|----------|---------|
| Use environment variables for secrets | `$NUGET_API_KEY` |
| Store secrets in GitHub Actions secrets | `${{ secrets.GH_TOKEN }}` |
| Use secret managers (Akeyless) for CI | `import-secrets` action |
| Create `.env.example` with redacted values | `API_KEY=your-key-here` |
| Review `.gitignore` before committing | Check for `.env` files |

### ❌ Don't

| Practice | Risk |
|----------|------|
| Hardcode tokens in source files | Exposed in git history forever |
| Commit `.env` files | Credentials leak to repo |
| Log secret values | Visible in CI logs |
| Share secrets via chat/email | No audit trail |
| Use production secrets locally | Accidental modifications |

## Secret Storage

| Secret Type | Storage Location | Access |
|-------------|------------------|--------|
| NPM tokens | GitHub Actions secrets → Akeyless | CI only |
| NuGet API keys | GitHub Actions secrets → Akeyless | CI only |
| GitHub tokens | GitHub Actions secrets → Akeyless | CI only |
| Local dev secrets | `.env` file (gitignored) | Developer only |

## Environment Variables in Use

| Variable | Purpose | Where Set |
|----------|---------|-----------|
| `NUGET_API_KEY` | NuGet package publishing | CI via Akeyless |
| `NUGET_FEED` | NuGet registry URL | CI workflow env |
| `NPM_TOKEN` | npm registry auth | CI via Akeyless |
| `GH_TOKEN` | GitHub API access | CI via Akeyless |
| `THEME` | Test suite configuration | Local/CI env |

## Local Development

For local development requiring secrets:

1. Copy `.env.example` to `.env`
2. Fill in your development credentials
3. Never commit `.env` (it's gitignored)

```bash
# .env.example (safe to commit)
NUGET_API_KEY=your-api-key-here
NUGET_FEED=https://nuget.pkg.github.com/telerik/index.json
```

## Rotation Policy

| Secret | Rotation Frequency | Owner |
|--------|-------------------|-------|
| NPM tokens | On compromise or annually | DevOps |
| NuGet keys | On compromise or annually | DevOps |
| GitHub tokens | Auto-rotated by Akeyless | Akeyless |

## Incident Response

If a secret is accidentally committed:

1. **Immediately** rotate the compromised credential
2. Use `git filter-branch` or BFG Repo-Cleaner to remove from history
3. Force push the cleaned history (coordinate with team)
4. Audit for unauthorized access

## Gitignore Patterns

The following patterns are ignored to prevent accidental commits:

```gitignore
# Secrets and environment files
.env
.env.*
!.env.example
*.pem
*.key
*.p12
*.pfx

# Credentials
.npmrc
.nuget/
nuget.config
```

## Verification

```bash
# Check for secrets before committing
git diff --cached --name-only | xargs grep -l -E "(API_KEY|SECRET|TOKEN|PASSWORD)=" || echo "No secrets found"

# Verify .gitignore covers .env
echo "test" > .env && git status --porcelain .env  # Should show nothing
rm .env
```
