import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <Grid _renderAriaRoot className="k-grid-lockedcolumns k-grid-no-scrollbar" style={{ height: "300px" }}>
                <GridHeader>
                    <div className="k-grid-header-locked" style={{ width: "300px" }}>
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: "300px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell rowspan={2} colspan={1} columnTitle="Name"></GridHeaderCell>
                                </TableRow>
                                <TableRow></TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                    <div className="k-grid-header-wrap" style={{ width: "434px" }}>
                        <GridHeaderTable style={{ width: "900px" }}>
                            <colgroup>
                                <col style={{ width: "300px" }} /><col style={{ width: "300px" }} /><col style={{ width: "300px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell rowspan={1} colspan={3} columnTitle="Availability"></GridHeaderCell>
                                </TableRow>
                                <TableRow>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Units In Stock"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Unit Price"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Discontinued"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <div className="k-grid-content-locked" style={{ width: "300px", height: "272px" }}>
                        <div className="k-grid-table-wrap" style={{ position: "relative" }}>
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: "300px" }} />
                                </colgroup>
                                <TableTbody>
                                    <TableRow style={{ height: "37px" }}>
                                        <TableTd colspan={1}>
                                            Chai
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-alt" alt style={{ height: "37px" }}>
                                        <TableTd colspan={1}>
                                            Chang
                                        </TableTd>
                                    </TableRow>
                                    <TableRow style={{ height: "37px" }}>
                                        <TableTd colspan={1}>
                                            Aniseed Syrup
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                        <div className="k-height-container">
                            <div style={{ height: '0px' }}></div>
                        </div>
                    </div>
                    <GridContent className="k-virtual-content" style={{ width: "447px" }}>
                        <div className="k-grid-table-wrap" style={{ position: "relative" }}>
                            <GridTable style={{ transform: "translateY(0px)", width: "900px" }}>
                                <colgroup>
                                    <col style={{ width: "300px" }} /><col style={{ width: "300px" }} /><col style={{ width: "300px" }} />
                                </colgroup>
                                <TableTbody>
                                    <TableRow style={{ height: "37px" }}>
                                        <TableTd colspan={1}>39</TableTd>
                                        <TableTd colspan={1}>18</TableTd>
                                        <TableTd colspan={1}>false</TableTd>
                                    </TableRow>
                                    <TableRow className="k-alt" alt style={{ height: "37px" }}>
                                        <TableTd colspan={1}>17</TableTd>
                                        <TableTd colspan={1}>19</TableTd>
                                        <TableTd colspan={1}>false</TableTd>
                                    </TableRow>
                                    <TableRow style={{ height: "37px" }}>
                                        <TableTd colspan={1}>13</TableTd>
                                        <TableTd colspan={1}>10</TableTd>
                                        <TableTd colspan={1}>false</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                        <div className="k-height-container">
                            <div style={{ height: '0px' }}></div>
                        </div>
                    </GridContent>
                </GridContainer>
            </Grid>

            <div className="k-rtl">
                <Grid className="k-grid-no-scrollbar" style={{ height: "200px" }}>
                    <GridHeader>
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "160px" }} />
                                    <col style={{ width: "160px" }} />
                                    <col style={{ width: "160px" }} />
                                    <col style={{ width: "160px" }} />
                                    <col style={{ width: "160px" }} />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell className="k-filterable" scope="col" rowspan={3} columnTitle="Company" menu="column"></GridHeaderCell>
                                        <GridHeaderCell scope="col" colspan={5} columnTitle="Contact Info"></GridHeaderCell>
                                    </TableRow>
                                    <TableRow>
                                        <GridHeaderCell className="k-filterable k-first" scope="col" rowspan={2} columnTitle="First Name" menu="column"></GridHeaderCell>
                                        <GridHeaderCell className="k-filterable" scope="col" rowspan={2} columnTitle="Last Name" menu="column"></GridHeaderCell>
                                        <GridHeaderCell scope="col" colspan={2} columnTitle="Location"></GridHeaderCell>
                                        <GridHeaderCell className="k-filterable" scope="col" rowspan={2} columnTitle="Phone" menu="column"></GridHeaderCell>
                                    </TableRow>
                                    <TableRow>
                                        <GridHeaderCell className="k-filterable k-first" scope="col" columnTitle="Country" menu="column"></GridHeaderCell>
                                        <GridHeaderCell className="k-filterable" scope="col" columnTitle="City" menu="column"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                            <div className="k-resize-handle" style={{ top: '0px', left: "417px", height: "89px", width: "9px" }}>
                                <div className="k-resize-handle-inner"></div>
                            </div>
                        </div>
                    </GridHeader>
                    <GridContent className="k-auto-scrollable">
                        <GridTable style={{ height: 'auto' }}>
                            <colgroup>
                                <col style={{ width: "160px" }} />
                                <col style={{ width: "160px" }} />
                                <col style={{ width: "160px" }} />
                                <col style={{ width: "160px" }} />
                                <col style={{ width: "160px" }} />
                                <col />
                            </colgroup>
                            <TableTbody></TableTbody>
                        </GridTable>
                    </GridContent>
                </Grid>

            </div>

        </div>
    </>
);
