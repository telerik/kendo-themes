import { WindowNormal } from '../../window';
import { NumericTextbox } from '../../numerictextbox';
import { DropdownList } from '../../dropdownlist';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridToolbar } from "../../grid";
import { TableRow, TableTbody, TableTd, TableThead } from '../../table';

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
                    <div className="k-tabstrip k-tabstrip-top">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-reset k-tabstrip-items">
                                <li className="k-item k-first">
                                    <span className="k-link">General</span>
                                </li>
                                <li className="k-item k-active">
                                    <span className="k-link">Resources</span>
                                </li>
                                <li className="k-item">
                                    <span className="k-link">Predecessors</span>
                                </li>
                                <li className="k-item k-last">
                                    <span className="k-link">Successors</span>
                                </li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
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
                                                <TableRow className="k-alt" alt>
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
                                                <TableRow className="k-alt" alt>
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
                                                <TableRow className="k-alt" alt>
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
                        </div>
                    </div>
                </WindowNormal>
            </section>

        </div>
    </>
);
