import { Icon } from '../../icon';
import { TreeList } from '../../treelist';
import { GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <section>
                <span>jQuery</span>
                <TreeList id="treelist" className="k-grid-display-block" style={{ height: "650px" }}>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell rowspan={1} menu="filter" columnTitle="Name"></GridHeaderCell>
                                        <GridHeaderCell rowspan={1} data-index={1} menu="filter" columnTitle="Position"></GridHeaderCell>
                                        <GridHeaderCell rowspan={1} menu="filter" columnTitle="Hire Date"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent className="k-auto-scrollable" style={{ display: "block", height: "591px" }}>
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
                                    <TableRow className="k-alt k-treelist-group" alt>
                                        <TableTd style={{ whiteSpace: "nowrap" }}>
                                            <Icon className="k-treelist-toggle" icon="none" />
                                            <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                            Guy Wooten
                                        </TableTd>
                                        <TableTd>Chief Technical Officer</TableTd>
                                        <TableTd>March 3, 2010</TableTd>
                                    </TableRow>
                                    <TableRow className="k-treelist-group">
                                        <TableTd style={{ whiteSpace: "nowrap" }}>
                                            <Icon className="k-treelist-toggle" icon="none" />
                                            <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                            Priscilla Frank
                                        </TableTd>
                                        <TableTd>Chief Product Officer</TableTd>
                                        <TableTd>November 30, 2014</TableTd>
                                    </TableRow>
                                    <TableRow className="k-treelist-group k-alt" alt>
                                        <TableTd style={{ whiteSpace: "nowrap" }}>
                                            <Icon className="k-treelist-toggle" icon="none" />
                                            <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                            Anika Vega
                                        </TableTd>
                                        <TableTd>Chief Process Officer</TableTd>
                                        <TableTd>February 25, 2010</TableTd>
                                    </TableRow>
                                    <TableRow className="k-treelist-group">
                                        <TableTd style={{ whiteSpace: "nowrap" }}>
                                            <Icon className="k-treelist-toggle" icon="none" />
                                            <Icon className="k-treelist-toggle" icon="none" />
                                            <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                            Vernon Ballard
                                        </TableTd>
                                        <TableTd>Director Facilities</TableTd>
                                        <TableTd>June 26, 2015</TableTd>
                                    </TableRow>
                                    <TableRow className="k-footer-template">
                                        <TableTd className="k-focus">
                                            <Icon className="k-treelist-toggle" icon="none" />
                                            <Icon className="k-treelist-toggle" icon="none" />
                                            <Icon className="k-treelist-toggle" icon="none" />
                                            7 employee(s)
                                        </TableTd>
                                        <TableTd></TableTd>
                                        <TableTd>Last employee hired on July 30, 2015</TableTd>
                                    </TableRow>
                                    <TableRow className="k-alt k-treelist-group" alt>
                                        <TableTd style={{ whiteSpace: "nowrap" }}>
                                            <Icon className="k-treelist-toggle" icon="none" />
                                            <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                            Nevada Hart
                                        </TableTd>
                                        <TableTd>Chief Financial Officer</TableTd>
                                        <TableTd>August 17, 2015</TableTd>
                                    </TableRow>
                                    <TableRow className="k-treelist-group">
                                        <TableTd style={{ whiteSpace: "nowrap" }}>
                                            <Icon className="k-treelist-toggle" icon="none" />
                                            <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                            Hunter Fry
                                        </TableTd>
                                        <TableTd>General Counsel</TableTd>
                                        <TableTd>February 12, 2011</TableTd>
                                    </TableRow>
                                    <TableRow className="k-footer-template">
                                        <TableTd>
                                            <Icon className="k-treelist-toggle" icon="none" />
                                            <Icon className="k-treelist-toggle" icon="none" />
                                            98 employee(s)
                                        </TableTd>
                                        <TableTd></TableTd>
                                        <TableTd>Last employee hired on August 17, 2015</TableTd>
                                    </TableRow>
                                    <TableRow className="k-footer-template">
                                        <TableTd>
                                            <Icon className="k-treelist-toggle" icon="none" />
                                            99 employee(s)
                                        </TableTd>
                                        <TableTd></TableTd>
                                        <TableTd>Last employee hired on August 17, 2015</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </TreeList>
            </section>

            <section>
                <span>Angular</span>
                <TreeList _renderAriaRoot style={{ height: "410px" }}>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "250px" }} />
                                    <col style={{ width: "180px" }} />
                                    <col style={{ width: "180px" }} />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell rowspan={1} colspan={1} columnTitle="Name"></GridHeaderCell>
                                        <GridHeaderCell rowspan={1} colspan={1} columnTitle="Title"></GridHeaderCell>
                                        <GridHeaderCell rowspan={1} colspan={1} columnTitle="hireDate"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent className="k-virtual-content">
                            <div className="k-grid-table-wrap">
                                <GridTable>
                                    <colgroup>
                                        <col style={{ width: "250px" }} />
                                        <col style={{ width: "180px" }} />
                                        <col style={{ width: "180px" }} />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow>
                                            <TableTd colspan={1}>
                                                <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                                    Daryl Sweeney
                                            </TableTd>
                                            <TableTd colspan={1}>Chief Executive Officer</TableTd>
                                            <TableTd colspan={1}>1/15/2019</TableTd>
                                        </TableRow>
                                        <TableRow className="k-alt" alt>
                                            <TableTd colspan={1}>
                                                <Icon className="k-treelist-toggle" icon="none" />
                                                <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                                Guy Wooten
                                            </TableTd>
                                            <TableTd colspan={1}>Chief Technical Officer</TableTd>
                                            <TableTd colspan={1}>2/19/2019</TableTd>
                                        </TableRow>
                                        <TableRow>
                                            <TableTd colspan={1}>
                                                <Icon className="k-treelist-toggle" icon="none" />
                                                <Icon className="k-treelist-toggle" icon="none" />
                                                <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                                Buffy Weber
                                            </TableTd>
                                            <TableTd colspan={1}>VP, Engineering</TableTd>
                                            <TableTd colspan={1}>4/13/2019</TableTd>
                                        </TableRow>
                                        <TableRow className="k-footer">
                                            <TableTd className="k-focus">
                                                <Icon className="k-treelist-toggle" icon="none" />
                                                <Icon className="k-treelist-toggle" icon="none" />
                                                <Icon className="k-treelist-toggle" icon="none" />
                                                35 employee(s)
                                            </TableTd>
                                            <TableTd></TableTd>
                                            <TableTd>
                                                Last employee hired on 10/21/2019
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-alt" alt>
                                            <TableTd colspan={1}>
                                                <Icon className="k-treelist-toggle" icon="none" />
                                                <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                                Priscilla Frank
                                            </TableTd>
                                            <TableTd colspan={1}>Chief Product Officer</TableTd>
                                            <TableTd colspan={1}>4/22/2019</TableTd>
                                        </TableRow>
                                        <TableRow className="k-footer">
                                            <TableTd>
                                                <Icon className="k-treelist-toggle" icon="none" />
                                                <Icon className="k-treelist-toggle" icon="none" />
                                                42 employee(s)
                                            </TableTd>
                                            <TableTd></TableTd>
                                            <TableTd>
                                                Last employee hired on 10/21/2019
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-footer">
                                            <TableTd>
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
                        </GridContent>
                    </GridContainer>
                </TreeList>
            </section>
        </div>
    </>
);
