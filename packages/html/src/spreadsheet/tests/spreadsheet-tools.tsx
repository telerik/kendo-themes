import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { MenuButton } from "../../menu-button/menu-button.spec";
import { ToolbarItem, ToolbarSeparator } from "../../toolbar";
import { Spreadsheet, SpreadsheetHeader, SpreadsheetNormal } from "..";
import { MenuItem } from "../../menu";
import { ColorPicker } from "../../colorpicker";
import { DropdownList } from "../../dropdownlist";

const style = `
    #test-area {
        max-width: 1240px;
    }

    .k-spreadsheet-cell,
    .k-spreadsheet-formula-input {
        white-space: normal !important;
    }
`;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>File</span>
            <SpreadsheetNormal style={{ height: 'auto' }}>
                <SpreadsheetHeader
                    menuItems={[
                        <MenuItem first text="File" active />,
                        <MenuItem text="Home" />,
                        <MenuItem text="Insert" />,
                        <MenuItem text="Format" />,
                        <MenuItem text="Formulas" />,
                        <MenuItem text="Data" />,
                        <MenuItem last text="View" />,
                    ]}
                    toolbarItems={[
                        <Button icon="file-add" fillMode="flat" aria-label="New file"></Button>,
                        <Button icon="folder-add" fillMode="flat" aria-label="Open file"></Button>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="download" fillMode="flat" aria-label="Download"></Button>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="print" fillMode="flat" aria-label="Print"></Button>
                    ]}
                />
            </SpreadsheetNormal>

            <span>Home</span>
            <Spreadsheet style={{ width: '100%', height: 'auto' }}>
                <SpreadsheetHeader
                    menuItems={[
                        <MenuItem first text="File" />,
                        <MenuItem text="Home" active />,
                        <MenuItem text="Insert" />,
                        <MenuItem text="Format" />,
                        <MenuItem text="Formulas" />,
                        <MenuItem text="Data" />,
                        <MenuItem last text="View" />,
                    ]}
                    toolbarItems={[
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
                        <Button fillMode="flat" icon="text-wrap" aria-label="Wrap text"></Button>]}
                />
            </Spreadsheet>

            <span>Insert</span>
            <Spreadsheet style={{ width: '100%', height: 'auto' }}>
                <SpreadsheetHeader
                    menuItems={[
                        <MenuItem first text="File" />,
                        <MenuItem text="Home" />,
                        <MenuItem text="Insert" active />,
                        <MenuItem text="Format" />,
                        <MenuItem text="Formulas" />,
                        <MenuItem text="Data" />,
                        <MenuItem last text="View" />,
                    ]}
                    toolbarItems={[
                        <Button icon="comment" fillMode="flat" aria-label="Insert comment"></Button>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="link" fillMode="flat" aria-label="Insert link"></Button>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="table" fillMode="flat" aria-label="Insert table"></Button>,
                        <Button icon="chart-column-stacked" fillMode="flat" aria-label="Insert chart"></Button>,
                        <Button icon="image" fillMode="flat" aria-label="Insert image"></Button>,
                        <Button icon="shapes" fillMode="flat" aria-label="Insert shapes"></Button>
                    ]}
                />
            </Spreadsheet>

            <span>Format</span>
            <Spreadsheet style={{ width: '100%', height: 'auto' }}>
                <SpreadsheetHeader
                    menuItems={[
                        <MenuItem first text="File" />,
                        <MenuItem text="Home" />,
                        <MenuItem text="Insert" />,
                        <MenuItem text="Format" active />,
                        <MenuItem text="Formulas" />,
                        <MenuItem text="Data" />,
                        <MenuItem last text="View" />,
                    ]}
                    toolbarItems={[
                        <Button icon="custom-format" fillMode="flat" aria-label="Custom format"></Button>,
                        <ButtonGroup fillMode="flat">
                            <Button className="k-group-start" icon="decimal-decrease" fillMode="flat" aria-label="Decrease decimals"></Button>
                            <Button className="k-group-end" icon="decimal-increase" fillMode="flat" aria-label="Increase decimals"></Button>
                        </ButtonGroup>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="apply-format" fillMode="flat" aria-label="Apply format"></Button>
                    ]}
                />
            </Spreadsheet>

            <span>Formulas</span>
            <Spreadsheet style={{ width: '100%', height: 'auto' }}>
                <SpreadsheetHeader
                    menuItems={[
                        <MenuItem first text="File" />,
                        <MenuItem text="Home" />,
                        <MenuItem text="Insert" />,
                        <MenuItem text="Format" />,
                        <MenuItem text="Formulas" active />,
                        <MenuItem text="Data" />,
                        <MenuItem last text="View" />,
                    ]}
                    toolbarItems={
                        <Button icon="formula-fx" fillMode="flat">Insert Formula</Button>
                    }
                />
            </Spreadsheet>

            <span>Data</span>
            <Spreadsheet style={{ width: '100%', height: 'auto' }}>
                <SpreadsheetHeader
                    menuItems={[
                        <MenuItem first text="File" />,
                        <MenuItem text="Home" />,
                        <MenuItem text="Insert" />,
                        <MenuItem text="Format" />,
                        <MenuItem text="Formulas" />,
                        <MenuItem text="Data" active />,
                        <MenuItem last text="View" />,
                    ]}
                    toolbarItems={[
                        <Button icon="search" fillMode="flat" aria-label="Search"></Button>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="exclamation-circle" fillMode="flat" aria-label="Validation"></Button>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="filter" fillMode="flat" aria-label="Filter"></Button>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <MenuButton icon="sort-asc" fillMode="flat" showArrow aria-label="Sort"></MenuButton>
                    ]}
                />
            </Spreadsheet>

            <span>View</span>
            <Spreadsheet style={{ width: '100%', height: 'auto' }}>
                <SpreadsheetHeader
                    menuItems={[
                        <MenuItem first text="File" />,
                        <MenuItem text="Home" />,
                        <MenuItem text="Insert" />,
                        <MenuItem text="Format" />,
                        <MenuItem text="Formulas" />,
                        <MenuItem text="Data" />,
                        <MenuItem last text="View" active />,
                    ]}
                    toolbarItems={[
                        <MenuButton icon="pane-freeze" fillMode="flat" showArrow aria-label="Freeze panes"></MenuButton>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <MenuButton icon="cells-merge" fillMode="flat" showArrow aria-label="Merge cells"></MenuButton>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="borders-none" fillMode="flat" aria-label="Borders none"></Button>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="crosstab" fillMode="flat" aria-label="Show gridlines"></Button>
                    ]}
                />
            </Spreadsheet>

        </div>
    </>
);
