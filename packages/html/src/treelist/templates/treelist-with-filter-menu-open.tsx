import { TreeList } from "..";
import { GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from "../../grid";
import { Popup } from "../../popup";
import { FilterMenuNormal } from "../../column-menu";
import { Icon } from "../../icon";
import { nextId } from "../../misc";
import { TableThead, TableRow, TableTbody, TableTd } from "../../table";

export const TreeListWithFilterMenuOpen = ({ ...other }: any) => {
    const treelistId = nextId('treelist');
    const filterPopupId = nextId('treelist-filter-popup');

    return (
        <>
        <TreeList _renderAriaRoot ariaRootId={treelistId} ariaColCount={3} ariaRowCount={4}
            children={(
                <>
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
                                        <GridHeaderCell
                                            menu="filter"
                                            columnTitle="Name"
                                            role="columnheader"
                                            aria-colindex={1}
                                            aria-haspopup="dialog"
                                            aria-expanded="true"
                                            aria-controls={filterPopupId}
                                        ></GridHeaderCell>
                                        <GridHeaderCell menu="filter" columnTitle="Position" role="columnheader" aria-colindex={2} aria-haspopup="dialog"></GridHeaderCell>
                                        <GridHeaderCell menu="filter" columnTitle="Hire Date" role="columnheader" aria-colindex={3} aria-haspopup="dialog"></GridHeaderCell>
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
                                        <TableTd role="gridcell" aria-colindex={1} aria-expanded="true">
                                            <Icon className="k-treelist-toggle" icon="chevron-down" />
                                            Daryl Sweeney
                                        </TableTd>
                                        <TableTd role="gridcell" aria-colindex={2}>CEO</TableTd>
                                        <TableTd role="gridcell" aria-colindex={3}>February 7, 2012</TableTd>
                                    </TableRow>
                                    <TableRow role="row" alt aria-rowindex={3} aria-expanded="false">
                                        <TableTd role="gridcell" aria-colindex={1} aria-expanded="false">
                                            <Icon className="k-treelist-toggle" icon="none" />
                                            <Icon className="k-treelist-toggle" icon="chevron-right" />
                                            Guy Wooten
                                        </TableTd>
                                        <TableTd role="gridcell" aria-colindex={2}>Chief Technical Officer</TableTd>
                                        <TableTd role="gridcell" aria-colindex={3}>March 3, 2010</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </>
            )}
            {...other}>
        </TreeList>
        <Popup className="k-grid-filter-popup" id={filterPopupId} role="dialog" aria-label="Name Filter Menu">
            <FilterMenuNormal />
        </Popup>
        </>
    );
};
