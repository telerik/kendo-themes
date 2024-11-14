import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';
import { GridWithStickyColumns, GridHeader, GridGroupingHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <GridWithStickyColumns contentClassName="k-virtual-content" style={{ height: "400px", width: "500px" }} />

            <GridWithStickyColumns className="k-telerik-blazor">
                <GridGroupingHeader>
                    <ChipList>
                        <Chip text="Active Projects" actions={ <ChipAction type="remove"/> } />
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
                                        <TableRow className="k-master-row">
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>Employee 1</TableTd>
                                            <TableTd className="k-grid-content-sticky" style={{ left: '0px', right: '0px' }}>
                                                Team 1 (Hovered)
                                            </TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>2307</TableTd>
                                            <TableTd colspan={1}>False</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>Employee 2</TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1} style={{ left: '0px', right: '0px' }}>
                                                Team 2  (Selected)
                                            </TableTd>
                                            <TableTd className="k-grid-content-sticky" colspan={1}>5</TableTd>
                                            <TableTd colspan={1}>4225</TableTd>
                                            <TableTd colspan={1}>True</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
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
