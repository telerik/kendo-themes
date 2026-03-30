import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';
import { Grid, GridHeader, GridHeaderCell, GridHeaderTable, GridGroupingHeader, GridContainer, GridContent, GridTable, GridStickyContainer } from '../../grid';
import { classNames, nextId } from '../../misc';
import { TableThead, TableRow, TableTd, TableTbody } from '../../table';

export const GridWithLockedColumnsStickyGrouping = ({ className, contentClassName, ...other }: any) => {
    // Generate IDs for non-locked header cells
    const nlHdr_c0 = nextId('grid-lc-hdr');
    const nlHdr_c1 = nextId('grid-lc-hdr');
    const nlHdr_c2 = nextId('grid-lc-hdr');

    // Generate IDs for non-locked sticky top cells (data row only; group row is presentational)
    const nlSt_r1_c0 = nextId('grid-lc-cell');
    const nlSt_r1_c1 = nextId('grid-lc-cell');
    const nlSt_r1_c2 = nextId('grid-lc-cell');

    // Generate IDs for non-locked content cells (data rows only; group/footer rows are presentational)
    const nlCell_r1_c0 = nextId('grid-lc-cell');
    const nlCell_r1_c1 = nextId('grid-lc-cell');
    const nlCell_r1_c2 = nextId('grid-lc-cell');
    const nlCell_r2_c0 = nextId('grid-lc-cell');
    const nlCell_r2_c1 = nextId('grid-lc-cell');
    const nlCell_r2_c2 = nextId('grid-lc-cell');
    const nlCell_r3_c0 = nextId('grid-lc-cell');
    const nlCell_r3_c1 = nextId('grid-lc-cell');
    const nlCell_r3_c2 = nextId('grid-lc-cell');
    const nlCell_r6_c0 = nextId('grid-lc-cell');
    const nlCell_r6_c1 = nextId('grid-lc-cell');
    const nlCell_r6_c2 = nextId('grid-lc-cell');
    const nlCell_r7_c0 = nextId('grid-lc-cell');
    const nlCell_r7_c1 = nextId('grid-lc-cell');
    const nlCell_r7_c2 = nextId('grid-lc-cell');
    const nlCell_r8_c0 = nextId('grid-lc-cell');
    const nlCell_r8_c1 = nextId('grid-lc-cell');
    const nlCell_r8_c2 = nextId('grid-lc-cell');
    const nlCell_r11_c0 = nextId('grid-lc-cell');
    const nlCell_r11_c1 = nextId('grid-lc-cell');
    const nlCell_r11_c2 = nextId('grid-lc-cell');
    const nlCell_r12_c0 = nextId('grid-lc-cell');
    const nlCell_r12_c1 = nextId('grid-lc-cell');
    const nlCell_r12_c2 = nextId('grid-lc-cell');

    // No IDs needed for non-locked sticky bottom cells (group footer is presentational)

    return (
    <Grid className={classNames("k-grid-lockedcolumns", className)} _renderAriaRoot
        groupingHeader={(
            <GridGroupingHeader role="toolbar" aria-label="Grouping">
                <ChipList role="none">
                    <Chip icon="sort-asc-small" text="Country" role="button" actions={
                        <>
                            <ChipAction type="remove" />
                        </>
                    } />
                </ChipList>
            </GridGroupingHeader>
        )}
        children={(
            <>
                <GridHeader role="none">
                    <div className="k-grid-header-locked" role="none" style={{ width: "400px" }}>
                        <GridHeaderTable role="none">
                            <colgroup>
                                <col className="k-group-col" />
                                <col style={{ width: "150px" }} />
                                <col style={{ width: "250px" }} />
                            </colgroup>
                            <TableThead role="rowgroup">
                                <TableRow role="row" aria-owns={`${nlHdr_c0} ${nlHdr_c1} ${nlHdr_c2}`}>
                                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell" role="presentation"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} rowspan={1} columnTitle="Order ID" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} rowspan={1} columnTitle="Ship Name" role="columnheader"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                    <div className="k-grid-header-wrap k-auto-scrollable" role="none" style={{ width: "581px" }}>
                        <GridHeaderTable role="none">
                            <colgroup>
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "400px" }} />
                            </colgroup>
                            <TableThead role="none">
                                <TableRow role="none">
                                    <GridHeaderCell colspan={1} rowspan={1} columnTitle="Ship Country" id={nlHdr_c0} role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} rowspan={1} columnTitle="Ship City" id={nlHdr_c1} role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} rowspan={1} columnTitle="Ship Address" id={nlHdr_c2} role="columnheader"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer role="none">
                    {/* Sticky group header — locked + non-locked */}
                    <GridStickyContainer role="none">
                        <div className="k-grid-content-locked" role="none" style={{ width: "400px" }}>
                            <GridTable className="k-grid-group-sticky-header-table" role="none">
                                <colgroup>
                                    <col className="k-group-col" />
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "250px" }} />
                                </colgroup>
                                <TableTbody role="rowgroup">
                                    <TableRow className="k-table-group-row k-grouping-row" role="row" aria-rowindex={6} style={{ height: "37px" }}>
                                        <TableTd colspan={3} role="gridcell" aria-expanded="true" tabIndex={-1}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-down" />
                                                Country: Germany
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt role="row" aria-rowindex={7} aria-owns={`${nlSt_r1_c0} ${nlSt_r1_c1} ${nlSt_r1_c2}`} style={{ height: "36px" }}>
                                        <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                        <TableTd role="gridcell" tabIndex={-1}>10249</TableTd>
                                        <TableTd role="gridcell" tabIndex={-1}>Toms Spezialitäten</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                        <div className="k-grid-header-wrap" role="none">
                            <GridTable className="k-grid-group-sticky-header-table" role="none">
                                <colgroup>
                                    <col style={{ width: "300px" }} />
                                    <col style={{ width: "300px" }} />
                                    <col style={{ width: "400px" }} />
                                </colgroup>
                                <TableTbody role="rowgroup">
                                    <TableRow className="k-table-group-row k-grouping-row" role="row" aria-rowindex={6} style={{ height: "37px" }}>
                                        <TableTd colspan={3} role="gridcell" tabIndex={-1}>
                                            <p className="k-reset"></p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt role="row" aria-rowindex={7} style={{ height: "36px" }}>
                                        <TableTd id={nlSt_r1_c0} role="gridcell" tabIndex={-1}>Germany</TableTd>
                                        <TableTd id={nlSt_r1_c1} role="gridcell" tabIndex={-1}>Münster</TableTd>
                                        <TableTd id={nlSt_r1_c2} role="gridcell" tabIndex={-1}>Luisenstr. 48</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridStickyContainer>

                    {/* Locked content */}
                    <div className="k-grid-content-locked" role="none" style={{ width: "400px", height: "464px" }}>
                        <GridTable role="none">
                            <colgroup>
                                <col className="k-group-col" />
                                <col style={{ width: "150px" }} />
                                <col style={{ width: "250px" }} />
                            </colgroup>
                            <TableTbody role="rowgroup">
                                <TableRow className="k-table-group-row k-grouping-row" role="row" style={{ height: "37px" }}>
                                    <TableTd colspan={3} role="gridcell">
                                        <p className="k-reset">
                                            <Icon icon="caret-alt-down" />
                                            Country: France
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row" aria-owns={`${nlCell_r1_c0} ${nlCell_r1_c1} ${nlCell_r1_c2}`} style={{ height: "36px" }}>
                                    <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                    <TableTd role="gridcell">10248</TableTd>
                                    <TableTd role="gridcell">Vins et alcools Chevalier</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt role="row" aria-owns={`${nlCell_r2_c0} ${nlCell_r2_c1} ${nlCell_r2_c2}`} style={{ height: "36px" }}>
                                    <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                    <TableTd role="gridcell">10251</TableTd>
                                    <TableTd role="gridcell">Victuailles en stock</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row" aria-owns={`${nlCell_r3_c0} ${nlCell_r3_c1} ${nlCell_r3_c2}`} style={{ height: "36px" }}>
                                    <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                    <TableTd role="gridcell">10265</TableTd>
                                    <TableTd role="gridcell">Blondel père et fils</TableTd>
                                </TableRow>
                                <TableRow className="k-group-footer" role="row" style={{ height: "37px" }}>
                                    <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                    <TableTd role="gridcell"></TableTd>
                                    <TableTd role="gridcell">Total items: 3</TableTd>
                                </TableRow>
                                <TableRow className="k-table-group-row k-grouping-row" role="row" style={{ height: "37px" }}>
                                    <TableTd colspan={3} role="gridcell">
                                        <p className="k-reset">
                                            <Icon icon="caret-alt-down" />
                                            Country: Germany
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt role="row" aria-owns={`${nlCell_r6_c0} ${nlCell_r6_c1} ${nlCell_r6_c2}`} style={{ height: "36px" }}>
                                    <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                    <TableTd role="gridcell">10249</TableTd>
                                    <TableTd role="gridcell">Toms Spezialitäten</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row" aria-owns={`${nlCell_r7_c0} ${nlCell_r7_c1} ${nlCell_r7_c2}`} style={{ height: "36px" }}>
                                    <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                    <TableTd role="gridcell">10253</TableTd>
                                    <TableTd role="gridcell">Toms Spezialitäten</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt role="row" aria-owns={`${nlCell_r8_c0} ${nlCell_r8_c1} ${nlCell_r8_c2}`} style={{ height: "36px" }}>
                                    <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                    <TableTd role="gridcell">10260</TableTd>
                                    <TableTd role="gridcell">Ottilies Käseladen</TableTd>
                                </TableRow>
                                <TableRow className="k-group-footer" role="row" style={{ height: "37px" }}>
                                    <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                    <TableTd role="gridcell"></TableTd>
                                    <TableTd role="gridcell">Total items: 3</TableTd>
                                </TableRow>
                                <TableRow className="k-table-group-row k-grouping-row" role="row" style={{ height: "37px" }}>
                                    <TableTd colspan={3} role="gridcell">
                                        <p className="k-reset">
                                            <Icon icon="caret-alt-down" />
                                            Country: Brazil
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row" aria-owns={`${nlCell_r11_c0} ${nlCell_r11_c1} ${nlCell_r11_c2}`} style={{ height: "36px" }}>
                                    <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                    <TableTd role="gridcell">10250</TableTd>
                                    <TableTd role="gridcell">Hanari Carnes</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt role="row" aria-owns={`${nlCell_r12_c0} ${nlCell_r12_c1} ${nlCell_r12_c2}`} style={{ height: "36px" }}>
                                    <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                    <TableTd role="gridcell">10254</TableTd>
                                    <TableTd role="gridcell">Hanari Carnes</TableTd>
                                </TableRow>
                                <TableRow className="k-group-footer" role="row" style={{ height: "37px" }}>
                                    <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                    <TableTd role="gridcell"></TableTd>
                                    <TableTd role="gridcell">Total items: 2</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </div>

                    {/* Non-locked (scrollable) content */}
                    <GridContent className={classNames("k-auto-scrollable", contentClassName)} role="none" style={{ width: "605px", height: "465px" }}>
                        <GridTable role="none">
                            <colgroup>
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "400px" }} />
                            </colgroup>
                            <TableTbody role="none">
                                <TableRow className="k-table-group-row k-grouping-row" role="none" style={{ height: "37px" }}>
                                    <TableTd colspan={3} role="none">
                                        <p className="k-reset"></p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="none" style={{ height: "36px" }}>
                                    <TableTd id={nlCell_r1_c0} role="gridcell">France</TableTd>
                                    <TableTd id={nlCell_r1_c1} role="gridcell">Reims</TableTd>
                                    <TableTd id={nlCell_r1_c2} role="gridcell">59 rue de l&apos;Abbaye</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt role="none" style={{ height: "36px" }}>
                                    <TableTd id={nlCell_r2_c0} role="gridcell">France</TableTd>
                                    <TableTd id={nlCell_r2_c1} role="gridcell">Lyon</TableTd>
                                    <TableTd id={nlCell_r2_c2} role="gridcell">2, rue du Commerce</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="none" style={{ height: "36px" }}>
                                    <TableTd id={nlCell_r3_c0} role="gridcell">France</TableTd>
                                    <TableTd id={nlCell_r3_c1} role="gridcell">Strasbourg</TableTd>
                                    <TableTd id={nlCell_r3_c2} role="gridcell">24, place Kléber</TableTd>
                                </TableRow>
                                <TableRow className="k-group-footer" role="none" style={{ height: "37px" }}>
                                    <TableTd colspan={3} role="none"></TableTd>
                                </TableRow>
                                <TableRow className="k-table-group-row k-grouping-row" role="none" style={{ height: "37px" }}>
                                    <TableTd colspan={3} role="none">
                                        <p className="k-reset"></p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt role="none" style={{ height: "36px" }}>
                                    <TableTd id={nlCell_r6_c0} role="gridcell">Germany</TableTd>
                                    <TableTd id={nlCell_r6_c1} role="gridcell">Münster</TableTd>
                                    <TableTd id={nlCell_r6_c2} role="gridcell">Luisenstr. 48</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="none" style={{ height: "36px" }}>
                                    <TableTd id={nlCell_r7_c0} role="gridcell">Germany</TableTd>
                                    <TableTd id={nlCell_r7_c1} role="gridcell">Münster</TableTd>
                                    <TableTd id={nlCell_r7_c2} role="gridcell">Luisenstr. 48</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt role="none" style={{ height: "36px" }}>
                                    <TableTd id={nlCell_r8_c0} role="gridcell">Germany</TableTd>
                                    <TableTd id={nlCell_r8_c1} role="gridcell">Köln</TableTd>
                                    <TableTd id={nlCell_r8_c2} role="gridcell">Mehrheimerstr. 369</TableTd>
                                </TableRow>
                                <TableRow className="k-group-footer" role="none" style={{ height: "37px" }}>
                                    <TableTd colspan={3} role="none"></TableTd>
                                </TableRow>
                                <TableRow className="k-table-group-row k-grouping-row" role="none" style={{ height: "37px" }}>
                                    <TableTd colspan={3} role="none">
                                        <p className="k-reset"></p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="none" style={{ height: "36px" }}>
                                    <TableTd id={nlCell_r11_c0} role="gridcell">Brazil</TableTd>
                                    <TableTd id={nlCell_r11_c1} role="gridcell">Rio de Janeiro</TableTd>
                                    <TableTd id={nlCell_r11_c2} role="gridcell">Rua do Paço, 67</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt role="none" style={{ height: "36px" }}>
                                    <TableTd id={nlCell_r12_c0} role="gridcell">Brazil</TableTd>
                                    <TableTd id={nlCell_r12_c1} role="gridcell">Rio de Janeiro</TableTd>
                                    <TableTd id={nlCell_r12_c2} role="gridcell">Rua do Paço, 67</TableTd>
                                </TableRow>
                                <TableRow className="k-group-footer" role="none" style={{ height: "37px" }}>
                                    <TableTd colspan={3} role="none"></TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>

                    {/* Sticky group footer — locked + non-locked */}
                    <GridStickyContainer position="bottom" role="none">
                        <div className="k-grid-content-locked" role="none" style={{ width: "400px" }}>
                            <GridTable className="k-grid-group-sticky-footer-table" role="none">
                                <colgroup>
                                    <col className="k-group-col" />
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "250px" }} />
                                </colgroup>
                                <TableTbody role="rowgroup">
                                    <TableRow className="k-group-footer" role="row" aria-rowindex={5}>
                                        <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                        <TableTd role="gridcell" tabIndex={-1}></TableTd>
                                        <TableTd role="gridcell" tabIndex={-1}>Total items: 3</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                        <div className="k-grid-footer-wrap" role="none">
                            <GridTable className="k-grid-group-sticky-footer-table" role="none">
                                <colgroup>
                                    <col style={{ width: "300px" }} />
                                    <col style={{ width: "300px" }} />
                                    <col style={{ width: "400px" }} />
                                </colgroup>
                                <TableTbody role="rowgroup">
                                    <TableRow className="k-group-footer" role="row" aria-rowindex={5} style={{ height: "37px" }}>
                                        <TableTd colspan={3} role="gridcell" tabIndex={-1}></TableTd>
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
};
