import { Grid, GridContainer, GridContent, GridTable, GridPager, GridStackRow } from '..';
import { Button } from '../../button';
import { CheckboxNormal } from '../../checkbox';
import { Icon } from '../../icon';
import { TableTbody, TableRow, TableTd } from '../../table';
import GridStackCell from '../grid-stack-cell.spec';

export const GridStack = ({ reorderable, checkbox, aggregates, sticky, detailRow, cols, ...other }: any) => (
    <Grid _renderAriaRoot className="k-grid-stack"
        pager={ <GridPager type="input" pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} pageSizes={false} /> }
        children={(
            <>
                <GridContainer>
                    <GridContent>
                        <GridTable>
                            <colgroup>
                                <col />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-master-row">
                                    <TableTd className={`${sticky ? 'k-grid-row-sticky' : ''}`}>
                                        <GridStackRow cols={cols}>
                                            {reorderable && (
                                                <GridStackCell cellContent={<><Icon icon="reorder" /><span>Reorder</span></>} className="k-drag-cell" />
                                            )}
                                            {sticky && (
                                                <GridStackCell cellContent={<Button icon="unpin" text="Unpin" fillMode="flat" themeColor="primary" />} />
                                            )}
                                            {checkbox && (
                                                <GridStackCell cellContent={<CheckboxNormal />} />
                                            )}
                                            <GridStackCell cellHeader="Contact Name" cellContent="Maria Anders" />
                                            <GridStackCell cellHeader="Company Name" cellContent="Alfreds Futterkiste" />
                                            <GridStackCell cellHeader="Country" cellContent="Germany" />
                                            {detailRow && (
                                                 <GridStackCell cellContent={<Button icon="minus" text="Collapse Details" fillMode="flat" themeColor="primary" />} />
                                            )}
                                        </GridStackRow>
                                    </TableTd>
                                </TableRow>
                                {detailRow && (
                                    <TableRow className="k-detail-row">
                                        <TableTd className="k-detail-cell">
                                            {/* Custom Detail Row Template */}
                                            <div>
                                                <span className="k-font-bold">In stock: </span>
                                                <span>39</span>
                                            </div>
                                            <div>
                                                <span className="k-font-bold">On order: </span>
                                                <span>0</span>
                                            </div>
                                        </TableTd>
                                    </TableRow>
                                )}
                                <TableRow alt className="k-master-row">
                                    <TableTd>
                                        <GridStackRow cols={cols}>
                                            {reorderable && (
                                                <GridStackCell cellContent={<><Icon icon="reorder" /><span>Reorder</span></>} className="k-drag-cell" />
                                            )}
                                            {sticky && (
                                                <GridStackCell cellContent={<Button icon="pin" text="Pin" fillMode="flat" themeColor="primary" />} />
                                            )}
                                            {checkbox && (
                                                <GridStackCell cellContent={<CheckboxNormal />} />
                                            )}
                                            <GridStackCell cellHeader="Contact Name" cellContent="Ana Trujillo" />
                                            <GridStackCell cellHeader="Company Name" cellContent="Ana Trujillo Emparedados y helados" />
                                            <GridStackCell cellHeader="Country" cellContent="Mexico" />
                                            {detailRow && (
                                                <GridStackCell cellContent={<Button icon="plus" text="Expand Details" fillMode="flat" themeColor="primary" />} />
                                            )}
                                        </GridStackRow>
                                    </TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                </GridContainer>
            </>
        )}
        gridSelectionAggregates={(
            aggregates && (
                <div className="k-selection-aggregates k-grid-selection-aggregates">
                    <div className="k-selection-aggregates-item">
                        <span className="k-selection-aggregates-item-text">Sum:</span>
                        <span className="k-selection-aggregates-item-value">122.00</span>
                    </div>
                    <div className="k-selection-aggregates-item">
                        <span className="k-selection-aggregates-item-text">Avg:</span>
                        <span className="k-selection-aggregates-item-value">30.50</span>
                    </div>
                </div>
            )
        )}
        {...other}>
    </Grid>
);
