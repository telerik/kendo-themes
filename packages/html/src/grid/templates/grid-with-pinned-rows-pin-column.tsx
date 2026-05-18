import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridPinnedContainer } from '../../grid';
import { ContextMenu } from '../../context-menu';
import { MenuListItem } from '../../menu';
import { Popup } from '../../popup';
import { Icon } from '../../icon';
import { TableTbody, TableThead, TableRow, TableTd } from '../../table';
import { nextId } from '../../misc';

/**
 * Grid with row pinning via a dedicated pin/unpin column.
 *
 * In this mode only the pin column cell (first td) in each row carries the
 * aria-haspopup/aria-controls/aria-expanded attributes.  Regular data cells
 * do not announce a context menu.  The pin/unpin icons inside the column are
 * always decorative (aria-hidden="true" is applied by SvgIcon automatically).
 */
export const GridWithPinnedRowsPinColumn = ({ contentClassName, ...other }: any) => {
    const gridId = nextId('grid');
    const ctxMenuId = nextId('grid-ctx-menu-pin');

    return (
        <>
            <Grid _renderAriaRoot ariaRootId={gridId} ariaColCount={4} ariaRowCount={5}
                children={(
                    <>
                        <GridHeader>
                            <div className="k-grid-header-wrap">
                                <GridHeaderTable role="none">
                                    <colgroup>
                                        <col style={{ width: '48px' }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <TableThead role="rowgroup">
                                        <TableRow role="row" aria-rowindex={1}>
                                            <GridHeaderCell accessibleLabel="Row actions" role="columnheader" aria-colindex={1} />
                                            <GridHeaderCell columnTitle="Contact Name" role="columnheader" aria-colindex={2} />
                                            <GridHeaderCell columnTitle="Job Title" role="columnheader" aria-colindex={3} />
                                            <GridHeaderCell columnTitle="Country" role="columnheader" aria-colindex={4} />
                                        </TableRow>
                                    </TableThead>
                                </GridHeaderTable>
                            </div>
                        </GridHeader>

                        {/* Pinned content — row pinned to top, dedicated pin/unpin column */}
                        <GridPinnedContainer role="none">
                            <div className="k-grid-pinned-wrap" role="none">
                                <GridTable role="none">
                                    <colgroup>
                                        <col style={{ width: '48px' }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    {/* Raw <tbody> used here so aria-label and role are rendered in the DOM.
                                        TableTbody does not spread HTML attributes. */}
                                    <tbody className="k-table-tbody" role="rowgroup" aria-label="Top pinned rows">
                                        <TableRow className="k-master-row" role="row" aria-rowindex={1}>
                                            {/* Pin column cell — announces context menu; icon is decorative */}
                                            <TableTd role="gridcell" aria-colindex={1} aria-haspopup="menu" aria-controls={ctxMenuId} aria-expanded="true">
                                                <span className="k-pin-cell"><Icon icon="unpin" className="k-action-icon" /></span>
                                            </TableTd>
                                            <TableTd role="gridcell" aria-colindex={2}>Shelden Greyes</TableTd>
                                            <TableTd role="gridcell" aria-colindex={3}>Operator</TableTd>
                                            <TableTd role="gridcell" aria-colindex={4}>UK</TableTd>
                                        </TableRow>
                                    </tbody>
                                </GridTable>
                            </div>
                        </GridPinnedContainer>

                        <GridContainer>
                            <GridContent className={contentClassName}>
                                <GridTable role="none">
                                    <colgroup>
                                        <col style={{ width: '48px' }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <TableTbody role="rowgroup">
                                        <TableRow className="k-master-row" role="row" aria-rowindex={2}>
                                            {/* Pin column cell — announces context menu; icon is decorative */}
                                            <TableTd role="gridcell" aria-colindex={1} aria-haspopup="menu" aria-controls={ctxMenuId} aria-expanded="false">
                                                <span className="k-pin-cell"><Icon icon="pin" /></span>
                                            </TableTd>
                                            <TableTd role="gridcell" aria-colindex={2}>Sig Jeannel</TableTd>
                                            <TableTd role="gridcell" aria-colindex={3}>Human Resources Assistant III</TableTd>
                                            <TableTd role="gridcell" aria-colindex={4}>USA</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-pinned-source" role="row" alt aria-rowindex={3}>
                                            <TableTd role="gridcell" aria-colindex={1} aria-haspopup="menu" aria-controls={ctxMenuId} aria-expanded="false">
                                                <span className="k-pin-cell"><Icon icon="unpin" className="k-action-icon" /></span>
                                            </TableTd>
                                            <TableTd role="gridcell" aria-colindex={2}>Shelden Greyes</TableTd>
                                            <TableTd role="gridcell" aria-colindex={3}>Operator</TableTd>
                                            <TableTd role="gridcell" aria-colindex={4}>UK</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" role="row" aria-rowindex={4}>
                                            <TableTd role="gridcell" aria-colindex={1} aria-haspopup="menu" aria-controls={ctxMenuId} aria-expanded="false">
                                                <span className="k-pin-cell"><Icon icon="pin" /></span>
                                            </TableTd>
                                            <TableTd role="gridcell" aria-colindex={2}>Ruthi Baldini</TableTd>
                                            <TableTd role="gridcell" aria-colindex={3}>Coordinator</TableTd>
                                            <TableTd role="gridcell" aria-colindex={4}>Canada</TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </GridContent>
                        </GridContainer>
                    </>
                )}
                {...other}>
            </Grid>

            {/* Pin/unpin context menu popup — aria-controls on pin column cells references this */}
            <Popup className="k-menu-popup">
                <ContextMenu id={ctxMenuId}>
                    <MenuListItem first text="Pin row to top" icon="pin-top" />
                    <MenuListItem last text="Pin row to bottom" icon="pin-bottom" />
                </ContextMenu>
            </Popup>
        </>
    );
};
