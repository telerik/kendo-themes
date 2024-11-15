import { GridWithMultiColumnHeaders, GridWithLockedColumns, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <GridWithLockedColumns className="k-grid-no-scrollbar" style={{ height: "300px" }}>
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
                                    <TableRow className="k-master-row" style={{ height: "37px" }}>
                                        <TableTd colspan={1}>
                                            Chai
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" alt style={{ height: "37px" }}>
                                        <TableTd colspan={1}>
                                            Chang
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" style={{ height: "37px" }}>
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
                    <GridContent style={{ width: "447px" }}>
                        <div className="k-grid-table-wrap" style={{ position: "relative" }}>
                            <GridTable style={{ transform: "translateY(0px)", width: "900px" }}>
                                <colgroup>
                                    <col style={{ width: "300px" }} /><col style={{ width: "300px" }} /><col style={{ width: "300px" }} />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row" style={{ height: "37px" }}>
                                        <TableTd colspan={1}>39</TableTd>
                                        <TableTd colspan={1}>18</TableTd>
                                        <TableTd colspan={1}>false</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" alt style={{ height: "37px" }}>
                                        <TableTd colspan={1}>17</TableTd>
                                        <TableTd colspan={1}>19</TableTd>
                                        <TableTd colspan={1}>false</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" style={{ height: "37px" }}>
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
            </GridWithLockedColumns>

            <div className="k-rtl">
                <GridWithMultiColumnHeaders headerWrapClassName="k-auto-scrollable" contentClassName="k-auto-scrollable" className="k-grid-no-scrollbar" />
            </div>

        </div>
    </>
);
