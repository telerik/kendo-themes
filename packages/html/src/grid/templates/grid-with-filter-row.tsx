import { Grid, GridHeader, GridContainer, GridContent, GridHeaderTable, GridHeaderCell, GridTable, GridPager } from '../../grid';
import { TableTd, TableThead, TableRow, TableTbody } from '../../table';
import { Button } from '../../button';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';

export const GridWithFilterRow = ({ contentClassName, ...other }: any) => (
    <Grid _renderAriaRoot
        pager={( <GridPager refresh={false} /> )}
        children={(
            <>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable role="none">
                            <colgroup>
                                <col />
                                <col style={{ width: "225px" }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead role="rowgroup">
                                <TableRow role="row">
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Product Id" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Name" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Quantity" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Unit Price" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Discontinued" role="columnheader"></GridHeaderCell>
                                </TableRow>
                                <TableRow className="k-filter-row" role="row">
                                    <TableTd role="gridcell" aria-label="Product Id filter">
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper">
                                                <NumericTextbox aria-label="Product Id filter" />
                                                <div className="k-filtercell-operator">
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" aria-label="Product Id filter operator" />
                                                    {' '}
                                                    <Button disabled icon="filter-clear" aria-label="Clear Product Id filter"></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TableTd>
                                    <TableTd role="gridcell" aria-label="Name filter">
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper">
                                                <Textbox aria-label="Name filter" />
                                                <div className="k-filtercell-operator">
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" aria-label="Name filter operator" />
                                                    {' '}
                                                    <Button disabled icon="filter-clear" aria-label="Clear Name filter"></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TableTd>
                                    <TableTd role="gridcell" aria-label="Quantity filter">
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper">
                                                <Textbox aria-label="Quantity filter" />
                                                <div className="k-filtercell-operator">
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" aria-label="Quantity filter operator" />
                                                    {' '}
                                                    <Button disabled icon="filter-clear" aria-label="Clear Quantity filter"></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TableTd>
                                    <TableTd role="gridcell" aria-label="Unit Price filter">
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper">
                                                <NumericTextbox aria-label="Unit Price filter" />
                                                <div className="k-filtercell-operator">
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" aria-label="Unit Price filter operator" />
                                                    {' '}
                                                    <Button disabled icon="filter-clear" aria-label="Clear Unit Price filter"></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TableTd>
                                    <TableTd role="gridcell" aria-label="Discontinued filter">
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper">
                                                <DropdownList aria-label="Discontinued filter" />
                                                <div className="k-filtercell-operator">
                                                    <Button disabled icon="filter-clear" aria-label="Clear Discontinued filter"></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TableTd>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className={contentClassName}>
                        <GridTable role="none">
                            <colgroup>
                                <col />
                                <col style={{ width: "225px" }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableTbody role="rowgroup">
                                <TableRow className="k-master-row" role="row">
                                    <TableTd role="gridcell">1</TableTd>
                                    <TableTd role="gridcell">Chai</TableTd>
                                    <TableTd role="gridcell">10 boxes x 20 bags</TableTd>
                                    <TableTd role="gridcell">18</TableTd>
                                    <TableTd role="gridcell">false</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row" alt>
                                    <TableTd role="gridcell">2</TableTd>
                                    <TableTd role="gridcell">Chang</TableTd>
                                    <TableTd role="gridcell">24 - 12 oz bottles</TableTd>
                                    <TableTd role="gridcell">19</TableTd>
                                    <TableTd role="gridcell">false</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row">
                                    <TableTd role="gridcell">3</TableTd>
                                    <TableTd role="gridcell">Aniseed Syrup</TableTd>
                                    <TableTd role="gridcell">12 - 550 ml bottles</TableTd>
                                    <TableTd role="gridcell">10</TableTd>
                                    <TableTd role="gridcell">false</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row" alt>
                                    <TableTd role="gridcell">4</TableTd>
                                    <TableTd role="gridcell">Chef Anton&apos;s Cajun Seasoning</TableTd>
                                    <TableTd role="gridcell">48 - 6 oz jars</TableTd>
                                    <TableTd role="gridcell">22</TableTd>
                                    <TableTd role="gridcell">false</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" role="row">
                                    <TableTd role="gridcell">5</TableTd>
                                    <TableTd role="gridcell">Grandma&apos;s Boysenberry Spread</TableTd>
                                    <TableTd role="gridcell">12 - 8 oz jars</TableTd>
                                    <TableTd role="gridcell">25</TableTd>
                                    <TableTd role="gridcell">false</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                </GridContainer>
            </>
        )}
        {...other}
    ></Grid>
);
