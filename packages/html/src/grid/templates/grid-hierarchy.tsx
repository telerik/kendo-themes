import { Icon } from '../../icon';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const GridHierarchy = ({ containerClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        children={(
            <>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col className="k-hierarchy-col" />
                                <col style={{ width: "100px" }} />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell className="k-hierarchy-cell"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="ID"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Category Name"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Description"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className={containerClassName}>
                        <GridTable>
                            <colgroup>
                                <col className="k-hierarchy-col"/>
                                <col style={{ width: "100px" }}/>
                                <col />
                                <col />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-master-row">
                                    <TableTd className="k-hierarchy-cell">
                                        <Icon icon="caret-alt-right" />
                                    </TableTd>
                                    <TableTd>1</TableTd>
                                    <TableTd>Beverages</TableTd>
                                    <TableTd>Soft drinks, coffees, teas, beers and ales</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt k-expanded" alt>
                                    <TableTd className="k-hierarchy-cell">
                                        <Icon icon="caret-alt-down" />
                                    </TableTd>
                                    <TableTd>2</TableTd>
                                    <TableTd>Condiments</TableTd>
                                    <TableTd>Sweet and savory sauces, relishes, spreads, and seasonings</TableTd>
                                </TableRow>
                                <TableRow className="k-detail-row">
                                    <TableTd className="k-hierarchy-cell"></TableTd>
                                    <TableTd className="k-detail-cell" colspan={3}>
                                        <Grid _renderAriaRoot className="k-grid-no-scrollbar">
                                            <GridHeader>
                                                <div className="k-grid-header-wrap">
                                                    <GridHeaderTable>
                                                        <colgroup>
                                                            <col />
                                                            <col />
                                                            <col />
                                                        </colgroup>
                                                        <TableThead>
                                                            <TableRow>
                                                                <GridHeaderCell colspan={1} rowspan={1} columnTitle="ID"></GridHeaderCell>
                                                                <GridHeaderCell colspan={1} rowspan={1} columnTitle="Product Name"></GridHeaderCell>
                                                                <GridHeaderCell colspan={1} rowspan={1} columnTitle="Unit Price"></GridHeaderCell>
                                                            </TableRow>
                                                        </TableThead>
                                                    </GridHeaderTable>
                                                </div>
                                            </GridHeader>
                                            <GridContainer>
                                                <GridContent>
                                                    <GridTable>
                                                        <colgroup>
                                                            <col />
                                                            <col />
                                                            <col />
                                                        </colgroup>
                                                        <TableTbody>
                                                            <TableRow className="k-master-row">
                                                                <TableTd colspan={1}>1</TableTd>
                                                                <TableTd colspan={1}>Aniseed Syrup</TableTd>
                                                                <TableTd colspan={1}>$10.00</TableTd>
                                                            </TableRow>
                                                            <TableRow alt className="k-master-row k-alt">
                                                                <TableTd colspan={1}>2</TableTd>
                                                                <TableTd colspan={1}>Chef Anton&apos;s Cajun Seasoning</TableTd>
                                                                <TableTd colspan={1}>$22.00</TableTd>
                                                            </TableRow>
                                                            <TableRow className="k-master-row">
                                                                <TableTd colspan={1}>3</TableTd>
                                                                <TableTd colspan={1}>Chef Anton&apos;s Gumbo Mix</TableTd>
                                                                <TableTd colspan={1}>$21.35</TableTd>
                                                            </TableRow>
                                                        </TableTbody>
                                                    </GridTable>
                                                </GridContent>
                                            </GridContainer>
                                        </Grid>
                                    </TableTd>
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
