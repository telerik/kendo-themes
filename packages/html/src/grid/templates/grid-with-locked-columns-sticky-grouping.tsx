import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';
import { Grid, GridHeader, GridHeaderCell, GridHeaderTable, GridGroupingHeader, GridContainer, GridContent, GridTable, GridStickyContainer } from '../../grid';
import { classNames } from '../../misc';
import { TableThead, TableRow, TableTd, TableTbody } from '../../table';

export const GridWithLockedColumnsStickyGrouping = ({ className, contentClassName, ...other }: any) => (
    <Grid className={classNames("k-grid-lockedcolumns", className)} _renderAriaRoot
        groupingHeader={(
            <GridGroupingHeader>
                <ChipList>
                    <Chip icon="sort-asc-small" text="Country" actions={
                        <>
                            <ChipAction type="remove" />
                        </>
                    } />
                </ChipList>
            </GridGroupingHeader>
        )}
        children={(
            <>
                <GridHeader>
                    <div className="k-grid-header-locked" style={{ width: "400px" }}>
                        <GridHeaderTable>
                            <colgroup>
                                <col className="k-group-col" />
                                <col style={{ width: "150px" }} />
                                <col style={{ width: "250px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell" accessibleLabel="Group"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} rowspan={1} columnTitle="Order ID"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} rowspan={1} columnTitle="Ship Name"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                    <div className="k-grid-header-wrap k-auto-scrollable" style={{ width: "581px" }}>
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "400px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell colspan={1} rowspan={1} columnTitle="Ship Country"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} rowspan={1} columnTitle="Ship City"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} rowspan={1} columnTitle="Ship Address"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    {/* Sticky group header — locked + non-locked */}
                    <GridStickyContainer>
                        <div className="k-grid-content-locked" style={{ width: "400px" }}>
                            <GridTable className="k-grid-group-sticky-header-table">
                                <colgroup>
                                    <col className="k-group-col" />
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "250px" }} />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-table-group-row k-grouping-row" style={{ height: "37px" }}>
                                        <TableTd colspan={3}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-down" />
                                                Country: Germany
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt style={{ height: "36px" }}>
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd>10249</TableTd>
                                        <TableTd>Toms Spezialitäten</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                        <div className="k-grid-header-wrap">
                            <GridTable className="k-grid-group-sticky-header-table">
                                <colgroup>
                                    <col style={{ width: "300px" }} />
                                    <col style={{ width: "300px" }} />
                                    <col style={{ width: "400px" }} />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-table-group-row k-grouping-row" style={{ height: "37px" }}>
                                        <TableTd colspan={3}>
                                            <p className="k-reset"></p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt style={{ height: "36px" }}>
                                        <TableTd>Germany</TableTd>
                                        <TableTd>Münster</TableTd>
                                        <TableTd>Luisenstr. 48</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridStickyContainer>

                    {/* Locked content */}
                    <div className="k-grid-content-locked" style={{ width: "400px", height: "464px" }}>
                        <GridTable>
                            <colgroup>
                                <col className="k-group-col" />
                                <col style={{ width: "150px" }} />
                                <col style={{ width: "250px" }} />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-table-group-row k-grouping-row" style={{ height: "37px" }}>
                                    <TableTd colspan={3}>
                                        <p className="k-reset">
                                            <Icon icon="caret-alt-down" />
                                            Country: France
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" style={{ height: "36px" }}>
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd>10248</TableTd>
                                    <TableTd>Vins et alcools Chevalier</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt style={{ height: "36px" }}>
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd>10251</TableTd>
                                    <TableTd>Victuailles en stock</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" style={{ height: "36px" }}>
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd>10265</TableTd>
                                    <TableTd>Blondel père et fils</TableTd>
                                </TableRow>
                                <TableRow className="k-group-footer" style={{ height: "37px" }}>
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd></TableTd>
                                    <TableTd>Total items: 3</TableTd>
                                </TableRow>
                                <TableRow className="k-table-group-row k-grouping-row" style={{ height: "37px" }}>
                                    <TableTd colspan={3}>
                                        <p className="k-reset">
                                            <Icon icon="caret-alt-down" />
                                            Country: Germany
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt style={{ height: "36px" }}>
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd>10249</TableTd>
                                    <TableTd>Toms Spezialitäten</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" style={{ height: "36px" }}>
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd>10253</TableTd>
                                    <TableTd>Toms Spezialitäten</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt style={{ height: "36px" }}>
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd>10260</TableTd>
                                    <TableTd>Ottilies Käseladen</TableTd>
                                </TableRow>
                                <TableRow className="k-group-footer" style={{ height: "37px" }}>
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd></TableTd>
                                    <TableTd>Total items: 3</TableTd>
                                </TableRow>
                                <TableRow className="k-table-group-row k-grouping-row" style={{ height: "37px" }}>
                                    <TableTd colspan={3}>
                                        <p className="k-reset">
                                            <Icon icon="caret-alt-down" />
                                            Country: Brazil
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" style={{ height: "36px" }}>
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd>10250</TableTd>
                                    <TableTd>Hanari Carnes</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt style={{ height: "36px" }}>
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd>10254</TableTd>
                                    <TableTd>Hanari Carnes</TableTd>
                                </TableRow>
                                <TableRow className="k-group-footer" style={{ height: "37px" }}>
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd></TableTd>
                                    <TableTd>Total items: 2</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </div>

                    {/* Non-locked (scrollable) content */}
                    <GridContent className={classNames("k-auto-scrollable", contentClassName)} style={{ width: "605px", height: "465px" }}>
                        <GridTable>
                            <colgroup>
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "400px" }} />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-table-group-row k-grouping-row" style={{ height: "37px" }}>
                                    <TableTd colspan={3}>
                                        <p className="k-reset"></p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" style={{ height: "36px" }}>
                                    <TableTd>France</TableTd>
                                    <TableTd>Reims</TableTd>
                                    <TableTd>59 rue de l&apos;Abbaye</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt style={{ height: "36px" }}>
                                    <TableTd>France</TableTd>
                                    <TableTd>Lyon</TableTd>
                                    <TableTd>2, rue du Commerce</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" style={{ height: "36px" }}>
                                    <TableTd>France</TableTd>
                                    <TableTd>Strasbourg</TableTd>
                                    <TableTd>24, place Kléber</TableTd>
                                </TableRow>
                                <TableRow className="k-group-footer" style={{ height: "37px" }}>
                                    <TableTd colspan={3}></TableTd>
                                </TableRow>
                                <TableRow className="k-table-group-row k-grouping-row" style={{ height: "37px" }}>
                                    <TableTd colspan={3}>
                                        <p className="k-reset"></p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt style={{ height: "36px" }}>
                                    <TableTd>Germany</TableTd>
                                    <TableTd>Münster</TableTd>
                                    <TableTd>Luisenstr. 48</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" style={{ height: "36px" }}>
                                    <TableTd>Germany</TableTd>
                                    <TableTd>Münster</TableTd>
                                    <TableTd>Luisenstr. 48</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt style={{ height: "36px" }}>
                                    <TableTd>Germany</TableTd>
                                    <TableTd>Köln</TableTd>
                                    <TableTd>Mehrheimerstr. 369</TableTd>
                                </TableRow>
                                <TableRow className="k-group-footer" style={{ height: "37px" }}>
                                    <TableTd colspan={3}></TableTd>
                                </TableRow>
                                <TableRow className="k-table-group-row k-grouping-row" style={{ height: "37px" }}>
                                    <TableTd colspan={3}>
                                        <p className="k-reset"></p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" style={{ height: "36px" }}>
                                    <TableTd>Brazil</TableTd>
                                    <TableTd>Rio de Janeiro</TableTd>
                                    <TableTd>Rua do Paço, 67</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt style={{ height: "36px" }}>
                                    <TableTd>Brazil</TableTd>
                                    <TableTd>Rio de Janeiro</TableTd>
                                    <TableTd>Rua do Paço, 67</TableTd>
                                </TableRow>
                                <TableRow className="k-group-footer" style={{ height: "37px" }}>
                                    <TableTd colspan={3}></TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>

                    {/* Sticky group footer — locked + non-locked */}
                    <GridStickyContainer position="bottom">
                        <div className="k-grid-content-locked" style={{ width: "400px" }}>
                            <GridTable className="k-grid-group-sticky-footer-table">
                                <colgroup>
                                    <col className="k-group-col" />
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "250px" }} />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-group-footer">
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd></TableTd>
                                        <TableTd>Total items: 3</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                        <div className="k-grid-footer-wrap">
                            <GridTable className="k-grid-group-sticky-footer-table">
                                <colgroup>
                                    <col style={{ width: "300px" }} />
                                    <col style={{ width: "300px" }} />
                                    <col style={{ width: "400px" }} />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-group-footer" style={{ height: "37px" }}>
                                        <TableTd colspan={3}></TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridStickyContainer>
                </GridContainer>
            </>
        )}
        {...other}
    />
);
