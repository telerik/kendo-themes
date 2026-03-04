import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const GridWithMultiColumnHeaders = ({ headerWrapClassName, contentClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        children={(
            <>
                <GridHeader>
                    <div className={`k-grid-header-wrap ${headerWrapClassName}`}>
                        <GridHeaderTable role="none">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead role="rowgroup">
                                <TableRow role="row">
                                    <GridHeaderCell rowspan={3} colspan={1} columnTitle="ID" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={3} columnTitle="Product Information" role="columnheader"></GridHeaderCell>
                                </TableRow>
                                <TableRow role="row">
                                    <GridHeaderCell rowspan={2} colspan={1} columnTitle="Product Name" className="k-first" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={2} columnTitle="Unit" role="columnheader"></GridHeaderCell>
                                </TableRow>
                                <TableRow role="row">
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Units In Stock" className="k-first" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Units Price" role="columnheader"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className={contentClassName}>
                        <GridTable role="none">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableTbody role="rowgroup">
                                <TableRow className="k-master-row" role="row">
                                    <TableTd role="gridcell">1</TableTd>
                                    <TableTd role="gridcell">Chai</TableTd>
                                    <TableTd role="gridcell">39</TableTd>
                                    <TableTd role="gridcell">18</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt role="row">
                                    <TableTd role="gridcell">2</TableTd>
                                    <TableTd role="gridcell">Chang</TableTd>
                                    <TableTd role="gridcell">17</TableTd>
                                    <TableTd role="gridcell">19</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row">
                                    <TableTd role="gridcell">3</TableTd>
                                    <TableTd role="gridcell">Aniseed Syrup</TableTd>
                                    <TableTd role="gridcell">13</TableTd>
                                    <TableTd role="gridcell">10</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt role="row">
                                    <TableTd role="gridcell">4</TableTd>
                                    <TableTd role="gridcell">Chef Anton&apos;s Cajun Seasoning</TableTd>
                                    <TableTd role="gridcell">53</TableTd>
                                    <TableTd role="gridcell">22</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row">
                                    <TableTd role="gridcell">5</TableTd>
                                    <TableTd role="gridcell">Chef Anton&apos;s Gumbo Mix</TableTd>
                                    <TableTd role="gridcell">0</TableTd>
                                    <TableTd role="gridcell">21.35</TableTd>
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
