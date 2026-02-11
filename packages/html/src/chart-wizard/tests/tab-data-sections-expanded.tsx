import { ExpansionPanel } from '../../expansion-panel/expansion-panel.spec';
import { Form } from '../../form/form.spec';
import { Fieldset } from '../../form/fieldset';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
import { Icon } from '../../icon/icon.spec';
import { Grid } from '../../grid/grid.spec';
import { GridToolbar } from '../../grid/grid-toolbar.spec';
import { GridContainer } from '../../grid/grid-container.spec';
import { GridContent } from '../../grid/grid-content.spec';
import { GridTable } from '../../grid/grid-table.spec';
import { TableTbody } from '../../table/table-tbody';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';
import { Button } from '../../button/button.spec';


const styles = `
    #test-area {
        max-width: 1040px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <section>
                <span className="k-font-bold">Configuration section expanded</span>
                <ExpansionPanel title="Configuration" expanded>
                    <Form
                        formButtons=""
                    >
                        <Fieldset legend="X axis (category)">
                            <DropdownList value="Current item" fillMode="outline" />
                        </Fieldset>

                        <Fieldset legend="Series">
                            <Grid _renderAriaRoot
                                toolbar={(
                                    <GridToolbar>
                                        <Button icon="plus" fillMode="flat">Add</Button>
                                    </GridToolbar>
                                )}>
                                <GridContainer>
                                    <GridContent>
                                        <GridTable>
                                            <colgroup>
                                                <col className="k-drag-col" />
                                                <col />
                                                <col style={{ width: "80px" }}/>
                                            </colgroup>
                                            <TableTbody>
                                                <TableRow className="k-master-row">
                                                    <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                                    <TableTd>Series Name</TableTd>
                                                    <TableTd className="k-command-cell">
                                                        <Button icon="trash" fillMode="flat"></Button>
                                                    </TableTd>
                                                </TableRow>
                                                <TableRow className="k-master-row" alt>
                                                    <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                                    <TableTd>Series Name</TableTd>
                                                    <TableTd className="k-command-cell">
                                                        <Button icon="trash" fillMode="flat"></Button>
                                                    </TableTd>
                                                </TableRow>
                                                <TableRow className="k-master-row">
                                                    <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                                    <TableTd>Series Name</TableTd>
                                                    <TableTd className="k-command-cell">
                                                        <Button icon="trash" fillMode="flat"></Button>
                                                    </TableTd>
                                                </TableRow>
                                                <TableRow className="k-master-row" alt>
                                                    <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                                    <TableTd>Series Name</TableTd>
                                                    <TableTd className="k-command-cell">
                                                        <Button icon="trash" fillMode="flat"></Button>
                                                    </TableTd>
                                                </TableRow>
                                                <TableRow className="k-master-row">
                                                    <TableTd className="k-drag-cell"><Icon icon="reorder"/></TableTd>
                                                    <TableTd>Series Name</TableTd>
                                                    <TableTd className="k-command-cell">
                                                        <Button icon="trash" fillMode="flat"></Button>
                                                    </TableTd>
                                                </TableRow>
                                            </TableTbody>
                                        </GridTable>
                                    </GridContent>
                                </GridContainer>
                            </Grid>
                        </Fieldset>

                        <Fieldset legend="Y axis (value)">
                            <DropdownList value="Current item" fillMode="outline" />
                        </Fieldset>
                    </Form>
                </ExpansionPanel>
            </section>
        </div>
    </>
);
