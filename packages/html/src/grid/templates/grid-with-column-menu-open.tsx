import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridPager } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';
import { Popup } from '../../popup';
import { ColumnMenuNormal } from '../../column-menu';
import { nextId } from '../../misc';

export const GridWithColumnMenuOpen = ({ contentClassName, sortable, resizable, ...other }: any) => {
    const columnMenuPopupId = nextId('grid-colmenu-popup');

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
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "150px" }} />
                                </colgroup>
                                <TableThead role="rowgroup">
                                    <TableRow role="row">
                                        <GridHeaderCell
                                            sortable={sortable}
                                            resizable={resizable}
                                            rowspan={1}
                                            colspan={1}
                                            menu="column"
                                            columnTitle="ID"
                                            filterable
                                            role="columnheader"
                                            aria-haspopup="dialog"
                                            aria-expanded="true"
                                            aria-controls={columnMenuPopupId}
                                        ></GridHeaderCell>
                                        <GridHeaderCell sortable={sortable} resizable={resizable} rowspan={1} colspan={1} menu="column" columnTitle="Name" filterable role="columnheader" aria-haspopup="dialog"></GridHeaderCell>
                                        <GridHeaderCell sortable={sortable} resizable={resizable} rowspan={1} colspan={1} menu="column" columnTitle="Category" filterable role="columnheader" aria-haspopup="dialog"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent className={contentClassName}>
                            <GridTable role="none">
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "150px" }} />
                                </colgroup>
                                <TableTbody role="rowgroup">
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd role="gridcell">1</TableTd>
                                        <TableTd role="gridcell">Chai</TableTd>
                                        <TableTd role="gridcell">Beverages</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd role="gridcell">2</TableTd>
                                        <TableTd role="gridcell">Chang</TableTd>
                                        <TableTd role="gridcell">Beverages</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd role="gridcell">3</TableTd>
                                        <TableTd role="gridcell">Aniseed Syrup</TableTd>
                                        <TableTd role="gridcell">Condiments</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd role="gridcell">4</TableTd>
                                        <TableTd role="gridcell">Chef Anton&apos;s Cajun Seasoning</TableTd>
                                        <TableTd role="gridcell">Condiments</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd role="gridcell">5</TableTd>
                                        <TableTd role="gridcell">Grandma&apos;s Boysenberry Spread</TableTd>
                                        <TableTd role="gridcell">Condiments</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </>
            )}
            {...other}>
        </Grid>
        <Popup className="k-grid-columnmenu-popup" id={columnMenuPopupId} role="dialog" aria-label="ID Column Menu">
            <ColumnMenuNormal />
        </Popup>
        </>
    );
};
