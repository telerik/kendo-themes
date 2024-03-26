import { WindowNormal } from '../../window';
import { DropdownList } from '../../dropdownlist';
import { Button } from '../../button';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridToolbar } from "../../grid";
import { TableRow, TableTbody, TableTd, TableThead } from '../../table';
import { TabStrip, TabStripItemsWrapper, TabStripItems, TabStripItem, TabStripContent } from '../../tabstrip';

const styles = `
    .k-window {
        min-width: 580px;
        min-height: 500px;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <WindowNormal title="Edit task" actionButtons={
                    <>
                        <Button icon="save" themeColor="primary">Save</Button>
                        <Button icon="cancel">Cancel</Button>
                        <span className="k-spacer"></span>
                        <Button icon="trash" fillMode="flat" themeColor="primary">Delete</Button>
                    </>
                }>
                    <TabStrip header={false}>
                        <TabStripItemsWrapper>
                            <TabStripItems>
                                <TabStripItem first value="General" />
                                <TabStripItem value="Resources" />
                                <TabStripItem value="Predecessors" />
                                <TabStripItem last active value="Successors" />
                            </TabStripItems>
                        </TabStripItemsWrapper>
                        <TabStripContent active>
                            <Grid _renderAriaRoot className="k-grid-no-scrollbar" toolbar={(
                                <GridToolbar className="k-grid-toolbar">
                                    <Button icon="plus">Add</Button>
                                    <Button icon="minus">Remove</Button>
                                </GridToolbar>
                            )}>
                                <GridHeader>
                                    <div className="k-grid-header-wrap">
                                        <GridHeaderTable>
                                            <colgroup>
                                                <col/>
                                                <col/>
                                            </colgroup>
                                            <TableThead>
                                                <TableRow>
                                                    <GridHeaderCell columnTitle="Name" sortable></GridHeaderCell>
                                                    <GridHeaderCell columnTitle="Type" sortable></GridHeaderCell>
                                                </TableRow>
                                            </TableThead>
                                        </GridHeaderTable>
                                    </div>
                                </GridHeader>
                                <GridContainer>
                                    <GridContent>
                                        <GridTable>
                                            <colgroup>
                                                <col className="k-sorted"/>
                                                <col className="k-sorted"/>
                                            </colgroup>
                                            <TableTbody>
                                                <TableRow>
                                                    <TableTd>
                                                        <DropdownList placeholder="-Select task-"/>
                                                    </TableTd>
                                                    <TableTd>
                                                        <DropdownList placeholder="Finish-Start"/>
                                                    </TableTd>
                                                </TableRow>
                                            </TableTbody>
                                        </GridTable>
                                    </GridContent>
                                </GridContainer>
                            </Grid>
                        </TabStripContent>
                    </TabStrip>
                </WindowNormal>
            </section>

        </div>
    </>
);
