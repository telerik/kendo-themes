import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { classNames, nextId } from '../../misc';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const GridWithLockedColumns = ({ className, headerWrapClassName, contentClassName, ...other }: any) => {
    // Generate IDs for non-locked cells so locked rows can reference them via aria-owns
    const nlCell_r0_c0 = nextId('grid-lc-cell');
    const nlCell_r0_c1 = nextId('grid-lc-cell');
    const nlCell_r0_c2 = nextId('grid-lc-cell');
    const nlCell_r1_c0 = nextId('grid-lc-cell');
    const nlCell_r1_c1 = nextId('grid-lc-cell');
    const nlCell_r1_c2 = nextId('grid-lc-cell');
    const nlCell_r2_c0 = nextId('grid-lc-cell');
    const nlCell_r2_c1 = nextId('grid-lc-cell');
    const nlCell_r2_c2 = nextId('grid-lc-cell');
    const nlCell_r3_c0 = nextId('grid-lc-cell');
    const nlCell_r3_c1 = nextId('grid-lc-cell');
    const nlCell_r3_c2 = nextId('grid-lc-cell');
    const nlCell_r4_c0 = nextId('grid-lc-cell');
    const nlCell_r4_c1 = nextId('grid-lc-cell');
    const nlCell_r4_c2 = nextId('grid-lc-cell');
    const nlCell_r5_c0 = nextId('grid-lc-cell');
    const nlCell_r5_c1 = nextId('grid-lc-cell');
    const nlCell_r5_c2 = nextId('grid-lc-cell');
    const nlCell_r6_c0 = nextId('grid-lc-cell');
    const nlCell_r6_c1 = nextId('grid-lc-cell');
    const nlCell_r6_c2 = nextId('grid-lc-cell');
    const nlCell_r7_c0 = nextId('grid-lc-cell');
    const nlCell_r7_c1 = nextId('grid-lc-cell');
    const nlCell_r7_c2 = nextId('grid-lc-cell');

    // Generate IDs for non-locked header cells so locked header row can reference them via aria-owns
    const nlHdr_c0 = nextId('grid-lc-hdr');
    const nlHdr_c1 = nextId('grid-lc-hdr');
    const nlHdr_c2 = nextId('grid-lc-hdr');

    return (
        <Grid className={classNames("k-grid-lockedcolumns", className)} _renderAriaRoot
            children={(
                <>
                    <GridHeader role="none">
                        <div className="k-grid-header-locked" role="none" style={{ width: "400px" }}>
                            <GridHeaderTable role="none">
                                <colgroup>
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "300px" }} />
                                </colgroup>
                                <TableThead role="rowgroup">
                                    <TableRow role="row" aria-owns={`${nlHdr_c0} ${nlHdr_c1} ${nlHdr_c2}`}>
                                        <GridHeaderCell filterable menu="column" columnTitle="Order ID" role="columnheader"></GridHeaderCell>
                                        <GridHeaderCell filterable menu="column" columnTitle="Ship Name" role="columnheader"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                        <div className={`k-grid-header-wrap ${headerWrapClassName}`} role="none" style={{ width: "581px" }}>
                            <GridHeaderTable role="none">
                                <colgroup>
                                    <col style={{ width: "300px" }} />
                                    <col style={{ width: "300px" }} />
                                    <col style={{ width: "400px" }} />
                                </colgroup>
                                <TableThead role="none">
                                    <TableRow role="none">
                                        <GridHeaderCell filterable menu="column" columnTitle="Ship Country" id={nlHdr_c0}></GridHeaderCell>
                                        <GridHeaderCell filterable menu="column" columnTitle="Ship City" id={nlHdr_c1}></GridHeaderCell>
                                        <GridHeaderCell filterable menu="column" columnTitle="Ship Address" id={nlHdr_c2}></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                            <div className="k-resize-handle" style={{ top: "0px", left: "595.5px", height: "37px", width: "9px" }}>
                                <div className="k-resize-handle-inner"></div>
                            </div>
                        </div>
                    </GridHeader>
                    <GridContainer role="none">
                        <div className="k-grid-content-locked" role="none" style={{ width: "400px", height: "303px" }}>
                            <GridTable role="none">
                                <colgroup>
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "300px" }} />
                                </colgroup>
                                <TableTbody role="rowgroup">
                                    <TableRow className="k-master-row" role="row" aria-owns={`${nlCell_r0_c0} ${nlCell_r0_c1} ${nlCell_r0_c2}`}>
                                        <TableTd role="gridcell">10248</TableTd>
                                        <TableTd role="gridcell">Vins et alcools Chevalier</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt role="row" aria-owns={`${nlCell_r1_c0} ${nlCell_r1_c1} ${nlCell_r1_c2}`}>
                                        <TableTd role="gridcell">10249</TableTd>
                                        <TableTd role="gridcell">Toms Spezialitäten</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" aria-owns={`${nlCell_r2_c0} ${nlCell_r2_c1} ${nlCell_r2_c2}`}>
                                        <TableTd role="gridcell">10250</TableTd>
                                        <TableTd role="gridcell">Hanari Carnes</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt role="row" aria-owns={`${nlCell_r3_c0} ${nlCell_r3_c1} ${nlCell_r3_c2}`}>
                                        <TableTd role="gridcell">10251</TableTd>
                                        <TableTd role="gridcell">Victuailles en stock</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" aria-owns={`${nlCell_r4_c0} ${nlCell_r4_c1} ${nlCell_r4_c2}`}>
                                        <TableTd role="gridcell">10252</TableTd>
                                        <TableTd role="gridcell">Suprêmes délices</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt role="row" aria-owns={`${nlCell_r5_c0} ${nlCell_r5_c1} ${nlCell_r5_c2}`}>
                                        <TableTd role="gridcell">10253</TableTd>
                                        <TableTd role="gridcell">Toms Spezialitäten</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" aria-owns={`${nlCell_r6_c0} ${nlCell_r6_c1} ${nlCell_r6_c2}`}>
                                        <TableTd role="gridcell">10254</TableTd>
                                        <TableTd role="gridcell">Hanari Carnes</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt role="row" aria-owns={`${nlCell_r7_c0} ${nlCell_r7_c1} ${nlCell_r7_c2}`}>
                                        <TableTd role="gridcell">10255</TableTd>
                                        <TableTd role="gridcell">Victuailles en stock</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                        <GridContent className={contentClassName} role="none" style={{ width: "605px", height: "320px" }}>
                            <GridTable role="none">
                                <colgroup>
                                    <col style={{ width: "300px" }} />
                                    <col style={{ width: "300px" }} />
                                    <col style={{ width: "400px" }} />
                                </colgroup>
                                <TableTbody role="none">
                                    <TableRow className="k-master-row" role="none">
                                        <TableTd id={nlCell_r0_c0}>France</TableTd>
                                        <TableTd id={nlCell_r0_c1}>Reims</TableTd>
                                        <TableTd id={nlCell_r0_c2}>59 rue de l&apos;Abbaye</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt role="none">
                                        <TableTd id={nlCell_r1_c0}>Germany</TableTd>
                                        <TableTd id={nlCell_r1_c1}>Münster</TableTd>
                                        <TableTd id={nlCell_r1_c2}>Luisenstr. 48</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="none">
                                        <TableTd id={nlCell_r2_c0}>Brazil</TableTd>
                                        <TableTd id={nlCell_r2_c1}>Rio de Janeiro</TableTd>
                                        <TableTd id={nlCell_r2_c2}>Rua do Paço, 67</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt role="none">
                                        <TableTd id={nlCell_r3_c0}>France</TableTd>
                                        <TableTd id={nlCell_r3_c1}>Lyon</TableTd>
                                        <TableTd id={nlCell_r3_c2}>2, rue du Commerce</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="none">
                                        <TableTd id={nlCell_r4_c0}>Belgium</TableTd>
                                        <TableTd id={nlCell_r4_c1}>Charleroi</TableTd>
                                        <TableTd id={nlCell_r4_c2}>Boulevard Tirou, 255</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt role="none">
                                        <TableTd id={nlCell_r5_c0}>Germany</TableTd>
                                        <TableTd id={nlCell_r5_c1}>Münster</TableTd>
                                        <TableTd id={nlCell_r5_c2}>Luisenstr. 48</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="none">
                                        <TableTd id={nlCell_r6_c0}>Brazil</TableTd>
                                        <TableTd id={nlCell_r6_c1}>Rio de Janeiro</TableTd>
                                        <TableTd id={nlCell_r6_c2}>Rua do Paço, 67</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt role="none">
                                        <TableTd id={nlCell_r7_c0}>France</TableTd>
                                        <TableTd id={nlCell_r7_c1}>Lyon</TableTd>
                                        <TableTd id={nlCell_r7_c2}>2, rue du Commerce</TableTd>
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
};
