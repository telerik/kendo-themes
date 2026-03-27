import { Icon } from '../../icon';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const GridHierarchy = ({ containerClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        children={(
            <>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable role="none">
                            <colgroup>
                                <col className="k-hierarchy-col" />
                                <col style={{ width: "100px" }} />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead role="rowgroup">
                                <TableRow role="row">
                                    <GridHeaderCell className="k-hierarchy-cell" accessibleLabel="Detail"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="ID" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Category Name" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Description" role="columnheader"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className={containerClassName}>
                        <GridTable role="none">
                            <colgroup>
                                <col className="k-hierarchy-col"/>
                                <col style={{ width: "100px" }}/>
                                <col />
                                <col />
                            </colgroup>
                            <TableTbody role="rowgroup">
                                <TableRow className="k-master-row" role="row">
                                    <TableTd className="k-hierarchy-cell" role="gridcell" aria-expanded="false">
                                        <Icon icon="chevron-right" />
                                    </TableTd>
                                    <TableTd role="gridcell">1</TableTd>
                                    <TableTd role="gridcell">Beverages</TableTd>
                                    <TableTd role="gridcell">Soft drinks, coffees, teas, beers and ales</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-expanded" role="row" alt>
                                    <TableTd className="k-hierarchy-cell" role="gridcell" aria-expanded="true">
                                        <Icon icon="chevron-down" />
                                    </TableTd>
                                    <TableTd role="gridcell">2</TableTd>
                                    <TableTd role="gridcell">Condiments</TableTd>
                                    <TableTd role="gridcell">Sweet and savory sauces, relishes, spreads, and seasonings</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-detail-row" role="row">
                                    <TableTd className="k-hierarchy-cell" role="gridcell"></TableTd>
                                    <TableTd className="k-detail-cell" role="gridcell" colspan={3}>
                                        <Grid _renderAriaRoot className="k-grid-no-scrollbar">
                                            <GridHeader>
                                                <div className="k-grid-header-wrap">
                                                    <GridHeaderTable role="none">
                                                        <colgroup>
                                                            <col />
                                                            <col />
                                                            <col />
                                                        </colgroup>
                                                        <TableThead role="rowgroup">
                                                            <TableRow role="row">
                                                                <GridHeaderCell colspan={1} rowspan={1} columnTitle="ID" role="columnheader"></GridHeaderCell>
                                                                <GridHeaderCell colspan={1} rowspan={1} columnTitle="Product Name" role="columnheader"></GridHeaderCell>
                                                                <GridHeaderCell colspan={1} rowspan={1} columnTitle="Unit Price" role="columnheader"></GridHeaderCell>
                                                            </TableRow>
                                                        </TableThead>
                                                    </GridHeaderTable>
                                                </div>
                                            </GridHeader>
                                            <GridContainer>
                                                <GridContent>
                                                    <GridTable role="none">
                                                        <colgroup>
                                                            <col />
                                                            <col />
                                                            <col />
                                                        </colgroup>
                                                        <TableTbody role="rowgroup">
                                                            <TableRow className="k-master-row" role="row">
                                                                <TableTd colspan={1} role="gridcell">1</TableTd>
                                                                <TableTd colspan={1} role="gridcell">Aniseed Syrup</TableTd>
                                                                <TableTd colspan={1} role="gridcell">$10.00</TableTd>
                                                            </TableRow>
                                                            <TableRow alt className="k-master-row" role="row">
                                                                <TableTd colspan={1} role="gridcell">2</TableTd>
                                                                <TableTd colspan={1} role="gridcell">Chef Anton&apos;s Cajun Seasoning</TableTd>
                                                                <TableTd colspan={1} role="gridcell">$22.00</TableTd>
                                                            </TableRow>
                                                            <TableRow className="k-master-row" role="row">
                                                                <TableTd colspan={1} role="gridcell">3</TableTd>
                                                                <TableTd colspan={1} role="gridcell">Chef Anton&apos;s Gumbo Mix</TableTd>
                                                                <TableTd colspan={1} role="gridcell">$21.35</TableTd>
                                                            </TableRow>
                                                        </TableTbody>
                                                    </GridTable>
                                                </GridContent>
                                            </GridContainer>
                                        </Grid>
                                    </TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                </GridContainer>
            </>
        )}
        {...other}>
    </Grid>
);
