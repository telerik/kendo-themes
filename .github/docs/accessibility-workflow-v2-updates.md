# Accessibility Workflow V2 Updates (January 2026)

## Summary of Changes

This document outlines the updated requirements and workflows for ARIA application in the Kendo Themes project.

## What Changed

### 1. Template Modification Now Allowed ✅

**Previously**: Could only modify root-level `.spec.tsx` files  
**Now**: Can modify files in `src/[component]/templates/` folder

**Constraints**:
- ✅ Add/update ARIA attributes
- ❌ No element addition, removal, or reordering
- ❌ No markup structure changes
- ✅ Preserve existing props and functionality

### 2. 100% Rule Coverage Required ✅

**Previously**: Targeted ~95% WCAG compliance, good ARIA coverage  
**Now**: Require 100% of ARIA spec rules to be applied

**Implementation**:
- Count rules in `aria/[component]_aria.md`
- Track coverage: X/Y rules applied (target 100%)
- Create new template scenarios for missing rules
- Update existing templates for state coverage

### 3. Visual Regression Safety ✅

**Requirement**: No new visual snapshots allow**Requirement**: No new visual snapshots allow**R di**Requirement**:  develop

### 4. Revisit Previously Completed Components 🔄

**Action**: Re-validate 78 completed components for 100%**Action**: R*Pri**Action**: Re-validate 78 completed compon 5.**Action**: Re-validateponents 🔄

**Action**: Apply updated wo**Action**: Apply updated wo**Action**: Apply updated wo**Actrage **Action**: Ap

## Key Principles

1. **Attributes Only** - No structure changes allowed
2. **100% Coverage** - All spec rules must be applied
3. **Visual Safety** - No screenshot diffs from develop
4. **Templates Enabled**4. **Templates Enabled**4. **Templates Enabled**4. **Templates Enafy4. **Templates Enabled**4. **Templates Enabled**4. **`AC4. **Templates EnaADME.md`
- Status Report: `ARIA_WCAG_STATUS.md`
- ARIA Specs: `aria/[component]_aria.md`
- HTML - HTML - HTML - HTML - HTML - HTML - HTML - HTMLtions.md`
