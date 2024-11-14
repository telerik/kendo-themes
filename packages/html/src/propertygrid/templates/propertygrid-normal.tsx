import { PropertyGrid } from "..";
import { Button } from "../../button";
import { DropdownList } from "../../dropdownlist";
import { GridToolbar, GridContainer, GridContent, GridTable } from "../../grid";
import { Icon } from "../../icon";
import { TableTbody, TableRow, TableTd } from "../../table";
import { Textbox } from "../../textbox";

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
                            <TableRow className="k-alt" alt>
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
                            <TableRow className="k-alt" alt>
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
                            <TableRow className="k-alt" alt>
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
                            <TableRow className="k-alt" alt>
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
