## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The DockManager component consists of multiple inner panes, each containing tools, tabs, and content that can be resized, rearranged, and interacted with.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-dock-manager` | `role=application` | Indicates that the DockManager has its own keyboard navigation implemented. |
|  | `aria-live=polite` | Defines dynamic content changes within the DockManager container that need to be announced by screen readers. |
| `.k-dock-navigator` | `aria-hidden=true` | The navigator needs to be hidden from the readers as it appears only on drag. |

### DockManager Toolbar


The Toolbar in the DockManager element of the component should implement the specification for the **Toolbar** component.

[Toolbar accessibility specification](toolbar_aria.md)

### DockManager TabStrip


The TabStrip in the DockManager element of the component should implement the specification for the **TabStrip** component.

[TabStrip accessibility specification](tabstrip_aria.md)

### DockManager Splitter


The Splitter in the DockManager element of the component should implement the specification for the **Splitter** component.

[Splitter accessibility specification](splitter_aria.md)

### DockManager Window


The Window elements in the DockManager element of the component should implement the specification for the **Window** component.

[Window accessibility specification](window_aria.md)

