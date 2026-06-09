import { Icon } from '../../icon';
import { GridContainer, GridContent, GridTable } from '..';
import { TableTbody, TableRow, TableTd } from '../../table';
import { GridStack } from '../templates/grid-stack';
import GridStackCell from '../grid-stack-cell.spec';
import GridStackRow from '../grid-stack-row.spec';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div>Default Grouping Stack Layout</div>
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
                                        <TableTd colspan={3} role="gridcell" aria-expanded="true">
                                            <div className="k-grouping-row-content">
                                                <Icon icon="chevron-down" />
                                                <span className="k-grouping-row-text">ID: 1</span>
                                            </div>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row">
                                        <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                        <TableTd colspan={2} role="gridcell" aria-expanded="true">
                                            <div className="k-grouping-row-content">
                                                <Icon icon="chevron-down" />
                                                <span className="k-grouping-row-text">Name: Chai</span>
                                            </div>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                        <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                        <TableTd role="gridcell">
                                            <GridStackRow>
                                                <GridStackCell cellHeader="Contact Name" cellContent="Maria Anders" />
                                                <GridStackCell cellHeader="Company Name" cellContent="Alfreds Futterkiste" />
                                                <GridStackCell cellHeader="Country" cellContent="Germany" />
                                            </GridStackRow>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-master-row" role="row">
                                        <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                        <TableTd className="k-table-group-td k-group-cell" role="presentation"></TableTd>
                                        <TableTd role="gridcell">
                                            <GridStackRow>
                                                <GridStackCell cellHeader="Contact Name" cellContent="Ana Trujillo" />
                                                <GridStackCell cellHeader="Company Name" cellContent="Ana Trujillo Emparedados y helados" />
                                                <GridStackCell cellHeader="Country" cellContent="Mexico" />
                                            </GridStackRow>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row">
                                        <TableTd colspan={3} role="gridcell" aria-expanded="false">
                                            <div className="k-grouping-row-content">
                                                <Icon icon="chevron-right" />
                                                <span className="k-grouping-row-text">ID: 2</span>
                                            </div>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </GridStack>
            </section>

            <section>
                <div>Grouping No Indent Stack Layout</div>
                <GridStack>
                    <GridContainer>
                        <GridContent>
                            <GridTable>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row">
                                        <TableTd colspan={1} role="gridcell" aria-expanded="true">
                                            <div className="k-grouping-row-content">
                                                <Icon icon="chevron-down" />
                                                <span className="k-grouping-row-text">ID: 1</span>
                                            </div>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row">
                                        <TableTd colspan={1} role="gridcell" aria-expanded="true" style={{ '--kendo-grid-grouping-level': 1 } as React.CSSProperties}>
                                            <div className="k-grouping-row-content">
                                                <Icon icon="chevron-down" />
                                                <span className="k-grouping-row-text">Name: Chai</span>
                                            </div>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd role="gridcell">
                                            <GridStackRow>
                                                <GridStackCell cellHeader="Contact Name" cellContent="Maria Anders" />
                                                <GridStackCell cellHeader="Company Name" cellContent="Alfreds Futterkiste" />
                                                <GridStackCell cellHeader="Country" cellContent="Germany" />
                                            </GridStackRow>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-master-row" role="row">
                                        <TableTd role="gridcell">
                                            <GridStackRow>
                                                <GridStackCell cellHeader="Contact Name" cellContent="Ana Trujillo" />
                                                <GridStackCell cellHeader="Company Name" cellContent="Ana Trujillo Emparedados y helados" />
                                                <GridStackCell cellHeader="Country" cellContent="Mexico" />
                                            </GridStackRow>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row">
                                        <TableTd colspan={1} role="gridcell" aria-expanded="false">
                                            <div className="k-grouping-row-content">
                                                <Icon icon="chevron-right" />
                                                <span className="k-grouping-row-text">ID: 2</span>
                                            </div>
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
