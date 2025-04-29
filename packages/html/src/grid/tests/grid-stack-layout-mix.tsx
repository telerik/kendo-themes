import { GridNormal, GridContainer, GridContent, GridTable, GridHeader, GridHeaderTable, GridHeaderCell, GridPager, GridToolbar, GridStackCell, GridStackRow } from '..';
import { Button } from '../../button';
import { Icon } from '../../icon';
import { TableTbody, TableRow, TableTd, TableThead } from '../../table';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div>Grid Stack Layout Expandable Data</div>
                <GridNormal
                    groupingHeader={false}
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button size="large" icon="filter" />
                                <Button size="large" icon="arrows-swap" />
                                <Button size="large" icon="group" />
                            </GridToolbar>
                        </>
                    }
                    pager={( <GridPager size="large" type="input" pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} pageSizes={false} /> )}>

                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "50px" }} />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="Contact Name" />
                                        <GridHeaderCell columnTitle="Job Title" />
                                        <GridHeaderCell columnTitle="" />
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent>
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "100px" }} />
                                    <col style={{ width: "50px" }} />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd>Sig Jeannel</TableTd>
                                        <TableTd>Human Resources Assistant III</TableTd>
                                        <TableTd>
                                            <div className="k-text-center">
                                                <Icon icon="row-collapse" />
                                            </div>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-grid-stack-expandable">
                                        <TableTd colspan={3}>
                                            <GridStackRow>
                                                <GridStackCell cellHeader="Country" cellContent="USA" />
                                                <GridStackCell cellHeader="Rating" cellContent="3/5" />
                                                <GridStackCell cellHeader="Engagement" cellContent="100%" />
                                                <GridStackCell cellHeader="Budget" cellContent="$100 000" />
                                                <GridStackCell cellHeader="Phone" cellContent="(936) 9429601" />
                                                <GridStackCell cellHeader="Address" cellContent="138 Buhler Avenue" />
                                                <GridStackCell cellHeader="Contact Name" cellContent="Shelden Greyes" />
                                                <GridStackCell cellHeader="Job Title" cellContent="Operator" />
                                            </GridStackRow>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-master-row">
                                        <TableTd>Sig Jeannel</TableTd>
                                        <TableTd>Human Resources Assistant III</TableTd>
                                        <TableTd>
                                            <div className="k-text-center">
                                                <Icon icon="row-expand" />
                                            </div>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>
        </div>
    </>
);
