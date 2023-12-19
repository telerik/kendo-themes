import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';
import { Grid, GridHeader, GridHeaderCell, GridHeaderTable, GridGroupingHeader, GridContainer, GridContent, GridTable, GridToolbar } from '../../grid';
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
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>angular no grouping</span>
            <span>jquery no grouping</span>

            <Grid _renderAriaRoot className="k-grid-no-scrollbar" toolbar={(
                <GridToolbar>
                    <Button>Button</Button>
                    <ButtonGroup>
                        <Button icon="bold"></Button>
                        <Button icon="italic"></Button>
                        <Button icon="underline"></Button>
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
                                    <GridHeaderCell columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Price"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Available"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Units"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className="k-virtual-content">
                        <div className="k-grid-table-wrap">
                            <GridTable>
                                <colgroup>
                                    <col /><col /><col /><col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow>
                                        <TableTd>Chai</TableTd>
                                        <TableTd>30</TableTd>
                                        <TableTd>false</TableTd>
                                        <TableTd>15</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </Grid>

            <Grid className="k-grid-no-scrollbar" toolbar={(
                <GridToolbar>
                    <Button>Button</Button>
                    <ButtonGroup>
                        <Button icon="bold"></Button>
                        <Button icon="italic"></Button>
                        <Button icon="underline"></Button>
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
                                    <GridHeaderCell columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Price"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Available"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Units"></GridHeaderCell>
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
                                <TableRow>
                                    <TableTd>Chai</TableTd>
                                    <TableTd>30</TableTd>
                                    <TableTd>false</TableTd>
                                    <TableTd>15</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                </GridContainer>
            </Grid>

            <span>angular with grouping</span>
            <span>jquery with grouping</span>

            <Grid _renderAriaRoot className="k-grid-no-scrollbar" toolbar={(
                <GridToolbar>
                    <Button>Button</Button>
                    <ButtonGroup>
                        <Button icon="bold"></Button>
                        <Button icon="italic"></Button>
                        <Button icon="underline"></Button>
                    </ButtonGroup>
                </GridToolbar>
            )}
            groupingHeader={(
                <GridGroupingHeader dropClue>
                    <ChipList>
                        <Chip icon="sort-asc-small" actions={ <ChipAction type="remove"/> }>Price</Chip>
                        <Chip icon="sort-desc-small" actions={ <ChipAction type="remove"/> }>Name</Chip>
                    </ChipList>
                </GridGroupingHeader>
            )}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col className="k-group-col"/><col /><col /><col /><col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell className="k-group-cell"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Price"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Discontinued"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Units"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className="k-virtual-content">
                        <div className="k-grid-table-wrap">
                            <GridTable>
                                <colgroup>
                                    <col className="k-group-col" /><col /><col /><col /><col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-table-group-row k-grouping-row">
                                        <TableTd colspan={5}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-right"></Icon>
                                                Price: 19
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-table-group-row k-grouping-row">
                                        <TableTd colspan={5}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-down"></Icon>
                                                Price: 30
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow>
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd>Chai</TableTd>
                                        <TableTd>30</TableTd>
                                        <TableTd>false</TableTd>
                                        <TableTd>15</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </Grid>

            <Grid className="k-grid-no-scrollbar k-grid-display-block" toolbar={(
                <GridToolbar>
                    <Button>Button</Button>
                    <ButtonGroup>
                        <Button icon="bold"></Button>
                        <Button icon="italic"></Button>
                        <Button icon="underline"></Button>
                    </ButtonGroup>
                </GridToolbar>
            )}
            groupingHeader={(
                <GridGroupingHeader dropClue>
                    <ChipList>
                        <Chip icon="sort-asc-small" actions={ <ChipAction type="remove"/> }>Price</Chip>
                        <Chip icon="sort-desc-small" actions={ <ChipAction type="remove"/> }>Name</Chip>
                    </ChipList>
                </GridGroupingHeader>
            )}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col className="k-group-col" /><col /><col /><col /><col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell className="k-group-cell" scope="col"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Price"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Available"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Units"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <GridTable>
                            <colgroup>
                                <col className="k-group-col" /><col /><col /><col /><col />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-table-group-row k-grouping-row">
                                    <TableTd colspan={5}>
                                        <p className="k-reset">
                                            <Icon icon="caret-alt-right" />
                                            Price: 19
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-table-group-row k-grouping-row">
                                    <TableTd colspan={5}>
                                        <p className="k-reset">
                                            <Icon icon="caret-alt-down" />
                                            Price: 30
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow>
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd>Chai</TableTd>
                                    <TableTd>30</TableTd>
                                    <TableTd>false</TableTd>
                                    <TableTd>15</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                </GridContainer>
            </Grid>

            <span>angular grid drag clue</span>
            <span>jquery grid drag clue</span>

            <section className="section">
                <div className="k-header k-drag-clue"><Icon className="k-drag-status" icon="cancel" />Drag clue</div>
            </section>

            <section className="section">
                <div className="k-header k-drag-clue k-group-clue"><Icon className="k-drag-status" icon="plus" />Drag clue</div>
            </section>

        </div>
    </>
);
