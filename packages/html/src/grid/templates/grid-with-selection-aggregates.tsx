import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer,GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const GridWithSelectionAggregates = ({ aggregated = false, contentClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        children={(
            <>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable role="none">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead role="rowgroup">
                                <TableRow role="row">
                                    <GridHeaderCell columnTitle="Product Name" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Units In Stock" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Discontinued" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Units in Order" role="columnheader"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className={contentClassName}>
                        <GridTable role="none">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableTbody role="rowgroup">
                                <TableRow className="k-master-row" role="row">
                                    <TableTd selected role="gridcell" aria-selected="true">Chai</TableTd>
                                    <TableTd selected role="gridcell" aria-selected="true">39</TableTd>
                                    <TableTd role="gridcell">false</TableTd>
                                    <TableTd role="gridcell">0</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row" alt>
                                    <TableTd selected={aggregated ? true : false} role="gridcell" aria-selected={aggregated ? "true" : undefined}>Chang</TableTd>
                                    <TableTd selected={aggregated ? true : false} role="gridcell" aria-selected={aggregated ? "true" : undefined}>17</TableTd>
                                    <TableTd role="gridcell">false</TableTd>
                                    <TableTd role="gridcell">40</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row">
                                    <TableTd selected={aggregated ? true : false} role="gridcell">Aniseed Syrup</TableTd>
                                    <TableTd selected={aggregated ? true : false} role="gridcell">13</TableTd>
                                    <TableTd role="gridcell">false</TableTd>
                                    <TableTd role="gridcell">70</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row" alt>
                                    <TableTd selected={aggregated ? true : false} role="gridcell">Chef Anton&apos;s Cajun Seasoning</TableTd>
                                    <TableTd selected={aggregated ? true : false} role="gridcell">53</TableTd>
                                    <TableTd role="gridcell">false</TableTd>
                                    <TableTd role="gridcell">0</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row">
                                    <TableTd role="gridcell">Chef Anton&apos;s Gumbo Mix</TableTd>
                                    <TableTd role="gridcell">0</TableTd>
                                    <TableTd role="gridcell">true</TableTd>
                                    <TableTd role="gridcell">0</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                </GridContainer>
            </>
        )}
        gridSelectionAggregates={
            (
                <div className="k-selection-aggregates k-grid-selection-aggregates" aria-live="polite">
                { aggregated ?
                    <>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Sum:</span>
                            <span className="k-selection-aggregates-item-value">122.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Avg:</span>
                            <span className="k-selection-aggregates-item-value">30.50</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Min:</span>
                            <span className="k-selection-aggregates-item-value">13</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Max:</span>
                            <span className="k-selection-aggregates-item-value">53</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Count:</span>
                            <span className="k-selection-aggregates-item-value">8</span>
                        </div>
                    </>
                    :
                    <div className="k-selection-aggregates-item">
                        <span className="k-selection-aggregates-item-text">Count:</span>
                        <span className="k-selection-aggregates-item-value">0</span>
                    </div>
                }
            </div>
            )
        }
        {...other}>

    </Grid>
);
