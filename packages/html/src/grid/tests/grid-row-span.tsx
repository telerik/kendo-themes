import { GridNormal, GridHeader, GridContainer, GridContent, GridHeaderTable, GridHeaderCell, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';


export default () =>(
    <>
        <div id="test-area">

            <span>Grid - cell rowspan</span>

            <section>
                <GridNormal groupingHeader={false}>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="Column 1" />
                                        <GridHeaderCell columnTitle="Column 2" />
                                        <GridHeaderCell columnTitle="Column 3" />
                                        <GridHeaderCell columnTitle="Column 4" />
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent>
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd>1</TableTd>
                                        <TableTd>Row</TableTd>
                                        <TableTd rowspan="3" className="k-table-td-row-span">Row span 3</TableTd>
                                        <TableTd>No-spanned cell</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt>
                                        <TableTd>2</TableTd>
                                        <TableTd rowspan="4" className="k-table-td-row-span">Row span 4</TableTd>
                                        <TableTd>No-spanned cell</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row">
                                        <TableTd>3</TableTd>
                                        <TableTd>No-spanned cell</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt>
                                        <TableTd>4</TableTd>
                                        <TableTd>No-spanned cell</TableTd>
                                        <TableTd rowspan="3" className="k-table-td-row-span k-focus">Row span 3 + Focus</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row">
                                        <TableTd>5</TableTd>
                                        <TableTd>No-spanned cell</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt>
                                        <TableTd>6</TableTd>
                                        <TableTd>No-spanned cell</TableTd>
                                        <TableTd>No-spanned cell</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>



        </div>
    </>
);
