import { TreeList } from "..";
import { GridContainer, GridContent, GridHeader, GridHeaderCell, GridHeaderTable, GridTable, Icon, TableRow, TableTbody, TableTd, TableThead } from "../..";

export const TreeListNormal = ({ gridHeader, gridContent, menu, ...other }: any) => (
    <TreeList id="treelist" _renderAriaRoot {...other}>
        {gridHeader ||
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
                                <GridHeaderCell menu={menu} columnTitle="Name"></GridHeaderCell>
                                <GridHeaderCell menu={menu} columnTitle="Position"></GridHeaderCell>
                                <GridHeaderCell menu={menu} columnTitle="Hire Date"></GridHeaderCell>
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
                            <col />
                            <col />
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
            }
        </GridContainer>
    </TreeList>
);


export default TreeListNormal;
