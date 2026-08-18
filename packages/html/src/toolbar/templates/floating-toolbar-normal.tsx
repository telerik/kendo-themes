import { FloatingToolbar } from "../floating-toolbar.spec";
import { ToolbarSeparator } from '../toolbar-separator';
import { Button } from '../../button/button.spec';
import { ButtonGroup } from '../../button-group/button-group.spec';
import { SplitButton } from '../../split-button/split-button.spec';
import { MenuButton } from '../../menu-button/menu-button.spec';
import { ColorPickerNormal } from '../../colorpicker/templates/colorpicker-normal';

export const FloatingToolbarNormal = (props) => (
    <FloatingToolbar children={[
        <Button aria-label="Toolbar button" key="toolbar-button" icon="sparkles"></Button>,
        <ToolbarSeparator key="toolbar-separator" />,
        <ButtonGroup key="toolbar-button-group">
            <Button aria-label="Bold" className="k-group-start" icon="bold"></Button>
            <Button aria-label="Italic" icon="italic"></Button>
            <Button aria-label="Underline" icon="underline"></Button>
            <Button aria-label="Strikethrough" icon="strikethrough" className="k-group-end"></Button>
        </ButtonGroup>,
        <ToolbarSeparator key="toolbar-separator-2" />,
        <SplitButton aria-label="Align left" key="toolbar-split-button" icon="align-left"></SplitButton>,
        <SplitButton aria-label="List unordered" key="toolbar-split-button-1" icon="list-unordered"></SplitButton>,
        <ToolbarSeparator key="toolbar-separator-3" />,
        <MenuButton showArrow={false} key="toolbar-menu-button" icon="link"></MenuButton>,
        <ToolbarSeparator key="toolbar-separator-4" />,
        <ColorPickerNormal key="toolbar-color-picker" value="red" valueIconName="foreground-color" ></ColorPickerNormal>,
        <ColorPickerNormal key="toolbar-color-picker-2"></ColorPickerNormal>,
        <ToolbarSeparator key="toolbar-separator-5" />,
        <Button aria-label="Clear CSS" key="toolbar-button-2" icon="clear-css"></Button>
    ]}
    {...props}>
    </FloatingToolbar>
);
