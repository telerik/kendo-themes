import { Grid, GridToolbar, GridHeader, GridHeaderCell, GridHeaderTable, GridContainer, GridContent, GridTable,} from '..';
import { TableThead, TableTbody, TableRow, TableTd } from "../../table";
import { Button } from "../../button";
import { WindowNormal } from '../../window';
import { FormField, FormNormal } from '../../form';
import { TextboxNormal } from '../../textbox';
import { NumericTextboxNormal } from '../../numerictextbox';
import { DatePickerNormal } from '../../datepicker';
import { CheckboxNormal } from '../../checkbox';

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
