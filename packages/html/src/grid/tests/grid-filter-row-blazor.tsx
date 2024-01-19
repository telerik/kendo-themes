import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridToolbar } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTh, TableTd } from '../../table';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <h3>Base</h3>
            <Grid className="telerik-blazor">
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
                                    <TableTh>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper"></div>
                                        </div>
                                    </TableTh>
                                    <TableTh>
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
                                    </TableTh>
                                    <TableTh>
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
                                    </TableTh>
                                    <TableTh>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper"></div>
                                        </div>
                                    </TableTh>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className="k-virtual-content">
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
                                        <TableRow className="k-master-row k-alt" alt>
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
                        <div className="k-height-container">
                            <div></div>
                        </div>
                    </GridContent>
                </GridContainer>
            </Grid>

            <h3>With Toolbar</h3>
            <Grid className="telerik-blazor" toolbar={(
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
                                    <TableTh>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper"></div>
                                        </div>
                                    </TableTh>
                                    <TableTh>
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
                                    </TableTh>
                                    <TableTh>
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
                                    </TableTh>
                                    <TableTh>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper"></div>
                                        </div>
                                    </TableTh>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className="k-virtual-content">
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
                                        <TableRow className="k-master-row k-alt" alt>
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
                        <div className="k-height-container">
                            <div></div>
                        </div>
                    </GridContent>
                </GridContainer>
            </Grid>
        </div>
    </>
);
