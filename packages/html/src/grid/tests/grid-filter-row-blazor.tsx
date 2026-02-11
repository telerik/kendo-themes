import { Button } from '../../button/button.spec';
import { Checkbox } from '../../checkbox/checkbox.spec';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
import { NumericTextbox } from '../../numerictextbox/numerictextbox.spec';
import { Textbox } from '../../textbox/textbox.spec';
import { GridWithFilterRow } from '../templates/grid-with-filter-row';
import { GridHeader } from '../grid-header.spec';
import { GridHeaderCell } from '../grid-header-cell.spec';
import { GridHeaderTable } from '../grid-header-table.spec';
import { GridContainer } from '../grid-container.spec';
import { GridContent } from '../grid-content.spec';
import { GridTable } from '../grid-table.spec';
import { GridToolbar } from '../grid-toolbar.spec';
import { TableThead } from '../../table/table-thead';
import { TableTbody } from '../../table/table-tbody';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <h3>Base</h3>
            <GridWithFilterRow className="telerik-blazor" pager={false}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell colspan={1}>
                                        <Checkbox />
                                    </GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Id"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Command"></GridHeaderCell>
                                </TableRow>
                                <TableRow className="k-filter-row">
                                    <TableTd>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper"></div>
                                        </div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper">
                                                <NumericTextbox />
                                                <div className="k-filtercell-operator">
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    {' '}
                                                    <Button icon="filter-clear" disabled></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper">
                                                <Textbox showClearButton={false} value="p" />
                                                <div className="k-filtercell-operator">
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    {' '}
                                                    <Button icon="filter-clear"></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper"></div>
                                        </div>
                                    </TableTd>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div className="k-pos-relative">
                            <div className="k-virtual-position">
                                <GridTable style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-master-row">
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </TableTd>
                                            <TableTd colspan={0}>
                                                1
                                            </TableTd>
                                            <TableTd colspan={0}>
                                                Product1
                                            </TableTd>
                                            <TableTd className="k-command-cell" colspan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt>
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </TableTd>
                                            <TableTd colspan={0}>
                                                2
                                            </TableTd>
                                            <TableTd colspan={0}>
                                                Product2
                                            </TableTd>
                                            <TableTd className="k-command-cell" colspan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithFilterRow>

            <h3>With Toolbar</h3>
            <GridWithFilterRow className="telerik-blazor" pager={false} toolbar={(
                <GridToolbar>
                    <Button icon="plus">Add</Button>
                </GridToolbar>
            )}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell colspan={1}>
                                        <Checkbox />
                                    </GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Id"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Command"></GridHeaderCell>
                                </TableRow>
                                <TableRow className="k-filter-row">
                                    <TableTd>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper"></div>
                                        </div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper">
                                                <NumericTextbox />
                                                <div className="k-filtercell-operator">
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    {' '}
                                                    <Button icon="filter-clear" disabled></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper">
                                                <Textbox showClearButton={false} value="p" />
                                                <div className="k-filtercell-operator">
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    {' '}
                                                    <Button icon="filter-clear"></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper"></div>
                                        </div>
                                    </TableTd>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div className="k-pos-relative">
                            <div className="k-virtual-position">
                                <GridTable style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-master-row">
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </TableTd>
                                            <TableTd colspan={0}>
                                                1
                                            </TableTd>
                                            <TableTd colspan={0}>
                                                Product1
                                            </TableTd>
                                            <TableTd className="k-command-cell" colspan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt>
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </TableTd>
                                            <TableTd colspan={0}>
                                                2
                                            </TableTd>
                                            <TableTd colspan={0}>
                                                Product2
                                            </TableTd>
                                            <TableTd className="k-command-cell" colspan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithFilterRow>
        </div>
    </>
);
