import { KendoToolbarProps, Toolbar, ToolbarItem, ToolbarSeparator } from '../toolbar';
import { classNames } from '../misc';
import { Button } from '../button';
import { Autocomplete } from '../autocomplete';

export const IMAGEEDITORTOOLBAR_CLASSNAME = `k-imageeditor-toolbar`;

const states = [];

const options = {};

export type KendoImageEditorToolbarProps = {
    toolbarItems?: React.JSX.Element | React.JSX.Element[];
};

const defaultToolbarItems = [
    <Button fillMode="flat" key="toolbar-button-1" icon="image-add" aria-label="Image Add"></Button>,
    <ToolbarSeparator key="toolbar-separator-1"></ToolbarSeparator>,
    <Button fillMode="flat" key="toolbar-button-2" disabled icon="undo" aria-label="Undo"></Button>,
    <Button fillMode="flat" key="toolbar-button-3" disabled icon="redo" aria-label="Redo"></Button>,
    <ToolbarSeparator key="toolbar-separator-2"></ToolbarSeparator>,
    <Button fillMode="flat" key="toolbar-button-4" icon="download" aria-label="Download"></Button>,
    <div className="k-spacer"></div>,
     <Button fillMode="flat" key="toolbar-button-5" icon="zoom-in" aria-label="Zoom In"></Button>,
    <ToolbarItem key="toolbar-item-1">
        <Autocomplete disabled value="Fit" aria-label="Zoom options" />
    </ToolbarItem>,
     <Button fillMode="flat" key="toolbar-button-6" icon="zoom-out" aria-label="Zoom Out"></Button>
];

const defaultOptions = {
    toolbarItems: defaultToolbarItems
};

export const ImageEditorToolbar = (
    props: KendoToolbarProps &
        KendoImageEditorToolbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        toolbarItems = defaultOptions.toolbarItems,
        ...other
    } = props;

    return (
        <Toolbar
            {...other}
            className={classNames(
                props.className,
                IMAGEEDITORTOOLBAR_CLASSNAME,
            )}
            fillMode="flat"
        >
            {toolbarItems}
        </Toolbar>
    );
};

ImageEditorToolbar.states = states;
ImageEditorToolbar.options = options;
ImageEditorToolbar.className = IMAGEEDITORTOOLBAR_CLASSNAME;
ImageEditorToolbar.defaultOptions = defaultOptions;

export default ImageEditorToolbar;
