import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';
import { GridWithLockedColumns, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridFooter, GridFooterTable } from '../../grid';
import { TableThead, TableTbody, TableTfoot, TableRow, TableTd } from '../../table';

const styles = `
    /* These overrides are needed for the "Angular Grid with locked columns, Grouping and Multiline headers" example ->
    they ensure the Grid layout is not broken in neither of the themes */
    .grid-styling-overrides .k-header,
    .grid-styling-overrides .k-grouping-row td,
    .grid-styling-overrides .k-group-footer td {
        padding-top: 0;
        padding-bottom: 0;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <GridWithLockedColumns headerWrapClassName="k-auto-scrollable" contentClassName="k-auto-scrollable" className="k-grid-display-block k-reordable" />
            <div>
                <span>jQuery Grid - Frozen columns and sorting</span>
                <GridWithLockedColumns _renderAriaRoot={false} style={{ width: "1000px", height: "200px" }} className="k-grid-display-block">
                    <GridHeader>
                        <div className="k-grid-header-locked" style={{ width: "400px" }}>
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "250px" }} />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell rowspan={1} columnTitle="Order ID"></GridHeaderCell>
                                        <GridHeaderCell sortable sortIcon="sort-desc-small" sortOrder={1} rowspan={1} columnTitle="Ship Name"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                        <div className="k-grid-header-wrap k-auto-scrollable" style={{ width: "581px" }}>
                            <GridHeaderTable style={{ width: "900px" }}>
                                <colgroup>
                                    <col style={{ width: "400px" }} />
                                    <col style={{ width: "500px" }} />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell sortable sortOrder={2} rowspan={1} columnTitle="Ship Country"></GridHeaderCell>
                                        <GridHeaderCell rowspan={1} columnTitle="Ship City"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <div className="k-grid-content-locked" style={{ width: "400px", height: "146px" }}>
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: "150px" }} />
                                    <col style={{ width: "250px" }} className="k-sorted" />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd>10374</TableTd>
                                        <TableTd>Wolski Zajazd</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" alt>
                                        <TableTd>10611</TableTd>
                                        <TableTd>Wolski Zajazd</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row">
                                        <TableTd>10792</TableTd>
                                        <TableTd>Wolski Zajazd</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" alt>
                                        <TableTd>10792</TableTd>
                                        <TableTd>Wolski Zajazd</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                        <GridContent className="k-auto-scrollable" style={{ width: "597px", height: "161px" }}>
                            <GridTable role="grid" style={{ height: 'auto', width: "900px" }}>
                                <colgroup>
                                    <col style={{ width: "400px" }} className="k-sorted" />
                                    <col style={{ width: "500px" }} />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row">
                                        <TableTd>Poland</TableTd>
                                        <TableTd>Warszawa</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" alt>
                                        <TableTd>Poland</TableTd>
                                        <TableTd>Warszawa</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row">
                                        <TableTd>Poland</TableTd>
                                        <TableTd>Warszawa</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" alt>
                                        <TableTd>Poland</TableTd>
                                        <TableTd>Warszawa</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </GridWithLockedColumns>
            </div>

            <div>
                <span>Angular Grid with locked columns, Grouping and Multiline headers</span>
                <GridWithLockedColumns className="grid-styling-overrides" style={{ height: "430px" }}>
                    <GridHeader>
                        <div className="k-grid-header-locked" style={{ width: "582px" }}>
                            <GridHeaderTable>
                                <colgroup>
                                    <col className="k-group-col" />
                                    <col style={{ width: "200px" }} />
                                    <col style={{ width: "350px" }} />
                                </colgroup>
                                <TableThead>
                                    <TableRow style={{ height: "38px" }}>
                                        <GridHeaderCell className="k-group-cell"></GridHeaderCell>
                                        <GridHeaderCell rowspan={2} colspan={1} columnTitle="Product ID"></GridHeaderCell>
                                        <GridHeaderCell rowspan={2} colspan={1} columnTitle="Product Name"></GridHeaderCell>
                                    </TableRow>
                                    <TableRow style={{ height: "38px" }}>
                                        <GridHeaderCell className="k-group-cell"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ height: "120px" }} />
                                    <col style={{ height: "120px" }} />
                                    <col style={{ height: "120px" }} />
                                    <col style={{ height: "120px" }} />
                                </colgroup>
                                <TableThead>
                                    <TableRow style={{ height: "38px" }}>
                                        <GridHeaderCell rowspan={1} colspan={3} columnTitle="Availability"></GridHeaderCell>
                                        <GridHeaderCell rowspan={2} colspan={1} columnTitle="Discontinued"></GridHeaderCell>
                                    </TableRow>
                                    <TableRow style={{ height: "38px" }}>
                                        <GridHeaderCell rowspan={1} colspan={1} columnTitle="Unit Price"></GridHeaderCell>
                                        <GridHeaderCell rowspan={1} colspan={1} columnTitle="Units On Order"></GridHeaderCell>
                                        <GridHeaderCell rowspan={1} colspan={1} columnTitle="Units In Stock"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <div className="k-grid-content-locked" style={{ width: "582px", height: "570px" }}>
                            <div className="k-grid-table-wrap">
                                <GridTable style={{ width: "582px" }}>
                                    <colgroup>
                                        <col className="k-group-col" />
                                        <col style={{ width: "200px" }}/>
                                        <col style={{ width: "350px" }} />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-table-group-row k-grouping-row" style={{ height: "37px" }}>
                                            <TableTd colspan={3}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />

                                                    Discontinued: false
                                                </p>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" style={{ height: "38px" }}>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}></TableTd>
                                            <TableTd colspan={1}>Chai</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt style={{ width: "37px" }}>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>2</TableTd>
                                            <TableTd colspan={1}>Chang</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" style={{ width: "37px" }}>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>3</TableTd>
                                            <TableTd colspan={1}>
                                            Aniseed Syrup
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt style={{ width: "37px" }}>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>
                                            4
                                            </TableTd>
                                            <TableTd colspan={1}>
                                            Chef Anton&apos;s Cajun Seasoning
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" style={{ width: "37px" }}>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>6</TableTd>
                                            <TableTd colspan={1}>Grandma&apos;s Boysenberry Spread</TableTd>
                                        </TableRow>
                                        <TableRow className="k-group-footer" style={{ height: "39px" }}>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd></TableTd>
                                            <TableTd></TableTd>
                                        </TableRow>
                                        <TableRow className="k-table-group-row k-grouping-row" style={{ height: "37px" }}>
                                            <TableTd colspan={3}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    Discontinued: true
                                                </p>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt style={{ height: "38px" }}>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd colspan={1}>
                                            5
                                            </TableTd>
                                            <TableTd colspan={1}>
                                            Chef Anton&apos;s Gumbo Mix
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-group-footer" style={{ height: "39px" }}>
                                            <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                            <TableTd></TableTd>
                                            <TableTd></TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                            <div className="k-height-container">
                                <div></div>
                            </div>
                        </div>
                        <GridContent>
                            <div className="k-grid-table-wrap">
                                <GridTable>
                                    <colgroup>
                                        <col style={{ height: "120px" }} />
                                        <col style={{ height: "120px" }} />
                                        <col style={{ height: "120px" }} />
                                        <col style={{ height: "120px" }} />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-table-group-row k-grouping-row" style={{ height: "37px" }}>
                                            <TableTd colspan={4}>
                                                <p className="k-reset"></p>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" style={{ height: "38px" }}>
                                            <TableTd colspan={1}>18</TableTd>
                                            <TableTd colspan={1}>0</TableTd>
                                            <TableTd colspan={1}>39</TableTd>
                                            <TableTd colspan={1}><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt style={{ width: "37px" }}>
                                            <TableTd colspan={1}>19</TableTd>
                                            <TableTd colspan={1}>40</TableTd>
                                            <TableTd colspan={1}>17</TableTd>
                                            <TableTd colspan={1}><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" style={{ width: "37px" }}>
                                            <TableTd colspan={1}>10</TableTd>
                                            <TableTd colspan={1}>70</TableTd>
                                            <TableTd colspan={1}>13</TableTd>
                                            <TableTd colspan={1}><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt style={{ width: "37px" }}>
                                            <TableTd colspan={1}>22</TableTd>
                                            <TableTd colspan={1}>0</TableTd>
                                            <TableTd colspan={1}>53</TableTd>
                                            <TableTd colspan={1}><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" style={{ width: "37px" }}>
                                            <TableTd colspan={1}>25</TableTd>
                                            <TableTd colspan={1}>0</TableTd>
                                            <TableTd colspan={1}>120</TableTd>
                                            <TableTd colspan={1}><Checkbox /></TableTd>
                                        </TableRow>
                                        <TableRow className="k-group-footer" style={{ height: "39px" }}>
                                            <TableTd>Sum: 94</TableTd>
                                            <TableTd></TableTd>
                                            <TableTd></TableTd>
                                            <TableTd></TableTd>
                                        </TableRow>
                                        <TableRow className="k-table-group-row k-grouping-row" style={{ height: "37px" }}>
                                            <TableTd className="k-table-td" colspan={4}>
                                                <p className="k-reset"></p>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow alt className="k-master-row k-alt" style={{ height: "38px" }}>
                                            <TableTd className="k-table-td" colspan={1}>21.35</TableTd>
                                            <TableTd className="k-table-td" colspan={1}>0</TableTd>
                                            <TableTd className="k-table-td" colspan={1}>0</TableTd>
                                            <TableTd className="k-table-td" colspan={1}>
                                                <Checkbox />
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-group-footer" style={{ height: "39px" }}>
                                            <TableTd className="k-table-td">Sum: 24</TableTd>
                                            <TableTd className="k-table-td"></TableTd>
                                            <TableTd className="k-table-td"></TableTd>
                                            <TableTd className="k-table-td"></TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                            <div></div>
                            <div className="k-height-container"><div></div></div>
                        </GridContent>
                    </GridContainer>
                    <GridFooter>
                        <div className="k-grid-footer-locked" style={{ width: "582px" }}>
                            <GridFooterTable>
                                <colgroup>
                                    <col className="k-group-col" />
                                    <col style={{ width: "200px" }}/>
                                    <col style={{ width: "350px" }} />
                                </colgroup>
                                <TableTfoot>
                                    <TableRow className="k-footer-template">
                                        <TableTd className="k-table-group-td k-group-cell"></TableTd>
                                        <TableTd></TableTd>
                                        <TableTd></TableTd>
                                    </TableRow>
                                </TableTfoot>
                            </GridFooterTable>
                        </div>
                        <div className="k-grid-footer-wrap">
                            <GridFooterTable>
                                <colgroup>
                                    <col style={{ height: "120px" }} />
                                    <col style={{ height: "120px" }} />
                                    <col style={{ height: "120px" }} />
                                    <col style={{ height: "120px" }} />
                                </colgroup>
                                <TableTfoot>
                                    <TableRow className="k-footer-template">
                                        <TableTd>Total Unit Price: 115.35</TableTd>
                                        <TableTd></TableTd>
                                        <TableTd></TableTd>
                                        <TableTd></TableTd>
                                    </TableRow>
                                </TableTfoot>
                            </GridFooterTable>
                        </div>
                    </GridFooter>
                </GridWithLockedColumns>
            </div>
        </div>
    </>
);
