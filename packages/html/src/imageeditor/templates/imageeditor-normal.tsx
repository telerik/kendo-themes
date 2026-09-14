import { ImageEditor } from "..";
import { Button } from "../../button";
import { Autocomplete } from "../../autocomplete";
import { ToolbarItem, ToolbarSeparator } from "../../toolbar";

// Freshly-loaded image: no edit history yet, so undo/redo/zoom are disabled
const normalToolbarItems = [
    <Button fillMode="flat" key="toolbar-button-1" icon="image-add" aria-label="Image Add"></Button>,
    <ToolbarSeparator key="toolbar-separator-1"></ToolbarSeparator>,
    <Button fillMode="flat" key="toolbar-button-2" disabled icon="undo" aria-label="Undo"></Button>,
    <Button fillMode="flat" key="toolbar-button-3" disabled icon="redo" aria-label="Redo"></Button>,
    <ToolbarSeparator key="toolbar-separator-2"></ToolbarSeparator>,
    <Button fillMode="flat" key="toolbar-button-4" icon="download" aria-label="Download"></Button>,
    <div className="k-spacer" key="toolbar-spacer"></div>,
     <Button fillMode="flat" key="toolbar-button-5" icon="zoom-in" aria-label="Zoom In"></Button>,
    <ToolbarItem key="toolbar-item-1">
        <Autocomplete fillMode="flat" disabled value="Fit" aria-label="Zoom options" />
    </ToolbarItem>,
     <Button fillMode="flat" key="toolbar-button-6" icon="zoom-out" aria-label="Zoom Out"></Button>
];

export const ImageEditorNormal = (props: any) => (
    <ImageEditor toolbarItems={normalToolbarItems} {...props} />
);
