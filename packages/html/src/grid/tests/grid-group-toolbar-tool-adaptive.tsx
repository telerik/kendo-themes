import { GridToolbar, GridHeader, GridHeaderCell, GridHeaderTable, GridContainer, GridContent, GridTable, GridNormal } from "../";
import { TableThead, TableTbody, TableRow, TableTd } from "../../table";
import { Button } from "../../button";
import { ActionSheetNormal, ActionSheetHeader, ActionSheetFooter } from "../../action-sheet";
import { GroupMenu, GroupMenuItemWrapper, GroupMenuItem, GroupMenuItemAction } from "../../column-menu";

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
            <span className="k-col-span-2" >resolutions 500 &lt; 768</span>

            <section>
                <GridNormal
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button size="large" icon="filter" />
                                <Button size="large" icon="arrows-swap" />
                                <Button selected size="large" icon="group" />
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
                <ActionSheetNormal
                    adaptive
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" />} title="Group by" />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button icon="x" size="large" disabled >Clear grouping</Button>
                            <Button icon="check" size="large" themeColor="primary" >Done</Button>
                        </ActionSheetFooter>
                    }
                >
                    <GroupMenu size="large">
                        <GroupMenuItemWrapper>
                            <GroupMenuItem text="Header Name 1" actionsEnd={<GroupMenuItemAction size="large" type="add" />} />
                            <GroupMenuItem text="Header Name 2" actionsEnd={<GroupMenuItemAction size="large" type="add" />} />
                            <GroupMenuItem text="Header Name 3" actionsEnd={<GroupMenuItemAction size="large" type="add" />} />
                            <GroupMenuItem text="Header Name 4" actionsEnd={<GroupMenuItemAction size="large" type="add" />} />
                        </GroupMenuItemWrapper>
                    </GroupMenu>
                </ActionSheetNormal>
            </section>

            <section>
                <GridNormal
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button size="large" icon="filter" />
                                <Button size="large" icon="arrows-swap" />
                                <Button selected size="large" icon="group" />
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
                <ActionSheetNormal
                    adaptive
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" />} title="Group by" />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button icon="x" size="large">Clear grouping</Button>
                            <Button icon="check" size="large" themeColor="primary" >Done</Button>
                        </ActionSheetFooter>
                    }
                >
                    <GroupMenu size="large">
                        <GroupMenuItemWrapper>
                            <GroupMenuItem text="Header Name 1" actionsEnd={<GroupMenuItemAction size="large" type="remove" />} />
                        </GroupMenuItemWrapper>
                        <GroupMenuItemWrapper>
                            <GroupMenuItem text="Header Name 2" actionsEnd={<GroupMenuItemAction size="large" type="add" />} />
                            <GroupMenuItem text="Header Name 3" actionsEnd={<GroupMenuItemAction size="large" type="add" />} />
                            <GroupMenuItem text="Header Name 4" actionsEnd={<GroupMenuItemAction size="large" type="add" />} />
                        </GroupMenuItemWrapper>
                    </GroupMenu>
                </ActionSheetNormal>
            </section>

            <section>
                <GridNormal
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button size="large" icon="filter" />
                                <Button size="large" icon="arrows-swap" />
                                <Button selected size="large" icon="group" />
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
                <ActionSheetNormal
                    adaptive
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" />} title="Group by" />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button icon="x" size="large">Clear grouping</Button>
                            <Button icon="check" size="large" themeColor="primary" >Done</Button>
                        </ActionSheetFooter>
                    }
                >
                    <GroupMenu size="large">
                        <GroupMenuItemWrapper>
                            <GroupMenuItem text="Header Name 1" actionsStart={<GroupMenuItemAction size="large" type="drag" />} actionsEnd={<GroupMenuItemAction size="large" type="remove" />} />
                            <GroupMenuItem text="Header Name 2" actionsStart={<GroupMenuItemAction size="large" type="drag" />} actionsEnd={<GroupMenuItemAction size="large" type="remove" />} />
                        </GroupMenuItemWrapper>
                        <GroupMenuItemWrapper>
                            <GroupMenuItem text="Header Name 3" actionsEnd={<GroupMenuItemAction size="large" type="add" />} />
                            <GroupMenuItem text="Header Name 4" actionsEnd={<GroupMenuItemAction size="large" type="add" />} />
                        </GroupMenuItemWrapper>
                    </GroupMenu>
                </ActionSheetNormal>
            </section>

            <section>
                <GridNormal
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button size="large" icon="filter" />
                                <Button size="large" icon="arrows-swap" />
                                <Button selected size="large" icon="group" />
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
                <ActionSheetNormal
                    adaptive
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" />} title="Group by" />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button icon="x" size="large">Clear grouping</Button>
                            <Button icon="check" size="large" themeColor="primary" >Done</Button>
                        </ActionSheetFooter>
                    }
                >
                    <GroupMenu size="large">
                        <GroupMenuItemWrapper>
                            <GroupMenuItem text="Header Name 1" actionsStart={<><GroupMenuItemAction size="large" type="up" /><GroupMenuItemAction size="large" type="down" /></>} actionsEnd={<GroupMenuItemAction size="large" type="remove" />} />
                            <GroupMenuItem text="Header Name 2" actionsStart={<><GroupMenuItemAction size="large" type="up" /><GroupMenuItemAction size="large" type="down" /></>} actionsEnd={<GroupMenuItemAction size="large" type="remove" />} />
                        </GroupMenuItemWrapper>
                        <GroupMenuItemWrapper>
                            <GroupMenuItem text="Header Name 3" actionsEnd={<GroupMenuItemAction size="large" type="add" />} />
                            <GroupMenuItem text="Header Name 4" actionsEnd={<GroupMenuItemAction size="large" type="add" />} />
                        </GroupMenuItemWrapper>
                    </GroupMenu>
                </ActionSheetNormal>
            </section>
        </div>
    </>
);
