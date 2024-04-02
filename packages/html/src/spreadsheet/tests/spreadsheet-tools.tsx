import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { MenuButton } from "../../menu-button/menu-button.spec";
import { ToolbarSeparator } from "../../toolbar";
import { Spreadsheet, SpreadsheetHeader, SpreadsheetNormal } from "..";
import { MenuItem } from "../../menu";

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
                        <Button icon="file-add" fillMode="flat"></Button>,
                        <Button icon="folder-add" fillMode="flat"></Button>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="download" fillMode="flat"></Button>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="print" fillMode="flat"></Button>
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
                        <Button icon="comment" fillMode="flat"></Button>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="link" fillMode="flat"></Button>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="table" fillMode="flat"></Button>,
                        <Button icon="chart-column-stacked" fillMode="flat"></Button>,
                        <Button icon="image" fillMode="flat"></Button>,
                        <Button icon="shapes" fillMode="flat"></Button>
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
                        <Button icon="custom-format" fillMode="flat"></Button>,
                        <ButtonGroup fillMode="flat">
                            <Button className="k-group-start" icon="decimal-decrease" fillMode="flat"></Button>
                            <Button className="k-group-end" icon="decimal-increase" fillMode="flat"></Button>
                        </ButtonGroup>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="apply-format" fillMode="flat"></Button>
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
                        <Button icon="search" fillMode="flat"></Button>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="exclamation-circle" fillMode="flat"></Button>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="filter" fillMode="flat"></Button>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <MenuButton icon="sort-asc" fillMode="flat" showArrow></MenuButton>
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
                        <MenuButton icon="pane-freeze" fillMode="flat" showArrow></MenuButton>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <MenuButton icon="cells-merge" fillMode="flat" showArrow></MenuButton>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="borders-none" fillMode="flat"></Button>,
                        <ToolbarSeparator></ToolbarSeparator>,
                        <Button icon="crosstab" fillMode="flat"></Button>
                    ]}
                />
            </Spreadsheet>

        </div>
    </>
);
