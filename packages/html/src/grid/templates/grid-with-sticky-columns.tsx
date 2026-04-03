import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const GridWithStickyColumns = ({ contentClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        children={(
            <>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable role="none" style={{ width: "1100px" }}>
                            <colgroup>
                                <col style={{ width: "250px" }} />
                                <col style={{ width: "150px" }} />
                                <col style={{ width: "200px" }} />
                                <col style={{ width: "250px" }} />
                                <col style={{ width: "250px" }} />
                            </colgroup>
                            <TableThead role="rowgroup">
                                <TableRow role="row">
                                    <GridHeaderCell className="k-grid-header-sticky" rowspan={1} colspan={1} columnTitle="Product Name" role="columnheader" style={{ left: '0px', borderRightWidth: "1px" }}></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Units In Stock" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Price" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell className="k-grid-header-sticky" rowspan={1} colspan={1} columnTitle="Units on Order" role="columnheader" style={{ left: "250px", borderRightWidth: "1px" }}></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Reorder Level" role="columnheader"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className={contentClassName}>
                        <div style={{ position: "relative" }}>
                            <GridTable role="none" style={{ width: "1100px" }}>
                                <colgroup>
                                    <col width="250px" />
                                    <col width="150px" />
                                    <col width="200px" />
                                    <col width="250px" />
                                    <col width="250px" />
                                </colgroup>
                                <TableTbody role="rowgroup">
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: '0px', borderRightWidth: "1px" }}>Chai</TableTd>
                                        <TableTd colspan={1} role="gridcell">39</TableTd>
                                        <TableTd colspan={1} role="gridcell">$18.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: "250px", borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1} role="gridcell">10</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: '0px', borderRightWidth: "1px" }}>Chang</TableTd>
                                        <TableTd colspan={1} role="gridcell">17</TableTd>
                                        <TableTd colspan={1} role="gridcell">$19.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: "250px", borderRightWidth: "1px" }}>40</TableTd>
                                        <TableTd colspan={1} role="gridcell">25</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: '0px', borderRightWidth: "1px" }}>Aniseed Syrup</TableTd>
                                        <TableTd colspan={1} role="gridcell">13</TableTd>
                                        <TableTd colspan={1} role="gridcell">$10.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: "250px", borderRightWidth: "1px" }}>70</TableTd>
                                        <TableTd colspan={1} role="gridcell">25</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: '0px', borderRightWidth: "1px" }}>Chef Anton&apos;s Cajun Seasoning</TableTd>
                                        <TableTd colspan={1} role="gridcell">53</TableTd>
                                        <TableTd colspan={1} role="gridcell">$22.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: "250px", borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1} role="gridcell">0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: '0px', borderRightWidth: "1px" }}>Chef Anton&apos;s Gumbo Mix</TableTd>
                                        <TableTd colspan={1} role="gridcell">0</TableTd>
                                        <TableTd colspan={1} role="gridcell">$21.35</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: "250px", borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1} role="gridcell">0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: '0px', borderRightWidth: "1px" }}>Grandma&apos;s Boysenberry Spread</TableTd>
                                        <TableTd colspan={1} role="gridcell">120</TableTd>
                                        <TableTd colspan={1} role="gridcell">$25.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: "250px", borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1} role="gridcell">25</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: '0px', borderRightWidth: "1px" }}>Uncle Bob&apos;s Organic Dried Pears</TableTd>
                                        <TableTd colspan={1} role="gridcell">15</TableTd>
                                        <TableTd colspan={1} role="gridcell">$30.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: "250px", borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1} role="gridcell">10</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: '0px', borderRightWidth: "1px" }}>Northwoods Cranberry Sauce</TableTd>
                                        <TableTd colspan={1} role="gridcell">6</TableTd>
                                        <TableTd colspan={1} role="gridcell">$40.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: "250px", borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1} role="gridcell">0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: '0px', borderRightWidth: "1px" }}>Mishi Kobe Niku</TableTd>
                                        <TableTd colspan={1} role="gridcell">29</TableTd>
                                        <TableTd colspan={1} role="gridcell">97</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: "250px", borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1} role="gridcell">0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: '0px', borderRightWidth: "1px" }}>Ikura</TableTd>
                                        <TableTd colspan={1} role="gridcell">31</TableTd>
                                        <TableTd colspan={1} role="gridcell">$31.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} role="gridcell" style={{ left: "250px", borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1} role="gridcell">0</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </>
        )}
        {...other}>
    </Grid>
);
