import { GridToolbar } from "../grid-toolbar.spec";
import { GridHeader } from "../grid-header.spec";
import { GridHeaderCell } from "../grid-header-cell.spec";
import { GridHeaderTable } from "../grid-header-table.spec";
import { GridContainer } from "../grid-container.spec";
import { GridContent } from "../grid-content.spec";
import { GridTable } from "../grid-table.spec";
import { GridNormal } from "../templates/grid-normal";
import { TableThead } from '../../table/table-thead';
import { TableTbody } from '../../table/table-tbody';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';
import { Popup } from "../../popup/popup.spec";
import { GroupMenu } from "../../column-menu/group-menu.spec";
import { GroupMenuItemWrapper } from "../../column-menu/group-menu-item-wrap";
import { GroupMenuItem } from "../../column-menu/group-menu-item.spec";
import { GroupMenuItemAction } from "../../column-menu/group-menu-item-action";
import { Button } from "../../button/button.spec";
import { ActionButtons } from "../../action-buttons/action-buttons.spec";

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
        left: 156px;
        bottom: 194px;
    }

    .k-animation-container + .k-animation-container {
        bottom: 170px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span>No Grouping Applied</span>
            <section>
                <GridNormal
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button icon="filter">Filter</Button>
                                <Button icon="arrows-swap">Sort</Button>
                                <Button icon="group" selected>Group</Button>
                            </GridToolbar>
                        </>
                    }
                    pager={null}
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
                                                <GridHeaderCell>Header Name 1</GridHeaderCell>
                                                <GridHeaderCell>Header Name 2</GridHeaderCell>
                                                <GridHeaderCell>Header Name 3</GridHeaderCell>
                                                <GridHeaderCell>Header Name 4</GridHeaderCell>
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
                ></GridNormal>
                <Popup className="k-grid-columnmenu-popup">
                    <GroupMenu>
                        <GroupMenuItemWrapper>
                            <GroupMenuItem text="Header Name 1" actionsEnd={<GroupMenuItemAction type="add" />} />
                            <GroupMenuItem text="Header Name 2" actionsEnd={<GroupMenuItemAction type="add" />} />
                            <GroupMenuItem text="Header Name 3" actionsEnd={<GroupMenuItemAction type="add" />} />
                            <GroupMenuItem text="Header Name 4" actionsEnd={<GroupMenuItemAction type="add" />} />
                        </GroupMenuItemWrapper>
                        <ActionButtons alignment="stretched" className="k-column-menu-footer">
                            <Button icon="x" disabled>Clear grouping</Button>
                        </ActionButtons>
                    </GroupMenu>
                </Popup>
            </section>

            <span>Single Header Grouping</span>
            <section>End
                <GridNormal
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button icon="filter">Filter</Button>
                                <Button icon="arrows-swap">Sort</Button>
                                <Button icon="group" selected>Group</Button>
                            </GridToolbar>
                        </>
                    }
                    pager={null}
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
                                                <GridHeaderCell>Header Name 1</GridHeaderCell>
                                                <GridHeaderCell>Header Name 2</GridHeaderCell>
                                                <GridHeaderCell>Header Name 3</GridHeaderCell>
                                                <GridHeaderCell>Header Name 4</GridHeaderCell>
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
                ></GridNormal>
                <Popup className="k-grid-columnmenu-popup">
                    <GroupMenu>
                        <GroupMenuItemWrapper>
                            <GroupMenuItem text="Header Name 1" actionsEnd={<GroupMenuItemAction type="remove" />} />
                        </GroupMenuItemWrapper>
                        <GroupMenuItemWrapper>
                            <GroupMenuItem text="Header Name 2" actionsEnd={<GroupMenuItemAction type="add" />} />
                            <GroupMenuItem text="Header Name 3" actionsEnd={<GroupMenuItemAction type="add" />} />
                            <GroupMenuItem text="Header Name 4" actionsEnd={<GroupMenuItemAction type="add" />} />
                        </GroupMenuItemWrapper>
                        <ActionButtons alignment="stretched" className="k-column-menu-footer">
                            <Button icon="x">Clear grouping</Button>
                        </ActionButtons>
                    </GroupMenu>
                </Popup>
            </section>

            <span>Multiple Header Grouping</span>
            <section>
                <GridNormal
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button icon="filter">Filter</Button>
                                <Button icon="arrows-swap">Sort</Button>
                                <Button icon="group" selected>Group</Button>
                            </GridToolbar>
                        </>
                    }
                    pager={null}
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
                                                <GridHeaderCell>Header Name 1</GridHeaderCell>
                                                <GridHeaderCell>Header Name 2</GridHeaderCell>
                                                <GridHeaderCell>Header Name 3</GridHeaderCell>
                                                <GridHeaderCell>Header Name 4</GridHeaderCell>
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
                ></GridNormal>
                <Popup className="k-grid-columnmenu-popup">
                    <GroupMenu>
                        <GroupMenuItemWrapper>
                            <GroupMenuItem text="Header Name 1" actionsStart={<GroupMenuItemAction type="drag" />} actionsEnd={<GroupMenuItemAction type="remove" />} />
                            <GroupMenuItem text="Header Name 2" actionsStart={<GroupMenuItemAction type="drag" />} actionsEnd={<GroupMenuItemAction type="remove" />} />
                        </GroupMenuItemWrapper>
                        <GroupMenuItemWrapper>
                            <GroupMenuItem text="Header Name 3" actionsEnd={<GroupMenuItemAction type="add" />} />
                            <GroupMenuItem text="Header Name 4" actionsEnd={<GroupMenuItemAction type="add" />} />
                        </GroupMenuItemWrapper>
                        <ActionButtons alignment="stretched" className="k-column-menu-footer">
                            <Button icon="x">Clear grouping</Button>
                        </ActionButtons>
                    </GroupMenu>
                </Popup>
                <Popup className="k-grid-columnmenu-popup">
                    <GroupMenu>
                        <GroupMenuItemWrapper>
                            <GroupMenuItem text="Header Name 1" actionsStart={<><GroupMenuItemAction type="up" /><GroupMenuItemAction type="down" /></>} actionsEnd={<GroupMenuItemAction type="remove" />} />
                            <GroupMenuItem text="Header Name 2" actionsStart={<><GroupMenuItemAction type="up" /><GroupMenuItemAction type="down" /></>} actionsEnd={<GroupMenuItemAction type="remove" />} />
                        </GroupMenuItemWrapper>
                        <GroupMenuItemWrapper>
                            <GroupMenuItem text="Header Name 3" actionsEnd={<GroupMenuItemAction type="add" />} />
                            <GroupMenuItem text="Header Name 4" actionsEnd={<GroupMenuItemAction type="add" />} />
                        </GroupMenuItemWrapper>
                        <ActionButtons alignment="stretched" className="k-column-menu-footer">
                            <Button icon="x">Clear grouping</Button>
                        </ActionButtons>
                    </GroupMenu>
                </Popup>
            </section>
        </div>
    </>
);
