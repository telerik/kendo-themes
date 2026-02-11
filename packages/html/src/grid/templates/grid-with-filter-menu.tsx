import { Grid } from '../grid.spec';
import { GridContainer } from '../grid-container.spec';
import { GridContent } from '../grid-content.spec';
import { GridTable } from '../grid-table.spec';
import { GridPager } from '../grid-pager.spec';
import { GridHeader } from '../grid-header.spec';
import { GridHeaderTable } from '../grid-header-table.spec';
import { GridHeaderCell } from '../grid-header-cell.spec';
import { TableThead } from '../../table/table-thead';
import { TableTbody } from '../../table/table-tbody';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';

export const GridWithFilterMenu = ({ contentClassName, sortable, resizable, ...other }: any) => (
    <Grid _renderAriaRoot
        pager={( <GridPager refresh={false} /> )}
        children={(
            <>
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
                                    <GridHeaderCell sortable={sortable} resizable={resizable} rowspan={1} colspan={1} menu="filter" columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell sortable={sortable} resizable={resizable} rowspan={1} colspan={1} menu="filter" columnTitle="City"></GridHeaderCell>
                                    <GridHeaderCell sortable={sortable} resizable={resizable} rowspan={1} colspan={1} menu="filter" columnTitle="Title"></GridHeaderCell>
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
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-master-row">
                                    <TableTd>Michael Buchanan</TableTd>
                                    <TableTd>Redmond</TableTd>
                                    <TableTd>CEO</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt>
                                    <TableTd>Margaret Peacock</TableTd>
                                    <TableTd>Tacoma</TableTd>
                                    <TableTd>CTO</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd>Margaret Suyama</TableTd>
                                    <TableTd>Boston</TableTd>
                                    <TableTd>Web Designer</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt>
                                    <TableTd>Laura Peacock</TableTd>
                                    <TableTd>Seattle</TableTd>
                                    <TableTd>Accountant</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd>Janet Davolio</TableTd>
                                    <TableTd>Philadelphia</TableTd>
                                    <TableTd>Sales Manager</TableTd>
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
