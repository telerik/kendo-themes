import { GridContainer, GridContent, GridTable, GridStack, GridPager, GridToolbar } from '..';
import { TableTbody, TableRow, TableTd } from '../../table';
import { Textbox } from '../../textbox';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Button } from '../../button';
import GridStackCell from '../grid-stack-cell.spec';
import GridStackRow from '../grid-stack-row.spec';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div>Stack Layout Columns</div>
                <GridStack cols="2"
                    pager={( <GridPager type="input" size="large" pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} pageSizes={false} /> )}
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
                <div>Stack Layout Columns Custom Width <div className="k-font-style-italic k-color-subtle k-font-size-sm">grid-template-columns: 100px 2fr 1fr</div></div>
                <GridStack
                    pager={( <GridPager type="input" size="large" pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} pageSizes={false} /> )}
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button size="large" icon="filter" />
                                <Button size="large" icon="arrows-swap" />
                                <Button size="large" icon="group" />
                            </GridToolbar>
                        </>
                    }>
                    <GridContainer>
                        <GridContent>
                            <GridTable>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd>
                                            <GridStackRow style={{ gridTemplateColumns: "100px 2fr 1fr" }}>
                                                <GridStackCell cellHeader="Contact Name" cellContent="Sig Jeannel" />
                                                <GridStackCell cellHeader="Job Title" cellContent="Human Resources Assistant III" />
                                                <GridStackCell cellHeader="Country" cellContent="USA" />
                                                <GridStackCell cellHeader="Rating" cellContent="3/5" />
                                                <GridStackCell cellHeader="Engagement" cellContent="100%" />
                                                <GridStackCell cellHeader="Budget" cellContent="$100 000" />
                                            </GridStackRow>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-master-row">
                                        <TableTd>
                                            <GridStackRow style={{ gridTemplateColumns: "100px 2fr 1fr" }}>
                                                <GridStackCell cellHeader="Contact Name" cellContent="Sig Jeannel" />
                                                <GridStackCell cellHeader="Job Title" cellContent="Human Resources Assistant III" />
                                                <GridStackCell cellHeader="Country" cellContent="USA" />
                                                <GridStackCell cellHeader="Rating" cellContent="3/5" />
                                                <GridStackCell cellHeader="Engagement" cellContent="100%" />
                                                <GridStackCell cellHeader="Budget" cellContent="$100 000" />
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
                <div>Stack Layout Columns with Checkbox</div>
                <GridStack cols="2" checkbox />
            </section>
            <section>
                <div>Row Reorder Stack Layout Columns</div>
                <GridStack cols="2" reorderable />
            </section>
            <section>
                <div>Pinned Row Stack Layout Columns</div>
                <GridStack cols="2" sticky />
            </section>
            <section>
                <div>Selection Aggregates Stack Layout Columns</div>
                <GridStack cols="2" aggregates />
            </section>
            <section>
                <div>In-cell Editing Stack Layout Columns</div>
                <GridStack>
                    <GridContainer>
                        <GridContent>
                            <GridTable>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd>
                                            <GridStackRow cols={3}>
                                                <GridStackCell cellHeader="Contact Name" cellContent={<Textbox value="Sig Jeannel" />} />
                                                <GridStackCell cellHeader="Job Title" cellContent="Human Resources Assistant III" />
                                                <GridStackCell cellHeader="Country" cellContent="USA" />
                                                <GridStackCell cellHeader="Rating" cellContent="3/5" />
                                                <GridStackCell cellHeader="Engagement" cellContent="100%" />
                                                <GridStackCell cellHeader="Budget" cellContent="$100 000" />
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
                <div>Inline Edit Stack Layout Columns</div>
                <GridStack>
                    <GridContainer>
                        <GridContent>
                            <GridTable>
                                <TableTbody>
                                    <TableRow className="k-master-row k-grid-edit-row">
                                        <TableTd>
                                            <GridStackRow cols={3}>
                                                <GridStackCell cellHeader="Contact Name" cellContent={<Textbox value="Sig Jeannel" />} />
                                                <GridStackCell cellHeader="Job Title" cellContent={<Textbox value="Human Resources Assistant III" />} />
                                                <GridStackCell cellHeader="Country" cellContent={<DropdownList value="USA" />} />
                                                <GridStackCell cellHeader="Rating" cellContent={<DropdownList value="3" />} />
                                                <GridStackCell cellHeader="Engagement" cellContent={<Textbox value="100%" />} />
                                                <GridStackCell cellHeader="Budget" cellContent={<NumericTextbox value="100 000" />} />
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
        </div>
    </>
);
