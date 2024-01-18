import { Icon } from '../../icon';
import { TreeList } from '../../treelist';
import { GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <section>

                <TreeList id="treelist" className="k-grid-no-scrollbar">
                    <GridHeader style={{ paddingRight: '0px' }}>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "250px" }}/>
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell menu="column" columnTitle="First Name" className="k-filterable"></GridHeaderCell>
                                        <GridHeaderCell menu="column" columnTitle="Last Name" className="k-filterable"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent className="k-auto-scrollable">
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
                    </GridContainer>
                </TreeList>

            </section>

            <section>
                <TreeList id="treelist">
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "280px" }} />
                                    <col style={{ width: "160px" }} />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell menu="filter" columnTitle="First Name"></GridHeaderCell>
                                        <GridHeaderCell menu="filter" columnTitle="Last Name"></GridHeaderCell>
                                        <GridHeaderCell menu="filter" columnTitle="Position"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent className="k-auto-scrollable">
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: "280px" }} />
                                    <col style={{ width: "160px" }} />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-treelist-group">
                                        <TableTd>
                                            <Icon className="k-treelist-toggle" icon="caret-alt-down"></Icon>
                                            Daryl
                                        </TableTd>
                                        <TableTd>Sweeney</TableTd>
                                        <TableTd>CEO</TableTd>
                                    </TableRow>
                                    <TableRow className="k-treelist-group k-alt" alt>
                                        <TableTd>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="caret-alt-down"></Icon>
                                            Guy
                                        </TableTd>
                                        <TableTd>Wooten</TableTd>
                                        <TableTd>Chief Technical Officer</TableTd>
                                    </TableRow>
                                    <TableRow className="k-treelist-group">
                                        <TableTd>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="caret-alt-down"></Icon>
                                            Buffy
                                        </TableTd>
                                        <TableTd>Weber</TableTd>
                                        <TableTd>VP, Engineering</TableTd>
                                    </TableRow>
                                    <TableRow className="k-treelist-group k-alt" alt>
                                        <TableTd>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="caret-alt-down"></Icon>
                                            Hyacinth
                                        </TableTd>
                                        <TableTd>Hood</TableTd>
                                        <TableTd>Team Lead</TableTd>
                                    </TableRow>
                                    <TableRow>
                                        <TableTd>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            Akeem
                                        </TableTd>
                                        <TableTd>Carr</TableTd>
                                        <TableTd>Junior Software Developer</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </TreeList>
            </section>
        </div>

    </>
);
