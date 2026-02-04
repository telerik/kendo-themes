# Data Model: Accessibility Integration Entities

**Feature**: 001-aria-integration  
**Phase**: Phase 1 - Design & Contracts  
**Date**: 2026-02-04

## Entity Definitions

This document defines the key entities, their attributes, relationships, and validation rules for the accessibility integration project.

---

## 1. Component

**Description**: Individual UI element with rendering specification in packages/html package

### Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | Lowercase component name (e.g., "button", "dropdown-list") |
| directoryPath | string | Yes | Relative path from packages/html/src/ |
| complexity | enum | Yes | Simple, Medium, Complex (based on interaction patterns) |
| hasInteraction | boolean | Yes | Whether component accepts user interaction |
| stateVariants | string[] | No | List of state variants (disabled, selected, expanded, etc.) |
| ariaSpecPath | string | Yes | Path to corresponding aria/*.md file |
| priority | enum | Yes | P0 (critical), P1 (high), P2 (standard) |

### Relationships

- **has-many** Templates (reusable TSX components)
- **has-one** ARIA Specification (aria/*.md file)
- **has-many** Tests (visual test scenarios)
- **has-one** Coverage Status (progress tracking)

### Validation Rules

- Component name must match directory name in packages/html/src/
- ARIA spec path must exist in aria/ folder
- Priority must be assigned based on usage frequency and accessibility impact

### Examples

```typescript
// Simple component
{
  name: "button",
  directoryPath: "packages/html/src/button",
  complexity: "Simple",
  hasInteraction: true,
  stateVariants: ["disabled", "pressed", "focused"],
  ariaSpecPath: "aria/button_aria.md",
  priority: "P0"
}

// Complex component
{
  name: "grid",
  directoryPath: "packages/html/src/grid",
  complexity: "Complex",
  hasInteraction: true,
  stateVariants: ["selected", "expanded", "sorted", "filtered"],
  ariaSpecPath: "aria/grid_aria.md",
  priority: "P0"
}
```

---

## 2. ARIA Specification

**Description**: Markdown file defining accessibility requirements for a component

### Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| componentName | string | Yes | Component this spec applies to |
| filePath | string | Yes | Path to aria/*.md file |
| ruleCount | number | Yes | Total number of validation rules |
| lastUpdated | date | Yes | Last modification date |
| wcagLevel | enum | Yes | Minimum WCAG level (AA, AAA) |

### Relationships

- **belongs-to** Component
- **has-many** Validation Rules (individual selector + attribute requirements)

### Validation Rules

- File must exist at specified path
- File must follow aria/*.md naming convention (lowercase with underscores)
- Must contain at least one validation rule

### File Format Example

```markdown
## WAI-ARIA

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| .k-button | role=button or nodeName=button | If element is not <button>, set role |
| .k-button.k-pressed | aria-pressed=true | Indicates pressed state for toggle buttons |
```

---

## 3. Validation Rule

**Description**: Single requirement from ARIA specification

### Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| selector | string | Yes | CSS selector targeting elements |
| requiredAttributes | object[] | Yes | Array of {name, value, alternatives} |
| optionalAttributes | object[] | No | Optional ARIA attributes |
| rationale | string | Yes | Explanation from "Usage" column |
| wcagCriteria | string | No | Related WCAG success criteria (e.g., "4.1.2") |

### Relationships

- **belongs-to** ARIA Specification

### Validation Rules

- Selector must be valid CSS selector
- At least one required attribute must be specified
- Alternatives represent OR conditions (e.g., native element OR role attribute)

### Examples

```typescript
// Simple rule
{
  selector: ".k-button",
  requiredAttributes: [
    { name: "role", value: "button", alternatives: ["nodeName=button"] }
  ],
  optionalAttributes: [],
  rationale: "If element is not <button>, explicitly set role",
  wcagCriteria: "4.1.2"
}

// State-dependent rule
{
  selector: ".k-button.k-pressed",
  requiredAttributes: [
    { name: "aria-pressed", value: "true|false", alternatives: [] }
  ],
  optionalAttributes: [],
  rationale: "Indicates pressed state for toggle buttons",
  wcagCriteria: "4.1.2"
}
```

---

## 4. Template

**Description**: Reusable TSX component in packages/html

### Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | Template file name (without .tsx) |
| filePath | string | Yes | Absolute path to template file |
| ariaApplied | boolean | Yes | Whether ARIA attributes have been applied (Phase 1) |
| hybridDocsApplied | boolean | Yes | Whether hybrid docs added (Phase 2) |
| validationStatus | enum | Yes | Pending, Validated, Failed |
| lastValidated | date | No | Last validation timestamp |

### Relationships

- **belongs-to** Component

### Validation Rules

- File must exist in component's templates/ directory
- Must be .tsx file with React functional component
- Cannot be in tests/ directory (tests are entry points, not templates)

### Examples

```typescript
{
  name: "button",
  filePath: "packages/html/src/button/templates/button.tsx",
  ariaApplied: true,
  hybridDocsApplied: false,
  validationStatus: "Validated",
  lastValidated: "2026-02-04T10:30:00Z"
}
```

---

## 5. Coverage Status

**Description**: Progress tracking per component across three phases

### Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| componentName | string | Yes | Component being tracked |
| phase | enum | Yes | Phase1 (Apply), Phase2 (Migrate), Phase3 (AI Workflow) |
| status | enum | Yes | Pending, InProgress, Validated, Blocked |
| ariaRulesApplied | number | Yes | Count of rules implemented |
| ariaRulesTotal | number | Yes | Total rules in aria/*.md spec |
| testAriaStatus | enum | Yes | NotRun, Passed, Failed |
| testWcagStatus | enum | Yes | NotRun, Passed, Failed |
| lastUpdated | date | Yes | Last status change |
| blockers | string[] | No | List of blocking issues |

### Relationships

- **belongs-to** Component

### Validation Rules

- Coverage percentage = (ariaRulesApplied / ariaRulesTotal) * 100
- Component cannot move to Phase 2 until Phase 1 status is "Validated"
- Both testAriaStatus and testWcagStatus must be "Passed" for "Validated" status

### State Transitions

```
Pending → InProgress → Validated
                    ↓
                  Blocked → InProgress
```

### Examples

```typescript
// Phase 1 in progress
{
  componentName: "button",
  phase: "Phase1",
  status: "InProgress",
  ariaRulesApplied: 2,
  ariaRulesTotal: 3,
  testAriaStatus: "NotRun",
  testWcagStatus: "NotRun",
  lastUpdated: "2026-02-04T10:00:00Z",
  blockers: []
}

// Phase 1 completed
{
  componentName: "button",
  phase: "Phase1",
  status: "Validated",
  ariaRulesApplied: 3,
  ariaRulesTotal: 3,
  testAriaStatus: "Passed",
  testWcagStatus: "Passed",
  lastUpdated: "2026-02-04T12:00:00Z",
  blockers: []
}
```

---

## Entity Relationships Diagram

```
Component (1) ──────┬──── (1) ARIA Specification
                    │
                    ├──── (N) Template
                    │
                    ├──── (N) Test
                    │
                    └──── (1) Coverage Status

ARIA Specification (1) ──── (N) Validation Rule
```

---

## Aggregate Metrics

### Repository-Wide Tracking

| Metric | Calculation | Target |
|--------|-------------|--------|
| Phase 1 Coverage | Components with status=Validated / Total Components | 100% |
| ARIA Rule Coverage | Sum(ariaRulesApplied) / Sum(ariaRulesTotal) | 100% |
| Validation Pass Rate | Components with testAriaStatus=Passed / Components InProgress | 100% |
| WCAG Compliance Rate | Components with testWcagStatus=Passed / Components InProgress | 100% |
| Phase 2 Progress | Components with hybridDocsApplied=true / Total Components | TBD (after Phase 1) |

---

**Data Model Version**: 1.0  
**Last Updated**: 2026-02-04  
**Status**: Phase 1 Design - Ready for Contract Definition