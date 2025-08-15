# CSS Specificity Analysis TODO List

## Overview
This TODO list covers all components across all themes that need CSS specificity analysis and fixes. The list is based on actual SCSS folders in `packages/default/scss/` to ensure no components are missed.

## Themes
- ✅ **Default** - 122 components (based on SCSS folders)
- ✅ **Bootstrap** - 122 components  
- ✅ **Material** - 122 components
- ✅ **Classic** - 122 components
- ✅ **Fluent** - 122 components

## Test File Status Indicators
- 🔴 **Missing Test** - No test file exists, needs creation
- 🟡 **JS Test** - .js file exists, needs migration to .ts
- 🟢 **TS Test** - .ts file exists, ready for analysis

## Priority Levels
- 🔴 **High Priority** - Core components used frequently
- 🟡 **Medium Priority** - Secondary components
- 🟢 **Low Priority** - Specialized components

---

## 🔴 HIGH PRIORITY COMPONENTS

### Form Components
These are the most commonly used components and should be prioritized.

#### Button & Related
- [ ] **Default**: button.test.ts 🟢 (382/383 passed - needs 1 fix)
- [ ] **Bootstrap**: button.test.js 🟡
- [ ] **Material**: button.test.js 🟡
- [ ] **Classic**: button.test.js 🟡
- [ ] **Fluent**: button.test.js 🟡

#### Input Components
- [ ] **Default**: input.test.js 🟡
- [ ] **Bootstrap**: input.test.js 🟡
- [ ] **Material**: input.test.js 🟡
- [ ] **Classic**: input.test.js 🟡
- [ ] **Fluent**: input.test.js 🟡

#### Dropdown Components
- [ ] **Default**: dropdownlist.test.js 🟡
- [ ] **Bootstrap**: dropdownlist.test.js 🟡
- [ ] **Material**: dropdownlist.test.js 🟡
- [ ] **Classic**: dropdownlist.test.js 🟡
- [ ] **Fluent**: dropdownlist.test.js 🟡

#### Grid Components
- [ ] **Default**: grid.test.js 🟡
- [ ] **Bootstrap**: grid.test.js 🟡
- [ ] **Material**: grid.test.js 🟡
- [ ] **Classic**: grid.test.js 🟡
- [ ] **Fluent**: grid.test.js 🟡

#### Calendar & Date Components
- [ ] **Default**: calendar.test.js 🟡
- [ ] **Bootstrap**: calendar.test.js 🟡
- [ ] **Material**: calendar.test.js 🟡
- [ ] **Classic**: calendar.test.js 🟡
- [ ] **Fluent**: calendar.test.js 🟡

---

## 🟡 MEDIUM PRIORITY COMPONENTS

### Navigation & Layout
- [ ] **Default**: toolbar.test.js 🟡
- [ ] **Bootstrap**: toolbar.test.js 🟡
- [ ] **Material**: toolbar.test.js 🟡
- [ ] **Classic**: toolbar.test.js 🟡
- [ ] **Fluent**: toolbar.test.js 🟡

- [ ] **Default**: tabstrip.test.js 🟡
- [ ] **Bootstrap**: tabstrip.test.js 🟡
- [ ] **Material**: tabstrip.test.js 🟡
- [ ] **Classic**: tabstrip.test.js 🟡
- [ ] **Fluent**: tabstrip.test.js 🟡

- [ ] **Default**: menu.test.js 🟡
- [ ] **Bootstrap**: menu.test.js 🟡
- [ ] **Material**: menu.test.js 🟡
- [ ] **Classic**: menu.test.js 🟡
- [ ] **Fluent**: menu.test.js 🟡

### Data Display
- [ ] **Default**: table.test.js 🟡
- [ ] **Bootstrap**: table.test.js 🟡
- [ ] **Material**: table.test.js 🟡
- [ ] **Classic**: table.test.js 🟡
- [ ] **Fluent**: table.test.js 🟡

- [ ] **Default**: listview.test.js 🟡
- [ ] **Bootstrap**: listview.test.js 🟡
- [ ] **Material**: listview.test.js 🟡
- [ ] **Classic**: listview.test.js 🟡
- [ ] **Fluent**: listview.test.js 🟡

### Form Controls
- [ ] **Default**: checkbox.test.js 🟡
- [ ] **Bootstrap**: checkbox.test.js 🟡
- [ ] **Material**: checkbox.test.js 🟡
- [ ] **Classic**: checkbox.test.js 🟡
- [ ] **Fluent**: checkbox.test.js 🟡

- [ ] **Default**: radio.test.js 🟡
- [ ] **Bootstrap**: radio.test.js 🟡
- [ ] **Material**: radio.test.js 🟡
- [ ] **Classic**: radio.test.js 🟡
- [ ] **Fluent**: radio.test.js 🟡

- [ ] **Default**: textbox.test.js 🟡
- [ ] **Bootstrap**: textbox.test.js 🟡
- [ ] **Material**: textbox.test.js 🟡
- [ ] **Classic**: textbox.test.js 🟡
- [ ] **Fluent**: textbox.test.js 🟡

---

## 🟢 LOW PRIORITY COMPONENTS

### Action & Navigation Components
- [ ] **Default**: action-buttons.test.js 🟡
- [ ] **Bootstrap**: action-buttons.test.js 🟡
- [ ] **Material**: action-buttons.test.js 🟡
- [ ] **Classic**: action-buttons.test.js 🟡
- [ ] **Fluent**: action-buttons.test.js 🟡

- [ ] **Default**: action-sheet.test.js 🟡
- [ ] **Bootstrap**: action-sheet.test.js 🟡
- [ ] **Material**: action-sheet.test.js 🟡
- [ ] **Classic**: action-sheet.test.js 🟡
- [ ] **Fluent**: action-sheet.test.js 🟡

- [ ] **Default**: appbar.test.js 🔴
- [ ] **Bootstrap**: appbar.test.js 🔴
- [ ] **Material**: appbar.test.js 🔴
- [ ] **Classic**: appbar.test.js 🔴
- [ ] **Fluent**: appbar.test.js 🔴

- [ ] **Default**: bottom-navigation.test.js 🔴
- [ ] **Bootstrap**: bottom-navigation.test.js 🔴
- [ ] **Material**: bottom-navigation.test.js 🔴
- [ ] **Classic**: bottom-navigation.test.js 🔴
- [ ] **Fluent**: bottom-navigation.test.js 🔴

### Basic UI Components
- [ ] **Default**: autocomplete.test.js 🟡
- [ ] **Bootstrap**: autocomplete.test.js 🟡
- [ ] **Material**: autocomplete.test.js 🟡
- [ ] **Classic**: autocomplete.test.js 🟡
- [ ] **Fluent**: autocomplete.test.js 🟡

- [ ] **Default**: avatar.test.js 🔴
- [ ] **Bootstrap**: avatar.test.js 🔴
- [ ] **Material**: avatar.test.js 🔴
- [ ] **Classic**: avatar.test.js 🔴
- [ ] **Fluent**: avatar.test.js 🔴

- [ ] **Default**: badge.test.js 🟡
- [ ] **Bootstrap**: badge.test.js 🟡
- [ ] **Material**: badge.test.js 🟡
- [ ] **Classic**: badge.test.js 🟡
- [ ] **Fluent**: badge.test.js 🟡

- [ ] **Default**: breadcrumb.test.js 🟡
- [ ] **Bootstrap**: breadcrumb.test.js 🟡
- [ ] **Material**: breadcrumb.test.js 🟡
- [ ] **Classic**: breadcrumb.test.js 🟡
- [ ] **Fluent**: breadcrumb.test.js 🟡

- [ ] **Default**: card.test.js 🟡
- [ ] **Bootstrap**: card.test.js 🟡
- [ ] **Material**: card.test.js 🟡
- [ ] **Classic**: card.test.js 🟡
- [ ] **Fluent**: card.test.js 🟡

- [ ] **Default**: chip.test.js 🟡
- [ ] **Bootstrap**: chip.test.js 🟡
- [ ] **Material**: chip.test.js 🟡
- [ ] **Classic**: chip.test.js 🟡
- [ ] **Fluent**: chip.test.js 🟡

### Color & Theme Components
- [ ] **Default**: color-preview.test.js 🟡
- [ ] **Bootstrap**: color-preview.test.js 🟡
- [ ] **Material**: color-preview.test.js 🟡
- [ ] **Classic**: color-preview.test.js 🟡
- [ ] **Fluent**: color-preview.test.js 🟡

- [ ] **Default**: coloreditor.test.js 🟡
- [ ] **Bootstrap**: coloreditor.test.js 🟡
- [ ] **Material**: coloreditor.test.js 🟡
- [ ] **Classic**: coloreditor.test.js 🟡
- [ ] **Fluent**: coloreditor.test.js 🟡

- [ ] **Default**: colorgradient.test.js 🟡
- [ ] **Bootstrap**: colorgradient.test.js 🟡
- [ ] **Material**: colorgradient.test.js 🟡
- [ ] **Classic**: colorgradient.test.js 🟡
- [ ] **Fluent**: colorgradient.test.js 🟡

- [ ] **Default**: colorpalette.test.js 🟡
- [ ] **Bootstrap**: colorpalette.test.js 🟡
- [ ] **Material**: colorpalette.test.js 🟡
- [ ] **Classic**: colorpalette.test.js 🟡
- [ ] **Fluent**: colorpalette.test.js 🟡

- [ ] **Default**: colorpicker.test.js 🟡
- [ ] **Bootstrap**: colorpicker.test.js 🟡
- [ ] **Material**: colorpicker.test.js 🟡
- [ ] **Classic**: colorpicker.test.js 🟡
- [ ] **Fluent**: colorpicker.test.js 🟡

### Advanced Form Components
- [ ] **Default**: captcha.test.js 🟡
- [ ] **Bootstrap**: captcha.test.js 🟡
- [ ] **Material**: captcha.test.js 🟡
- [ ] **Classic**: captcha.test.js 🟡
- [ ] **Fluent**: captcha.test.js 🟡

- [ ] **Default**: column-menu.test.js 🟡
- [ ] **Bootstrap**: column-menu.test.js 🟡
- [ ] **Material**: column-menu.test.js 🟡
- [ ] **Classic**: column-menu.test.js 🟡
- [ ] **Fluent**: column-menu.test.js 🟡

- [ ] **Default**: combobox.test.js 🟡
- [ ] **Bootstrap**: combobox.test.js 🟡
- [ ] **Material**: combobox.test.js 🟡
- [ ] **Classic**: combobox.test.js 🟡
- [ ] **Fluent**: combobox.test.js 🟡

- [ ] **Default**: dropdowngrid.test.js 🟡
- [ ] **Bootstrap**: dropdowngrid.test.js 🟡
- [ ] **Material**: dropdowngrid.test.js 🟡
- [ ] **Classic**: dropdowngrid.test.js 🟡
- [ ] **Fluent**: dropdowngrid.test.js 🟡

- [ ] **Default**: dropdowntree.test.js 🟡
- [ ] **Bootstrap**: dropdowntree.test.js 🟡
- [ ] **Material**: dropdowntree.test.js 🟡
- [ ] **Classic**: dropdowntree.test.js 🟡
- [ ] **Fluent**: dropdowntree.test.js 🟡

- [ ] **Default**: dropzone.test.js 🟡
- [ ] **Bootstrap**: dropzone.test.js 🟡
- [ ] **Material**: dropzone.test.js 🟡
- [ ] **Classic**: dropzone.test.js 🟡
- [ ] **Fluent**: dropzone.test.js 🟡

- [ ] **Default**: floating-label.test.js 🟡
- [ ] **Bootstrap**: floating-label.test.js 🟡
- [ ] **Material**: floating-label.test.js 🟡
- [ ] **Classic**: floating-label.test.js 🟡
- [ ] **Fluent**: floating-label.test.js 🟡

- [ ] **Default**: forms.test.js 🟡
- [ ] **Bootstrap**: forms.test.js 🟡
- [ ] **Material**: forms.test.js 🟡
- [ ] **Classic**: forms.test.js 🟡
- [ ] **Fluent**: forms.test.js 🟡

- [ ] **Default**: list.test.js 🟡
- [ ] **Bootstrap**: list.test.js 🟡
- [ ] **Material**: list.test.js 🟡
- [ ] **Classic**: list.test.js 🟡
- [ ] **Fluent**: list.test.js 🟡

- [ ] **Default**: listbox.test.js 🟡
- [ ] **Bootstrap**: listbox.test.js 🟡
- [ ] **Material**: listbox.test.js 🟡
- [ ] **Classic**: listbox.test.js 🟡
- [ ] **Fluent**: listbox.test.js 🟡

- [ ] **Default**: listgroup.test.js 🟡
- [ ] **Bootstrap**: listgroup.test.js 🟡
- [ ] **Material**: listgroup.test.js 🟡
- [ ] **Classic**: listgroup.test.js 🟡
- [ ] **Fluent**: listgroup.test.js 🟡

- [ ] **Default**: maskedtextbox.test.js 🟡
- [ ] **Bootstrap**: maskedtextbox.test.js 🟡
- [ ] **Material**: maskedtextbox.test.js 🟡
- [ ] **Classic**: maskedtextbox.test.js 🟡
- [ ] **Fluent**: maskedtextbox.test.js 🟡

- [ ] **Default**: multiselect.test.js 🟡
- [ ] **Bootstrap**: multiselect.test.js 🟡
- [ ] **Material**: multiselect.test.js 🟡
- [ ] **Classic**: multiselect.test.js 🟡
- [ ] **Fluent**: multiselect.test.js 🟡

- [ ] **Default**: numerictextbox.test.js 🟡
- [ ] **Bootstrap**: numerictextbox.test.js 🟡
- [ ] **Material**: numerictextbox.test.js 🟡
- [ ] **Classic**: numerictextbox.test.js 🟡
- [ ] **Fluent**: numerictextbox.test.js 🟡

- [ ] **Default**: otp.test.js 🟡
- [ ] **Bootstrap**: otp.test.js 🟡
- [ ] **Material**: otp.test.js 🟡
- [ ] **Classic**: otp.test.js 🟡
- [ ] **Fluent**: otp.test.js 🟡

- [ ] **Default**: rating.test.js 🟡
- [ ] **Bootstrap**: rating.test.js 🟡
- [ ] **Material**: rating.test.js 🟡
- [ ] **Classic**: rating.test.js 🟡
- [ ] **Fluent**: rating.test.js 🟡

- [ ] **Default**: switch.test.js 🟡
- [ ] **Bootstrap**: switch.test.js 🟡
- [ ] **Material**: switch.test.js 🟡
- [ ] **Classic**: switch.test.js 🟡
- [ ] **Fluent**: switch.test.js 🟡

- [ ] **Default**: textarea.test.js 🟡
- [ ] **Bootstrap**: textarea.test.js 🟡
- [ ] **Material**: textarea.test.js 🟡
- [ ] **Classic**: textarea.test.js 🟡
- [ ] **Fluent**: textarea.test.js 🟡

- [ ] **Default**: upload.test.js 🟡
- [ ] **Bootstrap**: upload.test.js 🟡
- [ ] **Material**: upload.test.js 🟡
- [ ] **Classic**: upload.test.js 🟡
- [ ] **Fluent**: upload.test.js 🟡

### Date & Time Components
- [ ] **Default**: dateinput.test.js 🟡
- [ ] **Bootstrap**: dateinput.test.js 🟡
- [ ] **Material**: dateinput.test.js 🟡
- [ ] **Classic**: dateinput.test.js 🟡
- [ ] **Fluent**: dateinput.test.js 🟡

- [ ] **Default**: datepicker.test.js 🟡
- [ ] **Bootstrap**: datepicker.test.js 🟡
- [ ] **Material**: datepicker.test.js 🟡
- [ ] **Classic**: datepicker.test.js 🟡
- [ ] **Fluent**: datepicker.test.js 🟡

- [ ] **Default**: daterangepicker.test.js 🟡
- [ ] **Bootstrap**: daterangepicker.test.js 🟡
- [ ] **Material**: daterangepicker.test.js 🟡
- [ ] **Classic**: daterangepicker.test.js 🟡
- [ ] **Fluent**: daterangepicker.test.js 🟡

- [ ] **Default**: datetimepicker.test.js 🟡
- [ ] **Bootstrap**: datetimepicker.test.js 🟡
- [ ] **Material**: datetimepicker.test.js 🟡
- [ ] **Classic**: datetimepicker.test.js 🟡
- [ ] **Fluent**: datetimepicker.test.js 🟡

- [ ] **Default**: time-marker.test.js 🟡
- [ ] **Bootstrap**: time-marker.test.js 🟡
- [ ] **Material**: time-marker.test.js 🟡
- [ ] **Classic**: time-marker.test.js 🟡
- [ ] **Fluent**: time-marker.test.js 🟡

- [ ] **Default**: timedurationpicker.test.js 🟡
- [ ] **Bootstrap**: timedurationpicker.test.js 🟡
- [ ] **Material**: timedurationpicker.test.js 🟡
- [ ] **Classic**: timedurationpicker.test.js 🟡
- [ ] **Fluent**: timedurationpicker.test.js 🟡

- [ ] **Default**: timepicker.test.js 🟡
- [ ] **Bootstrap**: timepicker.test.js 🟡
- [ ] **Material**: timepicker.test.js 🟡
- [ ] **Classic**: timepicker.test.js 🟡
- [ ] **Fluent**: timepicker.test.js 🟡

- [ ] **Default**: timeselector.test.js 🔴
- [ ] **Bootstrap**: timeselector.test.js 🔴
- [ ] **Material**: timeselector.test.js 🔴
- [ ] **Classic**: timeselector.test.js 🔴
- [ ] **Fluent**: timeselector.test.js 🔴

### Layout & Structure Components
- [ ] **Default**: dock-manager.test.js 🟡
- [ ] **Bootstrap**: dock-manager.test.js 🟡
- [ ] **Material**: dock-manager.test.js 🟡
- [ ] **Classic**: dock-manager.test.js 🟡
- [ ] **Fluent**: dock-manager.test.js 🟡

- [ ] **Default**: drawer.test.js 🟡
- [ ] **Bootstrap**: drawer.test.js 🟡
- [ ] **Material**: drawer.test.js 🟡
- [ ] **Classic**: drawer.test.js 🟡
- [ ] **Fluent**: drawer.test.js 🟡

- [ ] **Default**: expansion-panel.test.js 🟡
- [ ] **Bootstrap**: expansion-panel.test.js 🟡
- [ ] **Material**: expansion-panel.test.js 🟡
- [ ] **Classic**: expansion-panel.test.js 🟡
- [ ] **Fluent**: expansion-panel.test.js 🟡

- [ ] **Default**: gridlayout.test.js 🟡
- [ ] **Bootstrap**: gridlayout.test.js 🟡
- [ ] **Material**: gridlayout.test.js 🟡
- [ ] **Classic**: gridlayout.test.js 🟡
- [ ] **Fluent**: gridlayout.test.js 🟡

- [ ] **Default**: panel.test.js 🔴
- [ ] **Bootstrap**: panel.test.js 🔴
- [ ] **Material**: panel.test.js 🔴
- [ ] **Classic**: panel.test.js 🔴
- [ ] **Fluent**: panel.test.js 🔴

- [ ] **Default**: panelbar.test.js 🟡
- [ ] **Bootstrap**: panelbar.test.js 🟡
- [ ] **Material**: panelbar.test.js 🟡
- [ ] **Classic**: panelbar.test.js 🟡
- [ ] **Fluent**: panelbar.test.js 🟡

- [ ] **Default**: splitter.test.js 🟡
- [ ] **Bootstrap**: splitter.test.js 🟡
- [ ] **Material**: splitter.test.js 🟡
- [ ] **Classic**: splitter.test.js 🟡
- [ ] **Fluent**: splitter.test.js 🟡

- [ ] **Default**: stacklayout.test.js 🟡
- [ ] **Bootstrap**: stacklayout.test.js 🟡
- [ ] **Material**: stacklayout.test.js 🟡
- [ ] **Classic**: stacklayout.test.js 🟡
- [ ] **Fluent**: stacklayout.test.js 🟡

- [ ] **Default**: stepper.test.js 🟡
- [ ] **Bootstrap**: stepper.test.js 🟡
- [ ] **Material**: stepper.test.js 🟡
- [ ] **Classic**: stepper.test.js 🟡
- [ ] **Fluent**: stepper.test.js 🟡

- [ ] **Default**: tilelayout.test.js 🟡
- [ ] **Bootstrap**: tilelayout.test.js 🟡
- [ ] **Material**: tilelayout.test.js 🟡
- [ ] **Classic**: tilelayout.test.js 🟡
- [ ] **Fluent**: tilelayout.test.js 🟡

### Interactive Components
- [ ] **Default**: fab.test.js 🟡
- [ ] **Bootstrap**: fab.test.js 🟡
- [ ] **Material**: fab.test.js 🟡
- [ ] **Classic**: fab.test.js 🟡
- [ ] **Fluent**: fab.test.js 🟡

- [ ] **Default**: menu-button.test.js 🟡
- [ ] **Bootstrap**: menu-button.test.js 🟡
- [ ] **Material**: menu-button.test.js 🟡
- [ ] **Classic**: menu-button.test.js 🟡
- [ ] **Fluent**: menu-button.test.js 🟡

- [ ] **Default**: split-button.test.js 🟡
- [ ] **Bootstrap**: split-button.test.js 🟡
- [ ] **Material**: split-button.test.js 🟡
- [ ] **Classic**: split-button.test.js 🟡
- [ ] **Fluent**: split-button.test.js 🟡

- [ ] **Default**: speech-to-text-button.test.js 🟡
- [ ] **Bootstrap**: speech-to-text-button.test.js 🟡
- [ ] **Material**: speech-to-text-button.test.js 🟡
- [ ] **Classic**: speech-to-text-button.test.js 🟡
- [ ] **Fluent**: speech-to-text-button.test.js 🟡

### Feedback & Status Components
- [ ] **Default**: loader.test.js 🟡
- [ ] **Bootstrap**: loader.test.js 🟡
- [ ] **Material**: loader.test.js 🟡
- [ ] **Classic**: loader.test.js 🟡
- [ ] **Fluent**: loader.test.js 🟡

- [ ] **Default**: notification.test.js 🟡
- [ ] **Bootstrap**: notification.test.js 🟡
- [ ] **Material**: notification.test.js 🟡
- [ ] **Classic**: notification.test.js 🟡
- [ ] **Fluent**: notification.test.js 🟡

- [ ] **Default**: overlay.test.js 🟡
- [ ] **Bootstrap**: overlay.test.js 🟡
- [ ] **Material**: overlay.test.js 🟡
- [ ] **Classic**: overlay.test.js 🟡
- [ ] **Fluent**: overlay.test.js 🟡

- [ ] **Default**: popover.test.js 🟡
- [ ] **Bootstrap**: popover.test.js 🟡
- [ ] **Material**: popover.test.js 🟡
- [ ] **Classic**: popover.test.js 🟡
- [ ] **Fluent**: popover.test.js 🟡

- [ ] **Default**: popup.test.js 🟡
- [ ] **Bootstrap**: popup.test.js 🟡
- [ ] **Material**: popup.test.js 🟡
- [ ] **Classic**: popup.test.js 🟡
- [ ] **Fluent**: popup.test.js 🟡

- [ ] **Default**: progressbar.test.js 🟡
- [ ] **Bootstrap**: progressbar.test.js 🟡
- [ ] **Material**: progressbar.test.js 🟡
- [ ] **Classic**: progressbar.test.js 🟡
- [ ] **Fluent**: progressbar.test.js 🟡

- [ ] **Default**: prompt.test.js 🟡
- [ ] **Bootstrap**: prompt.test.js 🟡
- [ ] **Material**: prompt.test.js 🟡
- [ ] **Classic**: prompt.test.js 🟡
- [ ] **Fluent**: prompt.test.js 🟡

- [ ] **Default**: skeleton.test.js 🟡
- [ ] **Bootstrap**: skeleton.test.js 🟡
- [ ] **Material**: skeleton.test.js 🟡
- [ ] **Classic**: skeleton.test.js 🟡
- [ ] **Fluent**: skeleton.test.js 🟡

- [ ] **Default**: slider.test.js 🟡
- [ ] **Bootstrap**: slider.test.js 🟡
- [ ] **Material**: slider.test.js 🟡
- [ ] **Classic**: slider.test.js 🟡
- [ ] **Fluent**: slider.test.js 🟡

- [ ] **Default**: suggestion.test.js 🟡
- [ ] **Bootstrap**: suggestion.test.js 🟡
- [ ] **Material**: suggestion.test.js 🟡
- [ ] **Classic**: suggestion.test.js 🟡
- [ ] **Fluent**: suggestion.test.js 🟡

- [ ] **Default**: tooltip.test.js 🟡
- [ ] **Bootstrap**: tooltip.test.js 🟡
- [ ] **Material**: tooltip.test.js 🟡
- [ ] **Classic**: tooltip.test.js 🟡
- [ ] **Fluent**: tooltip.test.js 🟡

### Data & Business Components
- [ ] **Default**: dataviz.test.js 🟡
- [ ] **Bootstrap**: dataviz.test.js 🟡
- [ ] **Material**: dataviz.test.js 🟡
- [ ] **Classic**: dataviz.test.js 🟡
- [ ] **Fluent**: dataviz.test.js 🟡

- [ ] **Default**: filemanager.test.js 🟡
- [ ] **Bootstrap**: filemanager.test.js 🟡
- [ ] **Material**: filemanager.test.js 🟡
- [ ] **Classic**: filemanager.test.js 🟡
- [ ] **Fluent**: filemanager.test.js 🟡

- [ ] **Default**: filter.test.js 🟡
- [ ] **Bootstrap**: filter.test.js 🟡
- [ ] **Material**: filter.test.js 🟡
- [ ] **Classic**: filter.test.js 🟡
- [ ] **Fluent**: filter.test.js 🟡

- [ ] **Default**: gantt.test.js 🟡
- [ ] **Bootstrap**: gantt.test.js 🟡
- [ ] **Material**: gantt.test.js 🟡
- [ ] **Classic**: gantt.test.js 🟡
- [ ] **Fluent**: gantt.test.js 🟡

- [ ] **Default**: imageeditor.test.js 🟡
- [ ] **Bootstrap**: imageeditor.test.js 🟡
- [ ] **Material**: imageeditor.test.js 🟡
- [ ] **Classic**: imageeditor.test.js 🟡
- [ ] **Fluent**: imageeditor.test.js 🟡

- [ ] **Default**: map.test.js 🟡
- [ ] **Bootstrap**: map.test.js 🟡
- [ ] **Material**: map.test.js 🟡
- [ ] **Classic**: map.test.js 🟡
- [ ] **Fluent**: map.test.js 🟡

- [ ] **Default**: mediaplayer.test.js 🟡
- [ ] **Bootstrap**: mediaplayer.test.js 🟡
- [ ] **Material**: mediaplayer.test.js 🟡
- [ ] **Classic**: mediaplayer.test.js 🟡
- [ ] **Fluent**: mediaplayer.test.js 🟡

- [ ] **Default**: messagebox.test.js 🟡
- [ ] **Bootstrap**: messagebox.test.js 🟡
- [ ] **Material**: messagebox.test.js 🟡
- [ ] **Classic**: messagebox.test.js 🟡
- [ ] **Fluent**: messagebox.test.js 🟡

- [ ] **Default**: orgchart.test.js 🟡
- [ ] **Bootstrap**: orgchart.test.js 🟡
- [ ] **Material**: orgchart.test.js 🟡
- [ ] **Classic**: orgchart.test.js 🟡
- [ ] **Fluent**: orgchart.test.js 🟡

- [ ] **Default**: pager.test.js 🟡
- [ ] **Bootstrap**: pager.test.js 🟡
- [ ] **Material**: pager.test.js 🟡
- [ ] **Classic**: pager.test.js 🟡
- [ ] **Fluent**: pager.test.js 🟡

- [ ] **Default**: pdf-viewer.test.js 🟡
- [ ] **Bootstrap**: pdf-viewer.test.js 🟡
- [ ] **Material**: pdf-viewer.test.js 🟡
- [ ] **Classic**: pdf-viewer.test.js 🟡
- [ ] **Fluent**: pdf-viewer.test.js 🟡

- [ ] **Default**: pivotgrid.test.js 🟡
- [ ] **Bootstrap**: pivotgrid.test.js 🟡
- [ ] **Material**: pivotgrid.test.js 🟡
- [ ] **Classic**: pivotgrid.test.js 🟡
- [ ] **Fluent**: pivotgrid.test.js 🟡

- [ ] **Default**: scheduler.test.js 🟡
- [ ] **Bootstrap**: scheduler.test.js 🟡
- [ ] **Material**: scheduler.test.js 🟡
- [ ] **Classic**: scheduler.test.js 🟡
- [ ] **Fluent**: scheduler.test.js 🟡

- [ ] **Default**: scrollview.test.js 🟡
- [ ] **Bootstrap**: scrollview.test.js 🟡
- [ ] **Material**: scrollview.test.js 🟡
- [ ] **Classic**: scrollview.test.js 🟡
- [ ] **Fluent**: scrollview.test.js 🟡

- [ ] **Default**: signature.test.js 🟡
- [ ] **Bootstrap**: signature.test.js 🟡
- [ ] **Material**: signature.test.js 🟡
- [ ] **Classic**: signature.test.js 🟡
- [ ] **Fluent**: signature.test.js 🟡

- [ ] **Default**: spreadsheet.test.js 🟡
- [ ] **Bootstrap**: spreadsheet.test.js 🟡
- [ ] **Material**: spreadsheet.test.js 🟡
- [ ] **Classic**: spreadsheet.test.js 🟡
- [ ] **Fluent**: spreadsheet.test.js 🟡

- [ ] **Default**: taskboard.test.js 🟡
- [ ] **Bootstrap**: taskboard.test.js 🟡
- [ ] **Material**: taskboard.test.js 🟡
- [ ] **Classic**: taskboard.test.js 🟡
- [ ] **Fluent**: taskboard.test.js 🟡

- [ ] **Default**: treelist.test.js 🟡
- [ ] **Bootstrap**: treelist.test.js 🟡
- [ ] **Material**: treelist.test.js 🟡
- [ ] **Classic**: treelist.test.js 🟡
- [ ] **Fluent**: treelist.test.js 🟡

- [ ] **Default**: treeview.test.js 🟡
- [ ] **Bootstrap**: treeview.test.js 🟡
- [ ] **Material**: treeview.test.js 🟡
- [ ] **Classic**: treeview.test.js 🟡
- [ ] **Fluent**: treeview.test.js 🟡

### Advanced Components
- [ ] **Default**: chart-wizard.test.js 🟡
- [ ] **Bootstrap**: chart-wizard.test.js 🟡
- [ ] **Material**: chart-wizard.test.js 🟡
- [ ] **Classic**: chart-wizard.test.js 🟡
- [ ] **Fluent**: chart-wizard.test.js 🟡

- [ ] **Default**: chat.test.js 🟡
- [ ] **Bootstrap**: chat.test.js 🟡
- [ ] **Material**: chat.test.js 🟡
- [ ] **Classic**: chat.test.js 🟡
- [ ] **Fluent**: chat.test.js 🟡

- [ ] **Default**: dialog.test.js 🟡
- [ ] **Bootstrap**: dialog.test.js 🟡
- [ ] **Material**: dialog.test.js 🟡
- [ ] **Classic**: dialog.test.js 🟡
- [ ] **Fluent**: dialog.test.js 🟡

- [ ] **Default**: editor.test.js 🟡
- [ ] **Bootstrap**: editor.test.js 🟡
- [ ] **Material**: editor.test.js 🟡
- [ ] **Classic**: editor.test.js 🟡
- [ ] **Fluent**: editor.test.js 🟡

- [ ] **Default**: timeline.test.js 🟡
- [ ] **Bootstrap**: timeline.test.js 🟡
- [ ] **Material**: timeline.test.js 🟡
- [ ] **Classic**: timeline.test.js 🟡
- [ ] **Fluent**: timeline.test.js 🟡

- [ ] **Default**: window.test.js 🟡
- [ ] **Bootstrap**: window.test.js 🟡
- [ ] **Material**: window.test.js 🟡
- [ ] **Classic**: window.test.js 🟡
- [ ] **Fluent**: window.test.js 🟡

- [ ] **Default**: wizard.test.js 🟡
- [ ] **Bootstrap**: wizard.test.js 🟡
- [ ] **Material**: wizard.test.js 🟡
- [ ] **Classic**: wizard.test.js 🟡
- [ ] **Fluent**: wizard.test.js 🟡

### Utility & System Components
- [ ] **Default**: adaptive.test.js 🔴
- [ ] **Bootstrap**: adaptive.test.js 🔴
- [ ] **Material**: adaptive.test.js 🔴
- [ ] **Classic**: adaptive.test.js 🔴
- [ ] **Fluent**: adaptive.test.js 🔴

- [ ] **Default**: draggable.test.js 🔴
- [ ] **Bootstrap**: draggable.test.js 🔴
- [ ] **Material**: draggable.test.js 🔴
- [ ] **Classic**: draggable.test.js 🔴
- [ ] **Fluent**: draggable.test.js 🔴

- [ ] **Default**: icons.test.js 🔴
- [ ] **Bootstrap**: icons.test.js 🔴
- [ ] **Material**: icons.test.js 🔴
- [ ] **Classic**: icons.test.js 🔴
- [ ] **Fluent**: icons.test.js 🔴

- [ ] **Default**: marquee.test.js 🔴
- [ ] **Bootstrap**: marquee.test.js 🔴
- [ ] **Material**: marquee.test.js 🔴
- [ ] **Classic**: marquee.test.js 🔴
- [ ] **Fluent**: marquee.test.js 🔴

- [ ] **Default**: no-data.test.js 🔴
- [ ] **Bootstrap**: no-data.test.js 🔴
- [ ] **Material**: no-data.test.js 🔴
- [ ] **Classic**: no-data.test.js 🔴
- [ ] **Fluent**: no-data.test.js 🔴

- [ ] **Default**: responsivepanel.test.js 🔴
- [ ] **Bootstrap**: responsivepanel.test.js 🔴
- [ ] **Material**: responsivepanel.test.js 🔴
- [ ] **Classic**: responsivepanel.test.js 🔴
- [ ] **Fluent**: responsivepanel.test.js 🔴

- [ ] **Default**: ripple.test.js 🔴
- [ ] **Bootstrap**: ripple.test.js 🔴
- [ ] **Material**: ripple.test.js 🔴
- [ ] **Classic**: ripple.test.js 🔴
- [ ] **Fluent**: ripple.test.js 🔴

- [ ] **Default**: scroller.test.js 🔴
- [ ] **Bootstrap**: scroller.test.js 🔴
- [ ] **Material**: scroller.test.js 🔴
- [ ] **Classic**: scroller.test.js 🔴
- [ ] **Fluent**: scroller.test.js 🔴

- [ ] **Default**: searchbox.test.js 🔴
- [ ] **Bootstrap**: searchbox.test.js 🔴
- [ ] **Material**: searchbox.test.js 🔴
- [ ] **Classic**: searchbox.test.js 🔴
- [ ] **Fluent**: searchbox.test.js 🔴

- [ ] **Default**: validator.test.js 🔴
- [ ] **Bootstrap**: validator.test.js 🔴
- [ ] **Material**: validator.test.js 🔴
- [ ] **Classic**: validator.test.js 🔴
- [ ] **Fluent**: validator.test.js 🔴

- [ ] **Default**: virtual-scroller.test.js 🔴
- [ ] **Bootstrap**: virtual-scroller.test.js 🔴
- [ ] **Material**: virtual-scroller.test.js 🔴
- [ ] **Classic**: virtual-scroller.test.js 🔴
- [ ] **Fluent**: virtual-scroller.test.js 🔴

---

## 📊 Progress Tracking

### By Theme
- **Default**: 0/122 completed (0%)
- **Bootstrap**: 0/122 completed (0%)
- **Material**: 0/122 completed (0%)
- **Classic**: 0/122 completed (0%)
- **Fluent**: 0/122 completed (0%)

### By Test File Status
- **Missing Tests**: 0/85 created (0%)
- **JS Tests**: 0/435 migrated (0%)
- **TS Tests**: 0/85 updated (0%)

### By Priority
- **High Priority**: 0/25 completed (0%)
- **Medium Priority**: 0/25 completed (0%)
- **Low Priority**: 0/585 completed (0%)

### Overall Progress
- **Total Components**: 610
- **Completed**: 0
- **Remaining**: 610
- **Progress**: 0%

---

## 🚀 Quick Start Commands

### Check Test File Status
```bash
# Check for existing test files
ls units/{THEME}/{COMPONENT}.test.*

# Examples:
ls units/default/button.test.*
ls units/bootstrap/grid.test.*
ls units/material/input.test.*
```

### Test a Specific Component
```bash
# Format: npx jest --config units/jest.config.mjs units/{THEME}/{COMPONENT}.test.ts --verbose=false

# Examples:
npx jest --config units/jest.config.mjs units/default/button.test.ts --verbose=false
npx jest --config units/jest.config.mjs units/bootstrap/grid.test.js --verbose=false
npx jest --config units/jest.config.mjs units/material/input.test.js --verbose=false
```

### Build Component Registry
```bash
cd .copilot/agents/css-specificity
npx tsx --tsconfig ./tsconfig.json component-registry-builder.ts
```

### Use Cursor AI for Analysis
```
"Analyze the specificity issues in the button component for the default theme"
"Fix the CSS specificity violations in the grid component"
"Apply :where() wrapping to reduce specificity in the dropdown component"
"Create a new test file for the appbar component in the default theme"
```

---

## 📝 Notes

1. **Start with High Priority components** - These are most commonly used
2. **Check test file status first** - Missing, JS, or TS
3. **Use Cursor AI** - Leverage the agent for intelligent analysis and fixes
4. **Check component registry** - Verify class classifications before making changes
5. **Validate changes** - Always re-run tests after making fixes
6. **Handle all scenarios** - Migration, updates, and creation

## 🔄 Update Process

1. Check test file status (.js, .ts, or missing)
2. Run test for component (or create if missing)
3. Analyze failures with Cursor AI
4. Apply fixes (component spec updates, SCSS changes)
5. Re-run test to validate
6. Mark as complete ✅ in TODO list
7. Update progress tracking
8. Commit changes with format: `chore({THEME}): refactor {COMPONENT} to comply with specificity framework`

---

*Last Updated: [Current Date]*
*Total Components: 610*
*Estimated Time: 3-4 weeks for full completion*
