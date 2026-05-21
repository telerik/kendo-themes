# Breadcrumb Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Breadcrumb component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-breadcrumb` | `aria-label=Breadcrumb` | Indicates the type of navigation provided by the nav element. |
| `.k-breadcrumb-item .k-breadcrumb-link,.k-breadcrumb-item .k-breadcrumb-root-link` | `role=link or nodeName=a` | The breadcrumb item should render an <a> element or have role="link". |
| `.k-breadcrumb-last-item .k-breadcrumb-link,.k-breadcrumb-last-item .k-breadcrumb-root-link` | `aria-current=page` | The last breadcrumb item points to the active page. |
| `.k-breadcrumb-last-item .k-breadcrumb-link` | `aria-disabled=true` | The last breadcrumb item is disabled. |
| `.k-breadcrumb-delimiter-icon` | `aria-hidden=true` | Delimiter icon should not be accessed through assistive technology. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Breadcrumb component:

| Shortcut | Behavior |
| --- | --- |
| `Tab & Shift+Tab` | Focuses next and previous breadcrumb items. The focusable element is the element with either `a` tag, or `role=\"link\"` |
| `Enter` | Selects the Bredcrumb item, and navigates to it (if navigatable). |
