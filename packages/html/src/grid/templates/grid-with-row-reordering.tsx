import { Icon } from '../../icon';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridPager } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const GridWithRowReordering = ({ contentClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        pager={( <GridPager pageSizes={false} refresh={false} /> )}
        children={(
            <>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable role="none">
                            <colgroup>
                                <col className="k-drag-col" />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead role="rowgroup">
                                <TableRow role="row">
                                    <GridHeaderCell accessibleLabel="Reorder"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Product Id" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Unit Price" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Discontinued" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Category" role="columnheader"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className={contentClassName}>
                        <GridTable role="none">
                            <colgroup>
                                <col className="k-drag-col" />
                                <col />
                                <col />
                            </colgroup>
                            <TableTbody role="rowgroup">
                                <TableRow className="k-master-row" role="row">
                                    <TableTd className="k-drag-cell" role="gridcell" aria-label="Reorder"><Icon icon="reorder"/></TableTd>
                                    <TableTd role="gridcell">Chef Anton's Gumbo</TableTd>
                                    <TableTd role="gridcell">21.35</TableTd>
                                    <TableTd role="gridcell">false</TableTd>
                                    <TableTd role="gridcell">Condiments</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row" alt>
                                    <TableTd className="k-drag-cell" role="gridcell" aria-label="Reorder"><Icon icon="reorder"/></TableTd>
                                    <TableTd role="gridcell">Alice Mutton</TableTd>
                                    <TableTd role="gridcell">39</TableTd>
                                    <TableTd role="gridcell">false</TableTd>
                                    <TableTd role="gridcell">Meat/Poultry</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row">
                                    <TableTd className="k-drag-cell" role="gridcell" aria-label="Reorder"><Icon icon="reorder"/></TableTd>
                                    <TableTd role="gridcell">Singaporean Hokkien Fried Mee</TableTd>
                                    <TableTd role="gridcell">123.79</TableTd>
                                    <TableTd role="gridcell">true</TableTd>
                                    <TableTd role="gridcell">Meat/Poultry</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row" alt>
                                    <TableTd className="k-drag-cell" role="gridcell" aria-label="Reorder"><Icon icon="reorder"/></TableTd>
                                    <TableTd role="gridcell">Gorgonzola Telino</TableTd>
                                    <TableTd role="gridcell">12.5</TableTd>
                                    <TableTd role="gridcell">false</TableTd>
                                    <TableTd role="gridcell">Meat/Poultry</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row">
                                    <TableTd className="k-drag-cell" role="gridcell" aria-label="Reorder"><Icon icon="reorder"/></TableTd>
                                    <TableTd role="gridcell">Perth Pasties</TableTd>
                                    <TableTd role="gridcell">32.8</TableTd>
                                    <TableTd role="gridcell">false</TableTd>
                                    <TableTd role="gridcell">Meat/Poultry</TableTd>
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
