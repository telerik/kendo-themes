import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';
import { Grid, GridHeader, GridHeaderCell, GridHeaderTable, GridGroupingHeader, GridContainer, GridContent, GridTable, GridStickyContainer } from '../../grid';
import { TableThead, TableRow, TableTd, TableTbody } from '../../table';

/**
 * Grid with sticky group header and footer.
 *
 * When grouping is enabled with sticky headers, the grid renders additional
 * tables inside `.k-grid-sticky-container` elements — one at the top for the
 * current group header and one at the bottom for the group footer.
 * These are visual duplicates and must be hidden from assistive technologies.
 */
export const GridWithStickyGrouping = ({ contentClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        groupingHeader={(
            <GridGroupingHeader role="toolbar" aria-label="Grouping">
                <ChipList role="none">
                    <Chip icon="sort-asc-small" text="Rating" role="button" actions={
                        <>
                            <ChipAction type="remove" />
                        </>
                    } />
                </ChipList>
            </GridGroupingHeader>
        )}
        children={(
            <>
                <GridHeader draggable>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable role="none">
                            <colgroup>
                                <col className="k-group-col" /><col /><col /><col />
                            </colgroup>
                            <TableThead role="rowgroup">
                                <TableRow role="row">
                                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell" accessibleLabel="Group" />
                                    <GridHeaderCell colspan={1} columnTitle="Contact Name" role="columnheader" />
                                    <GridHeaderCell colspan={1} columnTitle="Job Title" role="columnheader" />
                                    <GridHeaderCell colspan={1} columnTitle="Country" role="columnheader" />
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    {/* Sticky group header — visual duplicate, hidden from AT */}
                    <GridStickyContainer role="none" aria-hidden="true">
                        <GridTable className="k-grid-group-sticky-header-table" role="none">
                            <colgroup>
                                <col /><col /><col /><col />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-table-group-row k-grouping-row">
                                    <TableTd colspan={4}>
                                        <p className="k-reset">
                                            <Icon icon="caret-alt-right" />
                                            Rating 3/5
                                        </p>
                                    </TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridStickyContainer>

                    {/* Main content */}
                    <GridContent className={contentClassName}>
                        <GridTable role="none">
                            <colgroup>
                                <col className="k-group-col" /><col /><col /><col />
                            </colgroup>
                            <TableTbody role="rowgroup">
                                <TableRow className="k-table-group-row k-grouping-row" role="row">
                                    <TableTd colspan={4} role="gridcell" aria-expanded="true">
                                        <p className="k-reset">
                                            <Icon icon="caret-alt-down" />
                                            Rating 5/5
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row">
                                    <TableTd className="k-table-group-td k-group-cell" role="gridcell" />
                                    <TableTd colspan={1} role="gridcell">Shelden Greyes</TableTd>
                                    <TableTd colspan={1} role="gridcell">Operator</TableTd>
                                    <TableTd colspan={1} role="gridcell">UK</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row" alt>
                                    <TableTd className="k-table-group-td k-group-cell" role="gridcell" />
                                    <TableTd colspan={1} role="gridcell">Nerissa Dapple</TableTd>
                                    <TableTd colspan={1} role="gridcell">Web Designer</TableTd>
                                    <TableTd colspan={1} role="gridcell">Norway</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>

                    {/* Sticky group footer — visual duplicate, hidden from AT */}
                    <GridStickyContainer position="bottom" role="none" aria-hidden="true">
                        <GridTable className="k-grid-group-sticky-footer-table" role="none">
                            <colgroup>
                                <col /><col /><col /><col />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-group-footer">
                                    <TableTd colspan={4}>Total items: 2</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridStickyContainer>
                </GridContainer>
            </>
        )}
        {...other}
    />
);
