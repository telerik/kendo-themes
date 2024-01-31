import { Button } from '../../button';
import { Searchbox } from '../../searchbox';
import { GridNormal, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridToolbar } from '../../grid';
import { TableRow, TableThead, TableTbody, TableTd } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="col-2">Resizing Row / Hover</span>

            <section className="col-2">
                <GridNormal pager={false} groupingHeader={false} className="k-grid-display-block" toolbar={(
                    <GridToolbar>
                        <Button className="k-toolbar-button" icon="plus">Add new record</Button>
                        <span className="k-spacer"></span>
                        <Searchbox className="k-grid-search" placeholder="Search..."/>
                    </GridToolbar>
                )}>
                    <GridHeader style={{ padding: "0" }}>
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="Header Cell"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Header Cell"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Header Cell"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent className="k-auto-scrollable" style={{ overflowY: "visible" }}>
                            <GridTable>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row k-hover">
                                        <TableTd>Grid Cell</TableTd>
                                        <TableTd style={{ whiteSpace: "nowrap" }}>Grid Cell with loooooong text that spans on multiple rows</TableTd>
                                        <TableTd className="k-command-cell">
                                            <Button themeColor="primary">Edit</Button>
                                            <Button>Remove</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" alt>
                                        <TableTd>Grid Cell</TableTd>
                                        <TableTd>Grid Cell</TableTd>
                                        <TableTd className="k-command-cell">
                                            <Button themeColor="primary">Edit</Button>
                                            <Button>Remove</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row">
                                        <TableTd>Grid Cell</TableTd>
                                        <TableTd>Grid Cell</TableTd>
                                        <TableTd className="k-command-cell">
                                            <Button themeColor="primary">Edit</Button>
                                            <Button>Remove</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" alt>
                                        <TableTd>Grid Cell</TableTd>
                                        <TableTd>Grid Cell</TableTd>
                                        <TableTd className="k-command-cell">
                                            <Button themeColor="primary">Edit</Button>
                                            <Button>Remove</Button>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                            <span className="k-resizer-wrap k-hover" style={{ top: "34px" }}>
                                <span className="k-row-resizer"></span>
                            </span>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>

            <span className="col-2">Resizing Row / Drag</span>

            <section className="col-2">
                <GridNormal pager={false} groupingHeader={false} className="k-grid-display-block" toolbar={(
                    <GridToolbar>
                        <Button className="k-toolbar-button" icon="plus">Add new record</Button>
                        <span className="k-spacer"></span>
                        <Searchbox className="k-grid-search" placeholder="Search..."/>
                    </GridToolbar>
                )}>
                    <GridHeader style={{ padding: "0" }}>
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="Header Cell"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Header Cell"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Header Cell"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent className="k-auto-scrollable" style={{ overflowY: "visible" }}>
                            <GridTable>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row k-hover">
                                        <TableTd>Grid Cell</TableTd>
                                        <TableTd style={{ whiteSpace: "unset" }}>Grid Cell with loooooong text that spans on multiple rows</TableTd>
                                        <TableTd className="k-command-cell">
                                            <Button themeColor="primary">Edit</Button>
                                            <Button>Remove</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt>
                                        <TableTd>Grid Cell</TableTd>
                                        <TableTd>Grid Cell</TableTd>
                                        <TableTd className="k-command-cell">
                                            <Button themeColor="primary">Edit</Button>
                                            <Button>Remove</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row">
                                        <TableTd>Grid Cell</TableTd>
                                        <TableTd>Grid Cell</TableTd>
                                        <TableTd className="k-command-cell">
                                            <Button themeColor="primary">Edit</Button>
                                            <Button>Remove</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt>
                                        <TableTd>Grid Cell</TableTd>
                                        <TableTd>Grid Cell</TableTd>
                                        <TableTd className="k-command-cell">
                                            <Button themeColor="primary">Edit</Button>
                                            <Button>Remove</Button>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                            <span className="k-resizer-wrap k-active" style={{ top: "54px" }}>
                                <span className="k-row-resizer"></span>
                            </span>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>
        </div>
    </>
);
