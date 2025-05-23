import { Grid, GridToolbar, GridHeader, GridHeaderCell, GridHeaderTable, GridContainer, GridContent, GridTable, GridPager } from "../";
import { TableThead, TableTbody, TableRow, TableTd } from "../../table";
import { ActionSheetFooter, ActionSheetHeader, ActionSheetNormal, ActionSheetView } from "../../action-sheet";
import { ColumnMenuExpander, ColumnMenuItemWrapper, ColumnMenuMulticheckItem, ColumnMenuMulticheckWrap, ColumnMenuNormal, FilterMenu } from "../../column-menu";
import { NumericTextbox } from "../../numerictextbox";
import { ButtonGroup } from "../../button-group";
import { DropdownList } from "../../dropdownlist";
import { Button } from "../../button";
import { Badge } from "../../badge";
import { Searchbox } from "../../searchbox";

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
                                <Button selected size="large" icon="filter" />
                                <Button size="large" icon="arrows-swap" />
                                <Button size="large" icon="group" />
                            </GridToolbar>
                        </>
                    }
                    pager={
                        <>
                            <GridPager type="input" pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} pageSizes={false} />
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
                <ActionSheetNormal style={{ "--kendo-actionsheet-view-current": "1" }}
                    adaptive
                    template={
                        <>
                            <ActionSheetView animated adaptive
                                header={
                                    <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Filter by" />
                                }
                                footer={
                                    <ActionSheetFooter>
                                        <Button icon="filter-clear" size="large" disabled>Clear all filters</Button>
                                    </ActionSheetFooter>
                                }
                            >
                                <ColumnMenuNormal size="large">
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Header Name 1" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Header Name 2" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Header Name 3" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Header Name 4" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                </ColumnMenuNormal>
                            </ActionSheetView>
                            <ActionSheetView animated adaptive
                                header={
                                    <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="large" fillMode="flat" />} actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Filter by Header Name 3" />
                                }
                                footer={
                                    <ActionSheetFooter>
                                        <Button size="large" icon="filter-clear">Clear</Button>
                                        <Button size="large" themeColor="primary" icon="filter">Filter</Button>
                                    </ActionSheetFooter>
                                }>
                                <FilterMenu>
                                    <DropdownList size="large" value="Contains" />
                                    <NumericTextbox size="large" />
                                    <ButtonGroup>
                                        <Button size="large">And</Button>
                                        <Button size="large">Or</Button>
                                    </ButtonGroup>
                                    <DropdownList size="large" value="Contains" />
                                    <NumericTextbox size="large" />
                                </FilterMenu>
                            </ActionSheetView>
                        </>
                    }
                >
                </ActionSheetNormal>
            </section>

            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button selected size="large" icon="filter" />
                                <Button size="large" icon="arrows-swap" />
                                <Button size="large" icon="group" />
                            </GridToolbar>
                        </>
                    }
                    pager={
                        <>
                            <GridPager type="input" pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} pageSizes={false} />
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
                <ActionSheetNormal style={{ "--kendo-actionsheet-view-current": "2" }}
                    adaptive
                    template={
                        <>
                            <ActionSheetView animated adaptive
                                header={
                                    <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Filter by" />
                                }
                                footer={
                                    <ActionSheetFooter>
                                        <Button icon="filter-clear" size="large" disabled>Clear all filters</Button>
                                    </ActionSheetFooter>
                                }
                            >
                                <ColumnMenuNormal size="large">
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Header Name 1" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Header Name 2" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Header Name 3" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Header Name 4" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                </ColumnMenuNormal>
                            </ActionSheetView>
                            <ActionSheetView animated adaptive
                                header={
                                    <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="large" fillMode="flat" />} actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Filter by Header Name 3" />
                                }
                                footer={
                                    <ActionSheetFooter>
                                        <Button size="large" icon="filter-clear">Clear</Button>
                                        <Button size="large" themeColor="primary" icon="filter">Filter</Button>
                                    </ActionSheetFooter>
                                }>
                                <FilterMenu>
                                    <DropdownList size="large" value="Contains" />
                                    <NumericTextbox size="large" />
                                    <ButtonGroup>
                                        <Button size="large">And</Button>
                                        <Button size="large">Or</Button>
                                    </ButtonGroup>
                                    <DropdownList size="large" value="Contains" />
                                    <NumericTextbox size="large" />
                                </FilterMenu>
                            </ActionSheetView>
                        </>
                    }
                >
                </ActionSheetNormal>
            </section>

            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button selected size="large" icon="filter" />
                                <Button size="large" icon="arrows-swap" />
                                <Button size="large" icon="group" />
                            </GridToolbar>
                        </>
                    }
                    pager={
                        <>
                            <GridPager type="input" pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} pageSizes={false} />
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
                <ActionSheetNormal style={{ "--kendo-actionsheet-view-current": "2" }}
                    adaptive
                    template={
                        <>
                            <ActionSheetView animated adaptive
                                header={
                                    <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Filter by" />
                                }
                                footer={
                                    <ActionSheetFooter>
                                        <Button icon="filter-clear" size="large" disabled>Clear all filters</Button>
                                    </ActionSheetFooter>
                                }
                            >
                                <ColumnMenuNormal size="large">
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Header Name 1" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Header Name 2" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Header Name 3" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Header Name 4" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                </ColumnMenuNormal>
                            </ActionSheetView>
                            <ActionSheetView animated adaptive
                                header={
                                    <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="large" fillMode="flat" />} actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Filter by Header Name 3" />
                                }
                                footer={
                                    <ActionSheetFooter>
                                        <Button size="large" icon="filter-clear">Clear</Button>
                                        <Button size="large" themeColor="primary" icon="filter">Filter</Button>
                                    </ActionSheetFooter>
                                }>
                                <FilterMenu>
                                    <Searchbox size="large" placeholder="Search..." />
                                    <ColumnMenuMulticheckWrap>
                                        <ColumnMenuMulticheckItem size="large" text="Select All" className="k-check-all-wrap" />
                                        <ColumnMenuMulticheckItem size="large" text="Value 1" />
                                        <ColumnMenuMulticheckItem size="large" text="Value 2" />
                                        <ColumnMenuMulticheckItem size="large" text="Value 3" />
                                        <ColumnMenuMulticheckItem size="large" text="Value 4" />
                                    </ColumnMenuMulticheckWrap>
                                    <div className="k-filter-selected-items">0 selected items</div>
                                </FilterMenu>
                            </ActionSheetView>
                        </>
                    }
                >
                </ActionSheetNormal>
            </section>

            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <div className="k-badge-container">
                                    <Button selected size="large" icon="filter" />
                                    <Badge position="edge" rounded="full" align="top-end" size="medium" cutoutBorder />
                                </div>
                                <Button size="large" icon="arrows-swap" />
                                <Button size="large" icon="group" />
                            </GridToolbar>
                        </>
                    }
                    pager={
                        <>
                            <GridPager type="input" pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} pageSizes={false} />
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
                <ActionSheetNormal style={{ "--kendo-actionsheet-view-current": "1" }}
                    adaptive
                    template={
                        <>
                            <ActionSheetView animated adaptive
                                header={
                                    <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Filter by" />
                                }
                                footer={
                                    <ActionSheetFooter>
                                        <Button icon="filter-clear" size="large">Clear all filters</Button>
                                    </ActionSheetFooter>
                                }
                            >
                                <ColumnMenuNormal size="large">
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Header Name 1" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Header Name 2" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Header Name 3" itemEndIcon="filter" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Header Name 4" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                </ColumnMenuNormal>
                            </ActionSheetView>
                            <ActionSheetView animated adaptive
                                header={
                                    <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="large" fillMode="flat" />} actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Filter by Header Name 3" />
                                }
                                footer={
                                    <ActionSheetFooter>
                                        <Button size="large" icon="filter-clear">Clear</Button>
                                        <Button size="large" themeColor="primary" icon="filter">Filter</Button>
                                    </ActionSheetFooter>
                                }>
                                <FilterMenu>
                                    <DropdownList size="large" value="Contains" />
                                    <NumericTextbox size="large" />
                                    <ButtonGroup>
                                        <Button size="large">And</Button>
                                        <Button size="large">Or</Button>
                                    </ButtonGroup>
                                    <DropdownList size="large" value="Contains" />
                                    <NumericTextbox size="large" />
                                </FilterMenu>
                            </ActionSheetView>
                        </>
                    }
                >
                </ActionSheetNormal>
            </section>
        </div>
    </>
);
