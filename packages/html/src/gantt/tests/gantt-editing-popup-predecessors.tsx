import { WindowNormal } from '../../window';
import { DropdownList } from '../../dropdownlist';
import { Button } from '../../button';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridToolbar } from "../../grid";
import { TableRow, TableTbody, TableTd, TableThead } from '../../table';


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
                    <div className="k-tabstrip k-tabstrip-top">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-reset k-tabstrip-items">
                                <li className="k-item k-first">
                                    <span className="k-link">General</span>
                                </li>
                                <li className="k-item">
                                    <span className="k-link">Resources</span>
                                </li>
                                <li className="k-item k-active">
                                    <span className="k-link">Predecessors</span>
                                </li>
                                <li className="k-item k-last">
                                    <span className="k-link">Successors</span>
                                </li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
                            <Grid _renderAriaRoot className="k-grid-no-scrollbar" toolbar={(
                                <GridToolbar>
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
                        </div>
                    </div>
                </WindowNormal>
            </section>

        </div>
    </>
);
