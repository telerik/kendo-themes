import { ActionSheetNormal, ActionSheetHeader, ActionSheetFooter } from "../../action-sheet";
import { Button } from "../../button";
import { CheckboxNormal } from "../../checkbox";
import { DatePickerNormal } from "../../datepicker";
import { FormNormal, FormField } from "../../form";
import { NumericTextboxNormal } from "../../numerictextbox";
import { TableThead, TableRow, TableTbody, TableTd } from "../../table";
import { TextboxNormal } from "../../textbox";
import { GridContainer } from "../grid-container.spec";
import { GridContent } from "../grid-content.spec";
import GridHeaderCell from "../grid-header-cell.spec";
import { GridHeaderTable } from "../grid-header-table.spec";
import { GridHeader } from "../grid-header.spec";
import { GridTable } from "../grid-table.spec";
import { GridToolbar } from "../grid-toolbar.spec";
import Grid from "../grid.spec";

const styles = `
    #test-area {
        max-width: 780px;
        --kendo-actionsheet-height: 400px;
        --kendo-actionsheet-max-height: 400px;
    }
    #test-area > section {
        height: 600px;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span className="k-col-span-2" >resolutions &lt;= 500</span>

            <section>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button icon="plus" selected>Add</Button>
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
                    }>
                </Grid>
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
                    }>
                </Grid>
                <ActionSheetNormal
                    fullscreen
                    adaptive
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Add new record" />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button icon="cancel" size="large">Cancel</Button>
                            <Button icon="save" size="large" themeColor="primary">Save</Button>
                        </ActionSheetFooter>
                    }
                >
                    <FormNormal formButtons={null}>
                        <FormField label="Header for Text" editor={ <TextboxNormal  /> }/>
                        <FormField label="Header for Num" hint="Hint text" editor={ <NumericTextboxNormal /> }/>
                        <FormField label="Header for Date" editor={ <DatePickerNormal  /> }/>
                        <FormField editor={
                            <>
                                <CheckboxNormal />
                                <label className="k-checkbox-label">Header for Bool</label>
                            </>
                        } />
                    </FormNormal>
                </ActionSheetNormal>
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
                                                    <Button themeColor="primary" selected>Edit</Button>
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
                    }>
                </Grid>
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
                    }>
                </Grid>
                <ActionSheetNormal
                    fullscreen
                    adaptive
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Edit record" />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button icon="cancel" size="large">Cancel</Button>
                            <Button icon="save" size="large" themeColor="primary">Save</Button>
                        </ActionSheetFooter>
                    }
                >
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
                </ActionSheetNormal>
            </section>
        </div>
    </>
);
