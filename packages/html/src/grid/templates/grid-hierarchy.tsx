import { Icon } from '../../icon/icon.spec';
import { Grid } from '../grid.spec';
import { GridContainer } from '../grid-container.spec';
import { GridContent } from '../grid-content.spec';
import { GridHeader } from '../grid-header.spec';
import { GridHeaderCell } from '../grid-header-cell.spec';
import { GridHeaderTable } from '../grid-header-table.spec';
import { GridTable } from '../grid-table.spec';
import { TableThead } from '../../table/table-thead';
import { TableTbody } from '../../table/table-tbody';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';

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
                                <TableRow className="k-master-row k-expanded" alt>
                                    <TableTd className="k-hierarchy-cell">
                                        <Icon icon="caret-alt-down" />
                                    </TableTd>
                                    <TableTd>2</TableTd>
                                    <TableTd>Condiments</TableTd>
                                    <TableTd>Sweet and savory sauces, relishes, spreads, and seasonings</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-detail-row">
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
                                                            <TableRow alt className="k-master-row">
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
