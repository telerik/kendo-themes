import { Button } from '../../button';
import { Icon } from '../../icon';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridPager, GridToolbar } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <Grid className="k-grid-no-scrollbar"
                    toolbar={(
                        <GridToolbar>
                            <Button className="k-toolbar-button" themeColor="primary">Add New</Button>
                        </GridToolbar>
                    )}
                    pager={(
                        <GridPager refresh={false} />
                    )}>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col className="k-drag-col" />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell className="k-drag-cell"></GridHeaderCell>
                                        <GridHeaderCell sortable columnTitle="Product Id" menu="column"></GridHeaderCell>
                                        <GridHeaderCell sortable columnTitle="Unit Price" menu="column"></GridHeaderCell>
                                        <GridHeaderCell sortable columnTitle="Discontinued" menu="column"></GridHeaderCell>
                                        <GridHeaderCell sortable columnTitle="Category" menu="column"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent>
                            <GridTable>
                                <colgroup>
                                    <col className="k-drag-col" />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                        <TableTd>Chef Anton's Gumbo</TableTd>
                                        <TableTd>21.35</TableTd>
                                        <TableTd>0</TableTd>
                                        <TableTd>Condiments</TableTd>
                                    </TableRow>
                                    <TableRow className="k-alt" alt>
                                        <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                        <TableTd>Alice Mutton</TableTd>
                                        <TableTd>39</TableTd>
                                        <TableTd>0</TableTd>
                                        <TableTd>Meat/Poultry</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row">
                                        <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                        <TableTd>Singaporean Hokkien Fried Mee</TableTd>
                                        <TableTd>123.79</TableTd>
                                        <TableTd>1</TableTd>
                                        <TableTd>Meat/Poultry</TableTd>
                                    </TableRow>
                                    <TableRow className="k-alt" alt>
                                        <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                        <TableTd>Gorgonzola Telino</TableTd>
                                        <TableTd>12.5</TableTd>
                                        <TableTd>0</TableTd>
                                        <TableTd>Meat/Poultry</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row">
                                        <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                        <TableTd>Perth Pasties</TableTd>
                                        <TableTd>32.8</TableTd>
                                        <TableTd>0</TableTd>
                                        <TableTd>Meat/Poultry</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </Grid>
            </section>
        </div>
    </>
);
