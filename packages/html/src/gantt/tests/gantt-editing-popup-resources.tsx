import { WindowNormal } from '../../window/templates/window-normal';
import { NumericTextbox } from '../../numerictextbox/numerictextbox.spec';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
import { Button } from '../../button/button.spec';
import { Checkbox } from '../../checkbox/checkbox.spec';
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
                                <TabStripItem active value="Resources" />
                                <TabStripItem value="Predecessors" />
                                <TabStripItem last value="Successors" />
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
                                                <col style={{ width: "42px" }}/>
                                                <col/>
                                                <col/>
                                            </colgroup>
                                            <TableThead>
                                                <TableRow>
                                                    <GridHeaderCell>
                                                        <span className="k-checkbox-wrap">
                                                            <Checkbox />
                                                        </span>
                                                        <label className="k-checkbox-label"></label>
                                                    </GridHeaderCell>
                                                    <GridHeaderCell menu="filter" columnTitle="Resources" sortable></GridHeaderCell>
                                                    <GridHeaderCell menu="filter" columnTitle="Units" sortable></GridHeaderCell>
                                                </TableRow>
                                            </TableThead>
                                        </GridHeaderTable>
                                    </div>
                                </GridHeader>
                                <GridContainer>
                                    <GridContent>
                                        <GridTable>
                                            <colgroup>
                                                <col style={{ width: "42px" }}/>
                                                <col className="k-sorted"/>
                                                <col className="k-sorted"/>
                                            </colgroup>
                                            <TableTbody>
                                                <TableRow>
                                                    <TableTd>
                                                        <span className="k-checkbox-wrap">
                                                            <Checkbox />
                                                            <label className="k-checkbox-label"></label>
                                                        </span>
                                                    </TableTd>
                                                    <TableTd>
                                                        <DropdownList placeholder="-Select resource-"/>
                                                    </TableTd>
                                                    <TableTd>
                                                        <NumericTextbox value="40"/>
                                                    </TableTd>
                                                </TableRow>
                                                <TableRow alt>
                                                    <TableTd>
                                                        <span className="k-checkbox-wrap">
                                                            <Checkbox />
                                                            <label className="k-checkbox-label"></label>
                                                        </span>
                                                    </TableTd>
                                                    <TableTd>Grid Cell</TableTd>
                                                    <TableTd>Grid Cell</TableTd>
                                                </TableRow>
                                                <TableRow>
                                                    <TableTd>
                                                        <span className="k-checkbox-wrap">
                                                            <Checkbox />
                                                            <label className="k-checkbox-label"></label>
                                                        </span>
                                                    </TableTd>
                                                    <TableTd>Grid Cell</TableTd>
                                                    <TableTd>Grid Cell</TableTd>
                                                </TableRow>
                                                <TableRow alt>
                                                    <TableTd>
                                                        <span className="k-checkbox-wrap">
                                                            <Checkbox />
                                                            <label className="k-checkbox-label"></label>
                                                        </span>
                                                    </TableTd>
                                                    <TableTd>Grid Cell</TableTd>
                                                    <TableTd>Grid Cell</TableTd>
                                                </TableRow>
                                                <TableRow>
                                                    <TableTd>
                                                        <span className="k-checkbox-wrap">
                                                            <Checkbox />
                                                            <label className="k-checkbox-label"></label>
                                                        </span>
                                                    </TableTd>
                                                    <TableTd className="k-table-td">Grid Cell</TableTd>
                                                    <TableTd className="k-table-td">Grid Cell</TableTd>
                                                </TableRow>
                                                <TableRow alt>
                                                    <TableTd className="k-table-td">
                                                        <span className="k-checkbox-wrap">
                                                            <Checkbox />
                                                            <label className="k-checkbox-label"></label>
                                                        </span>
                                                    </TableTd>
                                                    <TableTd>Grid Cell</TableTd>
                                                    <TableTd>Grid Cell</TableTd>
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
