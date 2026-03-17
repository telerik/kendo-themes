import { TreeList } from "..";
import { GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from "../../grid";
import { Icon } from "../../icon";
import { nextId } from "../../misc";
import { TableThead, TableRow, TableTbody, TableTd } from "../../table";

export const TreeListRowReordering = ({ gridHeader, gridContent, menu, ...other }: any) => {
    const treelistId = nextId('treelist');

    return (
        <TreeList id={nextId('treelist')} _renderAriaRoot ariaRootId={treelistId} ariaColCount={4} ariaRowCount={6} {...other} >
            {gridHeader ||
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable role="none">
                            <colgroup>
                                <col className="k-drag-col"/>
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead role="rowgroup">
                                <TableRow role="row" aria-rowindex={1}>
                                    <GridHeaderCell role="columnheader" accessibleLabel="Drag column"></GridHeaderCell>
                                    <GridHeaderCell menu={menu} columnTitle="First Name" role="columnheader" aria-colindex={2}></GridHeaderCell>
                                    <GridHeaderCell menu={menu} columnTitle="Last Name" role="columnheader" aria-colindex={3}></GridHeaderCell>
                                    <GridHeaderCell menu={menu} columnTitle="Position" role="columnheader" aria-colindex={4}></GridHeaderCell>
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
                                <col className="k-drag-col" />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableTbody role="rowgroup">
                                <TableRow role="row" aria-rowindex={2} aria-expanded="true">
                                    <TableTd className="k-drag-cell" role="gridcell" aria-label="Reorder">
                                        <Icon icon="reorder"/>
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2} aria-expanded="true">
                                        <Icon className="k-treelist-toggle" icon="caret-alt-down"/>
                                        Daryl
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>Sweeney</TableTd>
                                    <TableTd role="gridcell" aria-colindex={4}>CEO</TableTd>
                                </TableRow>
                                <TableRow role="row" alt aria-rowindex={3} aria-expanded="true">
                                    <TableTd className="k-drag-cell" role="gridcell" aria-label="Reorder">
                                        <Icon icon="reorder"/>
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2} aria-expanded="true">
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                        Guy
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>Wooten</TableTd>
                                    <TableTd role="gridcell" aria-colindex={4}>Chief Technical Officer</TableTd>
                                </TableRow>
                                <TableRow role="row" aria-rowindex={4} aria-expanded="true">
                                    <TableTd className="k-drag-cell" role="gridcell" aria-label="Reorder">
                                        <Icon icon="reorder"/>
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2} aria-expanded="true">
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                        Buffy
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>Weber</TableTd>
                                    <TableTd role="gridcell" aria-colindex={4}>VP, Engineering</TableTd>
                                </TableRow>
                                <TableRow role="row" alt aria-rowindex={5} aria-expanded="true">
                                    <TableTd className="k-drag-cell" role="gridcell" aria-label="Reorder">
                                        <Icon icon="reorder"/>
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2} aria-expanded="true">
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                        Hyacinth
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>Hood</TableTd>
                                    <TableTd role="gridcell" aria-colindex={4}>Team Lead</TableTd>
                                </TableRow>
                                <TableRow role="row" aria-rowindex={6}>
                                    <TableTd className="k-drag-cell" role="gridcell" aria-label="Reorder">
                                        <Icon icon="reorder"/>
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}>
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        Akeem
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>Carr</TableTd>
                                    <TableTd role="gridcell" aria-colindex={4}>Junior Software Developer</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                }
            </GridContainer>
        </TreeList>
    );
};

