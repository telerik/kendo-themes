import { Icon } from '../../icon';
import { SkeletonNormal } from '../../skeleton';
import { GridNormal, GridHeader, GridContainer, GridContent, GridHeaderTable, GridHeaderCell, GridTable, GridPager } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="col-2">Angular grid</span>

            <section className="col-2">
                <GridNormal className="k-grid-no-scrollbar" dir="rtl" pager={( <GridPager dir="rtl" /> )} groupingHeader={false} >
                    {/* add padding-left or -right for scrollbar width */}
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="100px"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="no width"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent>
                            <div className="k-grid-table-wrap">
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
                                        <TableRow className="k-master-row k-alt" alt>
                                            <TableTd>2</TableTd>
                                            <TableTd>Alt row</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd>3</TableTd>
                                            <TableTd>
                                            This text continues to the end of the grid to test overflow behavior of row contents, as well as line height and vertical alignment.
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt>
                                            <TableTd>4</TableTd>
                                            <TableTd><SkeletonNormal animation={false} /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd>5</TableTd>
                                            <TableTd><SkeletonNormal animation={false} /></TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
                <div className="k-marquee"><div className="k-marquee-color"></div></div>
            </section>

            <span className="col-2">Angular -- fixed height, hierarchy, filter menu, sort icon</span>
            <section className="col-2">
                <GridNormal groupingHeader={false} pager={false} className="k-grid-no-scrollbar" style={{ height: "250px" }} dir="rtl">
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col className="k-hierarchy-col"/><col /><col /><col /><col />
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
                            <div className="k-grid-table-wrap">
                                <GridTable>
                                    <colgroup>
                                        <col className="k-hierarchy-col" /><col /><col /><col /><col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-master-row k-expanded">
                                            <TableTd className="k-hierarchy-cell"><Icon icon="caret-alt-down" /></TableTd>
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
                                        <TableRow alt className="k-master-row k-alt">
                                            <TableTd className="k-hierarchy-cell">
                                                <Icon icon="caret-alt-left" />
                                            </TableTd>
                                            <TableTd>2</TableTd>
                                            <TableTd>Text</TableTd>
                                            <TableTd>Text</TableTd>
                                            <TableTd>Text</TableTd>
                                            <TableTd>Text</TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>

        </div>
    </>
);
