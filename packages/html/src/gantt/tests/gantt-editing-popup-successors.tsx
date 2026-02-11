import { WindowNormal } from '../../window/templates/window-normal';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
import { Button } from '../../button/button.spec';
import { Grid } from "../../grid/grid.spec";
import { GridHeader } from "../../grid/grid-header.spec";
import { GridHeaderTable } from "../../grid/grid-header-table.spec";
import { GridHeaderCell } from "../../grid/grid-header-cell.spec";
import { GridContainer } from "../../grid/grid-container.spec";
import { GridContent } from "../../grid/grid-content.spec";
import { GridTable } from "../../grid/grid-table.spec";
import { GridToolbar } from "../../grid/grid-toolbar.spec";
import { TableRow } from '../../table/table-row';
import { TableTbody } from '../../table/table-tbody';
import { TableTd } from '../../table/table-td';
import { TableThead } from '../../table/table-thead';
import { TabStripNormal } from '../../tabstrip/templates/tabstrip-normal';
import { TabStripItem } from '../../tabstrip/tabstrip-item';
import { TabStripContent } from '../../tabstrip/tabstrip-content';

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
                    <TabStripNormal
                        tabStripItems={
                            <>
                                <TabStripItem first value="General" />
                                <TabStripItem value="Resources" />
                                <TabStripItem value="Predecessors" />
                                <TabStripItem last active value="Successors" />
                            </>
                        }
                    >
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
                    </TabStripNormal>
                </WindowNormal>
            </section>

        </div>
    </>
);
