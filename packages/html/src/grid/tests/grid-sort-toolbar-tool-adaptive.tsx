import { Grid, GridToolbar, GridHeader, GridHeaderCell, GridHeaderTable, GridContainer, GridContent, GridTable, GridPager } from "../";
import { TableThead, TableTbody, TableRow, TableTd } from "../../table";
import { ActionSheetFooter, ActionSheetHeader, ActionSheetNormal } from "../../action-sheet";
import { ColumnMenuItem, ColumnMenuItemWrapper, ColumnMenuNormal } from "../../column-menu";
import { Button } from "../../button";
import { Badge } from "../../badge";

const styles = `
    #test-area {
        max-width: 1060px;
        --kendo-actionsheet-height: 400px;
        --kendo-actionsheet-max-height: 400px;
    }
    #test-area > section {
        height: 600px;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span className="k-col-span-2" >resolutions 500 &lt;= 768</span>

            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button size="large" icon="filter" />
                                <Button size="large" icon="arrows-swap" />
                                <Button size="large" icon="group" />
                            </GridToolbar>
                        </>
                    }
                    pager={
                        <>
                            <GridPager type="input" pageTitleInfo={false} refresh={false} info={false} />
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
            </section>

            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button size="large" icon="filter" />
                                <Button selected size="large" icon="arrows-swap" />
                                <Button size="large" icon="group" />
                            </GridToolbar>
                        </>
                    }
                    pager={
                        <>
                            <GridPager type="input" pageTitleInfo={false} refresh={false} info={false} />
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
                <ActionSheetNormal
                    adaptive
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" />} title="Sort by" />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button icon="x" size="large" disabled >Clear sorting</Button>
                            <Button icon="check" size="large" themeColor="primary">Done</Button>
                        </ActionSheetFooter>
                    }
                >
                    <ColumnMenuNormal size="large">
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Header Name 1" />
                            <ColumnMenuItem text="Header Name 2" />
                            <ColumnMenuItem text="Header Name 3" />
                            <ColumnMenuItem text="Header Name 4" />
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </ActionSheetNormal>
            </section>

            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button size="large" icon="filter" />
                                <Button selected size="large" icon="arrows-swap" />
                                <Button size="large" icon="group" />
                            </GridToolbar>
                        </>
                    }
                    pager={
                        <>
                            <GridPager type="input" pageTitleInfo={false} refresh={false} info={false} />
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
                <ActionSheetNormal
                    adaptive
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" />} title="Sort by" />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button icon="x" size="large" >Clear sorting</Button>
                            <Button icon="check" size="large" themeColor="primary">Done</Button>
                        </ActionSheetFooter>
                    }
                >
                    <ColumnMenuNormal size="large">
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Header Name 1" />
                            <ColumnMenuItem text="Header Name 2" />
                            <ColumnMenuItem text="Header Name 3" endIcon="sort-asc-small" sortIndex={1} />
                            <ColumnMenuItem text="Header Name 4" endIcon="sort-desc-small" sortIndex={2} />
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </ActionSheetNormal>
            </section>

            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button size="large" icon="filter" />
                                <div className="k-badge-container">
                                    <Button size="large" icon="arrows-swap" />
                                    <Badge position="edge" rounded="full" align="top-end" size="medium" cutoutBorder />
                                </div>
                                <Button size="large" icon="group" />
                            </GridToolbar>
                        </>
                    }
                    pager={
                        <>
                            <GridPager type="input" pageTitleInfo={false} refresh={false} info={false} />
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
            </section>
        </div>
    </>
);
