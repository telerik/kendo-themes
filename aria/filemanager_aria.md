## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The FileManager component is a composite component that is used to represent file system-like structure. It contains:


 - `ToolBar` - on top of the component
 - `Splitter` - it separates the panes in the component
 - `TreeView` - in its left pane.
 - `Breadcrumb` - in the top of its center pane
 - `ListView` or a `Grid` - in its center pane.
 - `k-filemanager-preview` element - in its right pane


Each component implements its own dedicated ARIA spec.


The FileManager component integrates the ToolBar component and follows its WAI-ARIA spec:

[ToolBar accessibility specification](toolbar_aria.md)


The component that organizes the inner structure of the FileManager is a Splitter:

[Splitter accessibility specification](splitter_aria.md)


The main navigation component in the FileManager is the TreeView:

[TreeView accessibility specification](treeview_aria.md)


The helper navigation component in the FileManager is the Breadcrumb:

[Breadcrumb accessibility specification](breadcrumb_aria.md)


The component placed in the main pain of the FileManager can be a selectable ListView:

[ListView accessibility specification](listview_aria.md)


or it can be a Grid:

[Grid accessibility specification](grid_aria.md)


Apart from that the `.k-filemanager-preview` element must be focusable, so that its content would be comunicated to the users:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-filemanager-preview` | `tabindex=0` | The element must be focusable, so that its content would be comunicated to the users. |

