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
                        <GridHeaderTable>
                            <colgroup>
                                <col />
                                <col style={{ width: "225px" }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Product Id"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Quantity"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Unit Price"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Discontinued"></GridHeaderCell>
                                </TableRow>
                                <TableRow className="k-filter-row">
                                    <TableTd>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper">
                                                <NumericTextbox />
                                                <div className="k-filtercell-operator">
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    {' '}
                                                    <Button icon="filter-clear"></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper">
                                                <Textbox />
                                                <div className="k-filtercell-operator">
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    {' '}
                                                    <Button icon="filter-clear"></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper">
                                                <Textbox />
                                                <div className="k-filtercell-operator">
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    {' '}
                                                    <Button icon="filter-clear"></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper">
                                                <NumericTextbox />
                                                <div className="k-filtercell-operator">
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    {' '}
                                                    <Button icon="filter-clear"></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TableTd>
                                    <TableTd>
                                        <div className="k-filtercell">
                                            <div className="k-filtercell-wrapper">
                                                <DropdownList />
                                                <div className="k-filtercell-operator">
                                                    <Button icon="filter-clear"></Button>
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
                        <GridTable>
                            <colgroup>
                                <col />
                                <col style={{ width: "225px" }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableTbody>
                                <TableRow>
                                    <TableTd>1</TableTd>
                                    <TableTd>Chai</TableTd>
                                    <TableTd>10 boxes x 20 bags</TableTd>
                                    <TableTd>18</TableTd>
                                    <TableTd>false</TableTd>
                                </TableRow>
                                <TableRow className="k-alt" alt>
                                    <TableTd>2</TableTd>
                                    <TableTd>Chang</TableTd>
                                    <TableTd>24 - 12 oz bottles</TableTd>
                                    <TableTd>19</TableTd>
                                    <TableTd>false</TableTd>
                                </TableRow>
                                <TableRow>
                                    <TableTd>3</TableTd>
                                    <TableTd>Aniseed Syrup</TableTd>
                                    <TableTd>12 - 550 ml bottles</TableTd>
                                    <TableTd>10</TableTd>
                                    <TableTd>false</TableTd>
                                </TableRow>
                                <TableRow className="k-alt" alt>
                                    <TableTd>4</TableTd>
                                    <TableTd>Chef Anton&apos;s Cajun Seasoning</TableTd>
                                    <TableTd>48 - 6 oz jars</TableTd>
                                    <TableTd>22</TableTd>
                                    <TableTd>false</TableTd>
                                </TableRow>
                                <TableRow>
                                    <TableTd>5</TableTd>
                                    <TableTd>Grandma&apos;s Boysenberry Spread</TableTd>
                                    <TableTd>12 - 8 oz jars</TableTd>
                                    <TableTd>25</TableTd>
                                    <TableTd>false</TableTd>
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
