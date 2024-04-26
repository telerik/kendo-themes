import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const GridWithMultiColumnHeaders = ({ headerWrapClassName, contentClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        children={(
            <>
                <GridHeader>
                    <div className={`k-grid-header-wrap ${headerWrapClassName}`}>
                        <GridHeaderTable>
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell rowspan={3} colspan={1} columnTitle="ID"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={3} columnTitle="Product Information"></GridHeaderCell>
                                </TableRow>
                                <TableRow>
                                    <GridHeaderCell rowspan={2} colspan={1} columnTitle="Product Name" className="k-first"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={2} columnTitle="Unit"></GridHeaderCell>
                                </TableRow>
                                <TableRow>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Units In Stock" className="k-first"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Units Price"></GridHeaderCell>
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
                                <TableRow className="k-master-row">
                                    <TableTd>1</TableTd>
                                    <TableTd>Chai</TableTd>
                                    <TableTd>39</TableTd>
                                    <TableTd>18</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt>
                                    <TableTd>2</TableTd>
                                    <TableTd>Chang</TableTd>
                                    <TableTd>17</TableTd>
                                    <TableTd>19</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd>3</TableTd>
                                    <TableTd>Aniseed Syrup</TableTd>
                                    <TableTd>13</TableTd>
                                    <TableTd>10</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt>
                                    <TableTd>4</TableTd>
                                    <TableTd>Chef Anton&apos;s Cajun Seasoning</TableTd>
                                    <TableTd>53</TableTd>
                                    <TableTd>22</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd>5</TableTd>
                                    <TableTd>Chef Anton&apos;s Gumbo Mix</TableTd>
                                    <TableTd>0</TableTd>
                                    <TableTd>21.35</TableTd>
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
