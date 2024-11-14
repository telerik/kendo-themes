import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';
import { Grid, GridHeader, GridHeaderCell, GridHeaderTable, GridGroupingHeader, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableRow, TableTd, TableTbody } from '../../table';

export const GridWithGrouping = ({ contentClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        groupingHeader={(
            <GridGroupingHeader dropClue>
                <ChipList>
                    <Chip icon="sort-asc-small" text="ID" actions={
                        <>
                            <ChipAction type="more"/>
                            <ChipAction type="remove"/>
                        </>
                    }/>
                    <Chip icon="sort-desc-small" text="Name" actions={
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
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col className="k-group-col"/><col className="k-group-col"/><col /><col /><col /><col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="ID"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Price"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Category"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className={contentClassName}>
                        <GridTable>
                            <colgroup>
                                <col className="k-group-col"/><col className="k-group-col"/><col /><col /><col /><col />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-table-group-row k-grouping-row">
                                    <TableTd colspan={6}>
                                        <p className="k-reset">
                                            <Icon icon="caret-alt-right" />
                                            ID: 1
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-table-group-row k-grouping-row">
                                    <TableTd colspan={6}>
                                        <p className="k-reset">
                                            <Icon icon="caret-alt-down" />
                                            ID: 2
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-table-group-row k-grouping-row">
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd colspan={5}>
                                        <p className="k-reset">
                                            <Icon icon="caret-alt-down" />
                                            Name: Chang
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd colspan={0}>2</TableTd>
                                    <TableTd colspan={0}>Chang</TableTd>
                                    <TableTd colspan={0}>$19.00</TableTd>
                                    <TableTd colspan={0}>Beverages</TableTd>
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
