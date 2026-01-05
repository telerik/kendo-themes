# Crawl Track Workflow

This document describes the interaction model between developers, Copilot, and the repository during Crawl-level exercises.

## Workflow Diagram

```mermaid
sequenceDiagram
    autonumber
    participant Dev as Developer
    participant VSC as VS Code
    participant Chat as Copilot Chat
    participant Inline as Copilot Inline
    participant Repo as Repository
    participant CI as GitHub Actions

    Note over Dev,CI: Exercise Setup Phase
    Dev->>VSC: Open exercise HOWTO.md
    Dev->>Chat: Read context with /explain
    Chat-->>Dev: Explanation of task

    Note over Dev,CI: Implementation Phase
    Dev->>VSC: Navigate to target file
    Dev->>Inline: Start typing code
    Inline-->>VSC: Suggest completions
    Dev->>VSC: Accept/modify suggestions
    
    alt Need more context
        Dev->>Chat: Ask follow-up question
        Chat-->>Dev: Detailed explanation
    end

    Note over Dev,CI: Testing Phase
    Dev->>Chat: /tests generate test cases
    Chat-->>Dev: Test code suggestions
    Dev->>VSC: Add tests to test file
    Dev->>Repo: Run npm test locally
    Repo-->>Dev: Test results

    Note over Dev,CI: Validation Phase
    Dev->>Repo: Run npm run lint
    Repo-->>Dev: Lint results
    Dev->>Repo: Run npm run docs
    Repo-->>Dev: Documentation generated

    Note over Dev,CI: Commit Phase
    Dev->>Repo: git add & commit
    Dev->>Repo: git push
    Repo->>CI: Trigger CI workflow
    
    alt CI Passes
        CI-->>Dev: ✓ All checks pass
        Dev->>VSC: Check ACCEPTANCE.md
    else CI Fails
        CI-->>Dev: ✗ Check failed
        Dev->>Chat: /explain the error
        Chat-->>Dev: Fix suggestion
        Dev->>VSC: Apply fix
        Dev->>Repo: Amend and push
    end

    Note over Dev,CI: Completion
    Dev->>VSC: Mark exercise complete
```

## Copilot Commands Reference

| Command | When to Use | Example |
|---------|-------------|---------|
| `/explain` | Understand existing code | "Explain how this mixin works" |
| `/tests` | Generate test cases | "Generate tests for this variable" |
| `/fix` | Debug an error | "Fix this Stylelint error" |
| `/doc` | Generate documentation | "Add SassDoc comments" |

## Local Validation Commands

```bash
# Quick check (run before every commit)
npm run lint && npm run test:units

# Full validation (run before PR)
npm run docs && npm run sass && npm run lint && npm run test:units

# Single component test
npm run test:units -- --testPathPattern=button
```

## CI Pipeline Overview

```mermaid
flowchart LR
    subgraph Trigger["Trigger"]
        push[Push to branch]
    end

    subgraph Checks["Parallel Checks"]
        lint[Lint Scripts]
        styles[Lint Styles]
        compile[Compile Themes]
        units[Unit Tests]
    end

    subgraph Visual["Visual Tests"]
        render[Render Pages]
        screenshots[Screenshots]
    end

    subgraph Status["Status"]
        pass[✓ Ready for Review]
        fail[✗ Fix Required]
    end

    push --> lint & styles & compile & units
    compile --> render --> screenshots
    lint & styles & units & screenshots --> pass
    lint & styles & units & screenshots -.->|failure| fail
```

## Crawl Guardrails

1. **Always run local tests** before pushing
2. **Keep diffs small** (< 50 lines preferred)
3. **One logical change** per commit
4. **Update tests** when changing behavior
5. **Document public APIs** with SassDoc

## Fallback: No CI Available

If CI is unavailable or you're working on a fork:

```bash
# Run the full validation suite locally
npm run docs && \
npm run sass && \
npm run lint && \
npm run test:units && \
echo "✓ All local checks pass"
```

## Branch Naming Convention

```
learn/crawl/<username>-<date>-<exercise-slug>
```

Example: `learn/crawl/epetrov-20260105-repo-orientation`
