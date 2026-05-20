# Pager Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Pager component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-pager` | `role=application` | Indicates that the pager has its own keyboard navigation implemented. |
| `.k-pager` | `aria-roledescription=pager` | Clarifies the role of the Pager. |
| `.k-pager` | `aria-keyshortcuts=Enter ArrowRight ArrowLeft` | Announces the available keyboard shortcuts. |
| `.k-pager` | `aria-label` | Announces the currently selected page and the number of available pages. |
| `.k-pager-nav` | `role=button or nodeName=button` | Specifies the role of the navigation element. |
| `.k-pager-nav.k-disabled` | `aria-disabled=true` | Present when the navigation button is non-interactive. |
| `.k-pager-nav` | `title` | Specifies the purpose of each navigation button. |
| `.k-pager-numbers .k-button` | `aria-label or title` | Specifies the purpose of each page link, e.g., Page 6. |
| `.k-pager-numbers .k-button.k-selected` | `aria-current=page` | Present on the currently selected page element. |
| `.k-pager-sizes .k-dropdownlist` | `aria-label or aria-labelledby` | The DropDownList requires a label to specify its purpose. |
| `.k-pager-input .k-input-inner` | `aria-label` | The input requires a label to specify its purpose. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Pager component:

| Shortcut | Behavior |
| --- | --- |
| `Home` | Loads the first page of data if the current page is not the first one. |
| `End` | Loads the last page of data if the current page is not the last one. |
| `Enter` | Activates the inner Pager navigation. |
| `Tab` | Navigates to the next focusable element on the page. |
| `Shift + Tab` | Navigates to the previous focusable element on the page. |
| `Left Arrow` | Loads the previous page of data, if any. |
| `Right Arrow` | Loads the next page of data, if any. |
| `Page Up` | Loads the previous page of data, if any. |
| `Page Down` | Loads the next page of data, if any. |
| `Esc` | Moves the focus back to the wrapper element. Deactivates the inner Pager navigation. |
| `Tab` | Navigates to the next focusable element in the Pager. If the current focus is on the last element, moves the focus to the first focusable item in the component. |
| `Shift + Tab` | Navigates to the previous focusable element in the Pager. If the current focus is on the first element, moves the focus to the last focusable item in the component. |
| `Enter` | For button items, and Pager input executes the currently focused action (page change). |
