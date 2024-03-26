import { Icon } from '../../icon';
import { GridContent, GridTable } from '../../grid';
import { TableTbody, TableRow, TableTd } from '../../table';
import { TreeListAggregates } from '..';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <section>
                <TreeListAggregates />
            </section>

            <section>
                <span>jQuery</span>
                <TreeListAggregates _renderAriaRoot={false} className="k-grid-display-block" style={{ height: "200px" }}
                    gridContent={
                        <>
                            <GridContent className="k-auto-scrollable" style={{ height: "140px" }}>
                                <GridTable>
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-treelist-group">
                                            <TableTd style={{ whiteSpace: "nowrap" }}>
                                                <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                                Daryl Sweeney
                                            </TableTd>
                                            <TableTd>CEO</TableTd>
                                            <TableTd>February 7, 2012</TableTd>
                                        </TableRow>
                                        <TableRow className="k-footer-template">
                                            <TableTd className="k-focus">
                                                <Icon className="k-treelist-toggle" icon="none" />
                                                99 employee(s)
                                            </TableTd>
                                            <TableTd></TableTd>
                                            <TableTd>Last employee hired on August 17, 2015</TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </GridContent>
                        </>
                    }
                />
            </section>

            <section>
                <span>Angular</span>
                <TreeListAggregates style={{ height: "200px" }}
                    gridContent={
                        <>
                            <GridContent className="k-virtual-content">
                                <GridTable>
                                    <div className="k-grid-table-wrap">
                                        <GridTable>
                                            <colgroup>
                                                <col />
                                                <col />
                                                <col />
                                            </colgroup>
                                            <TableTbody>
                                                <TableRow className="k-treelist-group">
                                                    <TableTd>
                                                        <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                                        Daryl Sweeney
                                                    </TableTd>
                                                    <TableTd>CEO</TableTd>
                                                    <TableTd>February 7, 2012</TableTd>
                                                </TableRow>
                                                <TableRow className="k-footer">
                                                    <TableTd className="k-focus">
                                                        <Icon className="k-treelist-toggle" icon="none" />
                                                        43 employee(s)
                                                    </TableTd>
                                                    <TableTd></TableTd>
                                                    <TableTd>
                                                        Last employee hired on 10/21/2019
                                                    </TableTd>
                                                </TableRow>
                                            </TableTbody>
                                        </GridTable>
                                    </div>
                                    <div className="k-height-container">
                                        <div style={{ height: '0px' }}></div>
                                    </div>
                                </GridTable>
                            </GridContent>
                        </>
                    }
                />
            </section>
        </div>
    </>
);
