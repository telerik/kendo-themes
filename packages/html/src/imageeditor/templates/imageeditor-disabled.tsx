import { ImageEditor } from "..";
import { ToolbarItem, ToolbarSeparator } from "../../toolbar";
import { Button } from "../../button";
import { Autocomplete } from "../../autocomplete";

const disabledToolbarItems = [
    <Button fillMode="flat" key="toolbar-button-1" icon="image-add" aria-label="Image Add"></Button>,
    <ToolbarSeparator key="toolbar-separator-1"></ToolbarSeparator>,
    <Button fillMode="flat" key="toolbar-button-2" disabled icon="undo" aria-label="Undo"></Button>,
    <Button fillMode="flat" key="toolbar-button-3" disabled icon="redo" aria-label="Redo"></Button>,
    <ToolbarSeparator key="toolbar-separator-2"></ToolbarSeparator>,
    <Button fillMode="flat" key="toolbar-button-4" disabled icon="download" aria-label="Download"></Button>,
    <div className="k-spacer" key="toolbar-spacer"></div>,
    <Button fillMode="flat" key="toolbar-button-5" disabled icon="zoom-in" aria-label="Zoom In"></Button>,
    <ToolbarItem key="toolbar-item-1">
        <Autocomplete fillMode="flat" disabled value="Fit" aria-label="Zoom options" />
    </ToolbarItem>,
    <Button fillMode="flat" key="toolbar-button-6" disabled icon="zoom-out" aria-label="Zoom Out"></Button>
];

const disabledSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" disabled icon="crop" aria-label="Crop" />,
    <Button fillMode="flat" key="sidebar-button-2" disabled icon="image-resize" aria-label="Resize" />,
    <Button fillMode="flat" key="sidebar-button-3" disabled icon="rotate" aria-label="Rotate" />,
    <div className="k-separator" key="sidebar-separator-1" />,
    <Button fillMode="flat" key="sidebar-button-4" disabled icon="free-text" aria-label="Text" />,
    <Button fillMode="flat" key="sidebar-button-5" disabled icon="shapes" aria-label="Shapes" />,
    <div className="k-separator" key="sidebar-separator-2" />,
    <Button fillMode="flat" key="sidebar-button-6" disabled icon="droplet" aria-label="Blur" />,
    <Button fillMode="flat" key="sidebar-button-7" disabled icon="sliders" aria-label="Adjustments" />,
    <Button fillMode="flat" key="sidebar-button-8" disabled icon="filter" aria-label="Filters" />,
    <div className="k-separator" key="sidebar-separator-3" />,
    <Button fillMode="flat" key="sidebar-button-9" disabled icon="borders-all" aria-label="Frame" />,
    <Button fillMode="flat" key="sidebar-button-10" disabled icon="bring-to-back" aria-label="Shadow" />
];

// Non-editable state (Empty, Loading, Error): only the upload action is available,
// sidebar tools and the rest of the toolbar are disabled.
export const ImageEditorDisabled = (props: any) => (
    <ImageEditor
        toolbarItems={disabledToolbarItems}
        sidebarItems={disabledSidebarItems}
        {...props}
    />
);
