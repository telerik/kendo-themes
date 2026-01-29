import { classNames } from '../misc';
import { Button, ButtonGroup, ColorPicker, DropdownList, MenuButton, MenuItem, SpreadsheetMenu, SpreadsheetToolbar, ToolbarItem, ToolbarSeparator } from '..';

export const SPREADSHEETHEADER_CLASSNAME = `k-spreadsheet-header`;

const states = [];

const options = {};

export type KendoSpreadsheetHeaderProps = {
    toolbarItems?: React.JSX.Element[] | React.JSX.Element;
    menuItems?: React.JSX.Element[] | React.JSX.Element;
    quickAccessItems?: React.JSX.Element[] | React.JSX.Element;
};

const defaultToolbarItems = ([
    <Button icon="arrow-rotate-ccw" fillMode="flat" aria-label="Undo"></Button>,
    <Button icon="arrow-rotate-cw" fillMode="flat" aria-label="Redo"></Button>,
    <ToolbarSeparator></ToolbarSeparator>,
    <Button icon="cut" fillMode="flat" aria-label="Cut"></Button>,
    <Button icon="copy" fillMode="flat" aria-label="Copy"></Button>,
    <Button icon="clipboard" fillMode="flat" aria-label="Paste"></Button>,
    <ToolbarSeparator></ToolbarSeparator>,
    <DropdownList value="Font Name" fillMode="flat" />,
    <DropdownList value="Font Size" fillMode="flat" />,
    <ToolbarSeparator></ToolbarSeparator>,
    <ButtonGroup fillMode="flat">
        <Button className="k-group-start" icon="font-grow" fillMode="flat" aria-label="Increase font size"></Button>
        <Button className="k-group-end" icon="font-shrink" fillMode="flat" aria-label="Decrease font size"></Button>
    </ButtonGroup>,
    <ToolbarSeparator></ToolbarSeparator>,
    <ButtonGroup fillMode="flat">
        <Button className="k-group-start" icon="bold" fillMode="flat" aria-label="Bold"></Button>
        <Button icon="italic" fillMode="flat" aria-label="Italic"></Button>
        <Button icon="underline" fillMode="flat" aria-label="Underline"></Button>
        <Button className="k-group-end" icon="strikethrough" fillMode="flat" aria-label="Strikethrough"></Button>
    </ButtonGroup>,
    <ToolbarItem>
        <ColorPicker value="red" valueIconName="foreground-color" fillMode="flat" />
    </ToolbarItem>,
    <ToolbarSeparator></ToolbarSeparator>,
    <ToolbarItem>
        <ColorPicker value="fuchsia" valueIconName="droplet" fillMode="flat" />
    </ToolbarItem>,
    <ToolbarSeparator></ToolbarSeparator>,
    <MenuButton fillMode="flat" icon="borders-all" showArrow aria-label="Borders"></MenuButton>,
    <ToolbarSeparator></ToolbarSeparator>,
    <MenuButton fillMode="flat" icon="align-left" showArrow aria-label="Align left"></MenuButton>,
    <MenuButton fillMode="flat" icon="align-middle" showArrow aria-label="Align middle"></MenuButton>,
    <ToolbarSeparator></ToolbarSeparator>,
    <Button fillMode="flat" icon="text-wrap" aria-label="Wrap text"></Button>
]);

const defaultMenuItems = ([
    <MenuItem first text="File" />,
    <MenuItem text="Home" active />,
    <MenuItem text="Insert" />,
    <MenuItem text="Format" />,
    <MenuItem text="Formulas" />,
    <MenuItem text="Data" />,
    <MenuItem last text="View" />,
]);

const defaultQuickAccessItems = ([
    <Button icon="arrow-rotate-ccw" fillMode="flat" role="button" aria-label="Undo" />,
    <Button icon="arrow-rotate-cw" fillMode="flat" role="button" aria-label="Redo" />,
]);

const defaultOptions = {
    toolbarItems: defaultToolbarItems,
    menuItems: defaultMenuItems,
    quickAccessItems: defaultQuickAccessItems,
};

export const SpreadsheetHeader = (
    props: KendoSpreadsheetHeaderProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        toolbarItems = defaultOptions.toolbarItems,
        menuItems = defaultOptions.menuItems,
        quickAccessItems = defaultOptions.quickAccessItems,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                SPREADSHEETHEADER_CLASSNAME,
                props.className
            )}>
            <div className="k-spreadsheet-quick-access-toolbar">
                {quickAccessItems}
            </div>
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
