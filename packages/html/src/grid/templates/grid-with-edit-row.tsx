import { Button } from '../../button/button.spec';
import { Checkbox } from '../../checkbox/checkbox.spec';
import { NumericTextbox } from '../../numerictextbox/numerictextbox.spec';
import { Textbox } from '../../textbox/textbox.spec';
import { Grid } from '../grid.spec';
import { GridContainer } from '../grid-container.spec';
import { GridContent } from '../grid-content.spec';
import { GridTable } from '../grid-table.spec';
import { GridHeader } from '../grid-header.spec';
import { GridHeaderTable } from '../grid-header-table.spec';
import { GridHeaderCell } from '../grid-header-cell.spec';
import { GridToolbar } from '../grid-toolbar.spec';
import { TableThead } from '../../table/table-thead';
import { TableTbody } from '../../table/table-tbody';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';

export const GridWithEditRow = (props) => (
    <Grid _renderAriaRoot
        toolbar={(
            <GridToolbar>
                <Button>Add new</Button>
                <Button>Save Changes</Button>
                <Button>Cancel Changes</Button>
            </GridToolbar>
        )}
        children={(
            <>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col /><col /><col /><col style={{ width: "300px" }} />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell columnTitle="Name"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Price"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Available"></GridHeaderCell>
                                    <GridHeaderCell></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div>
                            <GridTable>
                                <colgroup>
                                    <col /><col /><col /><col style={{ width: "300px" }} />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row k-grid-add-row k-grid-edit-row">
                                        <TableTd>
                                            <Textbox value="Towel" />
                                        </TableTd>
                                        <TableTd>
                                            <NumericTextbox value="42" />
                                        </TableTd>
                                        <TableTd><Checkbox /></TableTd>
                                        <TableTd className="k-command-cell">
                                            <Button>Add</Button>
                                            <Button>Cancel</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row">
                                        <TableTd>Chai</TableTd>
                                        <TableTd>18</TableTd>
                                        <TableTd>false</TableTd>
                                        <TableTd className="k-command-cell">
                                            <Button>Remove</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" alt>
                                        <TableTd>Chang</TableTd>
                                        <TableTd>19</TableTd>
                                        <TableTd>false</TableTd>
                                        <TableTd className="k-command-cell">
                                            <Button>Remove</Button>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </>
        )}
        {...props}>
    </Grid>
);
