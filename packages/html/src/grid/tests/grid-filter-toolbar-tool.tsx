import {Grid, GridToolbar, GridHeader, GridHeaderCell, GridHeaderTable, GridContainer, GridContent, GridTable, GridPager } from "../";
import { TableThead, TableTbody, TableRow, TableTd } from "../../table";
import { Popup } from "../../popup";
import { ColumnMenuNormal, ColumnMenuItemWrapper, ColumnMenuExpander, ColumnMenuMulticheckWrap, ColumnMenuMulticheckItem, FilterMenu } from "../../column-menu";
import { Searchbox } from "../../searchbox";
import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { Badge } from "../../badge";
import { DropdownList } from "../../dropdownlist";
import { NumericTextbox } from "../../numerictextbox";
import { ActionButtons } from "../../action-buttons";

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
        left: 8px;
        bottom: 200px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span>Filter Menu with Operators</span>
            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <div className="k-badge-container">
                                    <Button icon="filter" selected>Filter</Button>
                                    <Badge position="edge" rounded="full" align="top-end" size="medium" cutoutBorder></Badge>
                                </div>
                                <Button icon="arrows-swap">Sort</Button>
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
                            <ColumnMenuExpander itemText="Header Name 1"></ColumnMenuExpander>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Header Name 2" expanded={true} itemContent={
                                <>
                                    <FilterMenu>
                                        <DropdownList value="Contains" />
                                        <NumericTextbox />
                                        <ButtonGroup>
                                            <Button>And</Button>
                                            <Button>Or</Button>
                                        </ButtonGroup>
                                        <DropdownList value="Contains" />
                                        <NumericTextbox />
                                        <ActionButtons alignment="stretched">
                                            <Button themeColor="primary" icon="filter">Filter</Button>
                                            <Button icon="filter-clear">Clear</Button>
                                        </ActionButtons>
                                    </FilterMenu>
                                </>
                            }/>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Header Name 3" itemEndIcon="filter"></ColumnMenuExpander>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Header Name 4"></ColumnMenuExpander>
                        </ColumnMenuItemWrapper>
                        <ActionButtons alignment="stretched" className="k-column-menu-footer">
                            <Button icon="filter-clear">Clear all filters</Button>
                        </ActionButtons>
                    </ColumnMenuNormal>
                </Popup>
            </section>

            <span>Filter Menu With Checkbox Selection</span>
            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <div className="k-badge-container">
                                    <Button icon="filter" selected>Filter</Button>
                                    <Badge position="edge" rounded="full" align="top-end" size="medium" cutoutBorder></Badge>
                                </div>
                                <Button icon="arrows-swap">Sort</Button>
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
                            <ColumnMenuExpander itemText="Header Name 1"></ColumnMenuExpander>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Header Name 2" expanded={true} itemContent={
                                <>
                                    <FilterMenu>
                                        <Searchbox placeholder="Search..." />
                                        <ColumnMenuMulticheckWrap>
                                            <ColumnMenuMulticheckItem text="(Select All)" className="k-check-all-wrap" />
                                            <ColumnMenuMulticheckItem text="Value 1" />
                                            <ColumnMenuMulticheckItem text="Value 2" />
                                            <ColumnMenuMulticheckItem text="Value 3" />
                                            <ColumnMenuMulticheckItem text="Value 4" />
                                        </ColumnMenuMulticheckWrap>
                                        <div className="k-filter-selected-items">0 selected items</div>
                                        <ActionButtons alignment="stretched">
                                            <Button themeColor="primary" icon="filter">Filter</Button>
                                            <Button icon="filter-clear">Clear</Button>
                                        </ActionButtons>
                                    </FilterMenu>
                                </>
                            }/>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Header Name 3" itemEndIcon="filter"></ColumnMenuExpander>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Header Name 4"></ColumnMenuExpander>
                        </ColumnMenuItemWrapper>
                        <ActionButtons alignment="stretched" className="k-column-menu-footer">
                            <Button icon="filter-clear">Clear all filters</Button>
                        </ActionButtons>
                    </ColumnMenuNormal>
                </Popup>
            </section>
        </div>
    </>
);
