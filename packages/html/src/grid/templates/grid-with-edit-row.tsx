import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridToolbar } from '../../grid';
import { nextId } from '../../misc';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const GridWithEditRow = (props) => {
    const gridId = nextId('grid');

    return (
        <Grid _renderAriaRoot
            ariaRootId={gridId}
            toolbar={(
                <GridToolbar role="toolbar" aria-label="Grid toolbar" aria-controls={gridId}>
                    <Button>Add new</Button>
                    <Button>Save Changes</Button>
                    <Button>Cancel Changes</Button>
                </GridToolbar>
            )}
        children={(
            <>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable role="none">
                            <colgroup>
                                <col /><col /><col /><col style={{ width: "300px" }} />
                            </colgroup>
                            <TableThead role="rowgroup">
                                <TableRow role="row">
                                    <GridHeaderCell columnTitle="Name" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Price" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Available" role="columnheader"></GridHeaderCell>
                                    <GridHeaderCell accessibleLabel="Commands"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div>
                            <GridTable role="none">
                                <colgroup>
                                    <col /><col /><col /><col style={{ width: "300px" }} />
                                </colgroup>
                                <TableTbody role="rowgroup">
                                    <TableRow className="k-master-row k-grid-add-row k-grid-edit-row" role="row">
                                        <TableTd role="gridcell">
                                            <Textbox value="Towel" aria-label="Name" />
                                        </TableTd>
                                        <TableTd role="gridcell">
                                            <NumericTextbox value="42" aria-label="Price" />
                                        </TableTd>
                                        <TableTd role="gridcell"><Checkbox aria-label="Available" /></TableTd>
                                        <TableTd className="k-command-cell" role="gridcell">
                                            <Button>Add</Button>
                                            <Button>Cancel</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd role="gridcell">Chai</TableTd>
                                        <TableTd role="gridcell">18</TableTd>
                                        <TableTd role="gridcell">false</TableTd>
                                        <TableTd className="k-command-cell" role="gridcell">
                                            <Button>Remove</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd role="gridcell">Chang</TableTd>
                                        <TableTd role="gridcell">19</TableTd>
                                        <TableTd role="gridcell">false</TableTd>
                                        <TableTd className="k-command-cell" role="gridcell">
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
};
