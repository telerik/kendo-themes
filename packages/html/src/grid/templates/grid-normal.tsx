import { Grid, GridHeader, GridGroupingHeader ,GridContainer, GridContent, GridHeaderTable, GridHeaderCell, GridTable, GridPager } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const GridNormal = ({ contentClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        pager={( <GridPager /> )}
        groupingHeader={(
            <GridGroupingHeader dropHint="Drag a column header and drop it here to group by that column" />
        )}
        children={(
            <>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: "240px" }} />
                                <col />
                                <col />
                                <col style={{ width: "150px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell columnTitle="Contact Name" />
                                    <GridHeaderCell columnTitle="Contact Title" />
                                    <GridHeaderCell columnTitle="Company Name" />
                                    <GridHeaderCell columnTitle="Country" />
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className={contentClassName}>
                        <GridTable>
                            <colgroup>
                                <col style={{ width: "240px" }} />
                                <col />
                                <col />
                                <col style={{ width: "150px" }} />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-master-row" >
                                    <TableTd>Maria Anders</TableTd>
                                    <TableTd>Sales Representative</TableTd>
                                    <TableTd>Alfreds Futterkiste</TableTd>
                                    <TableTd>Germany</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt>
                                    <TableTd>Ana Trujillo</TableTd>
                                    <TableTd>Owner</TableTd>
                                    <TableTd>Anna Trujillo Emparedados y helados</TableTd>
                                    <TableTd>Mexico</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd>Thomas Hardy</TableTd>
                                    <TableTd>Sales Representative</TableTd>
                                    <TableTd>Around the Horn</TableTd>
                                    <TableTd>UK</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt>
                                    <TableTd>Christina Berglund</TableTd>
                                    <TableTd>Office Administrator</TableTd>
                                    <TableTd>Berglunds snabbköp</TableTd>
                                    <TableTd>Sweden</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd>Martin Sommer</TableTd>
                                    <TableTd>Owner</TableTd>
                                    <TableTd>Bólido Comidas preparadas</TableTd>
                                    <TableTd>Spain</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                </GridContainer>
            </>
        )}
        {...other}>
    </Grid>
);
