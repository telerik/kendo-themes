import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { ColorPicker } from "../../colorpicker";
import { DropdownList } from "../../dropdownlist";
import { MenuButton } from "../../menu-button/menu-button.spec";
import { SplitButton } from "../../split-button/split-button.spec";
import { Toolbar, ToolbarItem, ToolbarSeparator } from "../../toolbar";

const style = `
    #test-area {
        max-width: 1240px;
    }

    .k-spreadsheet-cell,
    .k-spreadsheet-formula-input {
        white-space: normal !important;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>File</span>
            <div style={{ width: '100%', height: 'auto' }} className="k-spreadsheet">
                <div className="k-spreadsheet-header">
                    <ul id="menu" className="k-spreadsheet-menu k-widget k-reset k-header k-menu k-menu-horizontal">
                        <li className="k-item k-menu-item k-first k-active">
                            <span className="k-link k-menu-link">File</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Home</span>
                        </li>
                        <li className="k-item k-menu-item ">
                            <span className="k-link k-menu-link">Insert</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Format</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Formulas</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Data</span>
                        </li>
                        <li className="k-item k-menu-item k-last">
                            <span className="k-link k-menu-link">View</span>
                        </li>
                    </ul>
                    <Toolbar className="k-spreadsheet-toolbar k-toolbar-flat" resizable>
                        <Button icon="file-add" fillMode="flat"></Button>
                        <Button icon="folder-add" fillMode="flat"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="download" fillMode="flat"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="print" fillMode="flat"></Button>
                    </Toolbar>
                </div>
            </div>

            <span>Home</span>
            <div style={{ width: '100%', height: 'auto' }} className="k-spreadsheet">
                <div className="k-spreadsheet-header">
                    <ul id="menu" className="k-spreadsheet-menu k-widget k-reset k-header k-menu k-menu-horizontal">
                        <li className="k-item k-menu-item k-first">
                            <span className="k-link k-menu-link">File</span>
                        </li>
                        <li className="k-item k-menu-item k-active">
                            <span className="k-link k-menu-link">Home</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Insert</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Format</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Formulas</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Data</span>
                        </li>
                        <li className="k-item k-menu-item k-last">
                            <span className="k-link k-menu-link">View</span>
                        </li>
                    </ul>
                    <Toolbar className="k-spreadsheet-toolbar k-toolbar-flat" resizable>
                        <Button icon="arrow-rotate-ccw" fillMode="flat"></Button>
                        <Button icon="arrow-rotate-cw" fillMode="flat"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="cut" fillMode="flat"></Button>
                        <Button icon="copy" fillMode="flat"></Button>
                        <Button icon="clipboard" fillMode="flat"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <DropdownList value="Font Name" fillMode="flat" />
                        <DropdownList value="Font Size" fillMode="flat" />
                        <ToolbarSeparator></ToolbarSeparator>
                        <ButtonGroup fillMode="flat">
                            <Button icon="font-grow" fillMode="flat"></Button>
                            <Button icon="font-shrink" fillMode="flat"></Button>
                        </ButtonGroup>
                        <ToolbarSeparator></ToolbarSeparator>
                        <ButtonGroup fillMode="flat">
                            <Button icon="bold" fillMode="flat"></Button>
                            <Button icon="italic" fillMode="flat"></Button>
                            <Button icon="underline" fillMode="flat"></Button>
                            <Button icon="strikethrough" fillMode="flat"></Button>
                        </ButtonGroup>
                        <ToolbarItem>
                            <ColorPicker value="red" valueIconName="foreground-color" fillMode="flat" />
                        </ToolbarItem>
                        <ToolbarSeparator></ToolbarSeparator>
                        <ToolbarItem>
                            <ColorPicker value="fuchsia" valueIconName="droplet" fillMode="flat" />
                        </ToolbarItem>
                        <ToolbarSeparator></ToolbarSeparator>
                        <MenuButton fillMode="flat" icon="borders-all" showArrow></MenuButton>
                        <ToolbarSeparator></ToolbarSeparator>
                        <MenuButton fillMode="flat" icon="align-left" showArrow></MenuButton>
                        <MenuButton fillMode="flat" icon="align-middle" showArrow></MenuButton>
                        <ToolbarSeparator></ToolbarSeparator>
                        <SplitButton fillMode="flat" icon="text-wrap-arrow"></SplitButton>
                    </Toolbar>
                </div>
            </div>

            <span>Insert</span>
            <div style={{ width: '100%', height: 'auto' }} className="k-spreadsheet">
                <div className="k-spreadsheet-header">
                    <ul id="menu" className="k-spreadsheet-menu k-widget k-reset k-header k-menu k-menu-horizontal">
                        <li className="k-item k-menu-item k-first">
                            <span className="k-link k-menu-link">File</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Home</span>
                        </li>
                        <li className="k-item k-menu-item k-active">
                            <span className="k-link k-menu-link">Insert</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Format</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Formulas</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Data</span>
                        </li>
                        <li className="k-item k-menu-item k-last">
                            <span className="k-link k-menu-link">View</span>
                        </li>
                    </ul>
                    <Toolbar className="k-spreadsheet-toolbar k-toolbar-flat" resizable>
                        <Button icon="comment" fillMode="flat"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="link" fillMode="flat"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="table" fillMode="flat"></Button>
                        <Button icon="chart-column-stacked" fillMode="flat"></Button>
                        <Button icon="image" fillMode="flat"></Button>
                        <Button icon="shapes" fillMode="flat"></Button>
                    </Toolbar>
                </div>
            </div>

            <span>Format</span>
            <div style={{ width: '100%', height: 'auto' }} className="k-spreadsheet">
                <div className="k-spreadsheet-header">
                    <ul id="menu" className="k-spreadsheet-menu k-widget k-reset k-header k-menu k-menu-horizontal">
                        <li className="k-item k-menu-item k-first">
                            <span className="k-link k-menu-link">File</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Home</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Insert</span>
                        </li>
                        <li className="k-item k-menu-item k-active">
                            <span className="k-link k-menu-link">Format</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Formulas</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Data</span>
                        </li>
                        <li className="k-item k-menu-item k-last">
                            <span className="k-link k-menu-link">View</span>
                        </li>
                    </ul>
                    <Toolbar className="k-spreadsheet-toolbar k-toolbar-flat" resizable>
                        <Button icon="custom-format" fillMode="flat"></Button>
                        <ButtonGroup fillMode="flat">
                            <Button icon="decimal-decrease" fillMode="flat"></Button>
                            <Button icon="decimal-increase" fillMode="flat"></Button>
                        </ButtonGroup>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="apply-format" fillMode="flat"></Button>
                    </Toolbar>
                </div>
            </div>

            <span>Formulas</span>
            <div style={{ width: '100%', height: 'auto' }} className="k-spreadsheet">
                <div className="k-spreadsheet-header">
                    <ul id="menu" className="k-spreadsheet-menu k-widget k-reset k-header k-menu k-menu-horizontal">
                        <li className="k-item k-menu-item k-first">
                            <span className="k-link k-menu-link">File</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Home</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Insert</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Format</span>
                        </li>
                        <li className="k-item k-menu-item k-active">
                            <span className="k-link k-menu-link">Formulas</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Data</span>
                        </li>
                        <li className="k-item k-menu-item k-last">
                            <span className="k-link k-menu-link">View</span>
                        </li>
                    </ul>
                    <Toolbar className="k-spreadsheet-toolbar k-toolbar-flat" resizable>
                        <Button icon="formula-fx" fillMode="flat">Insert Formula</Button>
                    </Toolbar>
                </div>
            </div>

            <span>Data</span>
            <div style={{ width: '100%', height: 'auto' }} className="k-spreadsheet">
                <div className="k-spreadsheet-header">
                    <ul id="menu" className="k-spreadsheet-menu k-widget k-reset k-header k-menu k-menu-horizontal">
                        <li className="k-item k-menu-item k-first">
                            <span className="k-link k-menu-link">File</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Home</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Insert</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Format</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Formulas</span>
                        </li>
                        <li className="k-item k-menu-item k-active">
                            <span className="k-link k-menu-link">Data</span>
                        </li>
                        <li className="k-item k-menu-item k-last">
                            <span className="k-link k-menu-link">View</span>
                        </li>
                    </ul>
                    <Toolbar className="k-spreadsheet-toolbar k-toolbar-flat" resizable>
                        <Button icon="search" fillMode="flat"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="exclamation-circle" fillMode="flat"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="filter" fillMode="flat"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <MenuButton icon="sort-asc" fillMode="flat" showArrow></MenuButton>
                    </Toolbar>
                </div>
            </div>

            <span>View</span>
            <div style={{ width: '100%', height: 'auto' }} className="k-spreadsheet">
                <div className="k-spreadsheet-header">
                    <ul id="menu" className="k-spreadsheet-menu k-widget k-reset k-header k-menu k-menu-horizontal">
                        <li className="k-item k-menu-item k-first">
                            <span className="k-link k-menu-link">File</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Home</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Insert</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Format</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Formulas</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Data</span>
                        </li>
                        <li className="k-item k-menu-item k-last k-active">
                            <span className="k-link k-menu-link">View</span>
                        </li>
                    </ul>
                    <Toolbar className="k-spreadsheet-toolbar k-toolbar-flat" resizable>
                        <MenuButton icon="pane-freeze" fillMode="flat" showArrow></MenuButton>
                        <ToolbarSeparator></ToolbarSeparator>
                        <MenuButton icon="cells-merge" fillMode="flat" showArrow></MenuButton>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="borders-none" fillMode="flat"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="crosstab" fillMode="flat"></Button>
                    </Toolbar>
                </div>
            </div>

        </div>
    </>
);
