import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { GridWithFilterRow, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridToolbar } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <h3>Base</h3>
            <GridWithFilterRow dir="ltr" pager={false}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: '50px' }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell rowspan={1} colspan={1}>
                                        <Checkbox />
                                    </GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="ID"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Command"></GridHeaderCell>
                                </TableRow>
                                <TableRow className="k-filter-row">
                                    <TableTd></TableTd>
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
                                                <Textbox />
                                                <div className="k-filtercell-operator">
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    {' '}
                                                    <Button icon="filter-clear" disabled></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TableTd>
                                    <TableTd></TableTd>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div className="k-grid-table-wrap">
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd colspan={1}>1</TableTd>
                                        <TableTd colspan={1}>Product1</TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" alt>
                                        <TableTd colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd colspan={1}>2</TableTd>
                                        <TableTd colspan={1}>Product2</TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                        <div className="k-height-container">
                            <div></div>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithFilterRow>

            <h3>With Toolbar</h3>
            <GridWithFilterRow dir="ltr" pager={false } toolbar={(
                <GridToolbar>
                    <Button icon="plus">Add</Button>
                </GridToolbar>
            )}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: '50px' }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell rowspan={1} colspan={1}>
                                        <Checkbox />
                                    </GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="ID"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Command"></GridHeaderCell>
                                </TableRow>
                                <TableRow className="k-filter-row">
                                    <TableTd></TableTd>
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
                                                <Textbox />
                                                <div className="k-filtercell-operator">
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    {' '}
                                                    <Button icon="filter-clear" disabled></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TableTd>
                                    <TableTd></TableTd>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div className="k-grid-table-wrap">
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd colspan={1}>1</TableTd>
                                        <TableTd colspan={1}>Product1</TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" alt>
                                        <TableTd colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd colspan={1}>2</TableTd>
                                        <TableTd colspan={1}>Product2</TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                        <div className="k-height-container">
                            <div></div>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithFilterRow>
        </div>
    </>
);
