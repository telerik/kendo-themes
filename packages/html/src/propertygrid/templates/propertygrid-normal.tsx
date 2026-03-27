import { PropertyGrid } from "..";
import { Button } from "../../button";
import { DropdownList } from "../../dropdownlist";
import { GridToolbar, GridContainer, GridContent, GridTable } from "../../grid";
import { Icon } from "../../icon";
import { nextId } from "../../misc";
import { TableTbody, TableRow, TableTd } from "../../table";
import { Textbox } from "../../textbox";

export const PropertyGridNormal = ({ content, ...other }: any) => {
    const pgId = nextId('propertygrid');

    return (
        <PropertyGrid
            style={{ height: "450px" }}
            _renderAriaRoot
            ariaRootId={pgId}
            ariaColCount={2}
            ariaRowCount={9}
            toolbar={(
                <GridToolbar resizable role="toolbar" aria-label="PropertyGrid toolbar" aria-controls={pgId}>
                    <Textbox prefix={<Icon icon="search" />} placeholder="Search..." aria-label="Search properties" />
                    <DropdownList value="Default Sort" aria-label="Sort order" />
                    <Button icon="categorize" aria-label="Categorize" />
                    <Button icon="info-circle" aria-label="Info" />
                </GridToolbar>
            )}
            {...other}
        >
            <GridContainer>
                {content ||
                    <GridContent className="k-auto-scrollable">
                        <GridTable role="none">
                            <colgroup>
                                <col style={{ width: "200px" }} />
                                <col style={{ width: "250px" }} />
                            </colgroup>
                            <TableTbody role="rowgroup">
                                <TableRow role="row" aria-rowindex={1}>
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        size
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}><b>medium</b></TableTd>
                                </TableRow>
                                <TableRow role="row" alt aria-rowindex={2}>
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        themeColor
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}><b>base</b></TableTd>
                                </TableRow>
                                <TableRow role="row" aria-rowindex={3}>
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        fillMode
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}><b>solid</b></TableTd>
                                </TableRow>
                                <TableRow role="row" alt aria-rowindex={4}>
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        rounded
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}><b>medium</b></TableTd>
                                </TableRow>
                                <TableRow role="row" aria-rowindex={5}>
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        icon
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}><Icon icon="star" /></TableTd>
                                </TableRow>
                                <TableRow role="row" alt aria-rowindex={6} aria-expanded="true">
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="chevron-down"></Icon>
                                        font
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}>Roboto 400</TableTd>
                                </TableRow>
                                <TableRow role="row" aria-rowindex={7}>
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        font-weight
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}><b>400</b></TableTd>
                                </TableRow>
                                <TableRow role="row" alt aria-rowindex={8}>
                                    <TableTd role="gridcell" aria-colindex={1}>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        <Icon className="k-treelist-toggle" icon="none"></Icon>
                                        font-family
                                    </TableTd>
                                    <TableTd role="gridcell" aria-colindex={2}><b>Roboto</b></TableTd>
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
};
