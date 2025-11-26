## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The ImageEditor is a composite component containing:


 - ToolBar (`role=toolbar`);
 - Image canvas (`role=img`);
 - Edit action pane (`role=form`);


The ToolBar follows the spec for the ToolBar component:

[ToolBar accessibility specification](toolbar_aria.md)


The image canvas must have an appropriate role and accessible name assigned:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-imageeditor-canvas>canvas` | `role=img` | Indicates the canvas' role as an image. |
|  | `aria-label` or `aria-labelledby` | Provides an accessible name for the canvas by describing the image content. |


The Edit pane (present on performing crop and resize of image) follows the spec for the Form component:

[Form accessibility specification](form_aria.md)

