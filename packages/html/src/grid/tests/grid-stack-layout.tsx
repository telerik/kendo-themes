import { GridContainer, GridContent, GridPager, GridTable, GridToolbar } from '..';
import { TableTbody, TableRow, TableTd } from '../../table';
import { Textbox } from '../../textbox';
import { DropdownList } from '../../dropdownlist';
import { GridStack } from '../templates/grid-stack';
import { Button } from '../../button';
import { Icon } from '../../icon';
import GridStackCell from '../grid-stack-cell.spec';
import GridStackRow from '../grid-stack-row.spec';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div>Stack Layout</div>
                <GridStack
                    pager={( <GridPager size="large" type="input" pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} pageSizes={false} /> )}
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button size="large" icon="filter" />
                                <Button size="large" icon="arrows-swap" />
                                <Button size="large" icon="group" />
                            </GridToolbar>
                        </>
                    }
                />
            </section>
            <section>
                <div>Stack Layout with Checkbox</div>
                <GridStack checkbox />
            </section>
            <section>
                <div>Row Reorder Stack Layout</div>
                <GridStack reorderable />
            </section>
             <section>
                <div>Pinned Row Stack Layout</div>
                <GridStack sticky />
            </section>
            <section>
                <div>In-cell Edit Stack Layout</div>
                <GridStack>
                    <GridContainer>
                        <GridContent>
                            <GridTable>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd>
                                            <GridStackRow>
                                                <GridStackCell
                                                    cellHeader="Company Name"
                                                    cellContent={<Textbox value="Alfreds Futterkiste" />}
                                                    edit
                                                />
                                                <GridStackCell
                                                    cellHeader="Country"
                                                    cellContent="Germany"
                                                />
                                            </GridStackRow>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </GridStack>
            </section>
            <section>
                <div>Inline Edit Stack Layout</div>
                <GridStack>
                    <GridContainer>
                        <GridContent>
                            <GridTable>
                                <TableTbody>
                                    <TableRow className="k-master-row k-grid-edit-row">
                                        <TableTd>
                                            <GridStackRow>
                                                <GridStackCell edit
                                                    cellHeader="Company Name"
                                                    cellContent={<Textbox value="Alfreds Futterkiste" />}
                                                />
                                                <GridStackCell edit
                                                    cellHeader="Country"
                                                    cellContent={<DropdownList value="Germany" />}
                                                />
                                                <GridStackCell commandCell>
                                                    <Button text="Save" icon="save" themeColor="primary" />
                                                    <Button text="Cancel" icon="cancel" themeColor="base" />
                                                </GridStackCell>
                                            </GridStackRow>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </GridStack>
            </section>
            <section>
                <div>Selection Aggregates Stack Layout</div>
                <GridStack aggregates />
            </section>
            <section>
                <div>Detail Row Stack Layout</div>
                <GridStack detailRow />
            </section>
            <section>
                <div>Grouping with Aggregates Stack Layout</div>
                <GridStack>
                    <GridContainer>
                        <GridContent>
                            <GridTable>
                                <colgroup>
                                    <col className="k-group-col" />
                                    <col className="k-group-col" />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row">
                                        <TableTd colspan={3}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-down" />
                                                ID: 1
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row">
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd colspan={2} >
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-down" />
                                                Country: Germany
                                            </p>
                                            <div className="k-grid-grouping-aggregates">
                                                <div className="k-grouping-aggregates-item">
                                                    <span className="k-grouping-aggregates-item-text">Count:</span>
                                                    <span className="k-grouping-aggregates-item-value">1</span>
                                                </div>
                                                <div className="k-grouping-aggregates-item">
                                                    <span className="k-grouping-aggregates-item-text">Avg:</span>
                                                    <span className="k-grouping-aggregates-item-value">15</span>
                                                </div>
                                            </div>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-grid-edit-row">
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd>
                                            <GridStackRow>
                                                <GridStackCell
                                                    cellHeader="Company Name"
                                                    cellContent="Alfreds Futterkiste"
                                                />
                                                <GridStackCell
                                                    cellHeader="Country"
                                                    cellContent="Germany"
                                                />
                                            </GridStackRow>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row">
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd colspan={2}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-right" />
                                                Country: Mexico
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </GridStack>
            </section>
        </div>
    </>
);
