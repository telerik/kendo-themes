import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridToolbar } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

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
                                    <TableRow className="k-grid-add-row k-grid-edit-row">
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
                                    <TableRow>
                                        <TableTd>Chai</TableTd>
                                        <TableTd>18</TableTd>
                                        <TableTd>false</TableTd>
                                        <TableTd className="k-command-cell">
                                            <Button>Remove</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-alt" alt>
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
