import { Button } from '../../button';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridToolbar, GridPager } from '../../grid';
import { nextId } from '../../misc';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const GridSmall = ({ contentClassName, ...other }: any) => {
    const gridId = nextId('grid');

    return (
        <Grid _renderAriaRoot
            size="small"
            ariaRootId={gridId}
            toolbar={(
                <GridToolbar size="small" role="toolbar" aria-label="Grid toolbar" aria-controls={gridId}>
                    <Button size="small" icon="plus">Add</Button>
                    <Button size="small" icon="filter">Filter</Button>
                    <span className="k-spacer" />
                    <Button size="small" icon="more-vertical" fillMode="flat" aria-label="More options" />
                </GridToolbar>
            )}
            pager={( <GridPager size="small" /> )}
            children={(
                <>
                    <GridHeader draggable>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable size="small" role="none">
                                <colgroup>
                                    <col style={{ width: "240px" }} />
                                    <col />
                                    <col />
                                    <col style={{ width: "150px" }} />
                                </colgroup>
                                <TableThead role="rowgroup">
                                    <TableRow role="row">
                                        <GridHeaderCell columnTitle="Contact Name" role="columnheader" />
                                        <GridHeaderCell columnTitle="Contact Title" role="columnheader" />
                                        <GridHeaderCell columnTitle="Company Name" role="columnheader" />
                                        <GridHeaderCell columnTitle="Country" role="columnheader" />
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent className={contentClassName}>
                            <GridTable size="small" role="none">
                                <colgroup>
                                    <col style={{ width: "240px" }} />
                                    <col />
                                    <col />
                                    <col style={{ width: "150px" }} />
                                </colgroup>
                                <TableTbody role="rowgroup">
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd role="gridcell">Maria Anders</TableTd>
                                        <TableTd role="gridcell">Sales Representative</TableTd>
                                        <TableTd role="gridcell">Alfreds Futterkiste</TableTd>
                                        <TableTd role="gridcell">Germany</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd role="gridcell">Ana Trujillo</TableTd>
                                        <TableTd role="gridcell">Owner</TableTd>
                                        <TableTd role="gridcell">Anna Trujillo Emparedados y helados</TableTd>
                                        <TableTd role="gridcell">Mexico</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd role="gridcell">Thomas Hardy</TableTd>
                                        <TableTd role="gridcell">Sales Representative</TableTd>
                                        <TableTd role="gridcell">Around the Horn</TableTd>
                                        <TableTd role="gridcell">UK</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </>
            )}
            {...other}>
        </Grid>
    );
};
