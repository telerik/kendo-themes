import { GridHeader } from "../grid-header.spec";
import { GridContainer } from "../grid-container.spec";
import { GridContent } from "../grid-content.spec";
import { GridHeaderTable } from "../grid-header-table.spec";
import { GridHeaderCell } from "../grid-header-cell.spec";
import { GridTable } from "../grid-table.spec";
import { GridPager } from "../grid-pager.spec";
import { GridToolbar } from "../grid-toolbar.spec";
import { Grid } from "../grid.spec";
import { TableThead } from '../../table/table-thead';
import { TableTbody } from '../../table/table-tbody';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';
import { Popup } from "../../popup/popup.spec";
import { ColumnMenuItem } from "../../column-menu/column-menu-item.spec";
import { ColumnMenuItemWrapper } from "../../column-menu/column-menu-item-wrapper";
import { ColumnMenuNormal } from "../../column-menu/templates/column-menu-normal";
import { Button } from "../../button/button.spec";
import { Badge } from "../../badge/badge.spec";
import {  ActionButtons } from "../../action-buttons/action-buttons.spec";

const styles = `
    .k-grid {
        width: 800px
    }

    .k-animation-container,
    .k-popup {
        position: relative;
        overflow: visible;
    }

    .k-animation-container {
        left: 85px;
        bottom: 200px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

        <span>No Sorting Applied</span>
            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button icon="filter">Filter</Button>
                                <Button icon="arrows-swap" selected>Sort</Button>
                                <Button icon="group">Group</Button>
                                <Button icon="columns">Manage Columns</Button>
                            </GridToolbar>
                        </>
                    }
                    pager={
                        <>
                            <GridPager itemsPerPage={3} refresh={false} info={false} />
                        </>
                    }
                    children={
                        <>
                            <GridHeader>
                                <div className="k-grid-header-wrap">
                                    <GridHeaderTable>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <TableThead>
                                            <TableRow>
                                                <GridHeaderCell columnTitle="Header Name 1"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header Name 2"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header Name 3"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header Name 4"></GridHeaderCell>
                                            </TableRow>
                                        </TableThead>
                                    </GridHeaderTable>
                                </div>
                            </GridHeader>
                            <GridContainer>
                                <GridContent>
                                    <GridTable>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow className="k-master-row">
                                                <TableTd>Value 1</TableTd>
                                                <TableTd>Value 1</TableTd>
                                                <TableTd>Value 1</TableTd>
                                                <TableTd>Value 1</TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" alt>
                                                <TableTd>Value 2</TableTd>
                                                <TableTd>Value 2</TableTd>
                                                <TableTd>Value 2</TableTd>
                                                <TableTd>Value 2</TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row">
                                                <TableTd>Value 3</TableTd>
                                                <TableTd>Value 3</TableTd>
                                                <TableTd>Value 3</TableTd>
                                                <TableTd>Value 3</TableTd>
                                            </TableRow>
                                        </TableTbody>
                                    </GridTable>
                                </GridContent>
                            </GridContainer>
                        </>
                    }
                ></Grid>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuNormal>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Header Name 1"></ColumnMenuItem>
                            <ColumnMenuItem text="Header Name 2"></ColumnMenuItem>
                            <ColumnMenuItem text="Header Name 3"></ColumnMenuItem>
                            <ColumnMenuItem text="Header Name 4"></ColumnMenuItem>
                        </ColumnMenuItemWrapper>
                        <ActionButtons alignment="stretched" className="k-column-menu-footer">
                            <Button icon="x" disabled>Clear sorting</Button>
                        </ActionButtons>
                    </ColumnMenuNormal>
                </Popup>
            </section>

            <span>Single Column Sorting</span>
            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button icon="filter">Filter</Button>
                                <div className="k-badge-container">
                                    <Button icon="arrows-swap" selected>Sort</Button>
                                    <Badge position="edge" rounded="full" align="top-end" cutoutBorder></Badge>
                                </div>
                                <Button icon="group">Group</Button>
                                <Button icon="columns">Manage Columns</Button>
                            </GridToolbar>
                        </>
                    }
                    pager={
                        <>
                            <GridPager itemsPerPage={3} refresh={false} info={false} />
                        </>
                    }
                    children={
                        <>
                            <GridHeader>
                                <div className="k-grid-header-wrap">
                                    <GridHeaderTable>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <TableThead>
                                            <TableRow>
                                                <GridHeaderCell columnTitle="Header Name 1"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header Name 2"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header Name 3" sortable sortIcon="sort-asc-small"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header Name 4"></GridHeaderCell>
                                            </TableRow>
                                        </TableThead>
                                    </GridHeaderTable>
                                </div>
                            </GridHeader>
                            <GridContainer>
                                <GridContent>
                                    <GridTable>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow className="k-master-row">
                                                <TableTd>Value 1</TableTd>
                                                <TableTd>Value 1</TableTd>
                                                <TableTd>Value 1</TableTd>
                                                <TableTd>Value 1</TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" alt>
                                                <TableTd>Value 2</TableTd>
                                                <TableTd>Value 2</TableTd>
                                                <TableTd>Value 2</TableTd>
                                                <TableTd>Value 2</TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row">
                                                <TableTd>Value 3</TableTd>
                                                <TableTd>Value 3</TableTd>
                                                <TableTd>Value 3</TableTd>
                                                <TableTd>Value 3</TableTd>
                                            </TableRow>
                                        </TableTbody>
                                    </GridTable>
                                </GridContent>
                            </GridContainer>
                        </>
                    }
                ></Grid>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuNormal>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Header Name 1"></ColumnMenuItem>
                            <ColumnMenuItem text="Header Name 2"></ColumnMenuItem>
                            <ColumnMenuItem text="Header Name 3" endIcon="sort-asc-small"></ColumnMenuItem>
                            <ColumnMenuItem text="Header Name 4"></ColumnMenuItem>
                        </ColumnMenuItemWrapper>
                        <ActionButtons alignment="stretched" className="k-column-menu-footer">
                            <Button icon="x">Clear sorting</Button>
                        </ActionButtons>
                    </ColumnMenuNormal>
                </Popup>
            </section>

            <span>Multi Column Sorting</span>
            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button icon="filter">Filter</Button>
                                <div className="k-badge-container">
                                    <Button icon="arrows-swap" selected>Sort</Button>
                                    <Badge position="edge" rounded="full" align="top-end" cutoutBorder></Badge>
                                </div>
                                <Button icon="group">Group</Button>
                                <Button icon="columns">Manage Columns</Button>
                            </GridToolbar>
                        </>
                    }
                    pager={
                        <>
                            <GridPager itemsPerPage={3} refresh={false} info={false} />
                        </>
                    }
                    children={
                        <>
                            <GridHeader>
                                <div className="k-grid-header-wrap">
                                    <GridHeaderTable>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <TableThead>
                                            <TableRow>
                                                <GridHeaderCell columnTitle="Header Name 1"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header Name 2"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header Name 3" sortable sortIcon="sort-asc-small" sortOrder={1}></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header Name 4" sortable sortIcon="sort-desc-small" sortOrder={2}></GridHeaderCell>
                                            </TableRow>
                                        </TableThead>
                                    </GridHeaderTable>
                                </div>
                            </GridHeader>
                            <GridContainer>
                                <GridContent>
                                    <GridTable>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow className="k-master-row">
                                                <TableTd>Value 1</TableTd>
                                                <TableTd>Value 1</TableTd>
                                                <TableTd>Value 1</TableTd>
                                                <TableTd>Value 1</TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" alt>
                                                <TableTd>Value 2</TableTd>
                                                <TableTd>Value 2</TableTd>
                                                <TableTd>Value 2</TableTd>
                                                <TableTd>Value 2</TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row">
                                                <TableTd>Value 3</TableTd>
                                                <TableTd>Value 3</TableTd>
                                                <TableTd>Value 3</TableTd>
                                                <TableTd>Value 3</TableTd>
                                            </TableRow>
                                        </TableTbody>
                                    </GridTable>
                                </GridContent>
                            </GridContainer>
                        </>
                    }
                ></Grid>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuNormal>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Header Name 1"></ColumnMenuItem>
                            <ColumnMenuItem text="Header Name 2"></ColumnMenuItem>
                            <ColumnMenuItem text="Header Name 3" endIcon="sort-asc-small" sortIndex={1}></ColumnMenuItem>
                            <ColumnMenuItem text="Header Name 4" endIcon="sort-desc-small" sortIndex={2}></ColumnMenuItem>
                        </ColumnMenuItemWrapper>
                        <ActionButtons alignment="stretched" className="k-column-menu-footer">
                            <Button icon="x">Clear sorting</Button>
                        </ActionButtons>
                    </ColumnMenuNormal>
                </Popup>
            </section>
        </div>
    </>
);
