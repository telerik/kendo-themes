# Accessibility Workflow V2 - Quick Reference

## New Requirements (January 2026)

### ✅ What Changed

1. **Template Modification Allowed** - Can now modify `templates/` folder files
2. **100% Rule Coverage Required** - All ARIA spec rules must be applied
3. **Visual Regression Safety** - No new screenshot diffs allowed
4. **Revisit All Components** - Re-validate 78 completed components
5. **Complete Remaining** - Apply to 31 pending components

### 🎯 New Workflow Steps

#### Apply ARIA with 100% Coverage

1. Read spec and count rules
2. Apply to root `.spec.tsx` files  
3. Check coverage: `npm run test:aria [component] -- --verbose`
4. If <100%: Update templates or create new ones
5. Re-validate until 100%
6. Check WCAG: `npm run test:wcag [component]`
7. Visual regression check
8. Mark complete

#### File Modification Rules

✅ **Allowed**:
- Root `.spec.tsx` files - add ARIA attributes
- `templates- `templates- `templates- `templates- `templates- `templates- `templates- `templates- `templates- `tem� - `templates- `templates- `templates- `templlem- `templates- `templates- `templa Markup structure changes

### 📊 Success Criteria

- [ ] 100% ARIA rule coverage (X/X rules)
- [ ] 95%- [ ] 95%- [ ] 95%- [ ] 95%- [ ] 95%- [ ] 95%- [ ] 95%- [ ] 95%- [ ] 95eg- [ ] 95%- [ ] 95%- [ ] 95%- [ ] 95%- [ ] 95%- [ ] 95%- [ ] 95%-``bash
# Check coverage
npm run test:aria [component] -- --verbose

# Test WCAG
npm run test:wcag [component]

# Mark complete
node scripts/aria-bulk-apply.mjs complete [component]
```
