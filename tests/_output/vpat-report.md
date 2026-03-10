# Accessibility Conformance Report

**International Edition**
*(Based on VPAT® Version 2.4 Rev)*

**Name of Product/Version:** Kendo UI, version: 13.1.0-dev.1
**Report Date:** March 6, 2026
**Product Description:** Kendo UI is a library of 110+ fully native components for building high-quality modern web UI.
**Contact Information:** support@telerik.com
**Evaluation Methods Used:** Testing was performed using dequelabs/axe-core (static HTML analysis), custom ARIA attribute validation (JSDOM), contrast ratio analysis, and NVDA screen reader verification. Automated tests run against the Default Ocean Blue A11y theme swatch.

## Applicable Standards/Guidelines

This report covers the degree of conformance for the following accessibility standards/guidelines:

| Standard/Guideline | Included In Report |
|---|---|
| [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) | Level A (Yes), Level AA (Yes) |
| [Revised Section 508 standards](https://www.access-board.gov/ict/) | (Yes) |

## Terms

| Term | Definition |
|---|---|
| **Supports** | The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation. |
| **Partially Supports** | Some functionality of the product does not meet the criterion. |
| **Does Not Support** | The majority of product functionality does not meet the criterion. |
| **Not Applicable** | The criterion is not relevant to the product. |

## General Compliance Statements

**Color Contrast:** Color contrast compliance (WCAG 1.4.3, 1.4.6, 1.4.11) is achievable with the Default Ocean Blue A11y theme swatch or any custom theme swatch that provides the minimum required color contrast ratios. The contrast test suite validates all components against WCAG AA and AAA contrast requirements.

**Target Size:** Components support configurable size options (small, medium, large). The default 'medium' size meets WCAG 2.5.8 (Target Size) requirements for most components. Some compact interactive elements (e.g., small icon buttons, chip remove icons) may fall below the 24×24px minimum at the 'small' size option.

**Keyboard Navigation:** All interactive components provide full keyboard navigation. Complex components (Grid, TreeList, Scheduler, Spreadsheet) implement custom internal keyboard navigation that ensures all content is accessible via keyboard, even when scrollable regions are not directly in the tab sequence — maintaining a single tab-stop pattern for usability.

**Aria Compliance:** All components implement required WAI-ARIA attributes without extra configuration. Some components provide optional parameters for additional ARIA attributes (e.g., aria-label, aria-describedby).

## Special Considerations

1. Components that represent or directly extend a native HTML element (e.g., Button, CheckBox, TextBox) do not require additional accessibility functionality to provide their respective level of compliance.
2. Components built using other fully accessible components and/or native HTML elements (e.g., Card, AppBar, Pager) achieve compliance through their building blocks.
3. Components that do not provide end-user interaction and serve only as visual representation (e.g., Icons, ProgressBars, Badges) are neither focusable nor navigable. Adding descriptive labels or WAI-ARIA attributes to such components is the developer's responsibility.
4. Assistive technologies treat components like the various Gauges as images. To make them accessible, add a descriptive label or alternative data representation.
5. Component templates introduce custom markup that may not be accessible. Test any modifications to ensure accessibility compliance.
6. The compliance levels are based on the default component configuration. Enabled features may affect compliance.

## Automated Test Summary

*Based on automated test run covering 5 component template(s).*

| Metric | Result |
|---|---|
| ARIA checks passed | 39 |
| ARIA violations | 0 |
| WCAG checks passed (axe-core) | 103 |
| WCAG violations (blocking) | 0 |
| WCAG violations (acceptable/documented) | 4 |

## Table 1: Success Criteria, Level A

| Criteria | Conformance Level | Remarks and Explanations |
|---|---|---|
| [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html) (Level A) | Partially Supports | **Affected:** Map, Gauge. Map and Gauge components render as canvas/SVG elements without keyboard support. Alternative data representations (e.g., data tables, labels) should be provided by the developer. |
| [1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html) (Level A) | Supports |  |
| [1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html) (Level A) | Supports |  |
| [1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html) (Level A) | Supports |  |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html) (Level A) | Partially Supports | **Affected:** Grid, TreeList, Gantt. Complex data components use custom rendering patterns that may not include all required ARIA child roles in every configuration. The components provide correct semantic information through alternative ARIA patterns.<br><br>**Affected:** Editor, Spreadsheet. Some internal input elements within complex components may lack explicit label associations where the context is provided by the surrounding component structure. The component's accessible name is established through aria-label or aria-labelledby at the root level. |
| [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html) (Level A) | Supports |  |
| [1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html) (Level A) | Supports |  |
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) (Level A) | Supports |  |
| [1.4.2 Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html) (Level A) | Supports |  |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) (Level A) | Partially Supports | **Affected:** Grid, TreeList, Gantt, Spreadsheet, Scheduler. Scrollable content regions in data-intensive components are not directly focusable tab-stops. These components implement custom internal keyboard navigation that ensures all content is scrollable and accessible via keyboard, maintaining a single tab-stop pattern for improved usability. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html) (Level A) | Supports |  |
| [2.1.4 Character Key Shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html) (Level A) | Supports |  |
| [2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html) (Level A) | Supports |  |
| [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) (Level A) | Supports |  |
| [2.3.1 Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html) (Level A) | Supports |  |
| [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html) (Level A) | Supports |  |
| [2.4.2 Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html) (Level A) | Supports |  |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html) (Level A) | Supports |  |
| [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html) (Level A) | Supports |  |
| [2.5.1 Pointer Gestures](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html) (Level A) | Supports |  |
| [2.5.2 Pointer Cancellation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html) (Level A) | Supports |  |
| [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html) (Level A) | Supports |  |
| [2.5.4 Motion Actuation](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html) (Level A) | Supports |  |
| [3.1.1 Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html) (Level A) | Supports |  |
| [3.2.1 On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html) (Level A) | Supports |  |
| [3.2.2 On Input](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html) (Level A) | Supports |  |
| [3.2.6 Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html) (Level A) | Supports |  |
| [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html) (Level A) | Supports |  |
| [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html) (Level A) | Supports |  |
| [3.3.7 Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html) (Level A) | Supports |  |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html) (Level A) | Partially Supports | **Affected:** Grid, TreeList, Scheduler. Some complex components contain nested interactive elements (e.g., buttons within clickable rows) which is necessary for their functional requirements. Keyboard navigation handles these elements correctly despite the nesting. |

## Table 2: Success Criteria, Level AA

| Criteria | Conformance Level | Remarks and Explanations |
|---|---|---|
| [1.2.4 Captions (Live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html) (Level AA) | Supports |  |
| [1.2.5 Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html) (Level AA) | Supports |  |
| [1.3.4 Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html) (Level AA) | Supports |  |
| [1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html) (Level AA) | Supports |  |
| [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) (Level AA) | Supports |  |
| [1.4.4 Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) (Level AA) | Supports |  |
| [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html) (Level AA) | Supports |  |
| [1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) (Level AA) | Supports |  |
| [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) (Level AA) | Supports |  |
| [1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html) (Level AA) | Supports |  |
| [1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html) (Level AA) | Supports |  |
| [2.4.5 Multiple Ways](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html) (Level AA) | Supports |  |
| [2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html) (Level AA) | Supports |  |
| [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) (Level AA) | Supports |  |
| [2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) (Level AA) | Supports |  |
| [2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html) (Level AA) | Supports |  |
| [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) (Level AA) | Partially Supports | **Affected:** SmartBox, Chip, MultiSelect, ColorPicker, DatePicker, TimePicker. Some compact interactive elements (icon buttons, chip remove icons, spinner arrows) may fall below the 24×24px minimum target size. Components support configurable size options; using 'medium' or 'large' sizes resolves most cases. |
| [3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html) (Level AA) | Supports |  |
| [3.2.3 Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html) (Level AA) | Supports |  |
| [3.2.4 Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html) (Level AA) | Supports |  |
| [3.3.3 Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html) (Level AA) | Supports |  |
| [3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html) (Level AA) | Supports |  |
| [3.3.8 Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html) (Level AA) | Supports |  |
| [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) (Level AA) | Supports |  |

## Known Exceptions

The following table summarizes known accessibility exceptions with their justifications:

| WCAG Criteria | Criteria Name | Affected Components | Conformance | Explanation |
|---|---|---|---|---|
| [2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) | Target Size (Minimum) | SmartBox, Chip, MultiSelect, ColorPicker, DatePicker, TimePicker | Partially Supports | Some compact interactive elements (icon buttons, chip remove icons, spinner arrows) may fall below the 24×24px minimum target size. Components support configurable size options; using 'medium' or 'large' sizes resolves most cases. |
| [1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html) | Info and Relationships | Grid, TreeList, Gantt | Partially Supports | Complex data components use custom rendering patterns that may not include all required ARIA child roles in every configuration. The components provide correct semantic information through alternative ARIA patterns. |
| [1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html) | Info and Relationships | Editor, Spreadsheet | Partially Supports | Some internal input elements within complex components may lack explicit label associations where the context is provided by the surrounding component structure. The component's accessible name is established through aria-label or aria-labelledby at the root level. |
| [4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html) | Name, Role, Value | Grid, TreeList, Scheduler | Partially Supports | Some complex components contain nested interactive elements (e.g., buttons within clickable rows) which is necessary for their functional requirements. Keyboard navigation handles these elements correctly despite the nesting. |
| [2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) | Keyboard | Grid, TreeList, Gantt, Spreadsheet, Scheduler | Partially Supports | Scrollable content regions in data-intensive components are not directly focusable tab-stops. These components implement custom internal keyboard navigation that ensures all content is scrollable and accessible via keyboard, maintaining a single tab-stop pattern for improved usability. |
| [1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html) | Non-text Content | Map, Gauge | Partially Supports | Map and Gauge components render as canvas/SVG elements without keyboard support. Alternative data representations (e.g., data tables, labels) should be provided by the developer. |

## Contrast Compliance Notes

The following components have known contrast limitations that are documented but accepted. Use the Default Ocean Blue A11y swatch for optimal contrast compliance.

### Components with Known Contrast Limitations

| Component | Reason |
|---|---|
| BottomNavigation | Solid and flat fill modes do not meet text contrast ratio for all item states |
| Chip | Colored solid chips may not meet minimum contrast requirements for text in all color variations |
| ButtonGroup | Test page contains customizations that affect contrast |
| TreeMap | Segment colors are data-driven and may not ensure contrast |
| Loader | Warning theme color and no-panel overlay may not meet text contrast requirements |

### Focus Indicator Contrast Exceptions

The following elements have known focus indicator contrast limitations:
TimeList wrapper, Chip outline, ColorPalette tile, BottomNavigation item, Button outline, Button warning, FloatingActionButton warning, Stepper last step, QuickReply.

---

*This report was generated on March 6, 2026 using automated accessibility testing infrastructure.*
*"Voluntary Product Accessibility Template" and "VPAT" are registered service marks of the Information Technology Industry Council (ITI).*