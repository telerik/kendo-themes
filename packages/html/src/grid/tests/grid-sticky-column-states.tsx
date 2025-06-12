import { Icon } from '../../icon';
import { GridContainer, GridContent, GridHeader, GridHeaderCell, GridHeaderTable, GridTable, GridWithStickyColumns } from '../../grid';
import { TableThead, TableRow, TableTbody, TableTd } from '../../table';

const styles = `
    #test-area {
        max-width: 1240px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <GridWithStickyColumns>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable style={{ width: "1100px" }}>
                            <colgroup>
                                <col style={{ width: "250px" }} />
                                <col style={{ width: "150px" }} />
                                <col style={{ width: "200px" }} />
                                <col style={{ width: "250px" }} />
                                <col style={{ width: "250px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell sticky rowspan={1} colspan={1} columnTitle="Sticky Column" style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Column"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Column"></GridHeaderCell>
                                    <GridHeaderCell sticky rowspan={1} colspan={1} columnTitle="Sticky Column" style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Column"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div style={{ position: "relative" }}>
                            <GridTable style={{ width: "1100px" }}>
                                <colgroup>
                                    <col width="250px" />
                                    <col width="150px" />
                                    <col width="200px" />
                                    <col width="250px" />
                                    <col width="250px" />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Row</TableTd>
                                        <TableTd colspan={1}>39</TableTd>
                                        <TableTd colspan={1}>$18.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>10</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Alt Row</TableTd>
                                        <TableTd colspan={1}>17</TableTd>
                                        <TableTd colspan={1}>$19.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>40</TableTd>
                                        <TableTd colspan={1}>25</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" hover>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Hovered Row</TableTd>
                                        <TableTd colspan={1}>39</TableTd>
                                        <TableTd colspan={1}>$18.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>10</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" hover alt>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Alt + Hovered Row</TableTd>
                                        <TableTd colspan={1}>17</TableTd>
                                        <TableTd colspan={1}>$19.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>40</TableTd>
                                        <TableTd colspan={1}>25</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" selected>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Selected Row</TableTd>
                                        <TableTd colspan={1}>13</TableTd>
                                        <TableTd colspan={1}>$10.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" highlighted colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>Highlighted Cell</TableTd>
                                        <TableTd colspan={1}>25</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt selected>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Alt + Selected Row</TableTd>
                                        <TableTd colspan={1}>53</TableTd>
                                        <TableTd colspan={1}>$22.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" highlighted colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>Highlighted Cell</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" selected hover>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Selected + Hovered Row</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                        <TableTd colspan={1}>$21.35</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt selected hover>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Alt + Selected + Hovered Row</TableTd>
                                        <TableTd colspan={1}>120</TableTd>
                                        <TableTd colspan={1}>$25.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>25</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" highlighted role="row">
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Highlighted Row</TableTd>
                                        <TableTd colspan={1}>13</TableTd>
                                        <TableTd colspan={1}>$10.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" selected colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>Selected Cell</TableTd>
                                        <TableTd colspan={1}>25</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" highlighted role="row" alt>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Alt + Highlighted Row</TableTd>
                                        <TableTd colspan={1}>53</TableTd>
                                        <TableTd colspan={1}>$22.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" selected colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>Selected Cell</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" highlighted role="row" hover>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Highlighted + Hovered Row</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                        <TableTd colspan={1}>$21.35</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" highlighted role="row" alt hover>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Alt + Highlighted + Hovered Row</TableTd>
                                        <TableTd colspan={1}>120</TableTd>
                                        <TableTd colspan={1}>$25.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>25</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" highlighted role="row" selected>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Selected + Highlighted Row</TableTd>
                                        <TableTd colspan={1}>13</TableTd>
                                        <TableTd colspan={1}>$10.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>70</TableTd>
                                        <TableTd colspan={1}>25</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" highlighted role="row" alt selected>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Alt + Selected + Highlighted Row</TableTd>
                                        <TableTd colspan={1}>53</TableTd>
                                        <TableTd colspan={1}>$22.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" highlighted role="row" selected hover>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Selected + Highlighted + Hovered Row</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                        <TableTd colspan={1}>$21.35</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" highlighted role="row" alt selected hover>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Alt + Selected + Highlighted + Hovered Row</TableTd>
                                        <TableTd colspan={1}>120</TableTd>
                                        <TableTd colspan={1}>$25.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>25</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithStickyColumns>

            <GridWithStickyColumns>
                <GridHeader draggable>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col className="k-group-col" />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "200px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "100px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Column"></GridHeaderCell>
                                    <GridHeaderCell sticky columnTitle="Sticky Column" colspan={1} style={{ left: '0px', right: '0px' }}></GridHeaderCell>
                                    <GridHeaderCell sticky columnTitle="Sticky Column" colspan={1}></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Column"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Column"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div style={{ position: "relative" }}>
                            <div className="k-virtual-position">
                                <GridTable style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col className="k-group-col" />
                                        <col style={{ width: "100px" }} />
                                        <col style={{ width: "200px" }} />
                                        <col style={{ width: "100px" }} />
                                        <col style={{ width: "100px" }} />
                                        <col style={{ width: "100px" }} />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-table-group-row k-grouping-row">
                                            <TableTd colspan={6}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    <span>Placeholder: X &nbsp;</span>
                                                    <span>placeholder</span>
                                                </p>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>0</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '0px' }}>
                                                Row
                                            </TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>2</TableTd>
                                            <TableTd colspan={1}>1429</TableTd>
                                            <TableTd colspan={1}>True</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>4</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '0px' }}>
                                                Alt Row
                                            </TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>2</TableTd>
                                            <TableTd colspan={1}>2915</TableTd>
                                            <TableTd colspan={1}>True</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" hover>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>1</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>Hovered Row</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>2307</TableTd>
                                            <TableTd colspan={1}>False</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" hover alt>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>1</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>Alt + Hovered Row</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>2307</TableTd>
                                            <TableTd colspan={1}>False</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" selected>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>2</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '0px' }}>Selected Row</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>4225</TableTd>
                                            <TableTd colspan={1}>True</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt selected>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>2</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '0px' }}>Alt + Selected Row</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>4225</TableTd>
                                            <TableTd colspan={1}>True</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" hover selected>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>3</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>Selected + Hovered Row</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>4593</TableTd>
                                            <TableTd colspan={1}>False</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt hover selected>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>3</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>Alt + Selected + Hovered Row</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>4593</TableTd>
                                            <TableTd colspan={1}>False</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" highlighted>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>2</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '0px' }}>Highlighted Row</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>4225</TableTd>
                                            <TableTd colspan={1}>True</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" highlighted alt>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>2</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '0px' }}>Alt Highlighted Row</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>4225</TableTd>
                                            <TableTd colspan={1}>True</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" highlighted hover>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>3</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>Highlighted + Hovered Row</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>4593</TableTd>
                                            <TableTd colspan={1}>False</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt highlighted hover>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>3</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>Alt + Highlighted + Hovered Row</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>4593</TableTd>
                                            <TableTd colspan={1}>False</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" highlighted selected>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>2</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '0px' }}>Selected + Highlighted Row</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>4225</TableTd>
                                            <TableTd colspan={1}>True</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" highlighted alt selected>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>2</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '0px' }}>Alt + Selected + Highlighted Row</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>4225</TableTd>
                                            <TableTd colspan={1}>True</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" highlighted hover selected>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>3</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>Selected + Highlighted + Hovered</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>4593</TableTd>
                                            <TableTd colspan={1}>False</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt highlighted hover selected>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>3</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>Alt + Selected + Highlighted + Hovered</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>4593</TableTd>
                                            <TableTd colspan={1}>False</TableTd>
                                        </TableRow>
                                        <TableRow className="k-group-footer">
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd></TableTd>
                                            <TableTd className="k-grid-footer-sticky" style={{ left: '0px', right: '0px' }}>
                                                Placeholder: X
                                            </TableTd>
                                            <TableTd className="k-grid-footer-sticky"></TableTd>
                                            <TableTd>X</TableTd>
                                            <TableTd></TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithStickyColumns>
        </div>

    </>

);
