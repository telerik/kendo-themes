import { ChipList, Chip, ChipAction } from '../../chip';
import { Icon } from '../../icon';
import { GridContainer, GridContent, GridHeader, GridGroupingHeader, GridHeaderCell, GridHeaderTable, GridTable, GridWithStickyColumns } from '../../grid';
import { TableThead, TableRow, TableTbody, TableTd } from '../../table';

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <GridWithStickyColumns style={{ height: "400px", width: "500px" }}>
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
                                    <GridHeaderCell className="k-grid-content-sticky" rowspan={1} colspan={1} columnTitle="Product Name" style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Units In Stock"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Price"></GridHeaderCell>
                                    <GridHeaderCell className="k-grid-content-sticky" rowspan={1} colspan={1} columnTitle="Units on Order" style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Reorder Level"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className="k-virtual-content">
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
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Chai</TableTd>
                                        <TableTd colspan={1}>39</TableTd>
                                        <TableTd colspan={1}>$18.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>10</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" role="row" alt>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Chang</TableTd>
                                        <TableTd colspan={1}>17</TableTd>
                                        <TableTd colspan={1}>$19.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>40</TableTd>
                                        <TableTd colspan={1}>25</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" selected>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Aniseed Syrup (Selected)</TableTd>
                                        <TableTd colspan={1}>13</TableTd>
                                        <TableTd colspan={1}>$10.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>70</TableTd>
                                        <TableTd colspan={1}>25</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" role="row" alt selected>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Chef Anton&apos;s (Alt Selected)</TableTd>
                                        <TableTd colspan={1}>53</TableTd>
                                        <TableTd colspan={1}>$22.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" selected hover>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Chef Anton&apos;s (Selected + Hover) </TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                        <TableTd colspan={1}>$21.35</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" role="row" alt selected hover>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Grandma&apos;s (Alt Selected + Hover) </TableTd>
                                        <TableTd colspan={1}>120</TableTd>
                                        <TableTd colspan={1}>$25.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>25</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Uncle Bob&apos;s Organic Dried Pears</TableTd>
                                        <TableTd colspan={1}>15</TableTd>
                                        <TableTd colspan={1}>$30.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>10</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" role="row" alt>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Northwoods Cranberry Sauce</TableTd>
                                        <TableTd colspan={1}>6</TableTd>
                                        <TableTd colspan={1}>$40.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Mishi Kobe Niku</TableTd>
                                        <TableTd colspan={1}>29</TableTd>
                                        <TableTd colspan={1}>97</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" role="row" alt>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: "250px", borderRightWidth: "1px" }}>Ikura</TableTd>
                                        <TableTd colspan={1}>31</TableTd>
                                        <TableTd colspan={1}>$31.00</TableTd>
                                        <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: "250px", right: '0px', borderRightWidth: "1px" }}>0</TableTd>
                                        <TableTd colspan={1}>0</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                        <div className="k-height-container"><div></div></div>
                    </GridContent>
                </GridContainer>
            </GridWithStickyColumns>

            <GridWithStickyColumns className="k-telerik-blazor">
                <GridGroupingHeader>
                    <ChipList>
                        <Chip actions={ <ChipAction type="remove"/> }>Active Projects</Chip>
                    </ChipList>
                </GridGroupingHeader>
                <GridHeader>
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
                                    <GridHeaderCell colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell className="k-grid-header-sticky" columnTitle="Team" colspan={1} style={{ left: '0px', right: '0px' }}></GridHeaderCell>
                                    <GridHeaderCell className="k-grid-header-sticky" columnTitle="Active Projects" colspan={1}></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Salary"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="On Vacation"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className="k-virtual-content">
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
                                                    <span>Currently active projects: 2 &nbsp;</span>
                                                </p>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>Employee 0</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '0px' }}>
                                                Team 0
                                            </TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>2</TableTd>
                                            <TableTd colspan={1}>1429</TableTd>
                                            <TableTd colspan={1}>True</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>Employee 4</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '0px' }}>
                                                Team 1
                                            </TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>2</TableTd>
                                            <TableTd colspan={1}>2915</TableTd>
                                            <TableTd colspan={1}>True</TableTd>
                                        </TableRow>
                                        <TableRow className="k-group-footer">
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd></TableTd>
                                            <TableTd className="k-grid-footer-sticky" style={{ left: '0px', right: '0px' }}>
                                                Team size: 7
                                            </TableTd>
                                            <TableTd className="k-grid-footer-sticky"></TableTd>
                                            <TableTd>Total: X</TableTd>
                                            <TableTd></TableTd>
                                        </TableRow>
                                        <TableRow className="k-table-group-row k-grouping-row">
                                            <TableTd colspan={6}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    <span>Currently active projects: 5 &nbsp;</span>
                                                    <span>These people work on too many projects</span>
                                                </p>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" hover>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>Employee 1</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>
                                                Team 1 (Hovered)
                                            </TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>2307</TableTd>
                                            <TableTd colspan={1}>False</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt selected>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>Employee 2</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '0px' }}>
                                                Team 2  (Selected)
                                            </TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>4225</TableTd>
                                            <TableTd colspan={1}>True</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" hover selected>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>Employee 3</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>
                                                Team 0 (Selected and Hovered)
                                            </TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>4593</TableTd>
                                            <TableTd colspan={1}>False</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>Employee 5</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '0px' }}>
                                                Team 2
                                            </TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>2906</TableTd>
                                            <TableTd colspan={1}>False</TableTd>
                                        </TableRow>
                                        <TableRow className="k-group-footer">
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd></TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>
                                                Team size: 18
                                            </TableTd>
                                            <TableTd className="k-grid-content-sticky"></TableTd>
                                            <TableTd>Total: Y</TableTd>
                                            <TableTd></TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                        </div>
                        <div className="k-height-container">
                            <div></div>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithStickyColumns>
        </div>

    </>

);
