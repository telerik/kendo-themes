import { TreeList } from '../treelist.spec';
import { GridHeader } from '../../grid/grid-header.spec';
import { GridHeaderTable } from '../../grid/grid-header-table.spec';
import { GridHeaderCell } from '../../grid/grid-header-cell.spec';
import { GridContent } from '../../grid/grid-content.spec';
import { GridContainer } from '../../grid/grid-container.spec';
import { GridTable } from '../../grid/grid-table.spec';
import { Icon } from "../../icon/icon.spec";
import { TableThead } from '../../table/table-thead';
import { TableRow } from '../../table/table-row';
import { TableTbody } from '../../table/table-tbody';
import { TableTd } from '../../table/table-td';

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
                            <TableRow>
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down"></Icon>
                                    Daryl
                                </TableTd>
                                <TableTd>Sweeney</TableTd>
                                <TableTd>CEO</TableTd>
                            </TableRow>
                            <TableRow alt>
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down"></Icon>
                                    Guy
                                </TableTd>
                                <TableTd>Wooten</TableTd>
                                <TableTd>Chief Technical Officer</TableTd>
                            </TableRow>
                            <TableRow>
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down"></Icon>
                                    Buffy
                                </TableTd>
                                <TableTd>Weber</TableTd>
                                <TableTd>VP, Engineering</TableTd>
                            </TableRow>
                            <TableRow alt>
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

