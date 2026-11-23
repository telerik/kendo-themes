import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { Grid, GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, GridToolbar } from '../../grid';
import { nextId } from '../../misc';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';

export const GridWithEditRowSm = (props) => {
    const gridId = nextId('grid');

    return (
        <Grid _renderAriaRoot
            size="small"
            ariaRootId={gridId}
            toolbar={(
                <GridToolbar size="small" role="toolbar" aria-label="Grid toolbar" aria-controls={gridId}>
                    <Button size="small">Add new</Button>
                    <Button size="small">Save Changes</Button>
                    <Button size="small">Cancel Changes</Button>
                </GridToolbar>
            )}
        children={(
            <>
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable size="small" role="none">
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
                            <GridTable size="small" role="none">
                                <colgroup>
                                    <col /><col /><col /><col style={{ width: "300px" }} />
                                </colgroup>
                                <TableTbody role="rowgroup">
                                    <TableRow className="k-master-row k-grid-add-row k-grid-edit-row" role="row">
                                        <TableTd role="gridcell">
                                            <Textbox size="small" value="Towel" aria-label="Name" />
                                        </TableTd>
                                        <TableTd role="gridcell">
                                            <NumericTextbox size="small" value="42" aria-label="Price" />
                                        </TableTd>
                                        <TableTd role="gridcell"><Checkbox aria-label="Available" /></TableTd>
                                        <TableTd className="k-command-cell" role="gridcell">
                                            <Button size="small">Add</Button>
                                            <Button size="small">Cancel</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row">
                                        <TableTd role="gridcell">Chai</TableTd>
                                        <TableTd role="gridcell">18</TableTd>
                                        <TableTd role="gridcell">false</TableTd>
                                        <TableTd className="k-command-cell" role="gridcell">
                                            <Button size="small">Remove</Button>
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row" role="row" alt>
                                        <TableTd role="gridcell">Chang</TableTd>
                                        <TableTd role="gridcell">19</TableTd>
                                        <TableTd role="gridcell">false</TableTd>
                                        <TableTd className="k-command-cell" role="gridcell">
                                            <Button size="small">Remove</Button>
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
