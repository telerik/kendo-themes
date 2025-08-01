# GitHub Copilot Chat Commands for Kendo Themes

## Quick Commands

Use these commands in GitHub Copilot Chat:

### CSS Specificity Analysis
```
@workspace /fix-specificity [component] [theme]
```
Example: `@workspace /fix-specificity button default`

### Component Registry Management
```
@workspace /rebuild-registry
```

### Full Analysis Workflow
```
@workspace /analyze-theme [theme]
```

## Chat Prompts

### Start CSS Specificity Analysis
```
I need to analyze CSS specificity violations for the button component in the default theme. Please:

1. Load the CSS specificity agent context from agents/css-specificity/
2. Check if the component registry is current
3. Run the specificity tests
4. Identify violations and suggest intelligent fixes
5. Apply fixes to the SCSS files

Use the agent instructions in agents/css-specificity/instructions.md for detailed guidance.
```

### Quick Fix Request
```
Fix CSS specificity violations in [file path]. Use the component registry at agents/css-specificity/component-registry.json to classify classes. Only wrap utility classes with :where(), never wrap official components, variants, options, or states.
```

### Registry Rebuild
```
Rebuild the component registry by running the builder at agents/css-specificity/component-registry-builder.ts. This analyzes the HTML package exports and generates the classification data.
```

## Integration with Copilot Workspace

1. **Open Copilot Chat** in VS Code (`Ctrl+Shift+I` or `Cmd+Shift+I`)
2. **Reference the agent**: `@workspace` to access workspace context
3. **Use slash commands**: `/fix-specificity`, `/rebuild-registry`, etc.
4. **Provide context**: Mention specific files or components to analyze

## Example Workflow

```
User: @workspace /fix-specificity button default

Copilot: I'll analyze CSS specificity violations for the button component using the CSS specificity agent. Let me:

1. Check the component registry...
2. Run specificity tests...
3. Identify violations...
4. Apply intelligent fixes...

[Copilot follows the agent instructions and provides fixes]
```
