import { Icon } from '../../icon';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>

                <Grid className="k-grid-no-scrollbar" style={{ width: "600px", height: "400px" }}>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col className="k-hierarchy-col" /><col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell className="k-hierarchy-cell"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Title"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent>
                            <GridTable>
                                <colgroup>
                                    <col className="k-hierarchy-col" /><col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd className="k-hierarchy-cell">
                                            <Icon icon="caret-alt-right"></Icon>
                                        </TableTd>
                                        <TableTd>1</TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-master-row k-alt k-expanded">
                                        <TableTd className="k-hierarchy-cell">
                                            <Icon icon="caret-alt-down"></Icon>
                                        </TableTd>
                                        <TableTd>2</TableTd>
                                    </TableRow>
                                    <TableRow className="k-detail-row">
                                        <TableTd className="k-hierarchy-cell"></TableTd>
                                        <TableTd className="k-detail-cell" colspan={1}>
                                            {/* hierarchy child content */}
                                            <Grid className="k-grid-no-scrollbar" style={{ height: "200px" }}>
                                                <GridHeader>
                                                    <div className="k-grid-header-wrap">
                                                        <GridHeaderTable>
                                                            <colgroup>
                                                                <col /><col />
                                                            </colgroup>
                                                            <TableThead>
                                                                <TableRow>
                                                                    <GridHeaderCell columnTitle="Title"></GridHeaderCell>
                                                                    <GridHeaderCell columnTitle="Title"></GridHeaderCell>
                                                                </TableRow>
                                                            </TableThead>
                                                        </GridHeaderTable>
                                                    </div>
                                                </GridHeader>
                                                <GridContainer>
                                                    <GridContent>
                                                        <GridTable>
                                                            <colgroup>
                                                                <col />
                                                                <col />
                                                            </colgroup>
                                                            <TableTbody>
                                                                <TableRow className="k-master-row">
                                                                    <TableTd>Text</TableTd>
                                                                    <TableTd>Text</TableTd>
                                                                </TableRow>
                                                                <TableRow alt className="k-master-row k-alt">
                                                                    <TableTd>Text</TableTd>
                                                                    <TableTd>Text</TableTd>
                                                                </TableRow>
                                                            </TableTbody>
                                                        </GridTable>
                                                    </GridContent>
                                                </GridContainer>
                                            </Grid>
                                        </TableTd>
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
