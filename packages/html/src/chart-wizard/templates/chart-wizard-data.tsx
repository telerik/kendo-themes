import { ChartWizard, ChartWizardSplitter, ChartWizardPreviewPanelContent } from "..";
import { ExpansionPanel } from '../../expansion-panel';
import { Form, Fieldset, FormField } from '../../form';
import { DropdownList } from '../../dropdownlist';
import { Icon } from '../../icon';
import { Grid, GridToolbar, GridContainer, GridContent, GridTable } from '../../grid';
import { TableTbody, TableRow, TableTd } from '../../table';
import { Button } from '../../button';
import { TabStrip, TabStripItem, TabStripContent } from '../../tabstrip';
import { SplitterPane } from '../../splitter';


export const ChartWizardData = (props) => (
    <ChartWizard
        children={
            <>
                <ChartWizardSplitter panes={[
                    <SplitterPane className="k-chart-wizard-preview-pane" key="pane-1">
                        <ChartWizardPreviewPanelContent>
                            <div className="k-chart" style={{ position: "relative", height: "400px" }}>
                                <svg style={{ width: '100%', height: "100%", overflow: 'hidden' }} xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <rect width="100%" height="100%" fill="var(--kendo-chart-bg, #fff)"></rect>
                                    <text style={{ font: "16px Arial, Helvetica, sans-serif", whiteSpace: "pre" }} x="50%" y="200" textAnchor="middle" stroke="none" fillOpacity="0.5">Chart Preview</text>
                                </svg>
                            </div>
                        </ChartWizardPreviewPanelContent>
                    </SplitterPane>,
                    <SplitterPane className="k-chart-wizard-property-pane" flexBasis="300px" collapsible key="pane-2">
                        <TabStrip
                            tabStripItems={
                                <>
                                    <TabStripItem first value="Chart"></TabStripItem>
                                    <TabStripItem value="Data" active></TabStripItem>
                                    <TabStripItem last value="Format"></TabStripItem>
                                </>
                            }
                        >
                            <TabStripContent active>
                                <ExpansionPanel expanded title="Configuration">
                                    <Form
                                        formButtons=""
                                    >
                                        <Fieldset legend="X axis (category)">
                                            <FormField
                                                label="Category"
                                                editorId="cw-data-category"
                                                editor={ <DropdownList id="cw-data-category" aria-labelledby="cw-data-category-label" value="Current item" fillMode="outline" /> }
                                            />
                                        </Fieldset>

                                        <Fieldset legend="Series">
                                            <Grid _renderAriaRoot aria-label="Data series"
                                                toolbar={(
                                                    <GridToolbar>
                                                        <Button icon="plus" fillMode="flat">Add</Button>
                                                    </GridToolbar>
                                                )}>
                                                <GridContainer>
                                                    <GridContent>
                                                        <GridTable role="none">
                                                            <colgroup>
                                                                <col style={{ width: "40px" }} />
                                                                <col />
                                                                <col style={{ width: "80px" }}/>
                                                            </colgroup>
                                                            <TableTbody>
                                                                <TableRow className="k-master-row">
                                                                    <TableTd className="k-drag-cell"><Icon icon="reorder" aria-hidden="true" /></TableTd>
                                                                    <TableTd>Series Name</TableTd>
                                                                    <TableTd className="k-command-cell">
                                                                        <Button icon="trash" fillMode="flat" aria-label="Delete series"></Button>
                                                                    </TableTd>
                                                                </TableRow>
                                                                <TableRow className="k-master-row" alt>
                                                                    <TableTd className="k-drag-cell"><Icon icon="reorder" aria-hidden="true" /></TableTd>
                                                                    <TableTd>Series Name</TableTd>
                                                                    <TableTd className="k-command-cell">
                                                                        <Button icon="trash" fillMode="flat" aria-label="Delete series"></Button>
                                                                    </TableTd>
                                                                </TableRow>
                                                                <TableRow className="k-master-row">
                                                                    <TableTd className="k-drag-cell"><Icon icon="reorder" aria-hidden="true" /></TableTd>
                                                                    <TableTd>Series Name</TableTd>
                                                                    <TableTd className="k-command-cell">
                                                                        <Button icon="trash" fillMode="flat" aria-label="Delete series"></Button>
                                                                    </TableTd>
                                                                </TableRow>
                                                            </TableTbody>
                                                        </GridTable>
                                                    </GridContent>
                                                </GridContainer>
                                            </Grid>
                                        </Fieldset>

                                        <Fieldset legend="Y axis (value)">
                                            <FormField
                                                label="Value"
                                                editorId="cw-data-value"
                                                editor={ <DropdownList id="cw-data-value" aria-labelledby="cw-data-value-label" value="Current item" fillMode="outline" /> }
                                            />
                                        </Fieldset>
                                    </Form>
                                </ExpansionPanel>
                            </TabStripContent>
                        </TabStrip>
                    </SplitterPane>
                ]} />
            </>
        }
        {...props}
    />
);
