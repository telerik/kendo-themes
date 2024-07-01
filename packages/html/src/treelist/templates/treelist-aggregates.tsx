import { TreeList } from "..";
import { GridContainer, GridContent, GridHeader, GridHeaderCell, GridHeaderTable, GridTable, Icon, TableRow, TableTbody, TableTd, TableThead } from "../..";

export const TreeListAggregates = ({ gridHeader, gridContent, menu, ...other }: any) => (
    <TreeList id="treelist" _renderAriaRoot {...other}>
        {gridHeader ||
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
                                <GridHeaderCell menu={menu} columnTitle="Name"></GridHeaderCell>
                                <GridHeaderCell menu={menu} columnTitle="Position"></GridHeaderCell>
                                <GridHeaderCell menu={menu} columnTitle="Hire Date"></GridHeaderCell>
                            </TableRow>
                        </TableThead>
                    </GridHeaderTable>
                </div>
            </GridHeader>
        }
        <GridContainer>
            {gridContent ||
                <GridContent>
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
                            <TableRow className="k-alt k-treelist-group" alt>
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none" />
                                    <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                    Guy Wooten
                                </TableTd>
                                <TableTd>Chief Technical Officer</TableTd>
                                <TableTd>March 3, 2010</TableTd>
                            </TableRow>
                            <TableRow className="k-treelist-group">
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none" />
                                    <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                    Priscilla Frank
                                </TableTd>
                                <TableTd>Chief Product Officer</TableTd>
                                <TableTd>November 30, 2014</TableTd>
                            </TableRow>
                            <TableRow className="k-treelist-group k-alt" alt>
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none" />
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                    Anika Vega
                                </TableTd>
                                <TableTd>Chief Process Officer</TableTd>
                                <TableTd>February 25, 2010</TableTd>
                            </TableRow>
                            <TableRow className="k-treelist-group">
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none" />
                                    <Icon className="k-treelist-toggle" icon="none" />
                                    <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                    Vernon Ballard
                                </TableTd>
                                <TableTd>Director Facilities</TableTd>
                                <TableTd>June 26, 2015</TableTd>
                            </TableRow>
                            <TableRow className="k-footer-template">
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none" />
                                    <Icon className="k-treelist-toggle" icon="none" />
                                    <Icon className="k-treelist-toggle" icon="none" />
                                    7 employee(s)
                                </TableTd>
                                <TableTd></TableTd>
                                <TableTd>Last employee hired on July 30, 2015</TableTd>
                            </TableRow>
                            <TableRow className="k-alt k-treelist-group" alt>
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none" />
                                    <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                    Nevada Hart
                                </TableTd>
                                <TableTd>Chief Financial Officer</TableTd>
                                <TableTd>August 17, 2015</TableTd>
                            </TableRow>
                            <TableRow className="k-treelist-group">
                                <TableTd>
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
            }
        </GridContainer>
    </TreeList>
);


export default TreeListAggregates;
