import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';
import { GridWithGrouping, GridHeader, GridHeaderCell, GridHeaderTable, GridGroupingHeader, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableRow, TableTd, TableTbody } from '../../table';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <h3>Single group - selected row</h3>
            <GridWithGrouping dropClue className="k-grid-no-scrollbar" groupingHeader={(
                <GridGroupingHeader>
                    <ChipList>
                        <Chip text="Name" actions={ <ChipAction type="remove"/> }/>
                    </ChipList>
                </GridGroupingHeader>
            )}>
                <GridHeader draggable>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col className="k-group-col"/><col /><col /><col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell className="k-group-cell" colspan={1} rowspan={1} accessibleLabel="Group"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="ID"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Price"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <GridTable>
                            <colgroup>
                                <col className="k-group-col"/><col /><col /><col />
                            </colgroup>
                            <TableTbody>
                                <TableRow className="k-table-group-row k-grouping-row">
                                    <TableTd colspan={4}>
                                        <p className="k-reset">
                                            <Icon icon="chevron-down" />
                                            Name: Chai
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" selected>
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd colspan={0}>1</TableTd>
                                    <TableTd colspan={0}>Chai</TableTd>
                                    <TableTd colspan={0}>$18.00</TableTd>
                                </TableRow>
                                <TableRow className="k-table-group-row k-grouping-row">
                                    <TableTd colspan={4}>
                                        <p className="k-reset">
                                            <Icon icon="chevron-down" />
                                            Name: Chang
                                        </p>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row" alt>
                                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                    <TableTd colspan={0}>2</TableTd>
                                    <TableTd colspan={0}>Chang</TableTd>
                                    <TableTd colspan={0}>$19.00</TableTd>
                                </TableRow>
                            </TableTbody>
                        </GridTable>
                    </GridContent>
                </GridContainer>
            </GridWithGrouping>
        </div>
    </>
);
