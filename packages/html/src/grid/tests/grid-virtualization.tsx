import { SkeletonNormal } from "../../skeleton";
import { GridNormal, GridHeader, GridContainer, GridContent, GridHeaderTable, GridHeaderCell, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="col-2">Grid with Virtualization</span>

            <section className="col-2">
                <GridNormal pager={false} groupingHeader={false} className="k-grid-virtual" style={{ height: "220px", width: "500px" }} >
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="Field 1" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 2" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 3" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 4" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 5" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 6" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 7" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 8" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 9" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 10" resizable></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent className="k-virtual-scroller">
                            <div className="k-virtual-scroller-wrap">
                                <div className="k-virtual-scroller-content" style={{ transform: "translateY(-600px)" }}>
                                    <GridTable style={{ height: "auto" }}>
                                        <colgroup>
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow className="k-master-row" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow alt className="k-master-row k-alt" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow alt className="k-master-row k-alt" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow alt className="k-master-row k-alt" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow alt className="k-master-row k-alt" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow alt className="k-master-row k-alt" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" style={{ height: "60px" }}>
                                                <TableTd>Row: 1, Col: 1</TableTd>
                                                <TableTd>Row: 1, Col: 2</TableTd>
                                                <TableTd>Row: 1, Col: 3</TableTd>
                                                <TableTd>Row: 1, Col: 4</TableTd>
                                                <TableTd>Row: 1, Col: 5</TableTd>
                                                <TableTd>Row: 1, Col: 6</TableTd>
                                                <TableTd>Row: 1, Col: 7</TableTd>
                                                <TableTd>Row: 1, Col: 8</TableTd>
                                                <TableTd>Row: 1, Col: 9</TableTd>
                                                <TableTd>Row: 1, Col: 10</TableTd>
                                            </TableRow>
                                            <TableRow alt className="k-master-row k-alt" style={{ height: "60px" }}>
                                                <TableTd>Row: 2, Col: 1</TableTd>
                                                <TableTd>Row: 2, Col: 2</TableTd>
                                                <TableTd>Row: 2, Col: 3</TableTd>
                                                <TableTd>Row: 2, Col: 4</TableTd>
                                                <TableTd>Row: 2, Col: 5</TableTd>
                                                <TableTd>Row: 2, Col: 6</TableTd>
                                                <TableTd>Row: 2, Col: 7</TableTd>
                                                <TableTd>Row: 2, Col: 8</TableTd>
                                                <TableTd>Row: 2, Col: 9</TableTd>
                                                <TableTd>Row: 2, Col: 10</TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" style={{ height: "60px" }}>
                                                <TableTd>Row: 3, Col: 1</TableTd>
                                                <TableTd>Row: 3, Col: 2</TableTd>
                                                <TableTd>Row: 3, Col: 3</TableTd>
                                                <TableTd>Row: 3, Col: 4</TableTd>
                                                <TableTd>Row: 3, Col: 5</TableTd>
                                                <TableTd>Row: 3, Col: 6</TableTd>
                                                <TableTd>Row: 3, Col: 7</TableTd>
                                                <TableTd>Row: 3, Col: 8</TableTd>
                                                <TableTd>Row: 3, Col: 9</TableTd>
                                                <TableTd>Row: 3, Col: 10</TableTd>
                                            </TableRow>
                                        </TableTbody>
                                    </GridTable>
                                </div>
                            </div>
                            <div className="k-virtual-scroller-size" style={{ height: "30000px" }}></div>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>

            <span className="col-2">Grid with Virtualization RTL</span>

            <section className="col-2">
                <GridNormal pager={false} groupingHeader={false} className="k-grid-virtual" dir="rtl" style={{ height: "220px", width: "500px" }} >
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                    <col style={{ width: "110px" }}/>
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="Field 1" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 2" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 3" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 4" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 5" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 6" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 7" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 8" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 9" resizable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Field 10" resizable></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent className="k-virtual-scroller">
                            <div className="k-virtual-scroller-wrap">
                                <div className="k-virtual-scroller-content" style={{ transform: "translateY(-600px)" }}>
                                    <GridTable style={{ height: "auto" }}>
                                        <colgroup>
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                            <col style={{ width: "110px" }} />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow className="k-master-row" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow alt className="k-master-row k-alt" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow alt className="k-master-row k-alt" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow alt className="k-master-row k-alt" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow alt className="k-master-row k-alt" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow alt className="k-master-row k-alt" style={{ height: "60px" }}>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                                <TableTd>
                                                    <SkeletonNormal animation={false} />
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" style={{ height: "60px" }}>
                                                <TableTd>Row: 1, Col: 1</TableTd>
                                                <TableTd>Row: 1, Col: 2</TableTd>
                                                <TableTd>Row: 1, Col: 3</TableTd>
                                                <TableTd>Row: 1, Col: 4</TableTd>
                                                <TableTd>Row: 1, Col: 5</TableTd>
                                                <TableTd>Row: 1, Col: 6</TableTd>
                                                <TableTd>Row: 1, Col: 7</TableTd>
                                                <TableTd>Row: 1, Col: 8</TableTd>
                                                <TableTd>Row: 1, Col: 9</TableTd>
                                                <TableTd>Row: 1, Col: 10</TableTd>
                                            </TableRow>
                                            <TableRow alt className="k-master-row k-alt" style={{ height: "60px" }}>
                                                <TableTd>Row: 2, Col: 1</TableTd>
                                                <TableTd>Row: 2, Col: 2</TableTd>
                                                <TableTd>Row: 2, Col: 3</TableTd>
                                                <TableTd>Row: 2, Col: 4</TableTd>
                                                <TableTd>Row: 2, Col: 5</TableTd>
                                                <TableTd>Row: 2, Col: 6</TableTd>
                                                <TableTd>Row: 2, Col: 7</TableTd>
                                                <TableTd>Row: 2, Col: 8</TableTd>
                                                <TableTd>Row: 2, Col: 9</TableTd>
                                                <TableTd>Row: 2, Col: 10</TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" style={{ height: "60px" }}>
                                                <TableTd>Row: 3, Col: 1</TableTd>
                                                <TableTd>Row: 3, Col: 2</TableTd>
                                                <TableTd>Row: 3, Col: 3</TableTd>
                                                <TableTd>Row: 3, Col: 4</TableTd>
                                                <TableTd>Row: 3, Col: 5</TableTd>
                                                <TableTd>Row: 3, Col: 6</TableTd>
                                                <TableTd>Row: 3, Col: 7</TableTd>
                                                <TableTd>Row: 3, Col: 8</TableTd>
                                                <TableTd>Row: 3, Col: 9</TableTd>
                                                <TableTd>Row: 3, Col: 10</TableTd>
                                            </TableRow>
                                        </TableTbody>
                                    </GridTable>
                                </div>
                            </div>
                            <div className="k-virtual-scroller-size" style={{ height: "30000px" }}></div>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>

        </div>
    </>
);
