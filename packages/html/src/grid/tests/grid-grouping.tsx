import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';
import { GridNormal, GridWithGrouping, Grid, GridHeader, GridHeaderCell, GridHeaderTable, GridGroupingHeader, GridContainer, GridContent, GridTable, GridToolbar } from '../../grid';
import { TableThead, TableRow, TableTd, TableTbody } from '../../table';


const styles = `
    .k-grouping-header .k-grouping-dropclue {
        left: 0;
    }
    .k-drag-clue {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <div className="k-d-grid k-grid-cols-2">
                <span>angular grid drag clue</span>
                <span>jquery grid drag clue</span>

                <section className="section">
                    <div className="k-header k-drag-clue"><Icon className="k-drag-status" icon="cancel" />Drag clue</div>
                </section>

                <section className="section">
                    <div className="k-header k-drag-clue k-group-clue"><Icon className="k-drag-status" icon="plus" />Drag clue</div>
                </section>
            </div>

            <span>No grouping</span>

            <GridNormal pager={false} className="k-grid-no-scrollbar" toolbar={(
                <GridToolbar>
                    <Button>Button</Button>
                    <ButtonGroup>
                        <Button className="k-group-start" icon="bold"></Button>
                        <Button icon="italic"></Button>
                        <Button className="k-group-end" icon="underline"></Button>
                    </ButtonGroup>
                </GridToolbar>
            )}
            groupingHeader={(
                <GridGroupingHeader dropClue dropHint="Drag a column header and drop it here to group by that column" />
            )}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col /><col /><col /><col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell columnTitle="ID"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Price"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Category"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <GridTable>
                            <colgroup>
                                <col /><col /><col /><col />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-master-row">
                                    <TableTd>1</TableTd>
                                    <TableTd>Chai</TableTd>
                                    <TableTd>$18.00</TableTd>
                                    <TableTd>Beverages</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt>
                                    <TableTd>2</TableTd>
                                    <TableTd>Chang</TableTd>
                                    <TableTd>$19.00</TableTd>
                                    <TableTd>Beverages</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                </GridContainer>
            </GridNormal>

            <span>Grouping</span>

            <GridWithGrouping dropClue className="k-grid-no-scrollbar" toolbar={(
                <GridToolbar>
                    <Button>Button</Button>
                    <ButtonGroup>
                        <Button className="k-group-start" icon="bold"></Button>
                        <Button icon="italic"></Button>
                        <Button className="k-group-end" icon="underline"></Button>
                    </ButtonGroup>
                </GridToolbar>
            )}/>

            <span>Multicolumn Headers + Grouping</span>

            <Grid _renderAriaRoot className="k-grid-no-scrollbar"
                groupingHeader={(
                    <GridGroupingHeader role="toolbar" aria-label="Grouping">
                        <ChipList role="none">
                            <Chip icon="sort-asc-small" text="ID" role="button" actions={<ChipAction type="remove"/>}/>
                            <Chip icon="sort-desc-small" text="Product Name" role="button" actions={<ChipAction type="remove"/>}/>
                            <Chip icon="sort-asc-small" text="Units In Stock" role="button" actions={<ChipAction type="remove"/>}/>
                        </ChipList>
                    </GridGroupingHeader>
                )}>
                <>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable role="none">
                                <colgroup>
                                    <col className="k-group-col" /><col className="k-group-col" /><col className="k-group-col" /><col /><col /><col /><col />
                                </colgroup>
                                <TableThead role="rowgroup">
                                    <TableRow role="row">
                                        <GridHeaderCell rowspan={3} colspan={3} className="k-group-cell" role="presentation"></GridHeaderCell>
                                        <GridHeaderCell rowspan={3} colspan={1} columnTitle="ID" role="columnheader"></GridHeaderCell>
                                        <GridHeaderCell rowspan={1} colspan={3} columnTitle="Product Information" role="columnheader"></GridHeaderCell>
                                    </TableRow>
                                    <TableRow role="row">
                                        <GridHeaderCell rowspan={2} colspan={1} columnTitle="Product Name" className="k-first" role="columnheader"></GridHeaderCell>
                                        <GridHeaderCell rowspan={1} colspan={2} columnTitle="Unit" role="columnheader"></GridHeaderCell>
                                    </TableRow>
                                    <TableRow role="row">
                                        <GridHeaderCell rowspan={1} colspan={1} columnTitle="Units In Stock" className="k-first" role="columnheader"></GridHeaderCell>
                                        <GridHeaderCell rowspan={1} colspan={1} columnTitle="Unit Price" role="columnheader"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent>
                            <GridTable role="none">
                                <colgroup>
                                    <col className="k-group-col" /><col className="k-group-col" /><col className="k-group-col" /><col /><col /><col /><col />
                                </colgroup>
                                <TableTbody role="rowgroup">
                                    <TableRow className="k-table-group-row k-grouping-row" role="row">
                                        <TableTd colspan={7} role="gridcell" aria-expanded="true">
                                            <div className="k-grouping-row-content">
                                                <Icon icon="chevron-down" />
                                                <span className="k-grouping-row-text">ID: 1</span>
                                            </div>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-table-group-row k-grouping-row" role="row">
                                        <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                        <TableTd colspan={6} role="gridcell" aria-expanded="true">
                                            <div className="k-grouping-row-content">
                                                <Icon icon="chevron-down" />
                                                <span className="k-grouping-row-text">Product Name: Chai</span>
                                            </div>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-table-group-row k-grouping-row" role="row">
                                        <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                        <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                        <TableTd colspan={5} role="gridcell" aria-expanded="true">
                                            <div className="k-grouping-row-content">
                                                <Icon icon="chevron-down" />
                                                <span className="k-grouping-row-text">Units In Stock: 39</span>
                                            </div>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                        <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                        <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                        <TableTd role="gridcell">1</TableTd>
                                        <TableTd role="gridcell">Chai</TableTd>
                                        <TableTd role="gridcell">39</TableTd>
                                        <TableTd role="gridcell">$18.00</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt role="row">
                                        <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                        <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                        <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                        <TableTd role="gridcell">2</TableTd>
                                        <TableTd role="gridcell">Chai</TableTd>
                                        <TableTd role="gridcell">39</TableTd>
                                        <TableTd role="gridcell">$18.00</TableTd>
                                    </TableRow>
                                    <TableRow className="k-table-group-row k-grouping-row" role="row">
                                        <TableTd colspan={7} role="gridcell" aria-expanded="false">
                                            <div className="k-grouping-row-content">
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

        </div>
    </>
);
