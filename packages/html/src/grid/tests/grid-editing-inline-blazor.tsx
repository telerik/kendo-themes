import { Button } from '../../button/button.spec';
import { Checkbox } from '../../checkbox/checkbox.spec';
import { Textbox } from '../../textbox/textbox.spec';
import { GridWithEditRow } from '../templates/grid-with-edit-row';
import { GridHeader } from '../grid-header.spec';
import { GridHeaderCell } from '../grid-header-cell.spec';
import { GridHeaderTable } from '../grid-header-table.spec';
import { GridContainer } from '../grid-container.spec';
import { GridContent } from '../grid-content.spec';
import { GridTable } from '../grid-table.spec';
import { GridToolbar } from '../grid-toolbar.spec';
import { TableThead } from '../../table/table-thead';
import { TableTbody } from '../../table/table-tbody';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <h3>Edit Row</h3>
            <GridWithEditRow className="telerik-blazor" toolbar={(
                <GridToolbar>
                    <Button icon="plus">Add</Button>
                </GridToolbar>
            )}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell colspan={1}>
                                        <Checkbox />
                                    </GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Command"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div style={{ position: "relative" }}>
                            <div className="k-virtual-position">
                                <GridTable style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-master-row k-grid-edit-row">
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox"/>
                                                </span>
                                            </TableTd>
                                            <TableTd className="k-grid-edit-cell" colspan={0}>
                                                <Textbox />
                                            </TableTd>
                                            <TableTd className="k-command-cell" colspan={0}>
                                                <span className="k-d-flex k-gap-1">
                                                    <Button icon="save">Update</Button>
                                                    <Button icon="cancel">Cancel</Button>
                                                </span>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt>
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox"/>
                                                </span>
                                            </TableTd>
                                            <TableTd colspan={0}>
                                                Product2
                                            </TableTd>
                                            <TableTd className="k-command-cell" colspan={0}>
                                                <span className="k-d-flex k-gap-1">
                                                    <Button icon="pencil">Edit</Button>
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
            </GridWithEditRow>
            <h3>New Row</h3>
            <GridWithEditRow className="telerik-blazor" toolbar={(
                <GridToolbar>
                    <Button icon="plus">Add</Button>
                </GridToolbar>
            )}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell colspan={1}>
                                        <Checkbox />
                                    </GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell colspan={1} columnTitle="Command"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div style={{ position: "relative" }}>
                            <div className="k-virtual-position">
                                <GridTable style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <TableTbody>
                                        <TableRow className="k-master-row k-grid-add-row k-grid-edit-row">
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox"/>
                                                </span>
                                            </TableTd>
                                            <TableTd className="k-grid-edit-cell" colspan={0}>
                                                <Textbox />
                                            </TableTd>
                                            <TableTd className="k-command-cell" colspan={0}>
                                                <span className="k-d-flex k-gap-1">
                                                    <Button icon="save">Update</Button>
                                                    <Button icon="cancel">Cancel</Button>
                                                </span>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row">
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox"/>
                                                </span>
                                            </TableTd>
                                            <TableTd colspan={0}>
                                                Product1
                                            </TableTd>
                                            <TableTd className="k-command-cell" colspan={0}>
                                                <span className="k-d-flex k-gap-1">
                                                    <Button icon="pencil">Edit</Button>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </TableTd>
                                        </TableRow>
                                        <TableRow className="k-master-row" alt>
                                            <TableTd colspan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox"/>
                                                </span>
                                            </TableTd>
                                            <TableTd colspan={0}>
                                                Product2
                                            </TableTd>
                                            <TableTd className="k-command-cell" colspan={0}>
                                                <span className="k-d-flex k-gap-1">
                                                    <Button icon="pencil">Edit</Button>
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
            </GridWithEditRow>
        </div>
    </>
);
