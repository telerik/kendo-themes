import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Grid, GridHeader, GridHeaderCell, GridHeaderTable, GridGroupingHeader, GridContainer, GridContent, GridTable, GridToolbar, GridPager } from '../../grid';
import { TableThead, TableRow, TableTd, TableTbody } from '../../table';

export const GridGroupingCheckboxMultipleColumns = ({ contentClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        toolbar={(
            <GridToolbar role="toolbar" aria-label="Grid toolbar">
                <Button icon="plus">Add</Button>
                <Button icon="filter">Filter</Button>
                <Button icon="grid-layout" selected>Group</Button>
                <span className="k-spacer" />
                <Button icon="more-vertical" fillMode="flat" aria-label="More options" />
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
                            <col /><col /><col className="k-select-col" style={{ width: '50px' }}/><col /><col /><col /><col />
                        </colgroup>
                        <TableThead role="rowgroup">
                            <TableRow role="row">
                                <GridHeaderCell columnTitle="ID" role="columnheader"></GridHeaderCell>
                                <GridHeaderCell columnTitle="Name" role="columnheader"></GridHeaderCell>
                                <GridHeaderCell role="columnheader" accessibleLabel="Select all">
                                    <Checkbox />
                                </GridHeaderCell>
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
                            <col /><col /><col className="k-select-col" style={{ width: '50px' }}/><col /><col /><col /><col />
                        </colgroup>
                        <TableTbody role="rowgroup">
                            {/* ID: 1 - expanded */}
                            <TableRow className="k-table-group-row k-grouping-row" role="row">
                                <TableTd role="gridcell" aria-expanded="true">
                                    <div className="k-grouping-row-content">
                                        <Checkbox />
                                        <Icon icon="chevron-down" />
                                        <span className="k-grouping-row-text">ID: 1</span>
                                    </div>
                                </TableTd>
                                <TableTd role="gridcell" colspan={6}></TableTd>
                            </TableRow>
                            {/* Name: Chai - expanded */}
                            <TableRow className="k-table-group-row k-grouping-row" role="row">
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd role="gridcell" aria-expanded="true">
                                    <div className="k-grouping-row-content">
                                        <Checkbox />
                                        <Icon icon="chevron-down" />
                                        <span className="k-grouping-row-text">Name: Chai</span>
                                    </div>
                                </TableTd>
                                <TableTd role="gridcell" colspan={5}></TableTd>
                            </TableRow>
                            {/* Data rows */}
                            <TableRow className="k-master-row" role="row">
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd className="k-select-cell" role="gridcell">
                                    <Checkbox />
                                </TableTd>
                                <TableTd role="gridcell">1</TableTd>
                                <TableTd role="gridcell">Chai</TableTd>
                                <TableTd role="gridcell">$18.00</TableTd>
                                <TableTd role="gridcell">Beverages</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row" role="row" alt>
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd className="k-select-cell" role="gridcell">
                                    <Checkbox />
                                </TableTd>
                                <TableTd role="gridcell">2</TableTd>
                                <TableTd role="gridcell">Chang</TableTd>
                                <TableTd role="gridcell">$19.00</TableTd>
                                <TableTd role="gridcell">Beverages</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row" role="row">
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd className="k-select-cell" role="gridcell">
                                    <Checkbox />
                                </TableTd>
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
                                <TableTd role="gridcell"></TableTd>
                                <TableTd role="gridcell"><strong>Average: 45</strong></TableTd>
                                <TableTd role="gridcell"><strong>Sum: 1.0</strong></TableTd>
                            </TableRow>
                            {/* ID: 2 - collapsed */}
                            <TableRow className="k-table-group-row k-grouping-row" role="row">
                                <TableTd role="gridcell" aria-expanded="false">
                                    <div className="k-grouping-row-content">
                                        <Checkbox />
                                        <Icon icon="chevron-right" />
                                        <span className="k-grouping-row-text">ID: 2</span>
                                    </div>
                                </TableTd>
                                <TableTd role="gridcell" colspan={6}></TableTd>
                            </TableRow>

                        </TableTbody>
                    </GridTable>
                </GridContent>
            </GridContainer>
        </>
    </Grid>
);
