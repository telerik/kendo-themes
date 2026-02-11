import { Grid } from '../grid.spec';
import { GridToolbar } from '../grid-toolbar.spec';
import { GridHeader } from '../grid-header.spec';
import { GridHeaderCell } from '../grid-header-cell.spec';
import { GridHeaderTable } from '../grid-header-table.spec';
import { GridContainer } from '../grid-container.spec';
import { GridContent } from '../grid-content.spec';
import { GridTable } from '../grid-table.spec';
import { TableThead } from '../../table/table-thead';
import { TableTbody } from '../../table/table-tbody';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';
import { Button } from "../../button/button.spec";
import { WindowNormal } from '../../window/templates/window-normal';
import { FormField } from '../../form/form-field';
import { FormNormal } from '../../form/templates/form-normal';
import { TextboxNormal } from '../../textbox/templates/textbox-normal';
import { NumericTextboxNormal } from '../../numerictextbox/templates/numerictextbox-normal';
import { DatePickerNormal } from '../../datepicker/templates/datepicker-normal';
import { CheckboxNormal } from '../../checkbox/templates/checkbox-normal';

const styles = `
    .k-window {
        width: 329px;
        position: relative;
        bottom: 100px;
        left: 200px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button icon="plus">Add</Button>
                            </GridToolbar>
                        </>
                    }
                    children={
                        <>
                            <GridHeader>
                                <div className="k-grid-header-wrap">
                                    <GridHeaderTable>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <TableThead>
                                            <TableRow>
                                                <GridHeaderCell columnTitle="Header for Text"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header for Num"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header for Date"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header for Bool"></GridHeaderCell>
                                                <GridHeaderCell></GridHeaderCell>
                                            </TableRow>
                                        </TableThead>
                                    </GridHeaderTable>
                                </div>
                            </GridHeader>
                            <GridContainer>
                                <GridContent>
                                    <GridTable>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow className="k-master-row">
                                                <TableTd>Text Grid Cell</TableTd>
                                                <TableTd>1/21/2021</TableTd>
                                                <TableTd>1</TableTd>
                                                <TableTd>false</TableTd>
                                                <TableTd className="k-command-cell">
                                                    <Button themeColor="primary">Edit</Button>
                                                    <Button>Remove</Button>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" alt>
                                                <TableTd>Text Grid Cell</TableTd>
                                                    <TableTd>1/22/2021</TableTd>
                                                    <TableTd>2</TableTd>
                                                    <TableTd>true</TableTd>
                                                    <TableTd className="k-command-cell">
                                                        <Button themeColor="primary">Edit</Button>
                                                        <Button>Remove</Button>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row">
                                                <TableTd>Text Grid Cell</TableTd>
                                                    <TableTd>1/23/2021</TableTd>
                                                    <TableTd>3</TableTd>
                                                    <TableTd>false</TableTd>
                                                    <TableTd className="k-command-cell">
                                                        <Button themeColor="primary">Edit</Button>
                                                        <Button>Remove</Button>
                                                </TableTd>
                                            </TableRow>
                                        </TableTbody>
                                    </GridTable>
                                </GridContent>
                            </GridContainer>
                        </>
                    }
                >

                </Grid>

                <WindowNormal title="Add new record" actions={[ 'x' ]} actionButtonsAlign="start" actionButtons={
                    <>
                        <Button icon="save" themeColor="primary">Save</Button>
                        <Button icon="cancel">Cancel</Button>
                    </>
                }>
                    <FormNormal formButtons={null}>
                        <FormField label="Header for Text" editor={ <TextboxNormal /> }/>
                        <FormField label="Header for Num" hint="Hint text" editor={ <NumericTextboxNormal /> }/>
                        <FormField label="Header for Date" editor={ <DatePickerNormal /> }/>
                        <FormField editor={
                            <>
                                <CheckboxNormal />
                                <label className="k-checkbox-label">Header for Bool</label>
                            </>
                        } />
                    </FormNormal>
                </WindowNormal >
            </section>

            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button icon="plus">Add</Button>
                            </GridToolbar>
                        </>
                    }
                    children={
                        <>
                            <GridHeader>
                                <div className="k-grid-header-wrap">
                                    <GridHeaderTable>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <TableThead>
                                            <TableRow>
                                                <GridHeaderCell columnTitle="Header for Text"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header for Num"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header for Date"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header for Bool"></GridHeaderCell>
                                                <GridHeaderCell></GridHeaderCell>
                                            </TableRow>
                                        </TableThead>
                                    </GridHeaderTable>
                                </div>
                            </GridHeader>
                            <GridContainer>
                                <GridContent>
                                    <GridTable>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow className="k-master-row">
                                                <TableTd>Text Grid Cell</TableTd>
                                                <TableTd>1/21/2021</TableTd>
                                                <TableTd>1</TableTd>
                                                <TableTd>false</TableTd>
                                                <TableTd className="k-command-cell">
                                                    <Button themeColor="primary">Edit</Button>
                                                    <Button>Remove</Button>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" alt>
                                                <TableTd>Text Grid Cell</TableTd>
                                                    <TableTd>1/22/2021</TableTd>
                                                    <TableTd>2</TableTd>
                                                    <TableTd>true</TableTd>
                                                    <TableTd className="k-command-cell">
                                                        <Button themeColor="primary">Edit</Button>
                                                        <Button>Remove</Button>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row">
                                                <TableTd>Text Grid Cell</TableTd>
                                                    <TableTd>1/23/2021</TableTd>
                                                    <TableTd>3</TableTd>
                                                    <TableTd>false</TableTd>
                                                    <TableTd className="k-command-cell">
                                                        <Button themeColor="primary">Edit</Button>
                                                        <Button>Remove</Button>
                                                </TableTd>
                                            </TableRow>
                                        </TableTbody>
                                    </GridTable>
                                </GridContent>
                            </GridContainer>
                        </>
                    }
                >

                </Grid>

                <WindowNormal title="Edit record" actions={[ 'x' ]} actionButtonsAlign="start" actionButtons={
                    <>
                        <Button icon="save" themeColor="primary">Save</Button>
                        <Button icon="cancel">Cancel</Button>
                    </>
                }>
                    <FormNormal formButtons={null}>
                        <FormField label="Header for Text" editor={ <TextboxNormal value="Text Grid Cell" /> }/>
                        <FormField label="Header for Num" hint="Hint text" editor={ <NumericTextboxNormal value="1" /> }/>
                        <FormField label="Header for Date" editor={ <DatePickerNormal value="1/21/2021" /> }/>
                        <FormField editor={
                            <>
                                <CheckboxNormal />
                                <label className="k-checkbox-label">Header for Bool</label>
                            </>
                        } />
                    </FormNormal>
                </WindowNormal >
            </section>
        </div>
    </>
);
