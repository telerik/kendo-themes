import { ImageEditor } from '..';
import { ImageEditorPlaceholder } from '../imageeditor-placeholder';
import { ToolbarItem, ToolbarSeparator } from '../../toolbar';
import { Button } from '../../button';
import { Autocomplete } from '../../autocomplete';

// Error state: the uploaded file type isn't supported — only the upload
// action is available, sidebar tools and the rest of the toolbar are disabled.
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
        <Autocomplete disabled value="Fit" aria-label="Zoom options" />
    </ToolbarItem>,
    <Button fillMode="flat" key="toolbar-button-6" disabled icon="zoom-out" aria-label="Zoom Out"></Button>
];

const disabledSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" disabled icon="image-resize" />,
    <Button fillMode="flat" key="sidebar-button-2" disabled icon="crop" />,
    <Button fillMode="flat" key="sidebar-button-3" disabled icon="rotate" />,
    <div className="k-separator" key="sidebar-separator-1" />,
    <Button fillMode="flat" key="sidebar-button-4" disabled icon="free-text" />,
    <Button fillMode="flat" key="sidebar-button-5" disabled icon="shapes" />,
    <div className="k-separator" key="sidebar-separator-2" />,
    <Button fillMode="flat" key="sidebar-button-6" disabled icon="droplet" />,
    <Button fillMode="flat" key="sidebar-button-7" disabled icon="sliders" />,
    <div className="k-separator" key="sidebar-separator-3" />,
    <Button fillMode="flat" key="sidebar-button-8" disabled icon="image" />,
    <Button fillMode="flat" key="sidebar-button-9" disabled icon="brightness-contrast" />
];

export default () => (
    <div id="test-area" className="k-d-grid k-grid-cols-1">

        <span>Error - Unsupported File Format</span>
        <ImageEditor
            contentHeight="260px"
            toolbarItems={disabledToolbarItems}
            sidebarItems={disabledSidebarItems}
            placeholder={
                <ImageEditorPlaceholder
                    icon="file-error"
                    title="Unsupported file format"
                    text="Please upload a JPEG or PNG file."
                />
            }
        />

    </div>
);
