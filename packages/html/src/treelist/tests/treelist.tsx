import { Icon } from '../../icon';
import { GridHeader, GridHeaderTable, GridHeaderCell, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';
import { TreeListNormal, TreeListWithColumnMenu, TreeListWithFilterMenu } from '..';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <section>
                TreeList without Scrollbar
                <TreeListNormal className="k-grid-no-scrollbar"
                    gridHeader={
                        <GridHeader style={{ paddingRight: '0px' }}>
                            <div className="k-grid-header-wrap">
                                <GridHeaderTable>
                                    <colgroup>
                                        <col style={{ width: "250px" }}/>
                                        <col />
                                    </colgroup>
                                    <TableThead>
                                        <TableRow>
                                            <GridHeaderCell menu="column" filterable columnTitle="First Name"></GridHeaderCell>
                                            <GridHeaderCell menu="column" filterable columnTitle="Last Name"></GridHeaderCell>
                                        </TableRow>
                                    </TableThead>
                                </GridHeaderTable>
                            </div>
                        </GridHeader>
                    } gridContent={
                        <GridContent>
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: "250px" }}/>
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow>
                                        <TableTd>
                                            <Icon className="k-treelist-toggle" icon="caret-alt-right"></Icon>
                                            Daryl
                                        </TableTd>
                                        <TableTd>Sweeney</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    }
                />
            </section>

            <section>
                TreeList Normal
                <TreeListNormal></TreeListNormal>
            </section>

            <section>
                TreeList with Column Menu
                <TreeListWithColumnMenu gridContent={
                    <GridContent>
                        <GridTable>
                            <colgroup>
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableTbody>
                                <TableRow>
                                    <TableTd>
                                        <Icon className="k-treelist-toggle" icon="caret-alt-right"></Icon>
                                        Daryl
                                    </TableTd>
                                    <TableTd>Sweeney</TableTd>
                                    <TableTd>CEO</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                }/>
            </section>

            <section>
                TreeList with Filter Menu
                <TreeListWithFilterMenu gridContent={
                    <GridContent>
                        <GridTable>
                            <colgroup>
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableTbody>
                                <TableRow>
                                    <TableTd>
                                        <Icon className="k-treelist-toggle" icon="caret-alt-right"></Icon>
                                        Daryl
                                    </TableTd>
                                    <TableTd>Sweeney</TableTd>
                                    <TableTd>CEO</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                }/>
            </section>

            <section>
                TreeList Sorting
                <TreeListNormal gridHeader={
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="Name"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Position" sortable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Hire Date"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                }
                gridContent={
                    <GridContent>
                        <GridTable>
                            <colgroup>
                                <col />
                                <col className="k-sorted"/>
                                <col />
                            </colgroup>
                            <TableTbody>
                                <TableRow>
                                    <TableTd>
                                        <Icon className="k-treelist-toggle" icon="caret-alt-right"></Icon>
                                        Daryl
                                    </TableTd>
                                    <TableTd>Sweeney</TableTd>
                                    <TableTd>CEO</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                }/>
            </section>
        </div>
    </>
);
