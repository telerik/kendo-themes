# GitHub Copilot Integration for Kendo Themes Agents

This workspace is configured to work seamlessly with GitHub Copilot for AI-assisted theme development.

## Structure

```
.copilot/
├── agents/                     # AI agents for development tasks
│   └── css-specificity/       # CSS specificity analysis agent
│       ├── instructions.md    # Complete agent instructions
│       ├── config.json        # Agent configuration
│       ├── component-registry-builder.ts  # Registry builder tool
│       ├── component-registry.json        # Generated component data
│       ├── package.json       # Dependencies
│       └── tsconfig.json      # TypeScript config
├── workspace.json             # Agent definitions for Copilot
├── commands.md               # Available workspace commands
└── README.md                 # This file
```

## Setup

1. **Install GitHub Copilot** in VS Code
2. **Open Copilot Chat** (`Ctrl+Shift+I` or `Cmd+Shift+I`)
3. **Use workspace commands** with `@workspace`

## Available Agents

### CSS Specificity Agent
**Purpose**: Analyze and fix CSS specificity violations in Kendo UI themes

**Usage**:
```
@workspace /fix-specificity button default
```

**What it does**:
- Analyzes CSS specificity violations
- Classifies CSS classes (official vs utility)
- Applies intelligent `:where()` wrapping
- Preserves framework integrity

## Quick Commands

| Command | Description | Example |
|---------|-------------|---------|
| `@workspace /fix-specificity [component] [theme]` | Fix specificity violations | `@workspace /fix-specificity button default` |
| `@workspace /rebuild-registry` | Rebuild component registry | `@workspace /rebuild-registry` |
| `@workspace /analyze-theme [theme]` | Full theme analysis | `@workspace /analyze-theme default` |

## Manual Integration

If custom commands don't work, use these prompts:

### CSS Specificity Analysis
```
I need to analyze CSS specificity violations for the button component. Please:

1. Load the CSS specificity agent from agents/css-specificity/instructions.md
2. Check the component registry at agents/css-specificity/component-registry.json
3. Run specificity tests for the component
4. Apply intelligent fixes using the agent's classification logic

Only wrap utility classes with :where() - never wrap official components, variants, options, or states.
```

### Component Registry Rebuild
```
Rebuild the component registry by running agents/css-specificity/component-registry-builder.ts. This analyzes HTML package exports to generate classification data for CSS classes.
```

## Workflow Integration

1. **Start with Copilot Chat**: Open chat and reference `@workspace`
2. **Use agent context**: Copilot will load agent instructions automatically
3. **Provide specifics**: Mention components, themes, or files to analyze
4. **Review suggestions**: Copilot will follow agent logic for intelligent fixes
5. **Apply changes**: Copilot can modify SCSS files directly

## Benefits

- **Consistent Logic**: Copilot follows the same classification rules as manual agents
- **Context Awareness**: Full access to component registry and theme structure
- **Intelligent Fixes**: AI reasoning for complex CSS specificity decisions
- **Workflow Integration**: Seamless development experience in VS Code

## Troubleshooting

**If Copilot doesn't recognize agents:**
1. Ensure `.copilot/` folder exists with agent definitions
2. Restart VS Code to reload Copilot configuration
3. Use manual prompts with explicit file references

**If commands don't work:**
1. Use `@workspace` prefix for workspace awareness
2. Reference specific files: `agents/css-specificity/instructions.md`
3. Provide clear context about what you want to analyze
