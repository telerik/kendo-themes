import { GridContainer, GridContent, GridHeader, GridHeaderCell, GridHeaderTable, GridTable, GridWithLockedColumns } from '../../grid';
import { TableThead, TableRow, TableTbody, TableTd } from '../../table';

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <GridWithLockedColumns>
                <GridHeader>
                    <div className="k-grid-header-locked" style={{ width: "400px" }}>
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: "150px" }} />
                                <col style={{ width: "300px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell menu="column" columnTitle="Order ID"></GridHeaderCell>
                                    <GridHeaderCell menu="column" columnTitle="Ship Name"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                    <div className="k-grid-header-wrap" style={{ width: "581px" }}>
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "300px" }} />
                                <col style={{ width: "400px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell menu="column" columnTitle="Ship Country"></GridHeaderCell>
                                    <GridHeaderCell menu="column" columnTitle="Ship City"></GridHeaderCell>
                                    <GridHeaderCell menu="column" columnTitle="Ship Address"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
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
                                <TableRow hover className="k-master-row k-alt" alt>
                                    <TableTd>10251</TableTd>
                                    <TableTd>Victuailles en stock (Hover)</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" selected >
                                    <TableTd>10252</TableTd>
                                    <TableTd>Suprêmes délices (Selected)</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt hover selected>
                                    <TableTd>10253</TableTd>
                                    <TableTd>Toms (Selected + Hover)</TableTd>
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
                    <GridContent className="k-virtual-content" style={{ width: "605px", height: "320px" }}>
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
                                <TableRow className="k-master-row k-alt" alt hover>
                                    <TableTd>France</TableTd>
                                    <TableTd>Lyon</TableTd>
                                    <TableTd>2, rue du Commerce</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" selected>
                                    <TableTd>Belgium</TableTd>
                                    <TableTd>Charleroi</TableTd>
                                    <TableTd>Boulevard Tirou, 255</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-alt" alt hover selected>
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
            </GridWithLockedColumns>
        </div>

    </>

);
