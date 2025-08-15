# CSS Specificity Agent for Cursor

This is a Cursor-compatible version of the CSS Specificity Analysis Agent for the Kendo UI theme system. The agent analyzes CSS specificity violations and creates smart fixes using `:where()` wrapping.

## How Cursor Agents Work

Cursor uses modern **Project Rules** stored in `.cursor/rules/`:
- **`.cursor/rules/`** - Directory containing rule files in MDC format
- **`.mdc` files** - Markdown with metadata for rule configuration
- **Auto-attachment** - Rules automatically apply based on file patterns
- **Direct AI interaction** - Through Cursor's AI chat interface

## Setup

1. **The agent is ready to use** - Cursor will automatically read the `.cursor/rules/` files and apply the agent's knowledge to your AI interactions.

2. **Install Dependencies** (if needed):
```bash
npm install
```

## Rule Structure

The agent is split into focused rules:

### 1. Main Agent (`css-specificity-agent.mdc`)
- Complete agent instructions and decision-making framework
- Applied when working with SCSS, TSX, or test files
- Contains full workflow and classification logic

### 2. SCSS Fixes (`scss-specificity-fixes.mdc`)
- Auto-attaches when working with `.scss` files
- Focused on `:where()` wrapping patterns
- Strategic base class addition

### 3. Component Specs (`component-spec-updates.mdc`)
- Auto-attaches when working with `.spec.tsx` or test files
- Handles missing states and variants
- Test migration templates

## Usage

### Method 1: Direct AI Chat
Simply ask Cursor AI about CSS specificity issues:

```
"Can you help me fix CSS specificity violations in the button component?"
"Analyze the specificity issues in the grid component for the default theme"
"Fix the k-button-icon specificity violation"
```

### Method 2: Context-Aware Assistance
When working on specific file types, Cursor automatically applies relevant rules:

- **SCSS files** → SCSS specificity fixes auto-attach
- **Component specs** → Component spec updates auto-attach
- **Test files** → Full agent knowledge applies

### Method 3: Command Line Tools
Use the provided npm scripts:

```bash
# Build/update component registry
npm run build-registry

# Test a specific component
npm run test-component

# Full analysis workflow
npm run analyze
```

## Key Differences from GitHub Copilot Version

| Feature | GitHub Copilot | Cursor (Modern) |
|---------|----------------|-----------------|
| Agent File | `.copilot/agents/css-specificity/` | `.cursor/rules/` |
| Configuration | `config.json` | MDC metadata in rules |
| Commands | `@workspace /fix-specificity` | Direct AI chat |
| Integration | Copilot-specific syntax | Cursor AI interface |
| Scoping | Manual | Auto-attachment by file type |

## Agent Capabilities

The Cursor agent maintains all the same capabilities as the GitHub Copilot version:

- **Intelligent Classification**: Distinguishes framework classes from utilities
- **Strategic Fixes**: Applies `:where()` wrapping optimally
- **Component Registry Management**: Uses and updates component specifications
- **SCSS Modification**: Makes targeted changes to theme files
- **Pattern Recognition**: Identifies common violation patterns

## Example Workflow

1. **Identify Issue**:
   ```
   "I'm getting CSS specificity violations in the button component"
   ```

2. **Analyze**:
   ```
   "Run the specificity tests for the button component in default theme"
   ```

3. **Fix**:
   ```
   "Apply the :where() wrapping to fix the k-button-icon utility class"
   ```

4. **Validate**:
   ```
   "Re-run the tests to verify the fixes work"
   ```

## File Structure

```
.cursor/rules/                    # Modern Cursor rules directory
├── css-specificity-agent.mdc     # Main agent instructions
├── scss-specificity-fixes.mdc    # SCSS-specific patterns
└── component-spec-updates.mdc    # Component spec updates
cursor-agent-package.json         # Agent configuration (optional)
CURSOR_AGENT_README.md           # This documentation
.copilot/agents/css-specificity/ # Original agent files (for reference)
├── component-registry-builder.ts
├── component-registry.json
├── proposed-components.json
└── ...
```

## Benefits of Modern Cursor Rules

1. **Better Organization**: Split into focused, composable rules
2. **Auto-Attachment**: Rules apply automatically based on file context
3. **Version Control**: Rules are tracked in git with your codebase
4. **Flexible Scoping**: Different rules for different file types
5. **Maintained Capabilities**: All original agent features preserved

## Troubleshooting

### Agent Not Responding
- Ensure `.cursor/rules/` directory exists in project root
- Check that Cursor AI is enabled
- Try restarting Cursor
- Verify rule metadata is correct

### Registry Issues
```bash
# Rebuild the component registry
npm run build-registry
```

### Test Failures
```bash
# Run tests with verbose output
npx jest --config units/jest.config.mjs units/default/button.test.ts --verbose
```

## Migration from GitHub Copilot

If you're migrating from the GitHub Copilot version:

1. **Keep the original files** in `.copilot/agents/css-specificity/` for reference
2. **Use the new `.cursor/rules/`** for Cursor AI interactions
3. **Update your workflow** to use direct AI chat instead of `@workspace` commands
4. **Test the new setup** with a simple specificity issue

## Contributing

To modify the agent behavior:

1. Edit `.cursor/rules/*.mdc` files for instruction changes
2. Update `cursor-agent-package.json` for dependency changes (optional)
3. Test with real specificity issues
4. Update this README for documentation changes

The agent is designed to be self-contained and maintainable within the Cursor ecosystem using modern Project Rules.
