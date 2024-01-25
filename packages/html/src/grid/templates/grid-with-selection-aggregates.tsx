import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer,GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const GridWithSelectionAggregates = ({ aggregated = false, contentClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        children={(
            <>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell columnTitle="Product Name"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Units In Stock"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Discontinued"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Units in Order"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className={contentClassName}>
                        <GridTable>
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableTbody>
                                <TableRow>
                                    <TableTd className={ aggregated ? "k-selected" : "" }>Chai</TableTd>
                                    <TableTd className={ aggregated ? "k-selected" : "" }>39</TableTd>
                                    <TableTd>false</TableTd>
                                    <TableTd>0</TableTd>
                                </TableRow>
                                <TableRow className="k-alt" alt>
                                    <TableTd className={ aggregated ? "k-selected" : "" }>Chang</TableTd>
                                    <TableTd className={ aggregated ? "k-selected" : "" }>17</TableTd>
                                    <TableTd>false</TableTd>
                                    <TableTd>40</TableTd>
                                </TableRow>
                                <TableRow>
                                    <TableTd className={ aggregated ? "k-selected" : "" }>Aniseed Syrup</TableTd>
                                    <TableTd className={ aggregated ? "k-selected" : "" }>13</TableTd>
                                    <TableTd>false</TableTd>
                                    <TableTd>70</TableTd>
                                </TableRow>
                                <TableRow className="k-alt" alt>
                                    <TableTd className={ aggregated ? "k-selected" : "" }>Chef Anton&apos;s Cajun Seasoning</TableTd>
                                    <TableTd className={ aggregated ? "k-selected" : "" }>53</TableTd>
                                    <TableTd>false</TableTd>
                                    <TableTd>0</TableTd>
                                </TableRow>
                                <TableRow>
                                    <TableTd>Chef Anton&apos;s Gumbo Mix</TableTd>
                                    <TableTd>0</TableTd>
                                    <TableTd>true</TableTd>
                                    <TableTd>0</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                </GridContainer>
                <div className="k-selection-aggregates k-grid-selection-aggregates">
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
            </>
        )}
        {...other}>

    </Grid>
);
