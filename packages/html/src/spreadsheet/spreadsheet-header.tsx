import { classNames } from '../misc';
import { Button, ButtonGroup, ColorPicker, DropdownList, MenuButton, MenuItem, SpreadsheetMenu, SpreadsheetToolbar, ToolbarItem, ToolbarSeparator } from '..';

export const SPREADSHEETHEADER_CLASSNAME = `k-spreadsheet-header`;

const states = [];

const options = {};

export type KendoSpreadsheetHeaderProps = {
    toolbarItems?: React.JSX.Element[] | React.JSX.Element;
    menuItems?: React.JSX.Element[] | React.JSX.Element;
};

const defaultToolbarItems = ([
    <Button icon="arrow-rotate-ccw" fillMode="flat"></Button>,
    <Button icon="arrow-rotate-cw" fillMode="flat"></Button>,
    <ToolbarSeparator></ToolbarSeparator>,
    <Button icon="cut" fillMode="flat"></Button>,
    <Button icon="copy" fillMode="flat"></Button>,
    <Button icon="clipboard" fillMode="flat"></Button>,
    <ToolbarSeparator></ToolbarSeparator>,
    <DropdownList value="Font Name" fillMode="flat" />,
    <DropdownList value="Font Size" fillMode="flat" />,
    <ToolbarSeparator></ToolbarSeparator>,
    <ButtonGroup fillMode="flat">
        <Button className="k-group-start" icon="font-grow" fillMode="flat"></Button>
        <Button className="k-group-end" icon="font-shrink" fillMode="flat"></Button>
    </ButtonGroup>,
    <ToolbarSeparator></ToolbarSeparator>,
    <ButtonGroup fillMode="flat">
        <Button className="k-group-start" icon="bold" fillMode="flat"></Button>
        <Button icon="italic" fillMode="flat"></Button>
        <Button icon="underline" fillMode="flat"></Button>
        <Button className="k-group-end" icon="strikethrough" fillMode="flat"></Button>
    </ButtonGroup>,
    <ToolbarItem>
        <ColorPicker value="red" valueIconName="foreground-color" fillMode="flat" />
    </ToolbarItem>,
    <ToolbarSeparator></ToolbarSeparator>,
    <ToolbarItem>
        <ColorPicker value="fuchsia" valueIconName="droplet" fillMode="flat" />
    </ToolbarItem>,
    <ToolbarSeparator></ToolbarSeparator>,
    <MenuButton fillMode="flat" icon="borders-all" showArrow></MenuButton>,
    <ToolbarSeparator></ToolbarSeparator>,
    <MenuButton fillMode="flat" icon="align-left" showArrow></MenuButton>,
    <MenuButton fillMode="flat" icon="align-middle" showArrow></MenuButton>,
    <ToolbarSeparator></ToolbarSeparator>,
    <Button fillMode="flat" icon="text-wrap"></Button>
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
