import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Grid, GridHeader, GridHeaderCell, GridHeaderTable, GridGroupingHeader, GridContainer, GridContent, GridTable, GridToolbar, GridPager } from '../../grid';
import { TableThead, TableRow, TableTd, TableTbody } from '../../table';

export const GridGroupingCheckbox = ({ contentClassName, ...other }: any) => (
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
                            <col className="k-group-col"/><col className="k-group-col"/><col className="k-select-col" style={{ width: '50px' }}/><col /><col /><col /><col />
                        </colgroup>
                        <TableThead role="rowgroup">
                            <TableRow role="row">
                                <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell" role="presentation"></GridHeaderCell>
                                <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell" role="presentation"></GridHeaderCell>
                                <GridHeaderCell role="columnheader" accessibleLabel="Select all">
                                    <Checkbox />
                                </GridHeaderCell>
                                <GridHeaderCell colspan={1} columnTitle="ID" role="columnheader"></GridHeaderCell>
                                <GridHeaderCell colspan={1} columnTitle="Name" role="columnheader"></GridHeaderCell>
                                <GridHeaderCell colspan={1} columnTitle="Price" role="columnheader"></GridHeaderCell>
                                <GridHeaderCell colspan={1} columnTitle="Category" role="columnheader"></GridHeaderCell>
                            </TableRow>
                        </TableThead>
                    </GridHeaderTable>
                </div>
            </GridHeader>
            <GridContainer>
                <GridContent className={contentClassName}>
                    <GridTable role="none">
                        <colgroup>
                            <col className="k-group-col"/><col className="k-group-col"/><col className="k-select-col" style={{ width: '50px' }}/><col /><col /><col /><col />
                        </colgroup>
                        <TableTbody role="rowgroup">
                            <TableRow className="k-table-group-row k-grouping-row" role="row">
                                <TableTd colspan={7} role="gridcell" aria-expanded="true">
                                    <div className="k-grouping-row-content">
                                        <Checkbox />
                                        <Icon icon="chevron-down" />
                                        <span className="k-grouping-row-text">ID: 1</span>
                                    </div>
                                </TableTd>
                            </TableRow>
                            <TableRow className="k-table-group-row k-grouping-row" role="row">
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd colspan={6} role="gridcell" aria-expanded="true">
                                    <div className="k-grouping-row-content">
                                        <Checkbox />
                                        <Icon icon="chevron-down" />
                                        <span className="k-grouping-row-text">Name: Chai</span>
                                    </div>
                                </TableTd>
                            </TableRow>
                            <TableRow className="k-master-row" role="row">
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd className="k-select-cell" role="gridcell">
                                    <Checkbox />
                                </TableTd>
                                <TableTd colspan={0} role="gridcell">1</TableTd>
                                <TableTd colspan={0} role="gridcell">Chai</TableTd>
                                <TableTd colspan={0} role="gridcell">$18.00</TableTd>
                                <TableTd colspan={0} role="gridcell">Beverages</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row" role="row" alt>
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd className="k-select-cell" role="gridcell">
                                    <Checkbox />
                                </TableTd>
                                <TableTd colspan={0} role="gridcell">3</TableTd>
                                <TableTd colspan={0} role="gridcell">Aniseed Syrup</TableTd>
                                <TableTd colspan={0} role="gridcell">$10.00</TableTd>
                                <TableTd colspan={0} role="gridcell">Condiments</TableTd>
                            </TableRow>
                            <TableRow className="k-group-footer" role="row">
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                <TableTd role="gridcell"></TableTd>
                                <TableTd role="gridcell"></TableTd>
                                <TableTd role="gridcell"></TableTd>
                                <TableTd role="gridcell"><strong>Average: 45</strong></TableTd>
                                <TableTd role="gridcell"><strong>Sum: 1.0</strong></TableTd>
                            </TableRow>
                            <TableRow className="k-table-group-row k-grouping-row" role="row">
                                <TableTd colspan={7} role="gridcell" aria-expanded="false">
                                    <div className="k-grouping-row-content">
                                        <Checkbox />
                                        <Icon icon="chevron-right" />
                                        <span className="k-grouping-row-text">ID: 2</span>
                                    </div>
                                </TableTd>
                            </TableRow>
                        </TableTbody>
                    </GridTable>
                </GridContent>
            </GridContainer>
        </>
    </Grid>
);
