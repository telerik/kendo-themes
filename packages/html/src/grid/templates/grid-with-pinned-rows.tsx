import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridPinnedContainer } from '../../grid';
import { ContextMenu } from '../../context-menu';
import { MenuListItem } from '../../menu';
import { Popup } from '../../popup';
import { TableTbody, TableThead, TableRow, TableTd } from '../../table';
import { nextId } from '../../misc';

/**
 * Grid with row pinning via context menu (no dedicated pin column).
 *
 * In this mode every data cell in both the pinned-rows table and the regular
 * content table announces the row-pinning context menu via aria-haspopup/aria-controls/aria-expanded.
 */
export const GridWithPinnedRows = ({ contentClassName, ...other }: any) => {
    const gridId = nextId('grid');
    const ctxMenuId = nextId('grid-ctx-menu');

    return (
        <>
            <Grid _renderAriaRoot ariaRootId={gridId} ariaColCount={3} ariaRowCount={5}
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
                                            <GridHeaderCell columnTitle="Contact Name" role="columnheader" aria-colindex={1} />
                                            <GridHeaderCell columnTitle="Job Title" role="columnheader" aria-colindex={2} />
                                            <GridHeaderCell columnTitle="Country" role="columnheader" aria-colindex={3} />
                                        </TableRow>
                                    </TableThead>
                                </GridHeaderTable>
                            </div>
                        </GridHeader>

                        {/* Pinned content — row pinned to top, context-menu mode (no dedicated pin column) */}
                        <GridPinnedContainer role="none">
                            <div className="k-grid-pinned-wrap" role="none">
                                <GridTable role="none">
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    {/* Raw <tbody> used here so aria-label and role are rendered in the DOM.
                                        TableTbody does not spread HTML attributes. */}
                                    <tbody className="k-table-tbody" role="rowgroup" aria-label="Top pinned rows">
                                        <TableRow className="k-master-row" role="row" aria-rowindex={1} selected aria-selected="true">
                                            <TableTd role="gridcell" aria-colindex={1} aria-haspopup="menu" aria-controls={ctxMenuId} aria-expanded="true">Shelden Greyes</TableTd>
                                            <TableTd role="gridcell" aria-colindex={2} aria-haspopup="menu" aria-controls={ctxMenuId} aria-expanded="false">Operator</TableTd>
                                            <TableTd role="gridcell" aria-colindex={3} aria-haspopup="menu" aria-controls={ctxMenuId} aria-expanded="false">UK</TableTd>
                                        </TableRow>
                                    </tbody>
                                </GridTable>
                            </div>
                        </GridPinnedContainer>

                        <GridContainer>
                            <GridContent className={contentClassName}>
                                <GridTable role="none">
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <TableTbody role="rowgroup">
                                        <TableRow className="k-master-row" role="row" aria-rowindex={2}>
                                            <TableTd role="gridcell" aria-colindex={1} aria-haspopup="menu" aria-controls={ctxMenuId} aria-expanded="false">Sig Jeannel</TableTd>
                                            <TableTd role="gridcell" aria-colindex={2} aria-haspopup="menu" aria-controls={ctxMenuId} aria-expanded="false">Human Resources Assistant III</TableTd>
                                            <TableTd role="gridcell" aria-colindex={3} aria-haspopup="menu" aria-controls={ctxMenuId} aria-expanded="false">USA</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-pinned-source" role="row" alt aria-rowindex={3}>
                                            <TableTd role="gridcell" aria-colindex={1} aria-haspopup="menu" aria-controls={ctxMenuId} aria-expanded="false">Shelden Greyes</TableTd>
                                            <TableTd role="gridcell" aria-colindex={2} aria-haspopup="menu" aria-controls={ctxMenuId} aria-expanded="false">Operator</TableTd>
                                            <TableTd role="gridcell" aria-colindex={3} aria-haspopup="menu" aria-controls={ctxMenuId} aria-expanded="false">UK</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" role="row" aria-rowindex={4}>
                                            <TableTd role="gridcell" aria-colindex={1} aria-haspopup="menu" aria-controls={ctxMenuId} aria-expanded="false">Ruthi Baldini</TableTd>
                                            <TableTd role="gridcell" aria-colindex={2} aria-haspopup="menu" aria-controls={ctxMenuId} aria-expanded="false">Coordinator</TableTd>
                                            <TableTd role="gridcell" aria-colindex={3} aria-haspopup="menu" aria-controls={ctxMenuId} aria-expanded="false">Canada</TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </GridContent>
                        </GridContainer>
                    </>
                )}
                {...other}>
            </Grid>

            {/* Row pinning context menu popup — aria-controls on cells references this */}
            <Popup className="k-menu-popup">
                <ContextMenu id={ctxMenuId}>
                    <MenuListItem first text="Pin row to top" icon="pin-outline-top" />
                    <MenuListItem last text="Pin row to bottom" icon="pin-outline-bottom" />
                </ContextMenu>
            </Popup>
        </>
    );
};
