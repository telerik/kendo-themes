import { Grid, GridHeader, GridContainer, GridContent, GridHeaderTable, GridHeaderCell, GridTable, GridPager } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>jQuery grid</span>
            <span>Angular grid</span>

            <section>
                <Grid className="k-grid-no-scrollbar" pager={( <GridPager className="k-focus" /> )}>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="100px" ></GridHeaderCell>
                                        <GridHeaderCell columnTitle="no width" ></GridHeaderCell>
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
                                        <TableTd>2</TableTd>
                                        <TableTd>Alt row</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </Grid>
            </section>

            <section>
                <Grid className="k-grid-no-scrollbar" _renderAriaRoot pager={( <GridPager className="k-focus" /> )}>
                    {/* add padding-left or -right for scrollbar width */}
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "100px" }}/>
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="100px" ></GridHeaderCell>
                                        <GridHeaderCell columnTitle="no width" ></GridHeaderCell>
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
                                        <TableRow>
                                            <TableTd>1</TableTd>
                                            <TableTd>Row</TableTd>
                                        </TableRow>
                                        <TableRow className="k-alt" alt>
                                            <TableTd>2</TableTd>
                                            <TableTd>Alt row</TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                            <div className="k-height-container">
                                {/* set height to scroll height (virtual scrolling) */}
                                <div style={{ height: '0px' }}></div>
                            </div>
                        </GridContent>
                    </GridContainer>
                </Grid>
            </section>


            <span>jQuery grid pager top</span>
            <span>Angular grid pager top</span>

            <section>
                <Grid className="k-grid-no-scrollbar" pagerPosition="top" pager={ <GridPager className="k-grid-pager-top" /> }>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="100px" ></GridHeaderCell>
                                        <GridHeaderCell columnTitle="no width" ></GridHeaderCell>
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
                                        <TableTd>2</TableTd>
                                        <TableTd>Alt row</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </Grid>
            </section>

            <section>
                <Grid className="k-grid-no-scrollbar" _renderAriaRoot pagerPosition="top" pager={ <GridPager className="k-grid-pager-top" /> }>
                    {/* add padding-left or -right for scrollbar width */}
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "100px" }}/>
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="100px" ></GridHeaderCell>
                                        <GridHeaderCell columnTitle="no width" ></GridHeaderCell>
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
                                        <TableRow>
                                            <TableTd>1</TableTd>
                                            <TableTd>Row</TableTd>
                                        </TableRow>
                                        <TableRow className="k-alt" alt>
                                            <TableTd>2</TableTd>
                                            <TableTd>Alt row</TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                            <div className="k-height-container">
                                {/* set height to scroll height (virtual scrolling) */}
                                <div style={{ height: '0px' }}></div>
                            </div>
                        </GridContent>
                    </GridContainer>
                </Grid>
            </section>

        </div>
    </>
);
