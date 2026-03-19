import { TreeList } from "..";
import { GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from "../../grid";
import { Icon } from "../../icon";
import { nextId } from "../../misc";
import { TableThead, TableRow, TableTbody, TableTd } from "../../table";

/**
 * TreeList with cell selection mode.
 * In cell selection mode selected TDs have k-selected class and aria-selected="true".
 * The TR has neither k-selected nor aria-selected.
 */
export const TreeListCellSelection = ({ ...other }: any) => {
    const treelistId = nextId('treelist');

    return (
        <TreeList id={nextId('treelist')} _renderAriaRoot ariaRootId={treelistId} ariaColCount={3} ariaRowCount={5} {...other}>
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
                                <GridHeaderCell columnTitle="Name" role="columnheader" aria-colindex={1}></GridHeaderCell>
                                <GridHeaderCell columnTitle="Position" role="columnheader" aria-colindex={2}></GridHeaderCell>
                                <GridHeaderCell columnTitle="Hire Date" role="columnheader" aria-colindex={3}></GridHeaderCell>
                            </TableRow>
                        </TableThead>
                    </GridHeaderTable>
                </div>
            </GridHeader>
            <GridContainer>
                <GridContent>
                    <GridTable role="none">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <TableTbody role="rowgroup">
                            <TableRow role="row" aria-rowindex={2} aria-expanded="true">
                                <TableTd role="gridcell" aria-colindex={1} aria-expanded="true" selected aria-selected="true">
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down"></Icon>
                                    Daryl
                                </TableTd>
                                <TableTd role="gridcell" aria-colindex={2} selected aria-selected="true">Sweeney</TableTd>
                                <TableTd role="gridcell" aria-colindex={3}>CEO</TableTd>
                            </TableRow>
                            <TableRow role="row" alt aria-rowindex={3} aria-expanded="true">
                                <TableTd role="gridcell" aria-colindex={1} aria-expanded="true">
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down"></Icon>
                                    Guy
                                </TableTd>
                                <TableTd role="gridcell" aria-colindex={2}>Wooten</TableTd>
                                <TableTd role="gridcell" aria-colindex={3}>Chief Technical Officer</TableTd>
                            </TableRow>
                            <TableRow role="row" aria-rowindex={4}>
                                <TableTd role="gridcell" aria-colindex={1}>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down"></Icon>
                                    Buffy
                                </TableTd>
                                <TableTd role="gridcell" aria-colindex={2}>Weber</TableTd>
                                <TableTd role="gridcell" aria-colindex={3}>VP, Engineering</TableTd>
                            </TableRow>
                            <TableRow role="row" alt aria-rowindex={5}>
                                <TableTd role="gridcell" aria-colindex={1}>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    Hyacinth
                                </TableTd>
                                <TableTd role="gridcell" aria-colindex={2}>Hood</TableTd>
                                <TableTd role="gridcell" aria-colindex={3}>Team Lead</TableTd>
                            </TableRow>
                        </TableTbody>
                    </GridTable>
                </GridContent>
            </GridContainer>
        </TreeList>
    );
};
