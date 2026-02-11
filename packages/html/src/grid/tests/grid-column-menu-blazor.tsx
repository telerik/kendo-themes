import { Button } from '../../button/button.spec';
import { Checkbox } from '../../checkbox/checkbox.spec';
import { GridWithColumnMenu } from '../templates/grid-with-column-menu';
import { GridHeader } from '../grid-header.spec';
import { GridHeaderTable } from '../grid-header-table.spec';
import { GridHeaderCell } from '../grid-header-cell.spec';
import { GridContainer } from '../grid-container.spec';
import { GridContent } from '../grid-content.spec';
import { GridTable } from '../grid-table.spec';
import { TableThead } from '../../table/table-thead';
import { TableTbody } from '../../table/table-tbody';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <GridWithColumnMenu className="telerik-blazor" pager={false}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell colspan={1}>
                                        <Checkbox/>
                                    </GridHeaderCell>
                                    <GridHeaderCell colspan={1} menu="column" columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} menu="column" columnTitle="Command"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div style={{ position: "relative" }}>
                            <div className="k-virtual-position">
                                <GridTable role="grid" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
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
                                            <TableTd colspan={0}>Product1</TableTd>
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
                                            <TableTd colspan={0}>Product2</TableTd>
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
            </GridWithColumnMenu>

            <h3>Sortable</h3>
            <GridWithColumnMenu className="telerik-blazor" pager={false}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell colspan={1}>
                                        <Checkbox/>
                                    </GridHeaderCell>
                                    <GridHeaderCell colspan={1} sortable menu="column" columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} menu="column" columnTitle="Command"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div style={{ position: "relative" }}>
                            <div className="k-virtual-position">
                                <GridTable role="grid" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col className="k-sorted" />
                                        <col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-master-row">
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </TableTd>
                                            <TableTd colspan={0}>Product1</TableTd>
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
                                            <TableTd colspan={0}>Product2</TableTd>
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
            </GridWithColumnMenu>

            <h3>Sortable & Resizable</h3>
            <GridWithColumnMenu className="telerik-blazor" pager={false}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell resizable colspan={1}>
                                        <Checkbox/>
                                    </GridHeaderCell>
                                    <GridHeaderCell colspan={1} resizable sortable menu="column" columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} resizable menu="column" columnTitle="Command"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div style={{ position: "relative" }}>
                            <div className="k-virtual-position">
                                <GridTable role="grid" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col className="k-sorted" />
                                        <col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-master-row">
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </TableTd>
                                            <TableTd colspan={0}>Product1</TableTd>
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
                                            <TableTd colspan={0}>Product2</TableTd>
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
            </GridWithColumnMenu>

        </div>
    </>
);
