import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';
import { Popup } from '../../popup';
import { SkeletonNormal } from '../../skeleton';
import { GridNormal, GridHeader, GridContainer, GridContent, GridHeaderTable, GridHeaderCell, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span className="col-3">Angular grid</span>

            <section className="col-3">
                <GridNormal className="k-grid-no-scrollbar" groupingHeader={false}>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="100px"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="no width"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent className="k-virtual-content">
                            <div className="k-grid-table-wrap">
                                <GridTable>
                                    <colgroup>
                                        <col style={{ width: "100px" }} />
                                        <col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-master-row">
                                            <TableTd>1</TableTd>
                                            <TableTd>Row</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt>
                                            <TableTd>2</TableTd>
                                            <TableTd>Alt row</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd>3</TableTd>
                                            <TableTd>
                                            This text continues to the end of the grid to test overflow behavior of row contents, as well as line height and vertical alignment.
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-alt" alt>
                                            <TableTd>4</TableTd>
                                            <TableTd><SkeletonNormal animation={false}/></TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                            <div className="k-height-container">
                                {/* set height to scroll height (virtual scrolling) */}
                                <div style={{ height: '0px' }}></div>
                            </div>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>

            <span className="col-3">Angular -- fixed height, hierarchy, filter menu, sort icon</span>
            <section className="col-3">
                <GridNormal className="k-grid-no-scrollbar" style={{ height: "240px" }} pager={false} groupingHeader={false}>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col className="k-hierarchy-col" />
                                    <col style={{ width: "80px" }} />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell className="k-hierarchy-cell"></GridHeaderCell>
                                        <GridHeaderCell></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Default" menu="filter"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Hover" menu="filter" hover></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Focus" menu="filter" focus></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Active" menu="filter" active></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Sorted" menu="filter" sortable></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent className="k-virtual-content">
                            <div className="k-grid-table-wrap">
                                <GridTable>
                                    <colgroup>
                                        <col className="k-hierarchy-col" />
                                        <col style={{ width: "80px" }} />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-master-row k-expanded">
                                            <TableTd className="k-hierarchy-cell"><Icon icon="caret-alt-down" /></TableTd>
                                            <TableTd><Checkbox /><label className="k-checkbox-label"></label></TableTd>
                                            <TableTd>1</TableTd>
                                            <TableTd>Text</TableTd>
                                            <TableTd>Text</TableTd>
                                            <TableTd>Text</TableTd>
                                            <TableTd>Text</TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row k-detail-row">
                                            <TableTd className="k-hierarchy-cell"></TableTd>
                                            <TableTd className="k-detail-cell" colspan={6}>
                                                {/* hierarchy child content */}
                                                <div style={{ padding: "10px" }}>
                                                Nested content
                                                </div>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow alt className="k-master-row k-alt">
                                            <TableTd className="k-hierarchy-cell">
                                                <Icon icon="caret-alt-right" />
                                            </TableTd>
                                            <TableTd><Checkbox /><label className="k-checkbox-label"></label></TableTd>
                                            <TableTd>2</TableTd>
                                            <TableTd>Text</TableTd>
                                            <TableTd>Text</TableTd>
                                            <TableTd>Text</TableTd>
                                            <TableTd>Text</TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                            <div className="k-height-container">
                                <div></div>
                            </div>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>

            <span className="col-3">Angular -- standalone column chooser</span>
            <section className="col-2">
                <GridNormal pager={false} groupingHeader={false} toolbar={(
                    <div className="k-toolbar k-toolbar-solid k-grid-toolbar">
                        <div className="k-spacer"></div>
                        <div className="k-grid-column-chooser">
                            <Button fillMode="flat" icon="columns"></Button>
                        </div>
                    </div>
                )}>
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
                                        <GridHeaderCell columnTitle="Product"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Unit Price"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Qty Per Unit"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent className="k-virtual-content">
                            <div className="k-grid-table-wrap">
                                <GridTable>
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-master-row k-expanded">
                                            <TableTd>Chai</TableTd>
                                            <TableTd>18</TableTd>
                                            <TableTd>10 boxes x 20 bags</TableTd>
                                        </TableRow>
                                        <TableRow alt className="k-master-row k-alt">
                                            <TableTd>Chang</TableTd>
                                            <TableTd>19</TableTd>
                                            <TableTd>24 - 12 oz bottles</TableTd>
                                        </TableRow>
                                        <TableRow alt className="k-master-row k-alt">
                                            <TableTd>Aniseed Syrup</TableTd>
                                            <TableTd>20</TableTd>
                                            <TableTd>24 - 12 oz bottles</TableTd>
                                        </TableRow>
                                    </TableTbody>
                                </GridTable>
                            </div>
                            <div className="k-height-container">
                                <div></div>
                            </div>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>
            <section className="col-1">
                <Popup>
                    <span className="k-column-chooser-title">Columns</span>
                    <div className="k-column-list-wrapper">
                        <div className="k-column-list">
                            <label className="k-column-list-item">
                                <Checkbox />
                                <span className="k-checkbox-label">ID</span>
                            </label>
                            <label className="k-column-list-item">
                                <Checkbox />
                                <span className="k-checkbox-label">Name</span>
                            </label>
                            <label className="k-column-list-item">
                                <Checkbox />
                                <span className="k-checkbox-label">Category</span>
                            </label>
                        </div>
                        <ActionButtons>
                            <Button>Reset</Button>
                            <Button themeColor="primary">Apply</Button>
                        </ActionButtons>
                    </div>
                </Popup>
            </section>

        </div>
    </>
);
