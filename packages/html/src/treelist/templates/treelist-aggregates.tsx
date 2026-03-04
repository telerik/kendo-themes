import { TreeList } from "..";
import { GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from "../../grid";
import { Icon } from "../../icon";
import { nextId } from "../../misc";
import { TableThead, TableRow, TableTbody, TableTd } from "../../table";

export const TreeListAggregates = ({ gridHeader, gridContent, menu, ...other }: any) => {
    const treelistId = nextId('treelist');

    return (
        <TreeList id="treelist" _renderAriaRoot ariaRootId={treelistId} ariaColCount={3} ariaRowCount={13} {...other}>
            {gridHeader ||
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable role="none">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead role="rowgroup">
                                <TableRow role="row" aria-rowindex={1}>
                                    <GridHeaderCell menu={menu} columnTitle="Name" role="columnheader" aria-colindex={1}></GridHeaderCell>
                                    <GridHeaderCell menu={menu} columnTitle="Position" role="columnheader" aria-colindex={2}></GridHeaderCell>
                                    <GridHeaderCell menu={menu} columnTitle="Hire Date" role="columnheader" aria-colindex={3}></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
            }
            <GridContainer>
                {gridContent ||
                    <GridContent>
                        <GridTable role="none">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableTbody role="rowgroup">
                                <TableRow role="row" aria-rowindex={2} aria-expanded="true">
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                        Daryl Sweeney
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}>CEO</TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>February 7, 2012</TableTd>
                                </TableRow>
                                <TableRow role="row" alt aria-rowindex={3} aria-expanded="false">
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                        Guy Wooten
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}>Chief Technical Officer</TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>March 3, 2010</TableTd>
                                </TableRow>
                                <TableRow role="row" aria-rowindex={4} aria-expanded="false">
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                        Priscilla Frank
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}>Chief Product Officer</TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>November 30, 2014</TableTd>
                                </TableRow>
                                <TableRow role="row" alt aria-rowindex={5} aria-expanded="true">
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                        Anika Vega
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}>Chief Process Officer</TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>February 25, 2010</TableTd>
                                </TableRow>
                                <TableRow role="row" aria-rowindex={6} aria-expanded="false">
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                        Vernon Ballard
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}>Director Facilities</TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>June 26, 2015</TableTd>
                                </TableRow>
                                <TableRow className="k-footer-template" role="row" aria-rowindex={7}>
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        7 employee(s)
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}></TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>Last employee hired on July 30, 2015</TableTd>
                                </TableRow>
                                <TableRow role="row" alt aria-rowindex={8} aria-expanded="false">
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                        Nevada Hart
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}>Chief Financial Officer</TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>August 17, 2015</TableTd>
                                </TableRow>
                                <TableRow role="row" aria-rowindex={9} aria-expanded="false">
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                        Hunter Fry
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}>General Counsel</TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>February 12, 2011</TableTd>
                                </TableRow>
                                <TableRow className="k-footer-template" role="row" aria-rowindex={10}>
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        98 employee(s)
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}></TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>Last employee hired on August 17, 2015</TableTd>
                                </TableRow>
                                <TableRow className="k-footer-template" role="row" aria-rowindex={11}>
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        99 employee(s)
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}></TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>Last employee hired on August 17, 2015</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                }
            </GridContainer>
        </TreeList>
    );
};

