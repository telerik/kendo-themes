import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';
import { GridWithGrouping, GridNormal, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridGroupingHeader } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <span>Base</span>
            <GridNormal dir="ltr" pager={false}>
                <GridHeader draggable>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col className="k-hierarchy-col" />
                                <col style={{ width: '50px' }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell className="k-hierarchy-cell"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1}>
                                        <Checkbox id="k-grid0-select-all" />
                                    </GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="ID"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Command"></GridHeaderCell>
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
                                    <col className="k-hierarchy-col" />
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-hierarchy-cell">
                                            <Icon icon="plus" />
                                        </TableTd>
                                        <TableTd colspan={1}>
                                            <Checkbox id="k-grid0-checkbox0" />
                                        </TableTd>
                                        <TableTd colspan={1}>1</TableTd>
                                        <TableTd colspan={1}>Product1</TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-master-row" role="row">
                                        <TableTd className="k-hierarchy-cell">
                                            <Icon icon="plus" />
                                        </TableTd>
                                        <TableTd colspan={1}>
                                            <Checkbox id="k-grid0-checkbox0" />
                                        </TableTd>
                                        <TableTd colspan={1}>2</TableTd>
                                        <TableTd colspan={1}>Product2</TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridNormal>

            <span>Single Group</span>
            <GridWithGrouping dropClue dir="ltr"groupingHeader={(
                <GridGroupingHeader>
                    <ChipList>
                        <Chip icon="sort-asc-small" text="ID" actions={ <ChipAction type="remove"/> } />
                    </ChipList>
                </GridGroupingHeader>
            )}>
                <GridHeader draggable>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col className="k-group-col" />
                                <col className="k-hierarchy-col" />
                                <col style={{ width: '50px' }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell className="k-group-cell"></GridHeaderCell>
                                    <GridHeaderCell className="k-hierarchy-cell"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1}>
                                        <Checkbox />
                                    </GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="ID"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Command"></GridHeaderCell>
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
                                    <col className="k-group-col" />
                                    <col className="k-hierarchy-col" />
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row">
                                        <TableTd colspan={6}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-down" />
                                                ID: 1
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd className="k-hierarchy-cell">
                                            <Icon icon="plus" />
                                        </TableTd>
                                        <TableTd colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd colspan={1}>1</TableTd>
                                        <TableTd colspan={1}>Product1</TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row" >
                                        <TableTd colspan={6}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-down" />
                                                ID: 2
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-master-row" role="row">
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd className="k-hierarchy-cell">
                                            <Icon icon="plus" />
                                        </TableTd>
                                        <TableTd colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd colspan={1}>2</TableTd>
                                        <TableTd colspan={1}>Product2</TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithGrouping>

            <span>Two Groups</span>
            <GridWithGrouping dropClue dir="ltr" groupingHeader={(
                <GridGroupingHeader>
                    <ChipList>
                        <Chip icon="sort-asc-small" text="ID" actions={ <ChipAction type="remove"/> } />
                        <Chip icon="sort-asc-small" text="Name" actions={ <ChipAction type="remove"/> } />
                    </ChipList>
                </GridGroupingHeader>
            )}>
                <GridHeader draggable>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col className="k-group-col" />
                                <col className="k-group-col" />
                                <col className="k-hierarchy-col" />
                                <col style={{ width: '50px' }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell className="k-group-cell"></GridHeaderCell>
                                    <GridHeaderCell className="k-group-cell"></GridHeaderCell>
                                    <GridHeaderCell className="k-hierarchy-cell"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1}>
                                        <Checkbox />
                                    </GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="ID"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Command"></GridHeaderCell>
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
                                    <col className="k-group-col" />
                                    <col className="k-group-col" />
                                    <col className="k-hierarchy-col" />
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row">
                                        <TableTd colspan={7}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-down" />
                                                ID: 1
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row">
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd colspan={6}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-down" />
                                                Name: Product1
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd className="k-hierarchy-cell">
                                            <Icon icon="plus" />
                                        </TableTd>
                                        <TableTd colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd colspan={1}>1</TableTd>
                                        <TableTd colspan={1}>Product1</TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row" >
                                        <TableTd colspan={7}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-down" />
                                                ID: 2
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row" >
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd colspan={6}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-down" />
                                                Name: Product2
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-master-row" role="row">
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd className="k-hierarchy-cell">
                                            <Icon icon="plus" />
                                        </TableTd>
                                        <TableTd colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd colspan={1}>2</TableTd>
                                        <TableTd colspan={1}>Product2</TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithGrouping>
            <span>Expanded Template</span>
            <GridWithGrouping dropClue dir="ltr"groupingHeader={(
                <GridGroupingHeader>
                    <ChipList>
                        <Chip icon="sort-asc-small" text="ID" actions={ <ChipAction type="remove"/> } />
                        <Chip icon="sort-asc-small" text="Name" actions={ <ChipAction type="remove"/> } />
                    </ChipList>
                </GridGroupingHeader>
            )}>
                <GridHeader draggable>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col className="k-group-col" />
                                <col className="k-group-col" />
                                <col className="k-hierarchy-col" />
                                <col style={{ width: '50px' }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell className="k-group-cell"></GridHeaderCell>
                                    <GridHeaderCell className="k-group-cell"></GridHeaderCell>
                                    <GridHeaderCell className="k-hierarchy-cell"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1}>
                                        <Checkbox />
                                    </GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="ID"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell rowspan={1} colspan={1} columnTitle="Command"></GridHeaderCell>
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
                                    <col className="k-group-col" />
                                    <col className="k-group-col" />
                                    <col className="k-hierarchy-col" />
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row">
                                        <TableTd colspan={7}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-down" />
                                                ID: 1
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row">
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd colspan={6}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-down" />
                                                Name: Product1
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-expanded" role="row">
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd className="k-hierarchy-cell">
                                            <Icon icon="minus" />
                                        </TableTd>
                                        <TableTd colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd colspan={1}>1</TableTd>
                                        <TableTd colspan={1}>Product1</TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-detail-row" role="row">
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd className="k-hierarchy-cell"></TableTd>
                                        <TableTd className="k-detail-cell" colspan={4}> Template Text </TableTd>
                                    </TableRow>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row" >
                                        <TableTd colspan={7}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-down" />
                                                ID: 2
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow role="row" className="k-table-group-row k-grouping-row" >
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd colspan={6}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-down" />
                                                Name: Product2
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-master-row k-expanded" role="row">
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd className="k-hierarchy-cell">
                                            <Icon icon="minus" />
                                        </TableTd>
                                        <TableTd colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd colspan={1}>2</TableTd>
                                        <TableTd colspan={1}>Product2</TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button icon="trash">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-detail-row" role="row">
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd className="k-hierarchy-cell"></TableTd>
                                        <TableTd className="k-detail-cell" colspan={4}> Template Text </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithGrouping>
        </div>
    </>
);
