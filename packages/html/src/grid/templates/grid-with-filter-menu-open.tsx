import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridPager } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';
import { Popup } from '../../popup';
import { FilterMenuNormal } from '../../column-menu';
import { nextId } from '../../misc';

export const GridWithFilterMenuOpen = ({ contentClassName, sortable, resizable, ...other }: any) => {
    const filterPopupId = nextId('grid-filter-popup');

    return (
        <>
        <Grid _renderAriaRoot
            pager={( <GridPager refresh={false} /> )}
            children={(
                <>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable role="none">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead role="rowgroup">
                                    <TableRow role="row">
                                        <GridHeaderCell
                                            sortable={sortable}
                                            resizable={resizable}
                                            rowspan={1}
                                            colspan={1}
                                            menu="filter"
                                            columnTitle="Name"
                                            role="columnheader"
                                            aria-haspopup="dialog"
                                            aria-expanded="true"
                                            aria-controls={filterPopupId}
                                        ></GridHeaderCell>
                                        <GridHeaderCell sortable={sortable} resizable={resizable} rowspan={1} colspan={1} menu="filter" columnTitle="City" role="columnheader" aria-haspopup="dialog"></GridHeaderCell>
                                        <GridHeaderCell sortable={sortable} resizable={resizable} rowspan={1} colspan={1} menu="filter" columnTitle="Title" role="columnheader" aria-haspopup="dialog"></GridHeaderCell>
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
                                </colgroup>
                                <TableTbody role="rowgroup">
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd role="gridcell">Michael Buchanan</TableTd>
                                        <TableTd role="gridcell">Redmond</TableTd>
                                        <TableTd role="gridcell">CEO</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd role="gridcell">Margaret Peacock</TableTd>
                                        <TableTd role="gridcell">Tacoma</TableTd>
                                        <TableTd role="gridcell">CTO</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd role="gridcell">Margaret Suyama</TableTd>
                                        <TableTd role="gridcell">Boston</TableTd>
                                        <TableTd role="gridcell">Web Designer</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd role="gridcell">Laura Peacock</TableTd>
                                        <TableTd role="gridcell">Seattle</TableTd>
                                        <TableTd role="gridcell">Accountant</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd role="gridcell">Janet Davolio</TableTd>
                                        <TableTd role="gridcell">Philadelphia</TableTd>
                                        <TableTd role="gridcell">Sales Manager</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </>
            )}
            {...other}>
        </Grid>
        <Popup className="k-grid-filter-popup" id={filterPopupId} role="dialog" aria-label="Name Filter Menu">
            <FilterMenuNormal />
        </Popup>
        </>
    );
};
