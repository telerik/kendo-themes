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
 * These are interactive (clickable, keyboard-navigable) and carry the same
 * ARIA semantics as the real group header/footer rows they mirror.
 */
export const GridWithStickyGrouping = ({ contentClassName, ...other }: any) => (
    <Grid _renderAriaRoot ariaRowCount={5}
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
                                <TableRow role="row" aria-rowindex={1}>
                                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell" role="presentation" />
                                    <GridHeaderCell colspan={1} columnTitle="Contact Name" role="columnheader" />
                                    <GridHeaderCell colspan={1} columnTitle="Job Title" role="columnheader" />
                                    <GridHeaderCell colspan={1} columnTitle="Country" role="columnheader" />
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    {/* Sticky group header — mirrors real group header row semantics */}
                    <GridStickyContainer role="none">
                        <GridTable className="k-grid-group-sticky-header-table" role="none">
                            <colgroup>
                                <col /><col /><col /><col />
                            </colgroup>
                            <TableTbody role="rowgroup">
                                <TableRow className="k-table-group-row k-grouping-row" role="row" aria-rowindex={2}>
                                    <TableTd colspan={4} role="gridcell" aria-expanded={false} tabIndex={-1} aria-colindex={1}>
                                        <p className="k-reset">
                                            <Icon icon="chevron-right" />
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
                                <TableRow className="k-table-group-row k-grouping-row" role="row" aria-rowindex={2}>
                                    <TableTd colspan={4} role="gridcell" aria-expanded="true">
                                        <p className="k-reset">
                                            <Icon icon="chevron-down" />
                                            Rating 5/5
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row" aria-rowindex={3}>
                                    <TableTd className="k-table-group-td k-group-cell" role="presentation" />
                                    <TableTd colspan={1} role="gridcell">Shelden Greyes</TableTd>
                                    <TableTd colspan={1} role="gridcell">Operator</TableTd>
                                    <TableTd colspan={1} role="gridcell">UK</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row" aria-rowindex={4} alt>
                                    <TableTd className="k-table-group-td k-group-cell" role="presentation" />
                                    <TableTd colspan={1} role="gridcell">Nerissa Dapple</TableTd>
                                    <TableTd colspan={1} role="gridcell">Web Designer</TableTd>
                                    <TableTd colspan={1} role="gridcell">Norway</TableTd>
                                </TableRow>
                                <TableRow className="k-group-footer" role="row" aria-rowindex={5}>
                                    <TableTd colspan={4} role="gridcell">Total items: 2</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>

                    {/* Sticky group footer — mirrors real group footer row semantics */}
                    <GridStickyContainer position="bottom" role="none">
                        <GridTable className="k-grid-group-sticky-footer-table" role="none">
                            <colgroup>
                                <col /><col /><col /><col />
                            </colgroup>
                            <TableTbody role="rowgroup">
                                <TableRow className="k-group-footer" role="row" aria-rowindex={5}>
                                    <TableTd colspan={4} role="gridcell" tabIndex={-1}>Total items: 2</TableTd>
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
