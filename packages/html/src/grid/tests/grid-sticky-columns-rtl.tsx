import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';
import { GridWithStickyColumns, GridGroupingHeader, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

const styles = `
    .k-grid-header-wrap {
        border-width: 0px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <p>React Grid - Sticky columns - RTL</p>
            <GridWithStickyColumns className="k-rtl" style={{ height: "700px", width: "500px" }} groupingHeader={(
                <GridGroupingHeader>
                    <ChipList>
                        <Chip icon="sort-asc-small" text="shipName" actions={ <ChipAction type="remove"/> } />
                    </ChipList>
                </GridGroupingHeader>
            )}>
                <GridHeader draggable>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable style={{ width: "1434px" }}>
                            <colgroup>
                                <col width="32px" />
                                <col width="32px" />
                                <col width="200px" />
                                <col width="300px" />
                                <col width="280px" />
                                <col width="200px" />
                                <col width="300px" />
                                <col width="90px" />
                            </colgroup>
                            <TableThead>
                                <TableRow role="row" style={{ touchAction: "none" }}>
                                    <GridHeaderCell colspan={1} rowspan={1} style={{ left: '0px', right: '0px' }}></GridHeaderCell>
                                    <GridHeaderCell colspan={1} rowspan={1} className="k-hierarchy-cell" style={{ left: '0px', right: '0px' }}></GridHeaderCell>
                                    <GridHeaderCell sticky columnTitle="customerID" colspan={1} rowspan={1} style={{ left: '90px', right: '0px' }}></GridHeaderCell>
                                    <GridHeaderCell columnTitle="customerID" colspan={1} rowspan={1} sortable sortIcon="sort-desc-small"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="shipName" colspan={1} rowspan={1}></GridHeaderCell>
                                    <GridHeaderCell columnTitle="freight" colspan={1} rowspan={1}></GridHeaderCell>
                                    <GridHeaderCell columnTitle="shippedDate" colspan={1} rowspan={1}></GridHeaderCell>
                                    <GridHeaderCell sticky columnTitle="ID" colspan={1} rowspan={1} style={{ left: '0px', right: '200px' }}></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div style={{ position: "relative" }}>
                            <GridTable style={{ width: "1434px" }}>
                                <colgroup>
                                    <col width="32px" />
                                    <col width="32px" />
                                    <col width="200px" />
                                    <col className="k-sorted" width="300px" />
                                    <col width="280px" />
                                    <col width="200px" />
                                    <col width="300px" />
                                    <col width="90px" />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-table-group-row k-grouping-row" role="row">
                                        <TableTd colspan={8} style={{ left: '0px', right: '0px' }}>
                                            <p className="k-reset"><Icon icon="caret-alt-down" />Lehmanns Marktstand</p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-table-group-td k-group-cell" style={{ left: '0px', right: '0px' }}></TableTd>
                                        <TableTd className="k-hierarchy-cell"><Icon icon="plus" /></TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '90px', right: '0px' }}>LEHMS</TableTd>
                                        <TableTd colspan={1}>Saturday, January 13, 1996</TableTd>
                                        <TableTd colspan={1}>Lehmanns Marktstand</TableTd>
                                        <TableTd colspan={1}>25.83</TableTd>
                                        <TableTd colspan={1}>Tuesday, January 16, 1996</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '200px' }}>10279</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt role="row">
                                        <TableTd className="k-table-group-td k-group-cell" style={{ left: '0px', right: '0px' }}></TableTd>
                                        <TableTd className="k-hierarchy-cell"><Icon icon="plus" /></TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '90px', right: '0px' }}>LEHMS</TableTd>
                                        <TableTd colspan={1}>Saturday, January 13, 1996</TableTd>
                                        <TableTd colspan={1}>Lehmanns Marktstand</TableTd>
                                        <TableTd colspan={1}>25.83</TableTd>
                                        <TableTd colspan={1}>Tuesday, January 16, 1996</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '200px' }}>10279</TableTd>
                                    </TableRow>
                                    <TableRow className="k-table-group-row k-grouping-row" role="row">
                                        <TableTd colspan={8} style={{ left: '0px', right: '0px' }}>
                                            <p className="k-reset"><Icon icon="caret-alt-down" />Split Rail Beer &amp; Ale</p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-table-group-td k-group-cell" style={{ left: '0px', right: '0px' }}></TableTd>
                                        <TableTd className="k-hierarchy-cell"><Icon icon="plus" /></TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '90px', right: '0px' }}>SPLIR</TableTd>
                                        <TableTd colspan={1}>Monday, January 1, 1996</TableTd>
                                        <TableTd colspan={1}>Split Rail Beer &amp; Ale</TableTd>
                                        <TableTd colspan={1}>4.54</TableTd>
                                        <TableTd colspan={1}>Tuesday, January 30, 1996</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '200px' }}>10271</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt role="row">
                                        <TableTd className="k-table-group-td k-group-cell" style={{ left: '0px', right: '0px' }}></TableTd>
                                        <TableTd className="k-hierarchy-cell"><Icon icon="plus" /></TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '90px', right: '0px' }}>SPLIR</TableTd>
                                        <TableTd colspan={1}>Monday, January 1, 1996</TableTd>
                                        <TableTd colspan={1}>Split Rail Beer &amp; Ale</TableTd>
                                        <TableTd colspan={1}>4.54</TableTd>
                                        <TableTd colspan={1}>Tuesday, January 30, 1996</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '200px' }}>10271</TableTd>
                                    </TableRow>
                                    <TableRow className="k-table-group-row k-grouping-row" role="row">
                                        <TableTd colspan={8} style={{ left: '0px', right: '0px' }}>
                                            <p className="k-reset"><Icon icon="caret-alt-down" />Wartian Herkku</p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-table-group-td k-group-cell" style={{ left: '0px', right: '0px' }}></TableTd>
                                        <TableTd className="k-hierarchy-cell"><Icon icon="plus" /></TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '90px', right: '0px' }}>WARTH</TableTd>
                                        <TableTd colspan={1}>Friday, January 26, 1996</TableTd>
                                        <TableTd colspan={1}>Wartian Herkku</TableTd>
                                        <TableTd colspan={1}>25.73</TableTd>
                                        <TableTd colspan={1}>Wednesday, January 31, 1996</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '200px' }}>10266</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt role="row">
                                        <TableTd className="k-table-group-td k-group-cell" style={{ left: '0px', right: '0px' }}></TableTd>
                                        <TableTd className="k-hierarchy-cell"><Icon icon="plus" /></TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '90px', right: '0px' }}>WARTH</TableTd>
                                        <TableTd colspan={1}>Friday, January 26, 1996</TableTd>
                                        <TableTd colspan={1}>Wartian Herkku</TableTd>
                                        <TableTd colspan={1}>25.73</TableTd>
                                        <TableTd colspan={1}>Wednesday, January 31, 1996</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '200px' }}>10266</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithStickyColumns>
        </div>
    </>
);
