import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';
import { Grid, GridHeader, GridHeaderCell, GridHeaderTable, GridGroupingHeader, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableRow, TableTd, TableTbody } from '../../table';

export const GridWithGrouping = ({ dropClue, contentClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        groupingHeader={(
            <GridGroupingHeader dropClue={dropClue} role="toolbar" aria-label="Grouping">
                <ChipList role="none">
                    <Chip icon="sort-asc-small" text="ID" role="button" actions={
                        <>
                            <ChipAction type="more"/>
                            <ChipAction type="remove"/>
                        </>
                    }/>
                    <Chip icon="sort-desc-small" text="Name" role="button" actions={
                        <>
                            <ChipAction type="more"/>
                            <ChipAction type="remove"/>
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
                                <col className="k-group-col"/><col className="k-group-col"/><col /><col /><col /><col />
                            </colgroup>
                            <TableThead role="rowgroup">
                                <TableRow role="row">
                                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell" role="presentation"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell" role="presentation"></GridHeaderCell>
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
                                <col className="k-group-col"/><col className="k-group-col"/><col /><col /><col /><col />
                            </colgroup>
                            <TableTbody role="rowgroup">
                                <TableRow className="k-table-group-row k-grouping-row" role="row">
                                    <TableTd colspan={6} role="gridcell" aria-expanded="false">
                                        <p className="k-reset">
                                            <Icon icon="chevron-right" />
                                            ID: 1
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-table-group-row k-grouping-row" role="row">
                                    <TableTd colspan={6} role="gridcell" aria-expanded="true">
                                        <p className="k-reset">
                                            <Icon icon="chevron-down" />
                                            ID: 2
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-table-group-row k-grouping-row" role="row">
                                    <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                    <TableTd colspan={5} role="gridcell" aria-expanded="true">
                                        <p className="k-reset">
                                            <Icon icon="chevron-down" />
                                            Name: Chang
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row" alt>
                                    <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                    <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                    <TableTd colspan={0} role="gridcell">2</TableTd>
                                    <TableTd colspan={0} role="gridcell">Chang</TableTd>
                                    <TableTd colspan={0} role="gridcell">$19.00</TableTd>
                                    <TableTd colspan={0} role="gridcell">Beverages</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                </GridContainer>
            </>
        )}
        {...other} >
    </Grid>
);
