import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';
import { GridWithGrouping, GridNormal, GridHeader, GridHeaderTable, GridHeaderCell, GridGroupingHeader, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <h3>Base</h3>
            <GridNormal className="telerik-blazor" pager={false}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell colspan={1}>
                                        <Checkbox />
                                    </GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Id"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Command"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div className="k-pos-relative">
                            <div className="k-virtual-position">
                                <GridTable role="grid" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-master-row">
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </TableTd>
                                            <TableTd colspan={0}>1</TableTd>
                                            <TableTd colspan={0}>Product1</TableTd>
                                            <TableTd className="k-command-cell" colspan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt>
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </TableTd>
                                            <TableTd colspan={0}>2</TableTd>
                                            <TableTd colspan={0}>Product2</TableTd>
                                            <TableTd className="k-command-cell" colspan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridNormal>
            <h3>Single Group</h3>
            <GridWithGrouping className="telerik-blazor" groupingHeader={(
                <GridGroupingHeader>
                    <ChipList>
                        <Chip text="Id" actions={ <ChipAction type="remove"/> }/>
                    </ChipList>
                </GridGroupingHeader>
            )}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col className="k-group-col" />
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell className="k-group-cell" colspan={1} rowspan={1}></GridHeaderCell>
                                    <GridHeaderCell colspan={1}>
                                        <Checkbox />
                                    </GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Id"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Command"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div className="k-pos-relative">
                            <div className="k-virtual-position">
                                <GridTable role="grid" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col className="k-group-col" />
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-table-group-row k-grouping-row">
                                            <TableTd colspan={5}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    Id: 1
                                                </p>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </TableTd>
                                            <TableTd colspan={0}>1</TableTd>
                                            <TableTd colspan={0}>Product1</TableTd>
                                            <TableTd className="k-command-cell" colspan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow role="row" className="k-table-group-row k-grouping-row">
                                            <TableTd colspan={5}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    Id: 2
                                                </p>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </TableTd>
                                            <TableTd colspan={0}>2</TableTd>
                                            <TableTd colspan={0}>Product2</TableTd>
                                            <TableTd className="k-command-cell" colspan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithGrouping>
            <h3>Two Groups</h3>
            <GridWithGrouping className="telerik-blazor" groupingHeader={(
                <GridGroupingHeader>
                    <ChipList>
                        <Chip text="Id" actions={ <ChipAction type="remove"/> } />
                        <Chip text="Name" actions={ <ChipAction type="remove"/> } />
                    </ChipList>
                </GridGroupingHeader>
            )}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col className="k-group-col" />
                                <col className="k-group-col" />
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell className="k-group-cell" colspan={1} rowspan={1}></GridHeaderCell>
                                    <GridHeaderCell className="k-group-cell" colspan={1} rowspan={1}></GridHeaderCell>
                                    <GridHeaderCell colspan={1}>
                                        <Checkbox />
                                    </GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Id"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Command"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div className="k-pos-relative">
                            <div className="k-virtual-position">
                                <GridTable role="grid" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col className="k-group-col" />
                                        <col className="k-group-col" />
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow role="row" className="k-table-group-row k-grouping-row">
                                            <TableTd colspan={6}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    Id: 1
                                                </p>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow role="row" className="k-table-group-row k-grouping-row">
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={5}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    Name: Product1
                                                </p>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </TableTd>
                                            <TableTd colspan={0}>1</TableTd>
                                            <TableTd colspan={0}>Product1</TableTd>
                                            <TableTd className="k-command-cell" colspan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow role="row" className="k-table-group-row k-grouping-row">
                                            <TableTd colspan={6}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    Id: 2
                                                </p>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow role="row" className="k-table-group-row k-grouping-row">
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={5}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    Name: Product2
                                                </p>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </TableTd>
                                            <TableTd colspan={0}>2</TableTd>
                                            <TableTd colspan={0}>Product2</TableTd>
                                            <TableTd className="k-command-cell" colspan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithGrouping>
        </div>
    </>
);
