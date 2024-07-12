import { KendoToolbarProps, Toolbar, ToolbarItem, ToolbarSeparator } from '../toolbar';
import { classNames } from '../misc';
import { Button } from '../button';
import { DropdownList } from '../dropdownlist';

export const IMAGEEDITORTOOLBAR_CLASSNAME = `k-imageeditor-toolbar`;

const states = [];

const options = {};

export type KendoImageEditorToolbarProps = {
    toolbarItems?: React.JSX.Element | React.JSX.Element[];
};

const defaultToolbarItems = [
    <Button key="toolbar-button-1" icon="upload"></Button>,
    <Button key="toolbar-button-2" disabled icon="download"></Button>,
    <ToolbarSeparator key="toolbar-separator-1"></ToolbarSeparator>,
    <Button key="toolbar-button-3" disabled icon="undo"></Button>,
    <Button key="toolbar-button-4" disabled icon="redo"></Button>,
    <ToolbarSeparator key="toolbar-separator-2"></ToolbarSeparator>,
    <Button key="toolbar-button-5" disabled icon="crop"></Button>,
    <Button key="toolbar-button-6" disabled icon="image-resize"></Button>,
    <Button key="toolbar-button-7" disabled icon="zoom-in"></Button>,
    <Button key="toolbar-button-8" disabled icon="zoom-out"></Button>,
    <ToolbarItem key="toolbar-item-1">
        <DropdownList disabled value="Zoom options" />
    </ToolbarItem>
];

const defaultProps = {
    toolbarItems: defaultToolbarItems
};

export const ImageEditorToolbar = (
    props: KendoToolbarProps &
        KendoImageEditorToolbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        toolbarItems = defaultProps.toolbarItems,
        ...other
    } = props;

    return (
        <Toolbar
            {...other}
            className={classNames(
                props.className,
                IMAGEEDITORTOOLBAR_CLASSNAME,
            )}
        >
            {toolbarItems}
        </Toolbar>
    );
};

ImageEditorToolbar.states = states;
ImageEditorToolbar.options = options;
ImageEditorToolbar.className = IMAGEEDITORTOOLBAR_CLASSNAME;
ImageEditorToolbar.defaultProps = defaultProps;

export default ImageEditorToolbar;
