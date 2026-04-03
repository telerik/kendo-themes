import { Grid, GridHeader, GridGroupingHeader, GridContainer, GridContent, GridHeaderTable, GridHeaderCell, GridTable, GridFooter, GridFooterTable, GridPager } from '../../grid';
import { nextId } from '../../misc';
import { TableThead, TableTbody, TableTfoot, TableRow, TableTd } from '../../table';

export const GridNormal = ({ contentClassName, ...other }: any) => {
    const gridId = nextId('grid');

    return (
        <Grid _renderAriaRoot
            ariaRootId={gridId}
            ariaColCount={4}
            ariaRowCount={8}
            pager={( <GridPager /> )}
            groupingHeader={(
                <GridGroupingHeader dropHint="Drag a column header and drop it here to group by that column" role="toolbar" aria-label="Grouping" aria-controls={gridId} />
            )}
            children={(
                <>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable role="none">
                                <colgroup>
                                    <col style={{ width: "240px" }} />
                                    <col />
                                    <col />
                                    <col style={{ width: "150px" }} />
                                </colgroup>
                                <TableThead role="rowgroup">
                                    <TableRow role="row" aria-rowindex={1}>
                                        <GridHeaderCell columnTitle="Contact Name" role="columnheader" aria-sort="ascending" aria-colindex={1} />
                                        <GridHeaderCell columnTitle="Contact Title" role="columnheader" aria-colindex={2} />
                                        <GridHeaderCell columnTitle="Company Name" role="columnheader" aria-colindex={3} />
                                        <GridHeaderCell columnTitle="Country" role="columnheader" aria-colindex={4} />
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent className={contentClassName}>
                            <GridTable role="none">
                                <colgroup>
                                    <col style={{ width: "240px" }} />
                                    <col />
                                    <col />
                                    <col style={{ width: "150px" }} />
                                </colgroup>
                                <TableTbody role="rowgroup">
                                    <TableRow className="k-master-row" role="row" aria-rowindex={2}>
                                        <TableTd role="gridcell" aria-colindex={1}>Maria Anders</TableTd>
                                        <TableTd role="gridcell" aria-colindex={2}>Sales Representative</TableTd>
                                        <TableTd role="gridcell" aria-colindex={3}>Alfreds Futterkiste</TableTd>
                                        <TableTd role="gridcell" aria-colindex={4}>Germany</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt aria-rowindex={3}>
                                        <TableTd role="gridcell" aria-colindex={1}>Ana Trujillo</TableTd>
                                        <TableTd role="gridcell" aria-colindex={2}>Owner</TableTd>
                                        <TableTd role="gridcell" aria-colindex={3}>Anna Trujillo Emparedados y helados</TableTd>
                                        <TableTd role="gridcell" aria-colindex={4}>Mexico</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" aria-rowindex={4}>
                                        <TableTd role="gridcell" aria-colindex={1}>Thomas Hardy</TableTd>
                                        <TableTd role="gridcell" aria-colindex={2}>Sales Representative</TableTd>
                                        <TableTd role="gridcell" aria-colindex={3}>Around the Horn</TableTd>
                                        <TableTd role="gridcell" aria-colindex={4}>UK</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt aria-rowindex={5}>
                                        <TableTd role="gridcell" aria-colindex={1}>Christina Berglund</TableTd>
                                        <TableTd role="gridcell" aria-colindex={2}>Office Administrator</TableTd>
                                        <TableTd role="gridcell" aria-colindex={3}>Berglunds snabbköp</TableTd>
                                        <TableTd role="gridcell" aria-colindex={4}>Sweden</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" aria-rowindex={6}>
                                        <TableTd role="gridcell" aria-colindex={1}>Martin Sommer</TableTd>
                                        <TableTd role="gridcell" aria-colindex={2}>Owner</TableTd>
                                        <TableTd role="gridcell" aria-colindex={3}>Bólido Comidas preparadas</TableTd>
                                        <TableTd role="gridcell" aria-colindex={4}>Spain</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                    <GridFooter>
                        <div className="k-grid-footer-wrap">
                            <GridFooterTable role="none">
                                <colgroup>
                                    <col style={{ width: "240px" }} />
                                    <col />
                                    <col />
                                    <col style={{ width: "150px" }} />
                                </colgroup>
                                <TableTfoot role="rowgroup">
                                    <TableRow role="row" aria-rowindex={7}>
                                        <TableTd role="gridcell" aria-colindex={1}>Total</TableTd>
                                        <TableTd role="gridcell" aria-colindex={2}></TableTd>
                                        <TableTd role="gridcell" aria-colindex={3}>5 items</TableTd>
                                        <TableTd role="gridcell" aria-colindex={4}></TableTd>
                                    </TableRow>
                                </TableTfoot>
                            </GridFooterTable>
                        </div>
                    </GridFooter>
                </>
            )}
            {...other}>
        </Grid>
    );
};
