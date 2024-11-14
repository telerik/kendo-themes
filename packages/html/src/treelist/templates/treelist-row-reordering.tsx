import { TreeList } from "..";
import { GridContainer, GridContent, GridHeader, GridHeaderCell, GridHeaderTable, GridTable, Icon, TableRow, TableTbody, TableTd, TableThead } from "../..";

export const TreeListRowReordering = ({ gridHeader, gridContent, menu, ...other }: any) => (
    <TreeList id="treelist" _renderAriaRoot {...other} >
        {gridHeader ||
            <GridHeader>
                <div className="k-grid-header-wrap">
                    <GridHeaderTable>
                        <colgroup>
                            <col className="k-drag-col"/>
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <TableThead>
                            <TableRow>
                                <GridHeaderCell className="k-drag-cell"></GridHeaderCell>
                                <GridHeaderCell menu={menu} columnTitle="First Name"></GridHeaderCell>
                                <GridHeaderCell menu={menu} columnTitle="Last Name"></GridHeaderCell>
                                <GridHeaderCell menu={menu} columnTitle="Position"></GridHeaderCell>
                            </TableRow>
                        </TableThead>
                    </GridHeaderTable>
                </div>
            </GridHeader>
        }
        <GridContainer>
            {gridContent ||
                <GridContent>
                    <GridTable>
                        <colgroup>
                            <col className="k-drag-col" />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <TableTbody>
                            <TableRow>
                                <TableTd className="k-drag-cell">
                                    <Icon icon="reorder"/>
                                </TableTd>
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down"/>
                                    Daryl
                                </TableTd>
                                <TableTd>Sweeney</TableTd>
                                <TableTd>CEO</TableTd>
                            </TableRow>
                            <TableRow className="k-alt" alt>
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
                            <TableRow>
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
                            <TableRow className="k-alt" alt>
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
            }
        </GridContainer>
    </TreeList>
);

