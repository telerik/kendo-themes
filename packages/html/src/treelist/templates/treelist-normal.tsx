import { TreeList } from "..";
import { GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from "../../grid";
import { Icon } from "../../icon";
import { nextId } from "../../misc";
import { TableThead, TableRow, TableTbody, TableTd } from "../../table";

export const TreeListNormal = ({ gridHeader, gridContent, menu, ...other }: any) => {
    const treelistId = nextId('treelist');

    return (
        <TreeList id={nextId('treelist')} _renderAriaRoot ariaRootId={treelistId} ariaColCount={3} ariaRowCount={6} {...other}>
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
                                    <GridHeaderCell menu={menu} columnTitle="Name" role="columnheader" aria-sort="ascending" aria-colindex={1} {...(menu ? { 'aria-haspopup': 'dialog' } : {})}></GridHeaderCell>
                                    <GridHeaderCell menu={menu} columnTitle="Position" role="columnheader" aria-colindex={2} {...(menu ? { 'aria-haspopup': 'dialog' } : {})}></GridHeaderCell>
                                    <GridHeaderCell menu={menu} columnTitle="Hire Date" role="columnheader" aria-colindex={3} {...(menu ? { 'aria-haspopup': 'dialog' } : {})}></GridHeaderCell>
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
                                    <TableTd role="gridcell" aria-colindex={1} aria-expanded="true">
                                        <Icon className="k-treelist-toggle" icon="chevron-down"></Icon>
                                        Daryl
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}>Sweeney</TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>CEO</TableTd>
                                </TableRow>
                                <TableRow role="row" alt aria-rowindex={3} aria-expanded="true">
                                    <TableTd role="gridcell" aria-colindex={1} aria-expanded="true">
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        <Icon className="k-treelist-toggle" icon="chevron-down"></Icon>
                                        Guy
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}>Wooten</TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>Chief Technical Officer</TableTd>
                                </TableRow>
                                <TableRow role="row" aria-rowindex={4} aria-expanded="true">
                                    <TableTd role="gridcell" aria-colindex={1} aria-expanded="true">
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        <Icon className="k-treelist-toggle" icon="chevron-down"></Icon>
                                        Buffy
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}>Weber</TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>VP, Engineering</TableTd>
                                </TableRow>
                                <TableRow role="row" alt aria-rowindex={5} aria-expanded="true">
                                    <TableTd role="gridcell" aria-colindex={1} aria-expanded="true">
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        <Icon className="k-treelist-toggle" icon="chevron-down"></Icon>
                                        Hyacinth
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}>Hood</TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>Team Lead</TableTd>
                                </TableRow>
                                <TableRow role="row" aria-rowindex={6}>
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        Akeem
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}>Carr</TableTd>
                                    <TableTd role="gridcell" aria-colindex={3}>Junior Software Developer</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                }
            </GridContainer>
        </TreeList>
    );
};

