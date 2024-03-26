import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridPager } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const GridWithColumnMenu = ({ contentClassName, sortable, resizable, ...other }: any) => (
    <Grid _renderAriaRoot
        pager={( <GridPager refresh={false} /> )}
        children={(
            <>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "150px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell sortable={sortable} resizable={resizable} rowspan={1} colspan={1} menu="column" columnTitle="ID" filterable></GridHeaderCell>
                                    <GridHeaderCell sortable={sortable} resizable={resizable} rowspan={1} colspan={1} menu="column" columnTitle="Name" filterable></GridHeaderCell>
                                    <GridHeaderCell sortable={sortable} resizable={resizable} rowspan={1} colspan={1} menu="column" columnTitle="Category" filterable></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className={contentClassName}>
                        <GridTable>
                            <colgroup>
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "150px" }} />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-master-row">
                                    <TableTd>1</TableTd>
                                    <TableTd>Chai</TableTd>
                                    <TableTd>Beverages</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt>
                                    <TableTd>2</TableTd>
                                    <TableTd>Chang</TableTd>
                                    <TableTd>Beverages</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd>3</TableTd>
                                    <TableTd>Aniseed Syrup</TableTd>
                                    <TableTd>Condiments</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt>
                                    <TableTd>4</TableTd>
                                    <TableTd>Chef Anton&apos;s Cajun Seasoning</TableTd>
                                    <TableTd>Condiments</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd>5</TableTd>
                                    <TableTd>Grandma&apos;s Boysenberry Spread</TableTd>
                                    <TableTd>Condiments</TableTd>
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
