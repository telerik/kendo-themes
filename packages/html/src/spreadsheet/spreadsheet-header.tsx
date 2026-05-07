import { classNames } from '../misc';
import { Button } from '../button/button.spec';
import { ButtonGroup } from '../button-group/button-group.spec';
import { ColorPicker } from '../colorpicker/colorpicker.spec';
import { DropdownList } from '../dropdownlist/dropdownlist.spec';
import { MenuButton } from '../menu-button/menu-button.spec';
import { MenuItem } from '../menu/menu-item.spec';
import { SpreadsheetMenu } from './spreadsheet-menu';
import { SpreadsheetToolbar } from './spreadsheet-toolbar';
import { ToolbarItem } from '../toolbar/toolbar-item.spec';
import { ToolbarSeparator } from '../toolbar/toolbar-separator';

export const SPREADSHEETHEADER_CLASSNAME = `k-spreadsheet-header`;

const states = [];

const options = {};

export type KendoSpreadsheetHeaderProps = {
    toolbarItems?: React.JSX.Element[] | React.JSX.Element;
    menuItems?: React.JSX.Element[] | React.JSX.Element;
};

const defaultToolbarItems = ([
    <Button key="undo" icon="arrow-rotate-ccw" fillMode="flat" aria-label="Undo"></Button>,
    <Button key="redo" icon="arrow-rotate-cw" fillMode="flat" aria-label="Redo"></Button>,
    <ToolbarSeparator key="sep1"></ToolbarSeparator>,
    <Button key="cut" icon="cut" fillMode="flat" aria-label="Cut"></Button>,
    <Button key="copy" icon="copy" fillMode="flat" aria-label="Copy"></Button>,
    <Button key="paste" icon="clipboard" fillMode="flat" aria-label="Paste"></Button>,
    <ToolbarSeparator key="sep2"></ToolbarSeparator>,
    <DropdownList key="fontname" value="Font Name" fillMode="flat" aria-label="Font name" />,
    <DropdownList key="fontsize" value="Font Size" fillMode="flat" aria-label="Font size" />,
    <ToolbarSeparator key="sep3"></ToolbarSeparator>,
    <ButtonGroup key="fontgrow" fillMode="flat">
        <Button className="k-group-start" icon="font-grow" fillMode="flat" aria-label="Increase font size"></Button>
        <Button className="k-group-end" icon="font-shrink" fillMode="flat" aria-label="Decrease font size"></Button>
    </ButtonGroup>,
    <ToolbarSeparator key="sep4"></ToolbarSeparator>,
    <ButtonGroup key="fontstyle" fillMode="flat">
        <Button className="k-group-start" icon="bold" fillMode="flat" aria-label="Bold"></Button>
        <Button icon="italic" fillMode="flat" aria-label="Italic"></Button>
        <Button icon="underline" fillMode="flat" aria-label="Underline"></Button>
        <Button className="k-group-end" icon="strikethrough" fillMode="flat" aria-label="Strikethrough"></Button>
    </ButtonGroup>,
    <ToolbarItem key="textcolor">
        <ColorPicker value="red" valueIconName="foreground-color" fillMode="flat" aria-label="Text color" />
    </ToolbarItem>,
    <ToolbarSeparator key="sep5"></ToolbarSeparator>,
    <ToolbarItem key="bgcolor">
        <ColorPicker value="fuchsia" valueIconName="droplet" fillMode="flat" aria-label="Background color" />
    </ToolbarItem>,
    <ToolbarSeparator key="sep6"></ToolbarSeparator>,
    <MenuButton key="borders" fillMode="flat" icon="borders-all" showArrow aria-label="Borders"></MenuButton>,
    <ToolbarSeparator key="sep7"></ToolbarSeparator>,
    <MenuButton key="halign" fillMode="flat" icon="align-left" showArrow aria-label="Horizontal alignment"></MenuButton>,
    <MenuButton key="valign" fillMode="flat" icon="align-middle" showArrow aria-label="Vertical alignment"></MenuButton>,
    <ToolbarSeparator key="sep8"></ToolbarSeparator>,
    <Button key="wrap" fillMode="flat" icon="text-wrap-arrow" aria-label="Wrap text"></Button>
]);

const defaultMenuItems = ([
    <MenuItem key="file" first text="File" />,
    <MenuItem key="home" text="Home" active />,
    <MenuItem key="insert" text="Insert" />,
    <MenuItem key="format" text="Format" />,
    <MenuItem key="formulas" text="Formulas" />,
    <MenuItem key="data" text="Data" />,
    <MenuItem key="view" last text="View" />,
]);

const defaultOptions = {
    toolbarItems: defaultToolbarItems,
    menuItems: defaultMenuItems,
};

export const SpreadsheetHeader = (
    props: KendoSpreadsheetHeaderProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        toolbarItems = defaultOptions.toolbarItems,
        menuItems = defaultOptions.menuItems,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                SPREADSHEETHEADER_CLASSNAME,
                props.className
            )}>
            <SpreadsheetMenu children={menuItems} />
            <SpreadsheetToolbar children={toolbarItems} />
        </div>
    );
};

SpreadsheetHeader.states = states;
SpreadsheetHeader.options = options;
SpreadsheetHeader.className = SPREADSHEETHEADER_CLASSNAME;
SpreadsheetHeader.defaultOptions = defaultOptions;

export default SpreadsheetHeader;
