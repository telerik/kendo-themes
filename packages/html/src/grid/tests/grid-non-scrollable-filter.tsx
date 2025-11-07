import { GridNormal, GridHeader, GridContainer, GridContent, GridHeaderTable, GridHeaderCell, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <h3>Scrollable Grid (Normal) - Filter Icons</h3>
            <section>
                <GridNormal className="k-grid-no-scrollbar" style={{ width: "600px" }}>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "150px" }} />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="ID" menu="filter"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Product Name" menu="filter"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Price" menu="filter"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Date" menu="filter"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent>
                            <div className="k-grid-table-wrap">
                                <GridTable>
                                    <colgroup>
                                        <col style={{ width: "150px" }} />
                                        <col style={{ width: "150px" }} />
                                        <col style={{ width: "150px" }} />
                                        <col style={{ width: "150px" }} />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-master-row">
                                            <TableTd>1</TableTd>
                                            <TableTd>Chai</TableTd>
                                            <TableTd>18</TableTd>
                                            <TableTd>09/20/1996</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt>
                                            <TableTd>2</TableTd>
                                            <TableTd>Chang</TableTd>
                                            <TableTd>19</TableTd>
                                            <TableTd>08/12/1996</TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>

            <h3>Non-Scrollable Grid (scrollable="none") - Filter Icons (BUG)</h3>
            <section>
                <GridNormal className="k-grid-display-block k-grid-no-scrollbar" style={{ width: "600px" }}>
                    <GridHeader>
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "150px" }} />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="ID" menu="filter"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Product Name" menu="filter"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Price" menu="filter"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Date" menu="filter"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <div className="k-grid-container">
                        <GridContent>
                            <div className="k-grid-table-wrap">
                                <GridTable>
                                    <colgroup>
                                        <col style={{ width: "150px" }} />
                                        <col style={{ width: "150px" }} />
                                        <col style={{ width: "150px" }} />
                                        <col style={{ width: "150px" }} />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-master-row">
                                            <TableTd>1</TableTd>
                                            <TableTd>Chai</TableTd>
                                            <TableTd>18</TableTd>
                                            <TableTd>09/20/1996</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt>
                                            <TableTd>2</TableTd>
                                            <TableTd>Chang</TableTd>
                                            <TableTd>19</TableTd>
                                            <TableTd>08/12/1996</TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                        </GridContent>
                    </div>
                </GridNormal>
            </section>

            <h3>Non-Scrollable Grid with Resizable Columns (BUG)</h3>
            <section>
                <GridNormal className="k-grid-display-block k-grid-no-scrollbar" style={{ width: "600px" }}>
                    <GridHeader>
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "150px" }} />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="ID" menu="filter" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Product Name" menu="filter" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Price" menu="filter" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Date" menu="filter" resizable></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <div className="k-grid-container">
                        <GridContent>
                            <div className="k-grid-table-wrap">
                                <GridTable>
                                    <colgroup>
                                        <col style={{ width: "150px" }} />
                                        <col style={{ width: "150px" }} />
                                        <col style={{ width: "150px" }} />
                                        <col style={{ width: "150px" }} />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-master-row">
                                            <TableTd>1</TableTd>
                                            <TableTd>Chai</TableTd>
                                            <TableTd>18</TableTd>
                                            <TableTd>09/20/1996</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt>
                                            <TableTd>2</TableTd>
                                            <TableTd>Chang</TableTd>
                                            <TableTd>19</TableTd>
                                            <TableTd>08/12/1996</TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                        </GridContent>
                    </div>
                </GridNormal>
            </section>
        </div>
    </>
);
