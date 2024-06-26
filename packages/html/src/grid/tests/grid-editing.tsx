import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { TooltipNormal } from '../../tooltip';
import { GridWithEditRow, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridToolbar } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <GridWithEditRow className="k-grid-no-scrollbar" />

            <GridWithEditRow className="k-grid-no-scrollbar" toolbar={(
                <GridToolbar>
                    <Button icon="plus">Add new record</Button>
                </GridToolbar>
            )}>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col /><col /><col /><col style={{ width: "300px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell scope="col" columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell scope="col" columnTitle="Price"></GridHeaderCell>
                                    <GridHeaderCell scope="col" columnTitle="Available"></GridHeaderCell>
                                    <GridHeaderCell scope="col">&nbsp;</GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <GridTable style={{ height: 'auto' }}>
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
                                    <TableTd>
                                        <Checkbox id="e77452cd-b3b5-4dc9-8210-17007584b695" />
                                        <label className="k-checkbox-label" htmlFor="e77452cd-b3b5-4dc9-8210-17007584b695"></label>
                                    </TableTd>
                                    <TableTd className="k-command-cell">
                                        <Button icon="check" themeColor="primary">Update</Button>
                                        <Button icon="cancel">Cancel</Button>
                                    </TableTd>
                                </TableRow>
                                <TableRow className="k-master-row k-grid-edit-row" alt>
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
                                <TableRow className="k-master-row">
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
            </GridWithEditRow>
        </div>
    </>
);
