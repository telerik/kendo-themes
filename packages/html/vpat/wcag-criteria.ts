/**
 * WCAG 2.x Success Criteria reference table — aligned with VPAT® 2.5Rev WCAG Edition.
 *
 * Each criterion carries a `versionNote` that matches the VPAT 2.5 template annotations:
 *   - undefined  → applies to WCAG 2.0, 2.1, and 2.2
 *   - '2.1 and 2.2' → new in WCAG 2.1, also in 2.2
 *   - '2.2 only'    → new in WCAG 2.2
 */

export interface WcagCriterion {
    name: string;
    level: 'A' | 'AA' | 'AAA';
    url: string;
    /** WCAG version annotation as shown in VPAT 2.5 template rows (e.g. '2.1 and 2.2', '2.2 only'). */
    versionNote?: string;
}

export const WCAG_CRITERIA: Record<string, WcagCriterion> = {
    // ── Level A ─────────────────────────────────────────────────────────────
    '1.1.1': { name: 'Non-text Content', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html' },
    '1.2.1': { name: 'Audio-only and Video-only (Prerecorded)', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html' },
    '1.2.2': { name: 'Captions (Prerecorded)', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html' },
    '1.2.3': { name: 'Audio Description or Media Alternative (Prerecorded)', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html' },
    '1.3.1': { name: 'Info and Relationships', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html' },
    '1.3.2': { name: 'Meaningful Sequence', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html' },
    '1.3.3': { name: 'Sensory Characteristics', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html' },
    '1.4.1': { name: 'Use of Color', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html' },
    '1.4.2': { name: 'Audio Control', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html' },
    '2.1.1': { name: 'Keyboard', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html' },
    '2.1.2': { name: 'No Keyboard Trap', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html' },
    '2.1.4': { name: 'Character Key Shortcuts', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html', versionNote: '2.1 and 2.2' },
    '2.2.1': { name: 'Timing Adjustable', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html' },
    '2.2.2': { name: 'Pause, Stop, Hide', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html' },
    '2.3.1': { name: 'Three Flashes or Below Threshold', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html' },
    '2.4.1': { name: 'Bypass Blocks', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html' },
    '2.4.2': { name: 'Page Titled', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html' },
    '2.4.3': { name: 'Focus Order', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html' },
    '2.4.4': { name: 'Link Purpose (In Context)', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html' },
    '2.5.1': { name: 'Pointer Gestures', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html', versionNote: '2.1 and 2.2' },
    '2.5.2': { name: 'Pointer Cancellation', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html', versionNote: '2.1 and 2.2' },
    '2.5.3': { name: 'Label in Name', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html', versionNote: '2.1 and 2.2' },
    '2.5.4': { name: 'Motion Actuation', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html', versionNote: '2.1 and 2.2' },
    '3.1.1': { name: 'Language of Page', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html' },
    '3.2.1': { name: 'On Focus', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html' },
    '3.2.2': { name: 'On Input', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/on-input.html' },
    '3.2.6': { name: 'Consistent Help', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html', versionNote: '2.2 only' },
    '3.3.1': { name: 'Error Identification', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html' },
    '3.3.2': { name: 'Labels or Instructions', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html' },
    '3.3.7': { name: 'Redundant Entry', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html', versionNote: '2.2 only' },
    '4.1.1': { name: 'Parsing', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/parsing.html' },
    '4.1.2': { name: 'Name, Role, Value', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html' },

    // ── Level AA ────────────────────────────────────────────────────────────
    '1.2.4': { name: 'Captions (Live)', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html' },
    '1.2.5': { name: 'Audio Description (Prerecorded)', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html' },
    '1.3.4': { name: 'Orientation', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/orientation.html', versionNote: '2.1 and 2.2' },
    '1.3.5': { name: 'Identify Input Purpose', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html', versionNote: '2.1 and 2.2' },
    '1.4.3': { name: 'Contrast (Minimum)', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html' },
    '1.4.4': { name: 'Resize Text', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html' },
    '1.4.5': { name: 'Images of Text', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html' },
    '1.4.10': { name: 'Reflow', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/reflow.html', versionNote: '2.1 and 2.2' },
    '1.4.11': { name: 'Non-text Contrast', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html', versionNote: '2.1 and 2.2' },
    '1.4.12': { name: 'Text Spacing', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html', versionNote: '2.1 and 2.2' },
    '1.4.13': { name: 'Content on Hover or Focus', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html', versionNote: '2.1 and 2.2' },
    '2.4.5': { name: 'Multiple Ways', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html' },
    '2.4.6': { name: 'Headings and Labels', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html' },
    '2.4.7': { name: 'Focus Visible', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html' },
    '2.4.11': { name: 'Focus Not Obscured (Minimum)', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html', versionNote: '2.2 only' },
    '2.5.7': { name: 'Dragging Movements', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html', versionNote: '2.2 only' },
    '2.5.8': { name: 'Target Size (Minimum)', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html', versionNote: '2.2 only' },
    '3.1.2': { name: 'Language of Parts', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html' },
    '3.2.3': { name: 'Consistent Navigation', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html' },
    '3.2.4': { name: 'Consistent Identification', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html' },
    '3.3.3': { name: 'Error Suggestion', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html' },
    '3.3.4': { name: 'Error Prevention (Legal, Financial, Data)', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html' },
    '3.3.8': { name: 'Accessible Authentication (Minimum)', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html', versionNote: '2.2 only' },
    '4.1.3': { name: 'Status Messages', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html', versionNote: '2.1 and 2.2' },

    // ── Level AAA ───────────────────────────────────────────────────────────
    '1.2.6': { name: 'Sign Language (Prerecorded)', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded.html' },
    '1.2.7': { name: 'Extended Audio Description (Prerecorded)', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html' },
    '1.2.8': { name: 'Media Alternative (Prerecorded)', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded.html' },
    '1.2.9': { name: 'Audio-only (Live)', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live.html' },
    '1.3.6': { name: 'Identify Purpose', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html', versionNote: '2.1 and 2.2' },
    '1.4.6': { name: 'Contrast (Enhanced)', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html' },
    '1.4.7': { name: 'Low or No Background Audio', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio.html' },
    '1.4.8': { name: 'Visual Presentation', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html' },
    '1.4.9': { name: 'Images of Text (No Exception)', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception.html' },
    '2.1.3': { name: 'Keyboard (No Exception)', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception.html' },
    '2.2.3': { name: 'No Timing', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/no-timing.html' },
    '2.2.4': { name: 'Interruptions', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/interruptions.html' },
    '2.2.5': { name: 'Re-authenticating', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating.html' },
    '2.2.6': { name: 'Timeouts', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/timeouts.html', versionNote: '2.1 and 2.2' },
    '2.3.2': { name: 'Three Flashes', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/three-flashes.html' },
    '2.3.3': { name: 'Animation from Interactions', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html', versionNote: '2.1 and 2.2' },
    '2.4.8': { name: 'Location', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/location.html' },
    '2.4.9': { name: 'Link Purpose (Link Only)', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html' },
    '2.4.10': { name: 'Section Headings', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/section-headings.html' },
    '2.4.12': { name: 'Focus Not Obscured (Enhanced)', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html', versionNote: '2.2 only' },
    '2.4.13': { name: 'Focus Appearance', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html', versionNote: '2.2 only' },
    '2.5.5': { name: 'Target Size', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html', versionNote: '2.1 and 2.2' },
    '2.5.6': { name: 'Concurrent Input Mechanisms', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms.html', versionNote: '2.1 and 2.2' },
    '3.1.3': { name: 'Unusual Words', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/unusual-words.html' },
    '3.1.4': { name: 'Abbreviations', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/abbreviations.html' },
    '3.1.5': { name: 'Reading Level', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html' },
    '3.1.6': { name: 'Pronunciation', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/pronunciation.html' },
    '3.2.5': { name: 'Change on Request', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/change-on-request.html' },
    '3.3.5': { name: 'Help', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/help.html' },
    '3.3.6': { name: 'Error Prevention (All)', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-all.html' },
    '3.3.9': { name: 'Accessible Authentication (Enhanced)', level: 'AAA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced.html', versionNote: '2.2 only' }
};

/** Map axe-core rule IDs to WCAG criteria numbers */
export const AXE_TO_WCAG: Record<string, string> = {
    'target-size': '2.5.8',
    'label': '1.3.1',
    'nested-interactive': '4.1.2',
    'aria-required-children': '1.3.1',
    'scrollable-region-focusable': '2.1.1',
    'color-contrast': '1.4.3',
    'color-contrast-enhanced': '1.4.6',
    'link-name': '2.4.4',
    'image-alt': '1.1.1',
    'button-name': '4.1.2',
    'aria-label': '4.1.2',
    'aria-hidden-focus': '4.1.2',
    'focus-order-semantics': '2.4.3'
};
