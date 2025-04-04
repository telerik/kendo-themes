import { Icon } from '../../icon';
import { SkeletonNormal } from '../../skeleton';
import { GridNormal, GridHeader, GridContainer, GridContent, GridHeaderTable, GridHeaderCell, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="col-2">jQuery grid</span>

            <section className="col-2">
                <GridNormal _renderAriaRoot={false} groupingHeader={false} className="k-grid-no-scrollbar">
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="100px" />
                                        <GridHeaderCell columnTitle="no width" />
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent>
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd>1</TableTd>
                                        <TableTd>Row</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt>
                                        <TableTd>2</TableTd>
                                        <TableTd>Alt row</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row">
                                        <TableTd>3</TableTd>
                                        <TableTd>
                                    This text continues to the end of the grid to test overflow behavior of row contents, as well as line height and vertical alignment.
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt>
                                        <TableTd>4</TableTd>
                                        <TableTd><SkeletonNormal animation={false} /></TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row">
                                        <TableTd>5</TableTd>
                                        <TableTd><SkeletonNormal animation={false} /></TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>

            <span className="col-2">jQuery -- fixed height, hierarchy, filter menu, sort icon</span>

            <section className="col-2">
                <GridNormal _renderAriaRoot={false} groupingHeader={false} className="k-grid-no-scrollbar" style={{ height: "250px" }} pager={false}>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col className="k-hierarchy-col" /><col /><col /><col /><col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell className="k-hierarchy-cell"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Default" menu="filter"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Hover" menu="filter" hover></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Focus" menu="filter" focus></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Active" menu="filter" active></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Sorted" menu="filter" sortable></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent>
                            <GridTable>
                                <colgroup>
                                    <col className="k-hierarchy-col" /><col /><col /><col /><col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row k-expanded">
                                        <TableTd className="k-hierarchy-cell">
                                            <Icon icon="caret-alt-down" />
                                        </TableTd>
                                        <TableTd>1</TableTd>
                                        <TableTd>Text</TableTd>
                                        <TableTd>Text</TableTd>
                                        <TableTd>Text</TableTd>
                                        <TableTd>Text</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-detail-row">
                                        <TableTd className="k-hierarchy-cell"></TableTd>
                                        <TableTd className="k-detail-cell" colspan={5}>
                                            {/* hierarchy child content */}
                                            <div style={{ background: "#ccc", padding: "10px" }}>
                                        Nested content
                                            </div>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-master-row">
                                        <TableTd className="k-hierarchy-cell">
                                            <Icon icon="caret-alt-right" />
                                        </TableTd>
                                        <TableTd>2</TableTd>
                                        <TableTd>Text</TableTd>
                                        <TableTd>Text</TableTd>
                                        <TableTd>Text</TableTd>
                                        <TableTd>Text</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>

            <span>Drag column</span>
            <section className="col-2">
                <GridNormal _renderAriaRoot={false} groupingHeader={false} id="grid" data-role="grid" className="k-grid-display-block" pager={false}>
                    <GridHeader>
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <GridHeaderTable>
                                <colgroup>
                                    <col className="k-drag-col" />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Company Name"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Country"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent>
                            <GridTable>
                                <colgroup>
                                    <col className="k-drag-col" />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                        <TableTd>Alfreds Futterkiste</TableTd>
                                        <TableTd>Germany</TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-master-row">
                                        <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                        <TableTd>Ana Trujillo Emparedados y helados</TableTd>
                                        <TableTd>Mexico</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>
        </div>
    </>
);
