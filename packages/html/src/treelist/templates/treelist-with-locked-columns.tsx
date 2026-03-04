import { TreeList } from '..';
import { GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { Icon } from '../../icon';
import { classNames, nextId } from '../../misc';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const TreeListWithLockedColumns = ({ className, headerWrapClassName, contentClassName, ...other }: any) => {
    const treelistId = nextId('treelist');

    // Generate IDs for non-locked cells so locked rows can reference them via aria-owns
    const nlCell_r0_c0 = nextId('tl-lc-cell');
    const nlCell_r0_c1 = nextId('tl-lc-cell');
    const nlCell_r1_c0 = nextId('tl-lc-cell');
    const nlCell_r1_c1 = nextId('tl-lc-cell');
    const nlCell_r2_c0 = nextId('tl-lc-cell');
    const nlCell_r2_c1 = nextId('tl-lc-cell');
    const nlCell_r3_c0 = nextId('tl-lc-cell');
    const nlCell_r3_c1 = nextId('tl-lc-cell');
    const nlCell_r4_c0 = nextId('tl-lc-cell');
    const nlCell_r4_c1 = nextId('tl-lc-cell');

    // Generate IDs for non-locked header cells so locked header row can reference them via aria-owns
    const nlHdr_c0 = nextId('tl-lc-hdr');
    const nlHdr_c1 = nextId('tl-lc-hdr');

    return (
        <TreeList id={nextId('treelist')} className={classNames("k-grid-lockedcolumns", className)} _renderAriaRoot ariaRootId={treelistId} ariaColCount={4} ariaRowCount={6} {...other}>
            <GridHeader role="none">
                <div className="k-grid-header-locked" role="none" style={{ width: "400px" }}>
                    <GridHeaderTable role="none">
                        <colgroup>
                            <col style={{ width: "200px" }} />
                            <col style={{ width: "200px" }} />
                        </colgroup>
                        <TableThead role="rowgroup">
                            <TableRow role="row" aria-rowindex={1} aria-owns={`${nlHdr_c0} ${nlHdr_c1}`}>
                                <GridHeaderCell columnTitle="Name" role="columnheader" aria-sort="ascending" aria-colindex={1}></GridHeaderCell>
                                <GridHeaderCell columnTitle="Position" role="columnheader" aria-colindex={2}></GridHeaderCell>
                            </TableRow>
                        </TableThead>
                    </GridHeaderTable>
                </div>
                <div className={classNames("k-grid-header-wrap", headerWrapClassName)} role="none" style={{ width: "400px" }}>
                    <GridHeaderTable role="none">
                        <colgroup>
                            <col style={{ width: "200px" }} />
                            <col style={{ width: "200px" }} />
                        </colgroup>
                        <TableThead role="none">
                            <TableRow role="none">
                                <GridHeaderCell columnTitle="Hire Date" id={nlHdr_c0} role="columnheader"></GridHeaderCell>
                                <GridHeaderCell columnTitle="Department" id={nlHdr_c1} role="columnheader"></GridHeaderCell>
                            </TableRow>
                        </TableThead>
                    </GridHeaderTable>
                </div>
            </GridHeader>
            <GridContainer role="none">
                <div className="k-grid-content-locked" role="none" style={{ width: "400px", height: "303px" }}>
                    <GridTable role="none">
                        <colgroup>
                            <col style={{ width: "200px" }} />
                            <col style={{ width: "200px" }} />
                        </colgroup>
                        <TableTbody role="rowgroup">
                            <TableRow className="k-master-row" role="row" aria-rowindex={2} aria-expanded="true" aria-owns={`${nlCell_r0_c0} ${nlCell_r0_c1}`}>
                                <TableTd role="gridcell" aria-colindex={1} aria-expanded="true">
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down"></Icon>
                                    Daryl Sweeney
                                </TableTd>
                                <TableTd role="gridcell" aria-colindex={2}>CEO</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row" alt role="row" aria-rowindex={3} aria-expanded="true" aria-owns={`${nlCell_r1_c0} ${nlCell_r1_c1}`}>
                                <TableTd role="gridcell" aria-colindex={1} aria-expanded="true">
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down"></Icon>
                                    Guy Wooten
                                </TableTd>
                                <TableTd role="gridcell" aria-colindex={2}>CTO</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row" role="row" aria-rowindex={4} aria-expanded="true" aria-owns={`${nlCell_r2_c0} ${nlCell_r2_c1}`}>
                                <TableTd role="gridcell" aria-colindex={1} aria-expanded="true">
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down"></Icon>
                                    Buffy Weber
                                </TableTd>
                                <TableTd role="gridcell" aria-colindex={2}>VP, Engineering</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row" alt role="row" aria-rowindex={5} aria-expanded="true" aria-owns={`${nlCell_r3_c0} ${nlCell_r3_c1}`}>
                                <TableTd role="gridcell" aria-colindex={1} aria-expanded="true">
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down"></Icon>
                                    Hyacinth Hood
                                </TableTd>
                                <TableTd role="gridcell" aria-colindex={2}>Team Lead</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row" role="row" aria-rowindex={6} aria-owns={`${nlCell_r4_c0} ${nlCell_r4_c1}`}>
                                <TableTd role="gridcell" aria-colindex={1}>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    Akeem Carr
                                </TableTd>
                                <TableTd role="gridcell" aria-colindex={2}>Junior Software Developer</TableTd>
                            </TableRow>
                        </TableTbody>
                    </GridTable>
                </div>
                <GridContent className={contentClassName} role="none" style={{ width: "400px", height: "320px" }}>
                    <GridTable role="none">
                        <colgroup>
                            <col style={{ width: "200px" }} />
                            <col style={{ width: "200px" }} />
                        </colgroup>
                        <TableTbody role="none">
                            <TableRow className="k-master-row" role="none">
                                <TableTd id={nlCell_r0_c0} role="gridcell">2010-01-15</TableTd>
                                <TableTd id={nlCell_r0_c1} role="gridcell">Executive</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row" alt role="none">
                                <TableTd id={nlCell_r1_c0} role="gridcell">2012-06-20</TableTd>
                                <TableTd id={nlCell_r1_c1} role="gridcell">Engineering</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row" role="none">
                                <TableTd id={nlCell_r2_c0} role="gridcell">2014-03-10</TableTd>
                                <TableTd id={nlCell_r2_c1} role="gridcell">Engineering</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row" alt role="none">
                                <TableTd id={nlCell_r3_c0} role="gridcell">2016-08-05</TableTd>
                                <TableTd id={nlCell_r3_c1} role="gridcell">Engineering</TableTd>
                            </TableRow>
                            <TableRow className="k-master-row" role="none">
                                <TableTd id={nlCell_r4_c0} role="gridcell">2020-11-12</TableTd>
                                <TableTd id={nlCell_r4_c1} role="gridcell">Engineering</TableTd>
                            </TableRow>
                        </TableTbody>
                    </GridTable>
                </GridContent>
            </GridContainer>
        </TreeList>
    );
};
