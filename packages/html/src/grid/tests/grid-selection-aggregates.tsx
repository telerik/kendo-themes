import { SkeletonNormal } from '../../skeleton';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer,GridContent, GridTable, GridPager } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="col-2">Grid with selection aggregates container</span>
            <section className="col-2">
                <Grid className="k-grid-no-scrollbar" pager={( <GridPager />)}>
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
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow>
                                        <TableTd>1</TableTd>
                                        <TableTd>Row</TableTd>
                                    </TableRow>
                                    <TableRow className="k-alt" alt>
                                        <TableTd className="k-selected">2</TableTd>
                                        <TableTd className="k-selected">Alt row</TableTd>
                                    </TableRow>
                                    <TableRow>
                                        <TableTd className="k-selected">3</TableTd>
                                        <TableTd>
                                        This text continues to the end of the grid to test overflow behavior of row contents, as well as line height and vertical alignment.
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-alt" alt>
                                        <TableTd className="k-selected">4</TableTd>
                                        <TableTd><SkeletonNormal animation={false} /></TableTd>
                                    </TableRow>
                                    <TableRow>
                                        <TableTd>5</TableTd>
                                        <TableTd>
                                            <SkeletonNormal animation={false}></SkeletonNormal>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                    <div className="k-selection-aggregates k-grid-selection-aggregates">
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Sum: </span>
                            <span className="k-selection-aggregates-item-value">9.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Avg: </span>
                            <span className="k-selection-aggregates-item-value">3.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Min: </span>
                            <span className="k-selection-aggregates-item-value">2.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Max: </span>
                            <span className="k-selection-aggregates-item-value">4.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Count: </span>
                            <span className="k-selection-aggregates-item-value">4</span>
                        </div>
                    </div>
                </Grid>
            </section>
            <span className="col-2">Grid with selection aggregates container (RTL)</span>
            <section className="col-2 k-rtl">
                <Grid className="k-grid-no-scrollbar" pager={( <GridPager dir="rtl" />)}>
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
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow>
                                        <TableTd>1</TableTd>
                                        <TableTd>Row</TableTd>
                                    </TableRow>
                                    <TableRow className="k-alt" alt>
                                        <TableTd className="k-selected">2</TableTd>
                                        <TableTd className="k-selected">Alt row</TableTd>
                                    </TableRow>
                                    <TableRow>
                                        <TableTd className="k-selected">3</TableTd>
                                        <TableTd>
                                        This text continues to the end of the grid to test overflow behavior of row contents, as well as line height and vertical alignment.
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-alt" alt>
                                        <TableTd className="k-selected">4</TableTd>
                                        <TableTd><SkeletonNormal animation={false} /></TableTd>
                                    </TableRow>
                                    <TableRow>
                                        <TableTd>5</TableTd>
                                        <TableTd>
                                            <SkeletonNormal animation={false}></SkeletonNormal>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                    <div className="k-selection-aggregates k-grid-selection-aggregates">
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Sum: </span>
                            <span className="k-selection-aggregates-item-value">9.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Avg: </span>
                            <span className="k-selection-aggregates-item-value">3.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Min: </span>
                            <span className="k-selection-aggregates-item-value">2.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Max: </span>
                            <span className="k-selection-aggregates-item-value">4.00</span>
                        </div>
                        <div className="k-selection-aggregates-item">
                            <span className="k-selection-aggregates-item-text">Count: </span>
                            <span className="k-selection-aggregates-item-value">4</span>
                        </div>
                    </div>
                </Grid>
            </section>
        </div>
    </>
);
