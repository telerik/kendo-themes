import { PropertyGrid } from "../propertygrid.spec";
import { Button } from "../../button/button.spec";
import { DropdownList } from "../../dropdownlist/dropdownlist.spec";
import { GridToolbar } from "../../grid/grid-toolbar.spec";
import { GridContainer } from "../../grid/grid-container.spec";
import { GridContent } from "../../grid/grid-content.spec";
import { GridTable } from "../../grid/grid-table.spec";
import { Icon } from "../../icon/icon.spec";
import { TableTbody } from '../../table/table-tbody';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';
import { Textbox } from "../../textbox/textbox.spec";

export const PropertyGridNormal = ({ content, ...other }: any) => (
    <PropertyGrid
        style={{ height: "450px" }}
        toolbar={(
            <GridToolbar resizable>
                <Textbox prefix={<Icon icon="search" />} placeholder="Search..." />
                <DropdownList value="Default Sort" />
                <Button icon="categorize" />
                <Button icon="info-circle" />
            </GridToolbar>
        )}
        {...other}
    >
        <GridContainer>
            {content ||
                <GridContent className="k-auto-scrollable">
                    <GridTable>
                        <colgroup>
                            <col style={{ width: "200px" }} />
                            <col style={{ width: "250px" }} />
                        </colgroup>
                        <TableTbody>
                            <TableRow>
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    size
                                </TableTd>
                                <TableTd><b>medium</b></TableTd>
                            </TableRow>
                            <TableRow alt>
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    themeColor
                                </TableTd>
                                <TableTd><b>base</b></TableTd>
                            </TableRow>
                            <TableRow>
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    fillMode
                                </TableTd>
                                <TableTd><b>solid</b></TableTd>
                            </TableRow>
                            <TableRow alt>
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    rounded
                                </TableTd>
                                <TableTd><b>medium</b></TableTd>
                            </TableRow>
                            <TableRow>
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    icon
                                </TableTd>
                                <TableTd><Icon icon="star" /></TableTd>
                            </TableRow>
                            <TableRow alt>
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="caret-alt-down"></Icon>
                                    font
                                </TableTd>
                                <TableTd>Roboto 400</TableTd>
                            </TableRow>
                            <TableRow>
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    font-weight
                                </TableTd>
                                <TableTd><b>400</b></TableTd>
                            </TableRow>
                            <TableRow alt>
                                <TableTd>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    <Icon className="k-treelist-toggle" icon="none"></Icon>
                                    font-family
                                </TableTd>
                                <TableTd><b>Roboto</b></TableTd>
                            </TableRow>
                            <TableRow className="k-hidden k-bottom k-sticky k-footer-template">
                                <TableTd colspan="2"><span>&nbsp;</span></TableTd>
                            </TableRow>
                        </TableTbody>
                    </GridTable>
                </GridContent>
            }
        </GridContainer>
    </PropertyGrid>
);
