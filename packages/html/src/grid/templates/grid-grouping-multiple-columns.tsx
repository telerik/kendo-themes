import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';
import { Button } from '../../button';
import { Grid, GridHeader, GridHeaderCell, GridHeaderTable, GridGroupingHeader, GridContainer, GridContent, GridTable, GridToolbar, GridPager } from '../../grid';
import { TableThead, TableRow, TableTd, TableTbody } from '../../table';

export const GridGroupingMultipleColumns = ({ contentClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        toolbar={(
            <GridToolbar role="toolbar" aria-label="Grid toolbar">
                <Button icon="plus">Add</Button>
                <Button icon="filter">Filter</Button>
                <Button icon="grid-layout" selected>Group</Button>
                <span className="k-spacer" />
                <Button icon="more-vertical" fillMode="flat" />
            </GridToolbar>
        )}
        groupingHeader={(
            <GridGroupingHeader role="toolbar" aria-label="Grouping">
                <ChipList role="none">
                    <Chip icon="sort-asc-small" text="ID" role="button" actions={<ChipAction type="remove"/>}/>
                    <Chip icon="sort-desc-small" text="Name" role="button" actions={<ChipAction type="remove"/>}/>
                </ChipList>
            </GridGroupingHeader>
        )}
        pager={<GridPager />}
        {...other}>
        <>
            <GridHeader draggable>
                <div className="k-grid-header-wrap">
                    <GridHeaderTable role="none">
                        <colgroup>
                            <col /><col /><col /><col /><col /><col />
                        </colgroup>
                        <TableThead role="rowgroup">
                            <TableRow role="row">
                                <GridHeaderCell columnTitle="ID" role="columnheader"></GridHeaderCell>
                                <GridHeaderCell columnTitle="Name" role="columnheader"></GridHeaderCell>
                                <GridHeaderCell columnTitle="Product ID" role="columnheader"></GridHeaderCell>
                                <GridHeaderCell columnTitle="Product Name" role="columnheader"></GridHeaderCell>
                                <GridHeaderCell columnTitle="Price" role="columnheader"></GridHeaderCell>
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
                            <col /><col /><col /><col /><col /><col />
                        </colgroup>
                        <TableTbody role="rowgroup">
                            {/* ID: 1 - expanded, spans group1 col + all remaining */}
                            <TableRow className="k-table-group-row k-grouping-row" role="row">
                                <TableTd role="gridcell" aria-expanded="true">
                                    <div className="k-grouping-row-content">
                                        <Icon icon="chevron-down" />
                                        <span className="k-grouping-row-text">ID: 1</span>
                                    </div>
                                </TableTd>
                                <TableTd role="gridcell" colspan={5}></TableTd>
                            </TableRow>
                            {/* Name: Chai - expanded, empty group1 col, spans group2 col + data cols */}
                            <TableRow className="k-table-group-row k-grouping-row" role="row">
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd role="gridcell" aria-expanded="true">
                                    <div className="k-grouping-row-content">
                                        <Icon icon="chevron-down" />
                                        <span className="k-grouping-row-text">Name: Chai</span>
                                    </div>
                                </TableTd>
                                <TableTd role="gridcell" colspan={4}></TableTd>
                            </TableRow>
                            {/* Data rows - empty group1 + group2 cols, data in remaining 4 */}
                            <TableRow className="k-master-row" role="row">
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd role="gridcell">1</TableTd>
                                <TableTd role="gridcell">Chai</TableTd>
                                <TableTd role="gridcell">$18.00</TableTd>
                                <TableTd role="gridcell">Beverages</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row" role="row" alt>
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd role="gridcell">2</TableTd>
                                <TableTd role="gridcell">Chang</TableTd>
                                <TableTd role="gridcell">$19.00</TableTd>
                                <TableTd role="gridcell">Beverages</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row" role="row">
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd role="gridcell">3</TableTd>
                                <TableTd role="gridcell">Aniseed Syrup</TableTd>
                                <TableTd role="gridcell">$10.00</TableTd>
                                <TableTd role="gridcell">Condiments</TableTd>
                            </TableRow>
                            {/* Group footer */}
                            <TableRow className="k-group-footer" role="row">
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd role="gridcell"></TableTd>
                                <TableTd role="gridcell"></TableTd>
                                <TableTd role="gridcell"><strong>Average: 45</strong></TableTd>
                                <TableTd role="gridcell"><strong>Sum: 1.0</strong></TableTd>
                            </TableRow>
                            {/* ID: 2 - collapsed */}
                            <TableRow className="k-table-group-row k-grouping-row" role="row">
                                <TableTd role="gridcell" aria-expanded="false">
                                    <div className="k-grouping-row-content">
                                        <Icon icon="chevron-right" />
                                        <span className="k-grouping-row-text">ID: 2</span>
                                    </div>
                                </TableTd>
                                <TableTd role="gridcell" colspan={5}></TableTd>
                            </TableRow>

                        </TableTbody>
                    </GridTable>
                </GridContent>
            </GridContainer>
        </>
    </Grid>
);
