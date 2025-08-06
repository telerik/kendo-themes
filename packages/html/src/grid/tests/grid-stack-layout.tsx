import { GridContainer, GridContent, GridFooter, GridFooterTable, GridPager, GridTable, GridToolbar } from '..';
import { TableTbody, TableRow, TableTd, TableTfoot } from '../../table';
import { Textbox } from '../../textbox';
import { DropdownList } from '../../dropdownlist';
import { GridStack } from '../templates/grid-stack';
import { Button } from '../../button';
import { Icon } from '../../icon';
import GridStackCell from '../grid-stack-cell.spec';
import GridStackRow from '../grid-stack-row.spec';
import { CheckboxWithLabelAfter } from '../../checkbox';
import { ToolbarItem } from '../../toolbar';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div>Stack Layout</div>
                <GridStack
                    pager={ <GridPager size="large" type="input" pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} pageSizes={false} /> }
                    toolbar={
                        <>
                            <GridToolbar size="large">
                                <Button size="large" icon="filter" />
                                <Button size="large" icon="arrows-swap" />
                                <Button size="large" icon="group" />
                            </GridToolbar>
                        </>
                    }
                />
            </section>
            <section>
                <div>Stack Layout Cell States</div>
                <GridStack
                    pager={ <GridPager size="large" type="input" pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} pageSizes={false} /> }
                    toolbar={
                        <>
                            <GridToolbar size="large">
                                <ToolbarItem>
                                    <CheckboxWithLabelAfter size="large">Select All</CheckboxWithLabelAfter>
                                </ToolbarItem>
                                <Button size="large" icon="filter" />
                                <Button size="large" icon="arrows-swap" />
                                <Button size="large" icon="group" />
                            </GridToolbar>
                        </>
                    }
                >
                <GridContainer>
                    <GridContent>
                        <GridTable>
                            <colgroup>
                                <col />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-master-row">
                                    <TableTd>
                                        <GridStackRow>
                                            <GridStackCell cellHeader="Contact Name" cellContent="Maria Anders" focus />
                                            <GridStackCell cellHeader="Company Name" cellContent="Alfreds Futterkiste" />
                                            <GridStackCell cellHeader="Country" cellContent="Germany" selected />
                                        </GridStackRow>
                                    </TableTd>
                                </TableRow>
                                <TableRow alt className="k-master-row">
                                    <TableTd>
                                        <GridStackRow>
                                            <GridStackCell cellHeader="Contact Name" cellContent="Ana Trujillo" focus />
                                            <GridStackCell cellHeader="Company Name" cellContent="Ana Trujillo Emparedados y helados" />
                                            <GridStackCell cellHeader="Country" cellContent="Mexico" selected />
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
                <div>Stack Layout with Checkbox</div>
                <GridStack checkbox />
            </section>
            <section>
                <div>Row Reorder Stack Layout</div>
                <GridStack reorderable />
            </section>
            <section>
                <div>In-cell Edit Stack Layout</div>
                <GridStack>
                    <GridContainer>
                        <GridContent>
                            <GridTable>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd>
                                            <GridStackRow>
                                                <GridStackCell
                                                    cellHeader="Contact Name"
                                                    cellContent="Ana Trujillo"
                                                    dirty
                                                />
                                                <GridStackCell
                                                    cellHeader="Company Name"
                                                    cellContent={<Textbox value="Alfreds Futterkiste" />}
                                                    edit
                                                />
                                                <GridStackCell
                                                    cellHeader="Country"
                                                    cellContent=""
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
                                <colgroup>
                                    <col />
                                </colgroup>
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
                                                <GridStackCell commandCell cellHeader="Commands" cellContent={
                                                    <>
                                                        <Button text="Save" icon="save" themeColor="primary" />
                                                        <Button text="Cancel" icon="cancel" themeColor="base" />
                                                    </>
                                                } />
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
                <div>Grouping Templates Stack Layout</div>
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
                                                 {/* grouping header template */}
                                                Country: Germany
                                            </p>
                                            <div className="k-grid-column-template">
                                                <div className="k-column-template-item">
                                                    {/* grouping header column template */}
                                                    <span className="k-font-normal">Count: </span>
                                                    <span>1</span>
                                                </div>
                                                <div className="k-column-template-item">
                                                    {/* grouping header column template */}
                                                    <span className="k-font-normal">Avg: </span>
                                                    <span>15</span>
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
                                    <TableRow className="k-group-footer">
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd colspan="2">
                                            <div className="k-grid-column-template">
                                                <div className="k-column-template-item">
                                                    {/* grouping footer template */}
                                                    <span className="k-font-normal">Engagement (Average): </span>
                                                    <span>49%</span>
                                                </div>
                                                <div className="k-column-template-item">
                                                     {/* grouping footer template */}
                                                    <span className="k-font-normal">Budget (Sum): </span>
                                                    <span>$75 000</span>
                                                </div>
                                            </div>
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
                    <GridFooter>
                        <div className="k-grid-footer-wrap">
                            <GridFooterTable style={{ width: "1180px" }}>
                                <TableTfoot>
                                    <TableRow className="k-footer-template">
                                    <TableTd>
                                            <div className="k-grid-column-template">
                                                <div className="k-column-template-item">
                                                    {/* footer template */}
                                                    <span className="k-font-normal">Rating (Avg): </span>
                                                    <span>2.5/5</span>
                                                </div>
                                                <div className="k-column-template-item">
                                                    {/* footer template */}
                                                    <span className="k-font-normal">Engagement (Avg): </span>
                                                    <span>48%</span>
                                                </div>
                                                <div className="k-column-template-item">
                                                    {/* footer template */}
                                                    <span className="k-font-normal">Budget (Sum): </span>
                                                    <span>$48 000</span>
                                                </div>
                                            </div>
                                    </TableTd>
                                    </TableRow>
                                </TableTfoot>
                            </GridFooterTable>
                        </div>
                    </GridFooter>
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
                <div>Pinned Row Stack Layout</div>
                <GridStack sticky />
            </section>
        </div>
    </>
);
