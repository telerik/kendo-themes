import { ExpansionPanel } from '../../expansion-panel';
import { Form, Fieldset } from '../../form';
import { DropdownList } from '../../dropdownlist';
import { Icon } from '../../icon';
import { Grid, GridToolbar, GridContainer, GridContent, GridTable } from '../../grid';
import { TableTbody, TableRow, TableTd } from '../../table';
import { Button } from '../../button';


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
