import { Icon } from '../../icon';
import { TreeList } from '../../treelist';
import { GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export default () => (
    <>
        <div id="test-area">
            <TreeList id="treelist" className="k-grid-no-scrollbar">
                <GridHeader style={{ paddingRight: '0px' }}>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col className="k-drag-col"/>
                                <col style={{ width: "250px" }}/>
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell className="k-drag-cell"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="First Name"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Last Name"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Position"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent className="k-auto-scrollable">
                        <GridTable>
                            <colgroup>
                                <col className="k-drag-col" />
                                <col style={{ width: "250px" }}/>
                                <col />
                            </colgroup>
                            <TableTbody>
                                <TableRow>
                                    <TableTd className="k-drag-cell">
                                        <Icon icon="reorder"/>
                                    </TableTd>
                                    <TableTd>
                                        <Icon className="k-treelist-toggle" icon="caret-alt-right"/>
                                        Daryl
                                    </TableTd>
                                    <TableTd>Sweeney</TableTd>
                                    <TableTd>CEO</TableTd>
                                </TableRow>
                                <TableRow className="k-treelist-group k-alt" alt>
                                    <TableTd className="k-drag-cell">
                                        <Icon icon="reorder"/>
                                    </TableTd>
                                    <TableTd>
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                        Guy
                                    </TableTd>
                                    <TableTd>Wooten</TableTd>
                                    <TableTd>Chief Technical Officer</TableTd>
                                </TableRow>
                                <TableRow className="k-treelist-group">
                                    <TableTd className="k-drag-cell">
                                        <Icon icon="reorder"/>
                                    </TableTd>
                                    <TableTd>
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                        Buffy
                                    </TableTd>
                                    <TableTd>Weber</TableTd>
                                    <TableTd>VP, Engineering</TableTd>
                                </TableRow>
                                <TableRow className="k-treelist-group k-alt" alt>
                                    <TableTd className="k-drag-cell">
                                        <Icon icon="reorder"/>
                                    </TableTd>
                                    <TableTd>
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                        Hyacinth
                                    </TableTd>
                                    <TableTd>Hood</TableTd>
                                    <TableTd>Team Lead</TableTd>
                                </TableRow>
                                <TableRow>
                                    <TableTd className="k-drag-cell">
                                        <Icon icon="reorder"/>
                                    </TableTd>
                                    <TableTd>
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
                                        <Icon className="k-treelist-toggle" icon="none" />
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
        </div>
    </>
);
