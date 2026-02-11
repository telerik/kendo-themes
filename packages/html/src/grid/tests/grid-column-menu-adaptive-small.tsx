import { Grid } from "../grid.spec";
import { GridHeader } from "../grid-header.spec";
import { GridHeaderCell } from "../grid-header-cell.spec";
import { GridHeaderTable } from "../grid-header-table.spec";
import { GridContainer } from "../grid-container.spec";
import { GridContent } from "../grid-content.spec";
import { GridTable } from "../grid-table.spec";
import { GridPager } from "../grid-pager.spec";
import { TableThead } from '../../table/table-thead';
import { TableTbody } from '../../table/table-tbody';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';
import { Button } from "../../button/button.spec";
import { ActionSheetNormal } from "../../action-sheet/templates/action-sheet-normal";
import { ActionSheetHeader } from "../../action-sheet/actionsheet-header";
import { ActionSheetFooter } from "../../action-sheet/actionsheet-footer";
import { ActionSheetView } from "../../action-sheet/actionsheet-view";
import { ButtonGroup } from "../../button-group/button-group.spec";
import { ColumnMenuNormal } from "../../column-menu/templates/column-menu-normal";
import { ColumnMenuItemWrapper } from "../../column-menu/column-menu-item-wrapper";
import { ColumnMenuItem } from "../../column-menu/column-menu-item.spec";
import { ColumnMenuExpander } from "../../column-menu/column-menu-expander.spec";
import { FilterMenu } from "../../column-menu/filter-menu.spec";
import { ColumnList } from "../../column-menu/column-list.spec";
import { ColumnListItem } from "../../column-menu/column-list-item";
import { DropdownList } from "../../dropdownlist/dropdownlist.spec";
import { NumericTextbox } from "../../numerictextbox/numerictextbox.spec";

const styles = `
    #test-area {
        max-width: 780px;
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
            <span className="k-col-span-2" >resolutions &lt;= 500</span>

            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    pager={
                        <>
                            <GridPager type="input" size="large" pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} pageSizes={false} />
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
                                                <GridHeaderCell menu="column" columnTitle="Header Name 1"></GridHeaderCell>
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
                    pager={
                        <>
                            <GridPager type="input" size="large" pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} pageSizes={false} />
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
                                                <GridHeaderCell menu="column" columnTitle="Header Name 1"></GridHeaderCell>
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
                <ActionSheetNormal style={{ "--kendo-actionsheet-view-current": "1" } as React.CSSProperties}
                    adaptive
                    fullscreen
                    template={
                        <>
                            <ActionSheetView animated adaptive header={
                                <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Column Menu" />
                            }>
                                <ColumnMenuNormal size="large">
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                                        <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Columns" expanderIcon="chevron-right" itemStartIcon="columns" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Filter" expanderIcon="chevron-right" itemStartIcon="filter" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Set column position" expanderIcon="chevron-right" itemStartIcon="set-column-position" />
                                    </ColumnMenuItemWrapper>
                                </ColumnMenuNormal>
                            </ActionSheetView>
                            <ActionSheetView animated adaptive
                                header={
                                    <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="large" fillMode="flat" />} actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Filter by Header Name 1" />
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
                    pager={
                        <>
                            <GridPager type="input" size="large" pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} pageSizes={false} />
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
                                                <GridHeaderCell menu="column" columnTitle="Header Name 1"></GridHeaderCell>
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
                <ActionSheetNormal style={{ "--kendo-actionsheet-view-current": "2" } as React.CSSProperties}
                    adaptive
                    fullscreen
                    template={
                        <>
                            <ActionSheetView animated adaptive header={
                                <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Column Menu" />
                            }>
                                <ColumnMenuNormal size="large">
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                                        <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Columns" expanderIcon="chevron-right" itemStartIcon="columns" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Filter" expanderIcon="chevron-right" itemStartIcon="filter" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Set column position" expanderIcon="chevron-right" itemStartIcon="set-column-position" />
                                    </ColumnMenuItemWrapper>
                                </ColumnMenuNormal>
                            </ActionSheetView>
                            <ActionSheetView animated adaptive
                                header={
                                    <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="large" fillMode="flat" />} actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Filter by Header Name 1" />
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
                    pager={
                        <>
                            <GridPager type="input" size="large" pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} pageSizes={false} />
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
                                                <GridHeaderCell menu="column" columnTitle="Header Name 1"></GridHeaderCell>
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
                <ActionSheetNormal style={{ "--kendo-actionsheet-view-current": "2" } as React.CSSProperties}
                    adaptive
                    fullscreen
                    template={
                        <>
                            <ActionSheetView animated adaptive header={
                                <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Column Menu" />
                            }>
                                <ColumnMenuNormal size="large">
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                                        <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Columns" expanderIcon="chevron-right" itemStartIcon="columns" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Filter" expanderIcon="chevron-right" itemStartIcon="filter" />
                                    </ColumnMenuItemWrapper>
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Set column position" expanderIcon="chevron-right" itemStartIcon="set-column-position" />
                                    </ColumnMenuItemWrapper>
                                </ColumnMenuNormal>
                            </ActionSheetView>
                            <ActionSheetView
                                adaptive
                                animated
                                header={
                                    <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="large" fillMode="flat" />} actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Column chooser" subtitle="Selected fields are visible" />
                                }
                                footer={
                                    <ActionSheetFooter>
                                        <Button icon="arrow-rotate-ccw" size="large">Reset</Button>
                                        <Button icon="check" size="large" themeColor="primary">Apply</Button>
                                    </ActionSheetFooter>
                                }>
                                <ColumnList size="large">
                                    <ColumnListItem checked label="Header Name 1" />
                                    <ColumnListItem checked label="Header Name 2" />
                                    <ColumnListItem label="Header Name 3" />
                                    <ColumnListItem label="Header Name 4" />
                                </ColumnList>
                            </ActionSheetView>
                        </>
                    }
                >
                </ActionSheetNormal>
            </section>
        </div>
    </>
);
