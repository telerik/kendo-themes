import { GridNormal, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export default () =>(
    <>
        <div id="test-area">
            <GridNormal _renderAriaRoot={false} pager={false} groupingHeader={false} className="k-grid-display-block k-grid-no-scrollbar" style={{ height: "350px" }}>
                <GridHeader>
                    <div className="k-grid-header-wrap k-auto-scrollable">
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: "225px" }} />
                                <col style={{ width: "500px" }} />
                                <col style={{ width: "255px" }} />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell scope="col" columnTitle="OrderID"></GridHeaderCell>
                                    <GridHeaderCell scope="col" columnTitle="Ship Name"></GridHeaderCell>
                                    <GridHeaderCell scope="col" columnTitle="Freight"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className="k-auto-scrollable" style={{ height: "280px" }}>
                        <GridTable style={{ height: "auto" }}>
                            <colgroup>
                                <col style={{ width: "225px" }} />
                                <col style={{ width: "500px" }} />
                                <col style={{ width: "255px" }} />
                                <col />
                            </colgroup>
                            <TableTbody></TableTbody>
                        </GridTable>
                        <div className="k-grid-norecords">
                            <div className="k-grid-norecords-template">No records available.</div>
                        </div>
                        <div className="k-grid-content-expander" style={{ width: "982px" }}></div>
                    </GridContent>
                </GridContainer>
            </GridNormal>
            <h4>Angular Grid</h4>
            <GridNormal pager={false} groupingHeader={false} >
                <GridHeader style={{ padding: "0px 16px 0px 0px" }}>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="CompanyName"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="ContactName"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="City"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="ContactTitle"></GridHeaderCell>
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
                                    <col style={{ width: "140px" }} />
                                    <col style={{ width: "120px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "130px" }}/>
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-grid-norecords">
                                        <TableTd colspan={4}>No records available.</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                        <div className="k-height-container">
                            <div style={{ height: "0px" }}></div>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridNormal>
        </div>
    </>
);
