import { Button } from '../../button/button.spec';
import { ButtonGroup } from '../../button-group/button-group.spec';
import { Icon } from '../../icon/icon.spec';
import { GridHeader } from "../grid-header.spec";
import { GridHeaderCell } from "../grid-header-cell.spec";
import { GridHeaderTable } from "../grid-header-table.spec";
import { GridContainer } from "../grid-container.spec";
import { GridContent } from "../grid-content.spec";
import { GridTable } from "../grid-table.spec";
import { GridNormal } from "../templates/grid-normal";
import { GridGroupingHeader } from "../grid-grouping-header.spec";
import { GridWithGrouping } from "../templates/grid-with-grouping";
import { GridToolbar } from "../grid-toolbar.spec";
import { TableThead } from '../../table/table-thead';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';
import { TableTbody } from '../../table/table-tbody';


const styles = `
    .k-grouping-header .k-grouping-dropclue {
        left: 0;
    }
    .k-drag-clue {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>angular no grouping</span>
            <span>jquery no grouping</span>

            <GridNormal pager={false} className="k-grid-no-scrollbar" toolbar={(
                <GridToolbar>
                    <Button>Button</Button>
                    <ButtonGroup>
                        <Button className="k-group-start" icon="bold"></Button>
                        <Button icon="italic"></Button>
                        <Button className="k-group-end" icon="underline"></Button>
                    </ButtonGroup>
                </GridToolbar>
            )}
            groupingHeader={(
                <GridGroupingHeader dropClue dropHint="Drag a column header and drop it here to group by that column" />
            )}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col /><col /><col /><col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell columnTitle="ID"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Price"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Category"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div className="k-grid-table-wrap">
                            <GridTable>
                                <colgroup>
                                    <col /><col /><col /><col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd>1</TableTd>
                                        <TableTd>Chai</TableTd>
                                        <TableTd>$18.00</TableTd>
                                        <TableTd>Beverages</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt>
                                        <TableTd>2</TableTd>
                                        <TableTd>Chang</TableTd>
                                        <TableTd>$19.00</TableTd>
                                        <TableTd>Beverages</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridNormal>

            <GridNormal _renderAriaRoot={false} pager={false} className="k-grid-no-scrollbar" toolbar={(
                <GridToolbar>
                    <Button>Button</Button>
                    <ButtonGroup>
                        <Button className="k-group-start" icon="bold"></Button>
                        <Button icon="italic"></Button>
                        <Button className="k-group-end" icon="underline"></Button>
                    </ButtonGroup>
                </GridToolbar>
            )}
            groupingHeader={(
                <GridGroupingHeader dropClue dropHint="Drag a column header and drop it here to group by that column" />
            )}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col /><col /><col /><col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell columnTitle="ID"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Price"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Category"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <GridTable>
                            <colgroup>
                                <col /><col /><col /><col />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-master-row">
                                    <TableTd>1</TableTd>
                                    <TableTd>Chai</TableTd>
                                    <TableTd>$18.00</TableTd>
                                    <TableTd>Beverages</TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt>
                                    <TableTd>2</TableTd>
                                    <TableTd>Chang</TableTd>
                                    <TableTd>$19.00</TableTd>
                                    <TableTd>Beverages</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                </GridContainer>
            </GridNormal>

            <span>angular with grouping</span>
            <span>jquery with grouping</span>

            <GridWithGrouping dropClue className="k-grid-no-scrollbar" toolbar={(
                <GridToolbar>
                    <Button>Button</Button>
                    <ButtonGroup>
                        <Button className="k-group-start" icon="bold"></Button>
                        <Button icon="italic"></Button>
                        <Button className="k-group-end" icon="underline"></Button>
                    </ButtonGroup>
                </GridToolbar>
            )}/>

            <GridWithGrouping _renderAriaRoot={false} dropClue className="k-grid-no-scrollbar k-grid-display-block" toolbar={(
                <GridToolbar>
                    <Button>Button</Button>
                    <ButtonGroup>
                        <Button className="k-group-start" icon="bold"></Button>
                        <Button icon="italic"></Button>
                        <Button className="k-group-end" icon="underline"></Button>
                    </ButtonGroup>
                </GridToolbar>
            )}/>

            <span>angular grid drag clue</span>
            <span>jquery grid drag clue</span>

            <section className="section">
                <div className="k-header k-drag-clue"><Icon className="k-drag-status" icon="cancel" />Drag clue</div>
            </section>

            <section className="section">
                <div className="k-header k-drag-clue k-group-clue"><Icon className="k-drag-status" icon="plus" />Drag clue</div>
            </section>

        </div>
    </>
);
