import { Grid } from '../grid.spec';
import { GridContainer } from '../grid-container.spec';
import { GridContent } from '../grid-content.spec';
import { GridHeader } from '../grid-header.spec';
import { GridHeaderCell } from '../grid-header-cell.spec';
import { GridHeaderTable } from '../grid-header-table.spec';
import { GridTable } from '../grid-table.spec';
import { TableThead } from '../../table/table-thead';
import { TableTbody } from '../../table/table-tbody';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';

export const GridWithStickyColumns = ({ contentClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        children={(
            <>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable style={{ width: "1100px" }}>
                            <colgroup>
                                <col style={{ width: "250px" }} />
                                <col style={{ width: "150px" }} />
                                <col style={{ width: "200px" }} />
                                <col style={{ width: "250px" }} />
                                <col style={{ width: "250px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell className="k-grid-header-sticky" rowspan={1} colspan={1} columnTitle="Product Name" style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Units In Stock"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Price"></GridHeaderCell>
                                    <GridHeaderCell className="k-grid-header-sticky" rowspan={1} colspan={1} columnTitle="Units on Order" style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Reorder Level"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className={contentClassName}>
                        <div style={{ position: "relative" }}>
                            <GridTable style={{ width: "1100px" }}>
                                <colgroup>
                                    <col width="250px" />
                                    <col width="150px" />
                                    <col width="200px" />
                                    <col width="250px" />
                                    <col width="250px" />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Chai</TableTd>
                                        <TableTd colspan={1}>39</TableTd>
                                        <TableTd colspan={1}>$18.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>10</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Chang</TableTd>
                                        <TableTd colspan={1}>17</TableTd>
                                        <TableTd colspan={1}>$19.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>40</TableTd>
                                        <TableTd colspan={1}>25</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Aniseed Syrup</TableTd>
                                        <TableTd colspan={1}>13</TableTd>
                                        <TableTd colspan={1}>$10.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>70</TableTd>
                                        <TableTd colspan={1}>25</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Chef Anton&apos;s Cajun Seasoning</TableTd>
                                        <TableTd colspan={1}>53</TableTd>
                                        <TableTd colspan={1}>$22.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" >
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Chef Anton&apos;s Gumbo Mix</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                        <TableTd colspan={1}>$21.35</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt >
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Grandma&apos;s Boysenberry Spread</TableTd>
                                        <TableTd colspan={1}>120</TableTd>
                                        <TableTd colspan={1}>$25.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>25</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Uncle Bob&apos;s Organic Dried Pears</TableTd>
                                        <TableTd colspan={1}>15</TableTd>
                                        <TableTd colspan={1}>$30.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>10</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Northwoods Cranberry Sauce</TableTd>
                                        <TableTd colspan={1}>6</TableTd>
                                        <TableTd colspan={1}>$40.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Mishi Kobe Niku</TableTd>
                                        <TableTd colspan={1}>29</TableTd>
                                        <TableTd colspan={1}>97</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Ikura</TableTd>
                                        <TableTd colspan={1}>31</TableTd>
                                        <TableTd colspan={1}>$31.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
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
