import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { classNames } from '../../misc';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const GridWithLockedColumns = ({ className, headerWrapClassName, contentClassName, ...other }: any) => (
    <Grid className={classNames("k-grid-lockedcolumns", className)} _renderAriaRoot
        children={(
            <>
                <GridHeader>
                    <div className="k-grid-header-locked" style={{ width: "400px" }}>
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: "150px" }} />
                                <col style={{ width: "300px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell filterable menu="column" columnTitle="Order ID"></GridHeaderCell>
                                    <GridHeaderCell filterable menu="column" columnTitle="Ship Name"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                    <div className={`k-grid-header-wrap ${headerWrapClassName}`} style={{ width: "581px" }}>
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "400px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell filterable menu="column" columnTitle="Ship Country"></GridHeaderCell>
                                    <GridHeaderCell filterable menu="column" columnTitle="Ship City"></GridHeaderCell>
                                    <GridHeaderCell filterable menu="column" columnTitle="Ship Address"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                        <div className="k-resize-handle" style={{ top: "0px", left: "595.5px", height: "37px", width: "9px" }}>
                            <div className="k-resize-handle-inner"></div>
                        </div>
                    </div>
                </GridHeader>
                <GridContainer>
                    <div className="k-grid-content-locked" style={{ width: "400px", height: "303px" }}>
                        <GridTable>
                            <colgroup>
                                <col style={{ width: "150px" }} />
                                <col style={{ width: "300px" }} />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-master-row">
                                    <TableTd>10248</TableTd>
                                    <TableTd>Vins et alcools Chevalier</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt>
                                    <TableTd>10249</TableTd>
                                    <TableTd>Toms Spezialitäten</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd>10250</TableTd>
                                    <TableTd>Hanari Carnes</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt>
                                    <TableTd>10251</TableTd>
                                    <TableTd>Victuailles en stock</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd>10252</TableTd>
                                    <TableTd>Suprêmes délices</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt>
                                    <TableTd>10253</TableTd>
                                    <TableTd>Toms Spezialitäten</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd>10254</TableTd>
                                    <TableTd>Hanari Carnes</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt>
                                    <TableTd>10255</TableTd>
                                    <TableTd>Victuailles en stock</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </div>
                    <GridContent className={contentClassName} style={{ width: "605px", height: "320px" }}>
                        <GridTable>
                            <colgroup>
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "400px" }} />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-master-row">
                                    <TableTd>France</TableTd>
                                    <TableTd>Reims</TableTd>
                                    <TableTd>59 rue de l&apos;Abbaye</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt>
                                    <TableTd>Germany</TableTd>
                                    <TableTd>Münster</TableTd>
                                    <TableTd>Luisenstr. 48</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd>Brazil</TableTd>
                                    <TableTd>Rio de Janeiro</TableTd>
                                    <TableTd>Rua do Paço, 67</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt>
                                    <TableTd>France</TableTd>
                                    <TableTd>Lyon</TableTd>
                                    <TableTd>2, rue du Commerce</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd>Belgium</TableTd>
                                    <TableTd>Charleroi</TableTd>
                                    <TableTd>Boulevard Tirou, 255</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt>
                                    <TableTd>Germany</TableTd>
                                    <TableTd>Münster</TableTd>
                                    <TableTd>Luisenstr. 48</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row">
                                    <TableTd>Brazil</TableTd>
                                    <TableTd>Rio de Janeiro</TableTd>
                                    <TableTd>Rua do Paço, 67</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt>
                                    <TableTd>France</TableTd>
                                    <TableTd>Lyon</TableTd>
                                    <TableTd>2, rue du Commerce</TableTd>
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

export default GridWithLockedColumns;
