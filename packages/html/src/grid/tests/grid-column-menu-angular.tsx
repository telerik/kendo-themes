import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <Grid dir="ltr" _renderAriaRoot>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: '50px' }} />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell rowspan={1} colspan={1} className="k-filterable">
                                        <Checkbox />
                                    </GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} className="k-filterable" menu="column" columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} className="k-filterable" menu="column" columnTitle="Command"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className="k-virtual-content">
                        <div className="k-grid-table-wrap">
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow>
                                        <TableTd className="k-touch-action-auto" colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd className="k-touch-action-auto" colspan={1}>Product1</TableTd>
                                        <TableTd className="k-touch-action-auto k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-alt">
                                        <TableTd className="k-touch-action-auto" colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd className="k-touch-action-auto" colspan={1}>Product2</TableTd>
                                        <TableTd className="k-touch-action-auto k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </Grid>

            <h3>Sortable</h3>
            <Grid dir="ltr" _renderAriaRoot>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: '50px' }} />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell rowspan={1} colspan={1} className="k-filterable">
                                        <Checkbox />
                                    </GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} className="k-filterable" sortable menu="column" columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} className="k-filterable" menu="column" columnTitle="Command"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className="k-virtual-content">
                        <div className="k-grid-table-wrap">
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col className="k-sorted"/>
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow>
                                        <TableTd className="k-touch-action-auto" colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd className="k-touch-action-auto" colspan={1}>Product1</TableTd>
                                        <TableTd className="k-touch-action-auto k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-alt">
                                        <TableTd className="k-touch-action-auto" colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd className="k-touch-action-auto" colspan={1}>Product2</TableTd>
                                        <TableTd className="k-touch-action-auto k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </Grid>

            <h3>Sortable &amp; Resizable</h3>
            <Grid dir="ltr" _renderAriaRoot>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: '50px' }} />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell resizable rowspan={1} colspan={1} className="k-filterable">
                                        <Checkbox />
                                    </GridHeaderCell>
                                    <GridHeaderCell resizable rowspan={1} colspan={1} className="k-filterable" sortable menu="column" columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell resizable rowspan={1} colspan={1} className="k-filterable" menu="column" columnTitle="Command"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className="k-virtual-content">
                        <div className="k-grid-table-wrap">
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col className="k-sorted" />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow>
                                        <TableTd className="k-touch-action-auto" colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd className="k-touch-action-auto" colspan={1}>Product1</TableTd>
                                        <TableTd className="k-touch-action-auto k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-alt">
                                        <TableTd className="k-touch-action-auto" colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd className="k-touch-action-auto" colspan={1}>Product2</TableTd>
                                        <TableTd className="k-touch-action-auto k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </Grid>
        </div>
    </>
);
