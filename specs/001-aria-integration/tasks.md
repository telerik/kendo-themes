# Tasks: Accessibility Integration - Three-Phase ARIA Implementation

**Feature**: 001-aria-integration  
**Input**: [spec.md](spec.md), [plan.md](plan.md), [data-model.md](data-model.md), [contracts/](contracts/), [quickstart.md](quickstart.md)  
**Organization**: Tasks grouped by user story to enable independent implementation and testing

## Format: `- [ ] [ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- All file paths are relative to repository root: `/Users/dtopalov/Documents/Work/packages/kendo-themes`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and validation infrastructure setup

**Status**: ✅ **COMPLETE** (2026-02-05)

- [x] T001 Verify Node.js v20+ installed: `node --version` ✅ v22.14.0
- [x] T002 [P] Verify all npm dependencies installed: `npm ci` ✅ All present
- [x] T003 [P] Verify test scripts available: `npm run test:aria --help && npm run test:wcag --help` ✅ Scripts added to package.json
- [x] T004 [P] Verify aria/ folder exists with 110+ specification files: `ls -1 aria/*.md | wc -l` ✅ 112 files
- [x] T005 [P] Verify packages/html structure: `ls -d packages/html/src/*/` ✅ 135 components
- [x] T006 [P] Verify TypeScript compilation works: `npm run typecheck` ✅ No errors
- [x] T007 Create tracking spreadsheet for 110+ components (name, priority, phase1-status, phase2-status, phase3-status) ✅ component-tracking.csv created

**Checkpoint**: ✅ Infrastructure verified - ready to begin User Story 1 implementation

**Deliverables**:
- ✅ Phase 1 completion report: specs/001-aria-integration/phase1-completion-report.md
- ✅ Component tracking spreadsheet: specs/001-aria-integration/component-tracking.csv
- ✅ npm scripts added: `test:aria`, `test:wcag`, `test:a11y`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core capabilities that MUST be complete before ANY user story implementation

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T008 Document component priority classification in tracking spreadsheet (P0: 15 components, P1: 40 components, P2: 55 components)
- [ ] T009 Create example workflow documentation: Select button component, read aria/button_aria.md, document expected output in .specify/examples/button-workflow.md
- [ ] T010 Validate test:aria script with known-good component: `npm run test:aria button` (baseline)
- [ ] T011 Validate test:wcag script with known-good component: `npm run test:wcag button` (baseline)
- [ ] T012 Establish git workflow: Branch management conventions, commit messages with chore: prefix (not feat:/fix: to avoid version bumps)

**Checkpoint**: Foundation ready - User Story 1 implementation can now begin in parallel

---

## Phase 3: User Story 1 - Apply ARIA Specifications (Priority: P1) 🎯 MVP

**Goal**: Apply existing ARIA specifications from aria/*.md to all 110+ components, ensuring WCAG 2.2 Level AA compliance

**Independent Test**: Select any component (e.g., button). Read aria/button_aria.md, apply ARIA attributes to packages/html/src/button/button.spec.tsx and templates, run `npm run test:aria button && npm run test:wcag button`. Tests pass = component complete.

**Implementation Strategy**: Process components in batches by priority tier (P0 → P1 → P2)

### Batch 1: P0 Critical Components (15 components) - Foundation

#### Button Component

- [ ] T013 [P] [US1] Read ARIA spec: aria/button_aria.md
- [ ] T014 [US1] Apply ARIA attributes to packages/html/src/button/button.spec.tsx (role="button", aria-disabled, aria-pressed)
- [ ] T015 [P] [US1] Apply ARIA to packages/html/src/button/templates/button.tsx
- [ ] T016 [P] [US1] Apply ARIA to packages/html/src/button/templates/icon-button.tsx (add aria-label requirement)
- [ ] T017 [US1] Validate with test:aria: `npm run test:aria button`
- [ ] T018 [US1] Validate with test:wcag: `npm run test:wcag button`
- [ ] T019 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T020 [US1] Update tracking spreadsheet: Mark button as "Phase 1 Complete"
- [ ] T021 [US1] Commit changes: `git commit -m "chore(button): apply ARIA attributes from spec\n\nRefs: #001-aria-integration\nARIA Coverage: [X]/[Y] rules (100%)\nWCAG: PASS"`

#### Checkbox Component

- [ ] T022 [P] [US1] Read ARIA spec: aria/checkbox_aria.md
- [ ] T023 [US1] Apply ARIA attributes to packages/html/src/checkbox/checkbox.spec.tsx (role="checkbox", aria-checked, aria-disabled)
- [ ] T024 [P] [US1] Apply ARIA to all checkbox templates in packages/html/src/checkbox/templates/
- [ ] T025 [US1] Validate with test:aria: `npm run test:aria checkbox`
- [ ] T026 [US1] Validate with test:wcag: `npm run test:wcag checkbox`
- [ ] T027 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T028 [US1] Update tracking spreadsheet: Mark checkbox as "Phase 1 Complete"
- [ ] T029 [US1] Commit changes

#### Radio Component

- [ ] T030 [P] [US1] Read ARIA spec: aria/radio_aria.md
- [ ] T031 [US1] Apply ARIA attributes to packages/html/src/radio/radio.spec.tsx (role="radio", aria-checked, aria-disabled)
- [ ] T032 [P] [US1] Apply ARIA to all radio templates in packages/html/src/radio/templates/
- [ ] T033 [US1] Validate with test:aria: `npm run test:aria radio`
- [ ] T034 [US1] Validate with test:wcag: `npm run test:wcag radio`
- [ ] T035 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T036 [US1] Update tracking spreadsheet: Mark radio as "Phase 1 Complete"
- [ ] T037 [US1] Commit changes

#### Switch Component

- [ ] T038 [P] [US1] Read ARIA spec: aria/switch_aria.md
- [ ] T039 [US1] Apply ARIA attributes to packages/html/src/switch/switch.spec.tsx (role="switch", aria-checked, aria-disabled)
- [ ] T040 [P] [US1] Apply ARIA to all switch templates in packages/html/src/switch/templates/
- [ ] T041 [US1] Validate with test:aria: `npm run test:aria switch`
- [ ] T042 [US1] Validate with test:wcag: `npm run test:wcag switch`
- [ ] T043 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T044 [US1] Update tracking spreadsheet: Mark switch as "Phase 1 Complete"
- [ ] T045 [US1] Commit changes

#### TextBox Component

- [ ] T046 [P] [US1] Read ARIA spec: aria/textbox_aria.md
- [ ] T047 [US1] Apply ARIA attributes to packages/html/src/textbox/textbox.spec.tsx (aria-label/aria-labelledby, aria-required, aria-invalid)
- [ ] T048 [P] [US1] Apply ARIA to all textbox templates in packages/html/src/textbox/templates/
- [ ] T049 [US1] Validate with test:aria: `npm run test:aria textbox`
- [ ] T050 [US1] Validate with test:wcag: `npm run test:wcag textbox`
- [ ] T051 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T052 [US1] Update tracking spreadsheet: Mark textbox as "Phase 1 Complete"
- [ ] T053 [US1] Commit changes

#### NumericTextBox Component

- [ ] T054 [P] [US1] Read ARIA spec: aria/numerictextbox_aria.md
- [ ] T055 [US1] Apply ARIA attributes to packages/html/src/numerictextbox/numerictextbox.spec.tsx (role="spinbutton", aria-valuenow, aria-valuemin, aria-valuemax)
- [ ] T056 [P] [US1] Apply ARIA to all numerictextbox templates in packages/html/src/numerictextbox/templates/
- [ ] T057 [US1] Validate with test:aria: `npm run test:aria numerictextbox`
- [ ] T058 [US1] Validate with test:wcag: `npm run test:wcag numerictextbox`
- [ ] T059 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T060 [US1] Update tracking spreadsheet: Mark numerictextbox as "Phase 1 Complete"
- [ ] T061 [US1] Commit changes

#### DatePicker Component

- [ ] T062 [P] [US1] Read ARIA spec: aria/datepicker_aria.md
- [ ] T063 [US1] Apply ARIA attributes to packages/html/src/datepicker/datepicker.spec.tsx (role="combobox", aria-expanded, aria-controls)
- [ ] T064 [P] [US1] Apply ARIA to all datepicker templates in packages/html/src/datepicker/templates/
- [ ] T065 [US1] Validate with test:aria: `npm run test:aria datepicker`
- [ ] T066 [US1] Validate with test:wcag: `npm run test:wcag datepicker`
- [ ] T067 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T068 [US1] Update tracking spreadsheet: Mark datepicker as "Phase 1 Complete"
- [ ] T069 [US1] Commit changes

#### DropDownList Component

- [ ] T070 [P] [US1] Read ARIA spec: aria/dropdownlist_aria.md
- [ ] T071 [US1] Apply ARIA attributes to packages/html/src/dropdownlist/dropdownlist.spec.tsx (role="combobox", aria-expanded, aria-controls, aria-haspopup)
- [ ] T072 [P] [US1] Apply ARIA to dropdown popup in packages/html/src/dropdownlist/templates/ (role="listbox")
- [ ] T073 [P] [US1] Apply ARIA to list items (role="option", aria-selected)
- [ ] T074 [US1] Validate with test:aria: `npm run test:aria dropdownlist`
- [ ] T075 [US1] Validate with test:wcag: `npm run test:wcag dropdownlist`
- [ ] T076 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T077 [US1] Update tracking spreadsheet: Mark dropdownlist as "Phase 1 Complete"
- [ ] T078 [US1] Commit changes

#### ComboBox Component

- [ ] T079 [P] [US1] Read ARIA spec: aria/combobox_aria.md
- [ ] T080 [US1] Apply ARIA attributes to packages/html/src/combobox/combobox.spec.tsx (role="combobox", aria-expanded, aria-autocomplete)
- [ ] T081 [P] [US1] Apply ARIA to combobox templates in packages/html/src/combobox/templates/
- [ ] T082 [US1] Validate with test:aria: `npm run test:aria combobox`
- [ ] T083 [US1] Validate with test:wcag: `npm run test:wcag combobox`
- [ ] T084 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T085 [US1] Update tracking spreadsheet: Mark combobox as "Phase 1 Complete"
- [ ] T086 [US1] Commit changes

#### MultiSelect Component

- [ ] T087 [P] [US1] Read ARIA spec: aria/multiselect_aria.md
- [ ] T088 [US1] Apply ARIA attributes to packages/html/src/multiselect/multiselect.spec.tsx (role="combobox", aria-multiselectable, aria-expanded)
- [ ] T089 [P] [US1] Apply ARIA to multiselect templates in packages/html/src/multiselect/templates/
- [ ] T090 [US1] Validate with test:aria: `npm run test:aria multiselect`
- [ ] T091 [US1] Validate with test:wcag: `npm run test:wcag multiselect`
- [ ] T092 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T093 [US1] Update tracking spreadsheet: Mark multiselect as "Phase 1 Complete"
- [ ] T094 [US1] Commit changes

#### Grid Component (Complex)

- [ ] T095 [P] [US1] Read ARIA spec: aria/grid_aria.md
- [ ] T096 [US1] Apply ARIA attributes to packages/html/src/grid/grid.spec.tsx (role="grid", aria-colcount, aria-rowcount)
- [ ] T097 [P] [US1] Apply ARIA to grid rows in packages/html/src/grid/templates/ (role="row", aria-rowindex)
- [ ] T098 [P] [US1] Apply ARIA to grid cells (role="gridcell", aria-colindex)
- [ ] T099 [P] [US1] Apply ARIA to column headers (role="columnheader", aria-sort for sortable)
- [ ] T100 [US1] Validate with test:aria: `npm run test:aria grid`
- [ ] T101 [US1] Validate with test:wcag: `npm run test:wcag grid`
- [ ] T102 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T103 [US1] Update tracking spreadsheet: Mark grid as "Phase 1 Complete"
- [ ] T104 [US1] Commit changes

#### TreeView Component

- [ ] T105 [P] [US1] Read ARIA spec: aria/treeview_aria.md
- [ ] T106 [US1] Apply ARIA attributes to packages/html/src/treeview/treeview.spec.tsx (role="tree", aria-multiselectable)
- [ ] T107 [P] [US1] Apply ARIA to tree items in packages/html/src/treeview/templates/ (role="treeitem", aria-expanded, aria-selected)
- [ ] T108 [US1] Validate with test:aria: `npm run test:aria treeview`
- [ ] T109 [US1] Validate with test:wcag: `npm run test:wcag treeview`
- [ ] T110 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T111 [US1] Update tracking spreadsheet: Mark treeview as "Phase 1 Complete"
- [ ] T112 [US1] Commit changes

#### Menu Component

- [ ] T113 [P] [US1] Read ARIA spec: aria/menu_aria.md
- [ ] T114 [US1] Apply ARIA attributes to packages/html/src/menu/menu.spec.tsx (role="menubar" or role="menu")
- [ ] T115 [P] [US1] Apply ARIA to menu items in packages/html/src/menu/templates/ (role="menuitem", aria-haspopup, aria-expanded)
- [ ] T116 [US1] Validate with test:aria: `npm run test:aria menu`
- [ ] T117 [US1] Validate with test:wcag: `npm run test:wcag menu`
- [ ] T118 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T119 [US1] Update tracking spreadsheet: Mark menu as "Phase 1 Complete"
- [ ] T120 [US1] Commit changes

**Batch 1 Checkpoint**: All P0 components (15 total) complete with 100% ARIA coverage and WCAG compliance

### Batch 2: P1 Medium-Traffic Components (40 components)

#### Calendar Component

- [ ] T121 [P] [US1] Read ARIA spec: aria/calendar_aria.md
- [ ] T122 [US1] Apply ARIA attributes to packages/html/src/calendar/calendar.spec.tsx (role="grid", aria-label)
- [ ] T123 [P] [US1] Apply ARIA to calendar templates in packages/html/src/calendar/templates/
- [ ] T124 [US1] Validate with test:aria: `npm run test:aria calendar`
- [ ] T125 [US1] Validate with test:wcag: `npm run test:wcag calendar`
- [ ] T126 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T127 [US1] Update tracking spreadsheet: Mark calendar as "Phase 1 Complete"
- [ ] T128 [US1] Commit changes

#### Scheduler Component

- [ ] T129 [P] [US1] Read ARIA spec: aria/scheduler_aria.md
- [ ] T130 [US1] Apply ARIA attributes to packages/html/src/scheduler/scheduler.spec.tsx (role="grid", aria-label)
- [ ] T131 [P] [US1] Apply ARIA to scheduler templates in packages/html/src/scheduler/templates/
- [ ] T132 [US1] Validate with test:aria: `npm run test:aria scheduler`
- [ ] T133 [US1] Validate with test:wcag: `npm run test:wcag scheduler`
- [ ] T134 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T135 [US1] Update tracking spreadsheet: Mark scheduler as "Phase 1 Complete"
- [ ] T136 [US1] Commit changes

#### Gantt Component

- [ ] T137 [P] [US1] Read ARIA spec: aria/gantt_aria.md
- [ ] T138 [US1] Apply ARIA attributes to packages/html/src/gantt/gantt.spec.tsx (role="grid", aria-label)
- [ ] T139 [P] [US1] Apply ARIA to gantt templates in packages/html/src/gantt/templates/
- [ ] T140 [US1] Validate with test:aria: `npm run test:aria gantt`
- [ ] T141 [US1] Validate with test:wcag: `npm run test:wcag gantt`
- [ ] T142 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T143 [US1] Update tracking spreadsheet: Mark gantt as "Phase 1 Complete"
- [ ] T144 [US1] Commit changes

#### Dialog Component

- [ ] T145 [P] [US1] Read ARIA spec: aria/dialog_aria.md
- [ ] T146 [US1] Apply ARIA attributes to packages/html/src/dialog/dialog.spec.tsx (role="dialog", aria-modal, aria-labelledby)
- [ ] T147 [P] [US1] Apply ARIA to dialog templates in packages/html/src/dialog/templates/
- [ ] T148 [US1] Validate with test:aria: `npm run test:aria dialog`
- [ ] T149 [US1] Validate with test:wcag: `npm run test:wcag dialog`
- [ ] T150 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T151 [US1] Update tracking spreadsheet: Mark dialog as "Phase 1 Complete"
- [ ] T152 [US1] Commit changes

#### Notification Component

- [ ] T153 [P] [US1] Read ARIA spec: aria/notification_aria.md
- [ ] T154 [US1] Apply ARIA attributes to packages/html/src/notification/notification.spec.tsx (role="alert" or role="status")
- [ ] T155 [P] [US1] Apply ARIA to notification templates in packages/html/src/notification/templates/
- [ ] T156 [US1] Validate with test:aria: `npm run test:aria notification`
- [ ] T157 [US1] Validate with test:wcag: `npm run test:wcag notification`
- [ ] T158 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T159 [US1] Update tracking spreadsheet: Mark notification as "Phase 1 Complete"
- [ ] T160 [US1] Commit changes

#### Tooltip Component

- [ ] T161 [P] [US1] Read ARIA spec: aria/tooltip_aria.md
- [ ] T162 [US1] Apply ARIA attributes to packages/html/src/tooltip/tooltip.spec.tsx (role="tooltip", aria-describedby relationship)
- [ ] T163 [P] [US1] Apply ARIA to tooltip templates in packages/html/src/tooltip/templates/
- [ ] T164 [US1] Validate with test:aria: `npm run test:aria tooltip`
- [ ] T165 [US1] Validate with test:wcag: `npm run test:wcag tooltip`
- [ ] T166 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T167 [US1] Update tracking spreadsheet: Mark tooltip as "Phase 1 Complete"
- [ ] T168 [US1] Commit changes

#### TabStrip Component

- [ ] T169 [P] [US1] Read ARIA spec: aria/tabstrip_aria.md
- [ ] T170 [US1] Apply ARIA attributes to packages/html/src/tabstrip/tabstrip.spec.tsx (role="tablist", role="tab", aria-selected)
- [ ] T171 [P] [US1] Apply ARIA to tab panels in packages/html/src/tabstrip/templates/ (role="tabpanel", aria-labelledby)
- [ ] T172 [US1] Validate with test:aria: `npm run test:aria tabstrip`
- [ ] T173 [US1] Validate with test:wcag: `npm run test:wcag tabstrip`
- [ ] T174 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T175 [US1] Update tracking spreadsheet: Mark tabstrip as "Phase 1 Complete"
- [ ] T176 [US1] Commit changes

#### PanelBar Component

- [ ] T177 [P] [US1] Read ARIA spec: aria/panelbar_aria.md
- [ ] T178 [US1] Apply ARIA attributes to packages/html/src/panelbar/panelbar.spec.tsx (role="tree", role="treeitem", aria-expanded)
- [ ] T179 [P] [US1] Apply ARIA to panelbar templates in packages/html/src/panelbar/templates/
- [ ] T180 [US1] Validate with test:aria: `npm run test:aria panelbar`
- [ ] T181 [US1] Validate with test:wcag: `npm run test:wcag panelbar`
- [ ] T182 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T183 [US1] Update tracking spreadsheet: Mark panelbar as "Phase 1 Complete"
- [ ] T184 [US1] Commit changes

#### Drawer Component

- [ ] T185 [P] [US1] Read ARIA spec: aria/drawer_aria.md
- [ ] T186 [US1] Apply ARIA attributes to packages/html/src/drawer/drawer.spec.tsx (role="navigation" or role="dialog", aria-label)
- [ ] T187 [P] [US1] Apply ARIA to drawer templates in packages/html/src/drawer/templates/
- [ ] T188 [US1] Validate with test:aria: `npm run test:aria drawer`
- [ ] T189 [US1] Validate with test:wcag: `npm run test:wcag drawer`
- [ ] T190 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T191 [US1] Update tracking spreadsheet: Mark drawer as "Phase 1 Complete"
- [ ] T192 [US1] Commit changes

#### Remaining P1 Components (30 more components)

- [ ] T193 [US1] Process remaining 30 P1 components following same pattern: Read spec → Apply attributes → Validate → Commit (appbar, autocomplete, avatar, badge, barcode, bottom-nav, breadcrumb, card, carousel, chart, chat, chip, coloreditor, column-menu, context-menu, daterangepicker, datetimepicker, dock-manager, dropdowntree, dropzone, editor, expansion-panel, fab, filemanager, filter, floating-label, form, listbox, listview, loader)
- [ ] T194 [US1] Update tracking spreadsheet: Verify all 40 P1 components marked "Phase 1 Complete"

**Batch 2 Checkpoint**: All P1 components (40 total) complete with 100% ARIA coverage and WCAG compliance

### Batch 3: P2 Low-Traffic/Specialized Components (55 components)

#### Barcode Component

- [ ] T195 [P] [US1] Read ARIA spec: aria/barcode_aria.md
- [ ] T196 [US1] Apply ARIA attributes to packages/html/src/barcode/barcode.spec.tsx (role="img", aria-label)
- [ ] T197 [P] [US1] Apply ARIA to barcode templates in packages/html/src/barcode/templates/
- [ ] T198 [US1] Validate with test:aria: `npm run test:aria barcode`
- [ ] T199 [US1] Validate with test:wcag: `npm run test:wcag barcode`
- [ ] T200 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T201 [US1] Update tracking spreadsheet: Mark barcode as "Phase 1 Complete"
- [ ] T202 [US1] Commit changes

#### QRCode Component

- [ ] T203 [P] [US1] Read ARIA spec: aria/qrcode_aria.md
- [ ] T204 [US1] Apply ARIA attributes to packages/html/src/qrcode/qrcode.spec.tsx (role="img", aria-label)
- [ ] T205 [P] [US1] Apply ARIA to qrcode templates in packages/html/src/qrcode/templates/
- [ ] T206 [US1] Validate with test:aria: `npm run test:aria qrcode`
- [ ] T207 [US1] Validate with test:wcag: `npm run test:wcag qrcode`
- [ ] T208 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T209 [US1] Update tracking spreadsheet: Mark qrcode as "Phase 1 Complete"
- [ ] T210 [US1] Commit changes

#### Signature Component

- [ ] T211 [P] [US1] Read ARIA spec: aria/signature_aria.md
- [ ] T212 [US1] Apply ARIA attributes to packages/html/src/signature/signature.spec.tsx (role="img", aria-label)
- [ ] T213 [P] [US1] Apply ARIA to signature templates in packages/html/src/signature/templates/
- [ ] T214 [US1] Validate with test:aria: `npm run test:aria signature`
- [ ] T215 [US1] Validate with test:wcag: `npm run test:wcag signature`
- [ ] T216 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T217 [US1] Update tracking spreadsheet: Mark signature as "Phase 1 Complete"
- [ ] T218 [US1] Commit changes

#### Spreadsheet Component (Complex)

- [ ] T219 [P] [US1] Read ARIA spec: aria/spreadsheet_aria.md
- [ ] T220 [US1] Apply ARIA attributes to packages/html/src/spreadsheet/spreadsheet.spec.tsx (role="grid", aria-label)
- [ ] T221 [P] [US1] Apply ARIA to spreadsheet templates in packages/html/src/spreadsheet/templates/
- [ ] T222 [US1] Validate with test:aria: `npm run test:aria spreadsheet`
- [ ] T223 [US1] Validate with test:wcag: `npm run test:wcag spreadsheet`
- [ ] T224 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T225 [US1] Update tracking spreadsheet: Mark spreadsheet as "Phase 1 Complete"
- [ ] T226 [US1] Commit changes

#### Diagram Component (Complex)

- [ ] T227 [P] [US1] Read ARIA spec: aria/diagram_aria.md
- [ ] T228 [US1] Apply ARIA attributes to packages/html/src/diagram/diagram.spec.tsx (role="img", aria-label)
- [ ] T229 [P] [US1] Apply ARIA to diagram templates in packages/html/src/diagram/templates/
- [ ] T230 [US1] Validate with test:aria: `npm run test:aria diagram`
- [ ] T231 [US1] Validate with test:wcag: `npm run test:wcag diagram`
- [ ] T232 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T233 [US1] Update tracking spreadsheet: Mark diagram as "Phase 1 Complete"
- [ ] T234 [US1] Commit changes

#### Map Component (Complex)

- [ ] T235 [P] [US1] Read ARIA spec: aria/map_aria.md
- [ ] T236 [US1] Apply ARIA attributes to packages/html/src/map/map.spec.tsx (role="application", aria-label)
- [ ] T237 [P] [US1] Apply ARIA to map templates in packages/html/src/map/templates/
- [ ] T238 [US1] Validate with test:aria: `npm run test:aria map`
- [ ] T239 [US1] Validate with test:wcag: `npm run test:wcag map`
- [ ] T240 [US1] Validate TypeScript: `npm run typecheck`
- [ ] T241 [US1] Update tracking spreadsheet: Mark map as "Phase 1 Complete"
- [ ] T242 [US1] Commit changes

#### Remaining P2 Components (49 more components)

- [ ] T243 [US1] Process remaining 49 P2 components following same pattern: Read spec → Apply attributes → Validate → Commit (action-sheet, animation-container, arc-gauge, captcha, chart-wizard, circular-gauge, color-gradient, color-palette, color-picker, dateinput, datetime-selector, drop-hint, dropdowngrid, file-box, icon, imageeditor, layout, linear-gauge, loading, maskedtextbox, mediaplayer, menu-button, message-box, multiselect-tree, multiviewcalendar, orgchart, otp, overlay, pager, pdf-viewer, pivotgrid, popover, popup, progressbar, prompt, prompt-box, propertygrid, radial-gauge, rating, responsive-layout, scrollview, searchbox, segmented-control, skeleton, slider, smart-box, speech-to-text-button, split-button, splitter, stepper, suggestion, taskboard, textarea, tile-layout, timepicker, toggle-button, toolbar, treelist, upload, window, wizard)
- [ ] T244 [US1] Update tracking spreadsheet: Verify all 55 P2 components marked "Phase 1 Complete"

**Batch 3 Checkpoint**: All P2 components (55 total) complete with 100% ARIA coverage and WCAG compliance

### User Story 1 Final Validation

- [ ] T245 [US1] Run full test suite: `npm run test:aria` (all components)
- [ ] T246 [US1] Run full test suite: `npm run test:wcag` (all components)
- [ ] T247 [US1] Run full TypeScript check: `npm run typecheck`
- [ ] T248 [US1] Verify tracking spreadsheet: 110/110 components marked "Phase 1 Complete"
- [ ] T249 [US1] Generate Phase 1 completion report: Component coverage metrics, validation results, time estimates per component tier
- [ ] T250 [US1] Document Phase 1 lessons learned: Common patterns, edge cases encountered, optimization opportunities for Phase 2

**Checkpoint**: User Story 1 complete - All 110+ components have ARIA attributes applied and validated (100% coverage, WCAG 2.2 Level AA compliance)

**Gate**: ✅ Phase 1 MUST achieve 100% component coverage before Phase 2 begins (per specification constraint C-005)

---

## Phase 4: User Story 2 - Migrate Knowledge to HTML Package (Priority: P2)

**Goal**: Transform aria/*.md specifications into embedded hybrid documentation (TSDoc prose + JSDoc tags) within HTML package

**Independent Test**: After migration, temporarily delete aria/ folder. Verify developers and AI agents can understand accessibility requirements by reading component implementations. Restore aria/ after test. Success = all knowledge preserved in HTML package.

**Prerequisites**: User Story 1 must be 100% complete (all components have applied ARIA attributes)

### Format Pilot - Test Hybrid Format on 5 Components

- [ ] T251 [P] [US2] Select 5 representative components for pilot: button (simple), dropdown-list (medium), grid (complex), avatar (presentational), dialog (modal)
- [ ] T252 [US2] Read hybrid format specification: specs/001-aria-integration/contracts/hybrid-format.contract.md
- [ ] T253 [US2] Create hybrid documentation for button in packages/html/src/button/button.spec.tsx (TSDoc prose + @aria/@wcag/@selector tags)
- [ ] T254 [P] [US2] Create hybrid documentation for dropdown-list in packages/html/src/dropdownlist/dropdownlist.spec.tsx
- [ ] T255 [P] [US2] Create hybrid documentation for grid in packages/html/src/grid/grid.spec.tsx
- [ ] T256 [P] [US2] Create hybrid documentation for avatar in packages/html/src/avatar/avatar.spec.tsx
- [ ] T257 [P] [US2] Create hybrid documentation for dialog in packages/html/src/dialog/dialog.spec.tsx
- [ ] T258 [US2] Verify information preservation: Compare pilot documentation with original aria/*.md specs (button, dropdownlist, grid, avatar, dialog)
- [ ] T259 [US2] Test AI parsing: Extract @aria/@wcag/@selector tags programmatically from pilot components
- [ ] T260 [US2] Test human readability: Developer review - can prose be understood without reading aria/*.md?
- [ ] T261 [US2] Collect pilot feedback: Document format improvements, edge cases, missing tag types
- [ ] T262 [US2] Revise hybrid format contract if needed: Update specs/001-aria-integration/contracts/hybrid-format.contract.md based on pilot findings

**Pilot Checkpoint**: Hybrid format validated with 5 representative components - ready for full migration

### Format Approval

- [ ] T263 [US2] Create pilot review document: Show before/after examples, AI parsing results, developer feedback
- [ ] T264 [US2] Present pilot results to maintainers for approval
- [ ] T265 [US2] Address maintainer feedback: Revise format contract if required
- [ ] T266 [US2] Document approved format in quickstart guide: Add Phase 2 examples to specs/001-aria-integration/quickstart.md

**Approval Checkpoint**: Hybrid format approved by maintainers - ready for systematic migration

### Batch Migration - Apply Hybrid Format to All 110+ Components

#### Batch 1: P0 Components (15 components)

- [ ] T267 [P] [US2] Add hybrid documentation to packages/html/src/button/button.spec.tsx (if not done in pilot)
- [ ] T268 [P] [US2] Add hybrid documentation to packages/html/src/checkbox/checkbox.spec.tsx
- [ ] T269 [P] [US2] Add hybrid documentation to packages/html/src/radio/radio.spec.tsx
- [ ] T270 [P] [US2] Add hybrid documentation to packages/html/src/switch/switch.spec.tsx
- [ ] T271 [P] [US2] Add hybrid documentation to packages/html/src/textbox/textbox.spec.tsx
- [ ] T272 [P] [US2] Add hybrid documentation to packages/html/src/numerictextbox/numerictextbox.spec.tsx
- [ ] T273 [P] [US2] Add hybrid documentation to packages/html/src/datepicker/datepicker.spec.tsx
- [ ] T274 [P] [US2] Add hybrid documentation to packages/html/src/dropdownlist/dropdownlist.spec.tsx (if not done in pilot)
- [ ] T275 [P] [US2] Add hybrid documentation to packages/html/src/combobox/combobox.spec.tsx
- [ ] T276 [P] [US2] Add hybrid documentation to packages/html/src/multiselect/multiselect.spec.tsx
- [ ] T277 [P] [US2] Add hybrid documentation to packages/html/src/grid/grid.spec.tsx (if not done in pilot)
- [ ] T278 [P] [US2] Add hybrid documentation to packages/html/src/treeview/treeview.spec.tsx
- [ ] T279 [P] [US2] Add hybrid documentation to packages/html/src/menu/menu.spec.tsx
- [ ] T280 [US2] Add hybrid documentation to all templates in P0 components (packages/html/src/*/templates/*.tsx - 15 components)
- [ ] T281 [US2] Verify P0 migration completeness: Compare all P0 hybrid docs with original aria/*.md specs
- [ ] T282 [US2] Update tracking spreadsheet: Mark 15 P0 components as "Phase 2 Complete"
- [ ] T283 [US2] Commit P0 migration: `git commit -m "docs(p0): migrate ARIA knowledge to hybrid format\n\nRefs: #001-aria-integration\nPhase: P2 - Knowledge Migration\nComponents: 15 P0 components"`

#### Batch 2: P1 Components (40 components)

- [ ] T284 [P] [US2] Add hybrid documentation to packages/html/src/calendar/calendar.spec.tsx
- [ ] T285 [P] [US2] Add hybrid documentation to packages/html/src/scheduler/scheduler.spec.tsx
- [ ] T286 [P] [US2] Add hybrid documentation to packages/html/src/gantt/gantt.spec.tsx
- [ ] T287 [P] [US2] Add hybrid documentation to packages/html/src/dialog/dialog.spec.tsx (if not done in pilot)
- [ ] T288 [P] [US2] Add hybrid documentation to packages/html/src/notification/notification.spec.tsx
- [ ] T289 [P] [US2] Add hybrid documentation to packages/html/src/tooltip/tooltip.spec.tsx
- [ ] T290 [P] [US2] Add hybrid documentation to packages/html/src/tabstrip/tabstrip.spec.tsx
- [ ] T291 [P] [US2] Add hybrid documentation to packages/html/src/panelbar/panelbar.spec.tsx
- [ ] T292 [P] [US2] Add hybrid documentation to packages/html/src/drawer/drawer.spec.tsx
- [ ] T293 [US2] Add hybrid documentation to remaining 31 P1 component specs (packages/html/src/*/[component].spec.tsx)
- [ ] T294 [US2] Add hybrid documentation to all templates in P1 components (packages/html/src/*/templates/*.tsx - 40 components)
- [ ] T295 [US2] Verify P1 migration completeness: Compare all P1 hybrid docs with original aria/*.md specs
- [ ] T296 [US2] Update tracking spreadsheet: Mark 40 P1 components as "Phase 2 Complete"
- [ ] T297 [US2] Commit P1 migration: `git commit -m "docs(p1): migrate ARIA knowledge to hybrid format"`

#### Batch 3: P2 Components (55 components)

- [ ] T298 [P] [US2] Add hybrid documentation to packages/html/src/barcode/barcode.spec.tsx
- [ ] T299 [P] [US2] Add hybrid documentation to packages/html/src/qrcode/qrcode.spec.tsx
- [ ] T300 [P] [US2] Add hybrid documentation to packages/html/src/signature/signature.spec.tsx
- [ ] T301 [P] [US2] Add hybrid documentation to packages/html/src/spreadsheet/spreadsheet.spec.tsx
- [ ] T302 [P] [US2] Add hybrid documentation to packages/html/src/diagram/diagram.spec.tsx
- [ ] T303 [P] [US2] Add hybrid documentation to packages/html/src/map/map.spec.tsx
- [ ] T304 [P] [US2] Add hybrid documentation to packages/html/src/avatar/avatar.spec.tsx (if not done in pilot)
- [ ] T305 [US2] Add hybrid documentation to remaining 48 P2 component specs (packages/html/src/*/[component].spec.tsx)
- [ ] T306 [US2] Add hybrid documentation to all templates in P2 components (packages/html/src/*/templates/*.tsx - 55 components)
- [ ] T307 [US2] Verify P2 migration completeness: Compare all P2 hybrid docs with original aria/*.md specs
- [ ] T308 [US2] Update tracking spreadsheet: Mark 55 P2 components as "Phase 2 Complete"
- [ ] T309 [US2] Commit P2 migration: `git commit -m "docs(p2): migrate ARIA knowledge to hybrid format"`

### User Story 2 Final Verification

- [ ] T310 [US2] Generate comprehensive comparison report: aria/*.md vs hybrid docs for all 110+ components (verify zero information loss)
- [ ] T311 [US2] Test AI parsing: Extract all @aria/@wcag/@selector tags from all components and validate JSON output
- [ ] T312 [US2] Test developer discoverability: Time how long it takes to find relevant patterns in 10 random components (target: <2 minutes)
- [ ] T313 [US2] Verify tracking spreadsheet: 110/110 components marked "Phase 2 Complete"
- [ ] T314 [US2] Create Phase 2 completion report: Migration coverage, information preservation metrics, AI parsing success rate, developer feedback
- [ ] T315 [US2] Update accessibility instructions: Revise .github/prompts/accessibility.prompt.md to reference hybrid format patterns instead of aria/*.md

**Checkpoint**: User Story 2 complete - All accessibility knowledge migrated to HTML package with zero information loss (hybrid format embedded in 110+ components)

**Note**: aria/ folder is NOT deleted yet - Phase 3 will validate self-sustaining workflow before permanent deletion

---

## Phase 5: User Story 3 - Establish Self-Sustaining AI Workflow (Priority: P3)

**Goal**: Validate AI agents can generate correct accessibility specifications for new components without aria/*.md files

**Independent Test**: Create new test component without aria/*.md file. Use only .github/prompts/accessibility.prompt.md and existing HTML package patterns. AI generates ARIA spec. Validate with test:wcag. Pass = workflow is self-sustaining.

**Prerequisites**: User Story 2 must be 100% complete (all knowledge migrated to hybrid format)

### AI Workflow Documentation

- [ ] T316 [US3] Document AI generation workflow in .github/agents/accessibility.agent.md: Step-by-step process for AI to analyze patterns, generate ARIA attributes, validate output
- [ ] T317 [US3] Document pattern discovery process: How AI should identify similar components, extract common patterns, apply to new components
- [ ] T318 [US3] Create AI generation checklist: Required steps (analyze similar → extract patterns → apply attributes → validate → document)
- [ ] T319 [US3] Update .github/prompts/accessibility.prompt.md: Add Phase 3 instructions for AI-driven spec generation

### Test Component Creation (5 New Components Without ARIA Specs)

- [ ] T320 [P] [US3] Create test-widget-1 in packages/html/src/test-widget-1/ (simple interactive component - similar to button)
- [ ] T321 [P] [US3] Create test-widget-2 in packages/html/src/test-widget-2/ (dropdown-style component - similar to combobox)
- [ ] T322 [P] [US3] Create test-widget-3 in packages/html/src/test-widget-3/ (list-based component - similar to listbox)
- [ ] T323 [P] [US3] Create test-widget-4 in packages/html/src/test-widget-4/ (modal-style component - similar to dialog)
- [ ] T324 [P] [US3] Create test-widget-5 in packages/html/src/test-widget-5/ (presentational component - similar to avatar)
- [ ] T325 [US3] Document test widget baseline: Capture initial state before AI generation (no ARIA attributes, no aria/*.md files)

### AI Generation Workflow Execution

- [ ] T326 [US3] AI Task: Generate ARIA specification for test-widget-1 using only hybrid format patterns from button/checkbox/radio components
- [ ] T327 [US3] Apply AI-generated ARIA attributes to packages/html/src/test-widget-1/test-widget-1.spec.tsx
- [ ] T328 [US3] Validate test-widget-1: `npm run test:wcag test-widget-1` (no test:aria because no aria/*.md file exists)
- [ ] T329 [US3] Document test-widget-1 results: Pass/fail, corrections needed, pattern accuracy

- [ ] T330 [US3] AI Task: Generate ARIA specification for test-widget-2 using patterns from dropdown-list/combobox components
- [ ] T331 [US3] Apply AI-generated ARIA attributes to packages/html/src/test-widget-2/test-widget-2.spec.tsx
- [ ] T332 [US3] Validate test-widget-2: `npm run test:wcag test-widget-2`
- [ ] T333 [US3] Document test-widget-2 results

- [ ] T334 [US3] AI Task: Generate ARIA specification for test-widget-3 using patterns from listbox/multiselect components
- [ ] T335 [US3] Apply AI-generated ARIA attributes to packages/html/src/test-widget-3/test-widget-3.spec.tsx
- [ ] T336 [US3] Validate test-widget-3: `npm run test:wcag test-widget-3`
- [ ] T337 [US3] Document test-widget-3 results

- [ ] T338 [US3] AI Task: Generate ARIA specification for test-widget-4 using patterns from dialog/notification components
- [ ] T339 [US3] Apply AI-generated ARIA attributes to packages/html/src/test-widget-4/test-widget-4.spec.tsx
- [ ] T340 [US3] Validate test-widget-4: `npm run test:wcag test-widget-4`
- [ ] T341 [US3] Document test-widget-4 results

- [ ] T342 [US3] AI Task: Generate ARIA specification for test-widget-5 using patterns from avatar/badge components
- [ ] T343 [US3] Apply AI-generated ARIA attributes to packages/html/src/test-widget-5/test-widget-5.spec.tsx
- [ ] T344 [US3] Validate test-widget-5: `npm run test:wcag test-widget-5`
- [ ] T345 [US3] Document test-widget-5 results

### AI Generation Success Criteria Validation

- [ ] T346 [US3] Calculate first-attempt pass rate: [X]/5 test widgets passed test:wcag on first AI generation (target: 95%+)
- [ ] T347 [US3] Analyze corrections needed: Document any manual corrections required after AI generation
- [ ] T348 [US3] Verify pattern accuracy: Compare AI-generated attributes with similar existing components
- [ ] T349 [US3] Test team member workflow: Have non-AI-specialist team member follow documented workflow to generate spec for 6th test component
- [ ] T350 [US3] Document workflow improvements: Capture lessons learned, edge cases, format enhancements needed

### Final Validation - Delete aria/ Folder and Verify Workflow

⚠️ **CRITICAL**: This is the ultimate test of self-sustaining workflow

- [ ] T351 [US3] Create backup of aria/ folder: `cp -r aria/ aria-backup-$(date +%Y%m%d)/`
- [ ] T352 [US3] Delete aria/ folder: `rm -rf aria/` (after backup confirmation)
- [ ] T353 [US3] Verify existing components still functional: Re-run `npm run test:wcag` on 10 random existing components (should pass without aria/*.md)
- [ ] T354 [US3] Create new test component (test-widget-6) and generate ARIA spec using AI workflow
- [ ] T355 [US3] Validate test-widget-6 passes WCAG without aria/*.md file
- [ ] T356 [US3] Verify developer workflow: Can team member create accessible component without aria/ folder?
- [ ] T357 [US3] Document workflow sustainability: Confirm aria/ folder no longer needed for development

### User Story 3 Final Validation

- [ ] T358 [US3] Generate Phase 3 completion report: AI generation success rate (target 95%+), workflow validation results, team feedback
- [ ] T359 [US3] Calculate time savings: Measure new component development time before/after AI workflow (target: 40% reduction)
- [ ] T360 [US3] Verify success criteria: All SC-012 through SC-016 met
- [ ] T361 [US3] Update project documentation: Mark aria/ folder as "legacy/deprecated" in repository README
- [ ] T362 [US3] Create knowledge transfer document: Train team on AI-driven accessibility workflow
- [ ] T363 [US3] Verify tracking spreadsheet: All 110 components + 5-6 test widgets marked with Phase 3 status

**Checkpoint**: User Story 3 complete - AI workflow is self-sustaining (aria/ folder deleted, new components created successfully with AI-generated specs)

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final cleanup, documentation, and long-term maintenance setup

- [ ] T364 [P] Permanently remove aria-backup/ folder after 30-day validation period (if no issues found)
- [ ] T365 [P] Update repository README: Document three-phase transformation, link to hybrid format contract
- [ ] T366 [P] Update CONTRIBUTING.md: Add accessibility workflow instructions for new components
- [ ] T367 [P] Create accessibility migration retrospective: Lessons learned, metrics achieved, recommendations for future
- [ ] T368 [P] Archive spec-kit documentation: Move specs/001-aria-integration/ to .specify/archive/ after 90-day retention
- [ ] T369 [P] Update CI/CD pipeline: Ensure test:aria and test:wcag run on all component changes
- [ ] T370 [P] Create accessibility dashboard: Track WCAG compliance metrics over time
- [ ] T371 Final report: Present constitution compliance, success criteria achievement, project metrics to stakeholders

**Final Checkpoint**: All phases complete - Kendo UI component library is fully accessible with self-sustaining AI workflow ✅

---

## Dependencies Between User Stories

### Critical Path

```
Phase 1 (Setup) → Phase 2 (Foundation) → Phase 3 (US1 Complete) → Phase 4 (US2 Complete) → Phase 5 (US3 Complete) → Phase 6 (Polish)
```

### User Story Dependencies

- **User Story 1 is INDEPENDENT** - Can start after foundation phase
- **User Story 2 DEPENDS ON User Story 1** - Cannot migrate knowledge until ARIA attributes are applied (constraint C-005)
- **User Story 3 DEPENDS ON User Story 2** - Cannot validate AI workflow until knowledge is embedded in HTML package

### Component Batch Dependencies (Within User Story 1)

- **P0 → P1 → P2** - Process in priority order for maximum impact
- **Within each batch**: All components can be processed **IN PARALLEL** (no interdependencies)

---

## Parallel Execution Opportunities

### Maximum Parallelization (Within Each Phase)

**Phase 3 (User Story 1):**
- Within each batch (P0/P1/P2), ALL components can be processed in parallel
- Example: All 15 P0 components can have ARIA applied simultaneously by different developers
- Tasks marked with [P] can run in parallel: T013-T021 (button), T022-T029 (checkbox), T030-T037 (radio), etc.

**Phase 4 (User Story 2):**
- After pilot approval, all 110+ components can have hybrid documentation added in parallel
- Tasks marked with [P] can run in parallel: T267-T279 (P0 batch), T284-T292 (P1 batch)

**Phase 5 (User Story 3):**
- All 5 test widgets can be created in parallel: T320-T324
- AI generation for all 5 test widgets can run in parallel: T326-T345

### Recommended Team Structure

**Option 1: Serial Execution (Single Developer)**
- Estimated Time: ~60-80 hours (15-20 min per component × 110 components × 3 phases)

**Option 2: Parallel Execution (5 Developers)**
- Each developer takes 22 components
- Estimated Time: ~15-20 hours per developer
- Coordination: Daily sync to share patterns and resolve edge cases

**Option 3: Phase-Based Rotation (3 Developers)**
- Phase 1: 3 developers split 110 components (37 each) - 10-12 hours
- Phase 2: Same 3 developers add hybrid docs - 10-12 hours  
- Phase 3: 1 developer validates AI workflow - 5-6 hours

---

## Implementation Strategy

### MVP Scope (Phase 3 - User Story 1 ONLY)

**Minimum Viable Product**:
- Complete Batch 1 (15 P0 components) with 100% ARIA coverage and WCAG compliance
- Delivers immediate accessibility value for highest-traffic components
- Validates workflow and tooling before full rollout

**Success Criteria**:
- 15/15 P0 components pass test:aria and test:wcag
- Zero TypeScript errors
- Workflow documented and reproducible

### Incremental Delivery

1. **Week 1**: Setup + Foundation + P0 Batch (15 components) → **MVP Release**
2. **Week 2-3**: P1 Batch (40 components) → **Incremental Release**
3. **Week 4**: P2 Batch (55 components) → **Phase 1 Complete**
4. **Week 5**: Phase 2 Pilot + Approval → **Format Validated**
5. **Week 6-7**: Phase 2 Migration (110 components) → **Phase 2 Complete**
6. **Week 8**: Phase 3 AI Workflow Validation → **Self-Sustaining Workflow**

---

## Task Count Summary

- **Phase 1 (Setup)**: 7 tasks
- **Phase 2 (Foundation)**: 5 tasks (BLOCKING)
- **Phase 3 (User Story 1)**: 238 tasks (T013-T250)
  - Batch 1 (P0): 108 tasks (15 components)
  - Batch 2 (P1): 74 tasks (40 components)
  - Batch 3 (P2): 50 tasks (55 components)
  - Final Validation: 6 tasks
- **Phase 4 (User Story 2)**: 65 tasks (T251-T315)
  - Pilot: 12 tasks
  - Approval: 4 tasks
  - Migration: 43 tasks
  - Verification: 6 tasks
- **Phase 5 (User Story 3)**: 48 tasks (T316-T363)
  - Documentation: 4 tasks
  - Test Widgets: 6 tasks
  - AI Generation: 20 tasks
  - Validation: 13 tasks
  - Final Test: 5 tasks
- **Phase 6 (Polish)**: 8 tasks (T364-T371)

**Total Tasks**: 371

**Parallel Opportunities**:
- 150+ tasks can run in parallel within each phase (marked with [P])
- Maximum speedup: ~5x with 5 developers

---

**Generated**: 2026-02-04  
**Spec Version**: 1.0  
**Plan Version**: 1.0  
**Status**: ✅ Ready for Implementation