## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The Upload selected files list implements roving tabindex navigation. Meaning that only one file has tabindex=0.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-upload .k-upload-button` | `aria-disabled=true/false` | Announces the disabled state of the upload button. |
|  | `aria-expanded=true/false` | Indicates whether the controlled list of files is present/visible |
|  | `aria-controls=.k-upload-files id` | Creates the relationship between the button and the list of selected files when the list is present. Remove the attribute when list is not present. |
| `.k-upload input` | `tabindex=-1` | Assures that the input element inside the upload is not focusable. |
|  | `aria-hidden=true` | The input needs to be hidden from the readers. |
| `.k-upload-files` | `role=list` | Explicitly sets the UL role to list because of https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility_concerns |
|  | `id` | Unique and deterministic id linked to the button "aria-controls" attribute. |
| `.k-upload-files .k-file` | `role=listitem` | Explicitly sets the LI role to listitem because of https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role#best_practices (note 2). |
|  | `tabindex=0/-1` | The element should be focusable. Value should be changed dynamically based on the roving tabindex navigation. |
| `.k-upload .k-file .k-file-validation-message` | `aria-live=polite` | Announces the change in the upload status of the file. |
| `.k-upload .k-upload-actions .k-upload-action` | `aria-hidden=true` | The list file action buttons must be hidden from the readers. |
|  | `tabindex=-1` | Assures that the list file action buttons are not focusable elements. |

