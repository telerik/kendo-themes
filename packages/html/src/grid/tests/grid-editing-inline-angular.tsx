import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Textbox } from '../../textbox';
import { GridWithEditRow, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridToolbar } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <h3>Edit Row</h3>
            <GridWithEditRow dir="ltr" toolbar={(
                <GridToolbar>
                    <Button icon="plus">Add</Button>
                </GridToolbar>
            )}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: '50px' }} />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell rowspan={1} colspan={1}>
                                        <Checkbox />
                                    </GridHeaderCell>
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
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row k-grid-edit-row" role="row">
                                        <TableTd colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd colspan={1}>
                                            <Textbox />
                                        </TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button>Update</Button>
                                            <Button>Cancel</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" alt>
                                        <TableTd colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd colspan={1}>
                                            Product2
                                        </TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button>Edit</Button>
                                            <Button>Remove</Button>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithEditRow>
            <h3>New Row</h3>
            <GridWithEditRow dir="ltr" toolbar={(
                <GridToolbar>
                    <Button icon="plus">Add</Button>
                </GridToolbar>
            )}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: '50px' }} />
                                <col />
                                <col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell rowspan={1} colspan={1}>
                                        <Checkbox />
                                    </GridHeaderCell>
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
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row k-grid-add-row k-grid-edit-row" role="row">
                                        <TableTd colspan={1}></TableTd>
                                        <TableTd colspan={1}>
                                            <Textbox />
                                        </TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button>Add</Button>
                                            <Button>Discard changes</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row">
                                        <TableTd colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd colspan={1}>
                                            Product1
                                        </TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button>Edit</Button>
                                            <Button>Remove</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-alt" alt>
                                        <TableTd colspan={1}>
                                            <Checkbox />
                                        </TableTd>
                                        <TableTd colspan={1}>
                                            Product2
                                        </TableTd>
                                        <TableTd className="k-command-cell" colspan={1}>
                                            <Button>Edit</Button>
                                            <Button>Remove</Button>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithEditRow>
        </div>
    </>
);
