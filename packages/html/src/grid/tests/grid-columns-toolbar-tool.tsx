import { Grid, GridToolbar, GridHeader, GridHeaderCell, GridHeaderTable, GridContainer, GridContent, GridTable, GridPager } from "../";
import { TableThead, TableTbody, TableRow, TableTd } from "../../table";
import { Popup } from "../../popup";
import { Button } from "../../button";
import { ActionButtons } from "../../action-buttons";
import { ColumnList, ColumnListItem } from "../../column-menu";

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
        left: 240px;
        bottom: 200px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span>Column Visibility Single Column</span>
            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button icon="filter">Filter</Button>
                                <Button icon="arrows-swap">Sort</Button>
                                <Button icon="group">Group</Button>
                                <Button icon="columns" selected>Columns</Button>
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
                    <ColumnList>
                        <ColumnListItem checked disabled label="Header Name 1" />
                        <ColumnListItem label="Header Name 2" />
                        <ColumnListItem label="Header Name 3" />
                        <ColumnListItem label="Header Name 4" />
                    </ColumnList>
                    <ActionButtons alignment="stretched" className="k-column-menu-footer">
                        <Button icon="check" themeColor="primary">Apply</Button>
                        <Button icon="arrow-rotate-ccw">Reset</Button>
                    </ActionButtons>
                </Popup>
            </section>

            <span>Column Visibility Multiple Columns</span>
            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button icon="filter">Filter</Button>
                                <Button icon="arrows-swap">Sort</Button>
                                <Button icon="group">Group</Button>
                                <Button icon="columns" selected>Columns</Button>
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
                <ColumnList>
                        <ColumnListItem checked label="Header Name 1" />
                        <ColumnListItem checked label="Header Name 2" />
                        <ColumnListItem label="Header Name 3" />
                        <ColumnListItem label="Header Name 4" />
                    </ColumnList>
                    <ActionButtons alignment="stretched" className="k-column-menu-footer">
                        <Button icon="check" themeColor="primary">Apply</Button>
                        <Button icon="arrow-rotate-ccw">Reset</Button>
                    </ActionButtons>
                </Popup>
            </section>
        </div>
    </>
);
