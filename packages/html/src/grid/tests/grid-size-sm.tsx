import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Chip, ChipAction, ChipList } from '../../chip';
import { DropdownList } from '../../dropdownlist';
import { Icon } from '../../icon';
import { NumericTextbox } from '../../numerictextbox';
import { SkeletonNormal } from '../../skeleton';
import { Textbox } from '../../textbox';
import { TooltipNormal } from '../../tooltip';
import { GridNormal, GridHeader, GridGroupingHeader, GridContainer, GridContent, GridHeaderTable, GridHeaderCell, GridTable, GridPager, GridToolbar } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';


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

            <span className="col-2">Grid</span>

            <section className="col-2">
                <GridNormal size="small" className="k-grid-no-scrollbar" groupingHeader={false} pager={( <GridPager size="small" /> )}>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable size="small">
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
                        <GridContent>
                            <GridTable size="small">
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
                                        <TableTd><SkeletonNormal animation={false} /></TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row">
                                        <TableTd>5</TableTd>
                                        <TableTd><SkeletonNormal animation={false} /></TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>

            <span className="col-2">Filtering</span>
            <section className="col-2">
                <GridNormal size="small" className="k-grid-no-scrollbar" pager={false} groupingHeader={false} style={{ height: "150px" }}>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable size="small">
                                <colgroup>
                                    <col className="k-hierarchy-col" /><col /><col /><col /><col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell className="k-hierarchy-cell"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Default" menu="filter"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Hover" menu="filter" hover></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Focus" menu="filter" focus></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Active" menu="filter" active></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Sorted" menu="filter" sortable></GridHeaderCell>
                                    </TableRow>
                                    <TableRow className="k-filter-row">
                                        <TableTd>
                                            <div className="k-filtercell">
                                                <div className="k-filltercell-wrapper"></div>
                                            </div>
                                        </TableTd>
                                        <TableTd>
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <NumericTextbox showClearButton={false} />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button disabled icon="filter-clear"></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </TableTd>
                                        <TableTd>
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <Textbox showClearButton={false} value="p" />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button icon="filter-clear"></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </TableTd>
                                        <TableTd>
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <Textbox showClearButton={false} value="p" />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button icon="filter-clear"></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </TableTd>
                                        <TableTd>
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <Textbox showClearButton={false} value="p" />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button icon="filter-clear"></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </TableTd>
                                        <TableTd>
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper"></div>
                                            </div>
                                        </TableTd>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent>
                            <GridTable size="small">
                                <colgroup>
                                    <col className="k-hierarchy-col" /><col /><col /><col /><col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row k-expanded">
                                        <TableTd className="k-hierarchy-cell">
                                            <Icon icon="caret-alt-down" />
                                        </TableTd>
                                        <TableTd>1</TableTd>
                                        <TableTd>Text</TableTd>
                                        <TableTd>Text</TableTd>
                                        <TableTd>Text</TableTd>
                                        <TableTd>Text</TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-detail-row">
                                        <TableTd className="k-hierarchy-cell"></TableTd>
                                        <TableTd className="k-detail-cell" colspan={5}>
                                            {/* hierarchy child content */}
                                            <div style={{ background: "#ccc", padding: "10px" }}>
                                            Nested content
                                            </div>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-master-row k-alt">
                                        <TableTd className="k-hierarchy-cell">
                                            <Icon icon="caret-alt-right" />
                                        </TableTd>
                                        <TableTd>2</TableTd>
                                        <TableTd>Text</TableTd>
                                        <TableTd>Text</TableTd>
                                        <TableTd>Text</TableTd>
                                        <TableTd>Text</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>

            <span>Editing</span>
            <section className="col-2">
                <GridNormal size="small" className="k-grid-no-scrollbar" pager={false} groupingHeader={false} toolbar={(
                    <GridToolbar>
                        <Button icon="plus">Add new record</Button>
                    </GridToolbar>
                )}>
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable size="small">
                                <colgroup>
                                    <col /><col /><col /><col style={{ width: "300px" }} />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="Name"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Price"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Available"></GridHeaderCell>
                                        <GridHeaderCell>&nbsp;</GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent>
                            <GridTable size="small">
                                <colgroup>
                                    <col /><col /><col /><col style={{ width: "300px" }} />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row k-grid-edit-row">
                                        <TableTd>
                                            <Textbox value="Towel" required />
                                        </TableTd>
                                        <TableTd>
                                            <NumericTextbox invalid />
                                            <TooltipNormal className="k-validator-tooltip k-invalid-msg"
                                                themeColor="error"
                                                callout="top"
                                                icon="exclamation-circle"
                                                content="Price"
                                            />
                                        </TableTd>
                                        <TableTd><Checkbox id="e77452cd-b3b5-4dc9-8210-17007584b695" /><label className="k-checkbox-label" htmlFor="e77452cd-b3b5-4dc9-8210-17007584b695"></label></TableTd>
                                        <TableTd className="k-command-cell">
                                            <Button icon="check" themeColor="primary">Update</Button>
                                            <Button icon="cancel">Cancel</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow alt className="k-master-row k-grid-edit-row k-alt">
                                        <TableTd className="k-dirty-cell">
                                            <span className="k-dirty"></span>
                                            LongSingleWordTestLongSingleWordTestLongSingleWordTestLongSingleWordTest
                                        </TableTd>
                                        <TableTd>18</TableTd>
                                        <TableTd>false</TableTd>
                                        <TableTd className="k-command-cell">
                                            <Button icon="pencil">Edit</Button>
                                            <Button icon="x">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-grid-edit-row">
                                        <TableTd>Chang</TableTd>
                                        <TableTd>19</TableTd>
                                        <TableTd>false</TableTd>
                                        <TableTd className="k-command-cell">
                                            <Button icon="pencil">Edit</Button>
                                            <Button icon="x">Delete</Button>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>

            <span>Grouping</span>
            <section className="col-2">
                <GridNormal size="small" className="k-grid-no-scrollbar" pager={false} groupingHeader={(
                    <GridGroupingHeader dropClue>
                        <ChipList size="small">
                            <Chip size="small" icon="sort-asc-small" text="Price" actions={ <ChipAction type="remove"/> } />
                            <Chip size="small" icon="sort-desc-small" text="Name" actions={ <ChipAction type="remove" /> } />
                        </ChipList>
                    </GridGroupingHeader>
                )}>
                    <GridHeader draggable>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable size="small">
                                <colgroup>
                                    <col className="k-group-col" /><col /><col /><col /><col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell className="k-group-cell"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Name"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Price"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Available"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Units"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                    <GridContainer>
                        <GridContent>
                            <GridTable size="small" style={{ height: "auto" }}>
                                <colgroup>
                                    <col className="k-group-col" /><col /><col /><col /><col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-table-group-row k-grouping-row">
                                        <TableTd colspan={5}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-right" />
                                            Price: 19
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-table-group-row k-grouping-row">
                                        <TableTd colspan={5}>
                                            <p className="k-reset">
                                                <Icon icon="caret-alt-down" />
                                            Price: 30
                                            </p>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow>
                                        <TableTd className="k-master-row k-table-group-td k-group-cell">&nbsp;</TableTd>
                                        <TableTd>Chai</TableTd>
                                        <TableTd>30</TableTd>
                                        <TableTd>false</TableTd>
                                        <TableTd>15</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    </GridContainer>
                </GridNormal>
            </section>
        </div>
    </>
);
