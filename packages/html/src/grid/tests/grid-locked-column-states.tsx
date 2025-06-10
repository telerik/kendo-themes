import { GridContainer, GridContent, GridHeader, GridHeaderCell, GridHeaderTable, GridTable, GridWithLockedColumns } from '../../grid';
import { TableThead, TableRow, TableTbody, TableTd } from '../../table';

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <GridWithLockedColumns>
                <GridHeader>
                    <div className="k-grid-header-locked" style={{ width: "500px" }}>
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: "50px" }} />
                                <col style={{ width: "450px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell columnTitle="ID"></GridHeaderCell>
                                    <GridHeaderCell menu="column" columnTitle="Locked Column"></GridHeaderCell>
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
                                    <GridHeaderCell menu="column" columnTitle="Column"></GridHeaderCell>
                                    <GridHeaderCell menu="column" columnTitle="Column"></GridHeaderCell>
                                    <GridHeaderCell menu="column" columnTitle="Column"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <div className="k-grid-content-locked" style={{ width: "500px" }}>
                        <GridTable>
                            <colgroup>
                                <col style={{ width: "50px" }} />
                                <col style={{ width: "450px" }} />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-master-row">
                                    <TableTd>1</TableTd>
                                    <TableTd>Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt>
                                    <TableTd>2</TableTd>
                                    <TableTd>Alt Row</TableTd>
                                </TableRow>
                                <TableRow hover className="k-master-row">
                                    <TableTd>3</TableTd>
                                    <TableTd>Hovered Row</TableTd>
                                </TableRow>
                                <TableRow hover className="k-master-row" alt>
                                    <TableTd>4</TableTd>
                                    <TableTd>Alt + Hovered Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" selected >
                                    <TableTd>5</TableTd>
                                    <TableTd>Selected Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt selected >
                                    <TableTd>6</TableTd>
                                    <TableTd>Alt + Selected Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" hover selected>
                                    <TableTd>7</TableTd>
                                    <TableTd>Selected + Hovered Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt hover selected>
                                    <TableTd>8</TableTd>
                                    <TableTd>Alt + Selected + Hovered Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" highlighted >
                                    <TableTd>9</TableTd>
                                    <TableTd>Highlighted Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" highlighted alt>
                                    <TableTd>10</TableTd>
                                    <TableTd>Alt + Highlighted Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" highlighted hover>
                                    <TableTd>11</TableTd>
                                    <TableTd>Highlighted + Hovered Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" highlighted alt hover>
                                    <TableTd>12</TableTd>
                                    <TableTd>Alt + Highlighted + Hovered Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" highlighted selected >
                                    <TableTd>13</TableTd>
                                    <TableTd>Selected + Highlighted Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" highlighted alt selected >
                                    <TableTd>14</TableTd>
                                    <TableTd>Alt + Selected + Highlighted Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" highlighted hover selected>
                                    <TableTd>15</TableTd>
                                    <TableTd>Selected + Highlighted + Hovered Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" highlighted alt hover selected>
                                    <TableTd>16</TableTd>
                                    <TableTd>Alt + Selected + Highlighted + Hovered Row</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </div>
                    <GridContent style={{ width: "605px" }}>
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
                                    <TableTd>59 rue de l&apos;Abbaye Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt>
                                    <TableTd>Germany</TableTd>
                                    <TableTd>Münster</TableTd>
                                    <TableTd>Luisenstr. 48 Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" hover>
                                    <TableTd>Brazil</TableTd>
                                    <TableTd>Rio de Janeiro</TableTd>
                                    <TableTd>Rua do Paço, 67 Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt hover>
                                    <TableTd>France</TableTd>
                                    <TableTd>Lyon</TableTd>
                                    <TableTd>2, rue du Commerce Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" selected>
                                    <TableTd>Belgium</TableTd>
                                    <TableTd>Charleroi</TableTd>
                                    <TableTd>Boulevard Tirou, 255 Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt selected>
                                    <TableTd>Germany</TableTd>
                                    <TableTd>Münster</TableTd>
                                    <TableTd>Luisenstr. 48 Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" hover selected>
                                    <TableTd>Belgium</TableTd>
                                    <TableTd>Charleroi</TableTd>
                                    <TableTd>Boulevard Tirou, 255 Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt hover selected>
                                    <TableTd>Germany</TableTd>
                                    <TableTd>Münster</TableTd>
                                    <TableTd>Luisenstr. 48 Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" highlighted>
                                    <TableTd>Belgium</TableTd>
                                    <TableTd>Charleroi</TableTd>
                                    <TableTd>Boulevard Tirou, 255 Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" highlighted alt>
                                    <TableTd>Belgium</TableTd>
                                    <TableTd>Charleroi</TableTd>
                                    <TableTd>Boulevard Tirou, 255 Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" highlighted hover>
                                    <TableTd>Germany</TableTd>
                                    <TableTd>Münster</TableTd>
                                    <TableTd>Luisenstr. 48 Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" highlighted alt hover>
                                    <TableTd>Germany</TableTd>
                                    <TableTd>Münster</TableTd>
                                    <TableTd>Luisenstr. 48 Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" highlighted selected>
                                    <TableTd>Belgium</TableTd>
                                    <TableTd>Charleroi</TableTd>
                                    <TableTd>Boulevard Tirou, 255 Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" highlighted alt selected>
                                    <TableTd>Belgium</TableTd>
                                    <TableTd>Charleroi</TableTd>
                                    <TableTd>Boulevard Tirou, 255 Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" highlighted hover selected>
                                    <TableTd>Germany</TableTd>
                                    <TableTd>Münster</TableTd>
                                    <TableTd>Luisenstr. 48 Row</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" highlighted alt hover selected>
                                    <TableTd>Germany</TableTd>
                                    <TableTd>Münster</TableTd>
                                    <TableTd>Luisenstr. 48 Row</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                </GridContainer>
            </GridWithLockedColumns>
        </div>

    </>

);
