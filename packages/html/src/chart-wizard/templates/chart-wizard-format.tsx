import { ChartWizard, ChartWizardSplitter, ChartWizardPreviewPanelContent } from "..";
import { ExpansionPanel } from '../../expansion-panel';
import { Form, Fieldset, FormField } from '../../form';
import { DropdownList } from '../../dropdownlist';
import { Textbox } from '../../textbox';
import { NumericTextbox } from '../../numerictextbox';
import { ColorPicker } from '../../colorpicker';
import { Combobox } from '../../combobox';
import { Checkbox } from '../../checkbox';
import { Switch } from '../../switch';
import { TabStrip, TabStripItem, TabStripContent } from '../../tabstrip';
import { SplitterPane } from '../../splitter';


export const ChartWizardFormat = (props) => (
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
                                    <TabStripItem value="Data"></TabStripItem>
                                    <TabStripItem last value="Format" active></TabStripItem>
                                </>
                            }
                        >
                            <TabStripContent active>
                                <ExpansionPanel expanded title="Chart area">
                                    <Form>
                                        <Fieldset legend="Margins" layout="grid" cols={2} gutters={{cols: "16px"}} >
                                            <FormField
                                                label="Left"
                                                editorId="cw-margin-left"
                                                editor={ <NumericTextbox id="cw-margin-left" placeholder="Auto" showClearButton={false} fillMode="outline" /> }
                                            />
                                            <FormField
                                                label="Right"
                                                editorId="cw-margin-right"
                                                editor={ <NumericTextbox id="cw-margin-right" placeholder="Auto" showClearButton={false} fillMode="outline" /> }
                                            />
                                            <FormField
                                                label="Top"
                                                editorId="cw-margin-top"
                                                editor={ <NumericTextbox id="cw-margin-top" placeholder="Auto" showClearButton={false} fillMode="outline" /> }
                                            />
                                            <FormField
                                                label="Bottom"
                                                editorId="cw-margin-bottom"
                                                editor={ <NumericTextbox id="cw-margin-bottom" placeholder="Auto" showClearButton={false} fillMode="outline" /> }
                                            />
                                        </Fieldset>

                                        <Fieldset legend="Background">
                                            <FormField
                                                label="Color"
                                                editorId="cw-bg-color"
                                                editor={ <ColorPicker id="cw-bg-color" aria-labelledby="cw-bg-color-label" fillMode="outline" /> }
                                            />
                                        </Fieldset>
                                    </Form>
                                </ExpansionPanel>

                                <ExpansionPanel expanded title="Title">
                                    <Form layout="grid" cols={2} gutters={{cols: "16px"}}>
                                        <FormField colSpan="2"
                                            label="Apply to"
                                            editorId="cw-title-apply"
                                            editor={ <DropdownList id="cw-title-apply" aria-labelledby="cw-title-apply-label" value="Chart title" fillMode="outline" /> }
                                        />
                                        <FormField colSpan="2"
                                            label="Title"
                                            editorId="cw-title-text"
                                            editor={ <Textbox id="cw-title-text" placeholder="Chart title" fillMode="outline" /> }
                                        />
                                        <FormField colSpan="2"
                                            label="Font"
                                            editorId="cw-title-font"
                                            editor={ <Combobox id="cw-title-font" placeholder="(Inherited font)" fillMode="outline" /> }
                                        />
                                        <FormField
                                            label="Size"
                                            editorId="cw-title-size"
                                            editor={ <Combobox id="cw-title-size" placeholder="px" fillMode="outline" /> }
                                        />
                                        <FormField
                                            label="Color"
                                            editorId="cw-title-color"
                                            editor={ <ColorPicker id="cw-title-color" aria-labelledby="cw-title-color-label" fillMode="outline" /> }
                                        />
                                    </Form>
                                </ExpansionPanel>

                                <ExpansionPanel expanded title="Series">
                                    <Form>
                                        <FormField
                                            label="Apply to"
                                            editorId="cw-series-apply"
                                            editor={ <DropdownList id="cw-series-apply" aria-labelledby="cw-series-apply-label" value="All Series" fillMode="outline" /> }
                                        />
                                        <FormField
                                            label="Color"
                                            editorId="cw-series-color"
                                            editor={ <ColorPicker id="cw-series-color" aria-labelledby="cw-series-color-label" fillMode="outline" /> }
                                        />
                                        <FormField
                                            editor={
                                                <>
                                                    <Checkbox id="cw-series-labels" />
                                                    <label className="k-checkbox-label" htmlFor="cw-series-labels">Show Labels</label>
                                                </>
                                            }
                                        />
                                    </Form>
                                </ExpansionPanel>

                                <ExpansionPanel expanded title="Legend">
                                    <Form layout="grid" cols={2} gutters={{cols: "16px"}}>
                                        <FormField colSpan="2"
                                            editor={
                                                <div className="k-d-flex k-align-items-center k-gap-2">
                                                    <label className="k-label" id="cw-legend-toggle-label">Show Legend</label>
                                                    <Switch aria-labelledby="cw-legend-toggle-label" onLabel="On" offLabel="Off" checked />
                                                </div>
                                            }
                                        />
                                        <FormField colSpan="2"
                                            label="Font"
                                            editorId="cw-legend-font"
                                            editor={ <Combobox id="cw-legend-font" placeholder="(Inherited font)" fillMode="outline" /> }
                                        />
                                        <FormField
                                            label="Size"
                                            editorId="cw-legend-size"
                                            editor={ <Combobox id="cw-legend-size" placeholder="px" fillMode="outline" /> }
                                        />
                                        <FormField
                                            label="Color"
                                            editorId="cw-legend-color"
                                            editor={ <ColorPicker id="cw-legend-color" aria-labelledby="cw-legend-color-label" fillMode="outline" /> }
                                        />
                                        <FormField colSpan="2"
                                            label="Position"
                                            editorId="cw-legend-position"
                                            editor={ <DropdownList id="cw-legend-position" aria-labelledby="cw-legend-position-label" value="Top" fillMode="outline" /> }
                                        />
                                    </Form>
                                </ExpansionPanel>

                                <ExpansionPanel expanded title="Category axis">
                                    <Form>
                                        <Fieldset legend="Title" layout="grid" cols={2} gutters={{cols: "16px"}} >
                                            <FormField colSpan="2"
                                                label="Axis title"
                                                editorId="cw-cat-axis-title"
                                                editor={ <Textbox id="cw-cat-axis-title" placeholder="Axis Title" fillMode="outline" /> }
                                            />
                                            <FormField colSpan="2"
                                                label="Font"
                                                editorId="cw-cat-title-font"
                                                editor={ <Combobox id="cw-cat-title-font" placeholder="(Inherited font)" fillMode="outline" /> }
                                            />
                                            <FormField
                                                label="Size"
                                                editorId="cw-cat-title-size"
                                                editor={ <Combobox id="cw-cat-title-size" placeholder="px" fillMode="outline" /> }
                                            />
                                            <FormField
                                                label="Color"
                                                editorId="cw-cat-title-color"
                                                editor={ <ColorPicker id="cw-cat-title-color" aria-labelledby="cw-cat-title-color-label" fillMode="outline" /> }
                                            />
                                        </Fieldset>

                                        <Fieldset legend="Labels" layout="grid" cols={2} gutters={{cols: "16px"}} >
                                            <FormField colSpan="2"
                                                label="Font"
                                                editorId="cw-cat-label-font"
                                                editor={ <Combobox id="cw-cat-label-font" placeholder="(Inherited font)" fillMode="outline" /> }
                                            />
                                            <FormField
                                                label="Size"
                                                editorId="cw-cat-label-size"
                                                editor={ <Combobox id="cw-cat-label-size" placeholder="px" fillMode="outline" /> }
                                            />
                                            <FormField
                                                label="Color"
                                                editorId="cw-cat-label-color"
                                                editor={ <ColorPicker id="cw-cat-label-color" aria-labelledby="cw-cat-label-color-label" fillMode="outline" /> }
                                            />
                                            <FormField
                                                label="Rotation"
                                                editorId="cw-cat-label-rotation"
                                                editor={ <DropdownList id="cw-cat-label-rotation" aria-labelledby="cw-cat-label-rotation-label" value="0°" fillMode="outline" /> }
                                            />
                                            <span></span>
                                            <FormField colSpan="2"
                                                editor={
                                                    <>
                                                        <Checkbox id="cw-cat-reverse" />
                                                        <label className="k-checkbox-label" htmlFor="cw-cat-reverse">Reverse order</label>
                                                    </>
                                                }
                                            />
                                        </Fieldset>
                                    </Form>
                                </ExpansionPanel>

                                <ExpansionPanel expanded title="Value axis">
                                    <Form>
                                        <Fieldset legend="Title" layout="grid" cols={2} gutters={{cols: "16px"}} >
                                            <FormField colSpan="2"
                                                label="Axis title"
                                                editorId="cw-val-axis-title"
                                                editor={ <Textbox id="cw-val-axis-title" placeholder="Axis Title" fillMode="outline" /> }
                                            />
                                            <FormField colSpan="2"
                                                label="Font"
                                                editorId="cw-val-title-font"
                                                editor={ <Combobox id="cw-val-title-font" placeholder="(Inherited font)" fillMode="outline" /> }
                                            />
                                            <FormField
                                                label="Size"
                                                editorId="cw-val-title-size"
                                                editor={ <Combobox id="cw-val-title-size" placeholder="px" fillMode="outline" /> }
                                            />
                                            <FormField
                                                label="Color"
                                                editorId="cw-val-title-color"
                                                editor={ <ColorPicker id="cw-val-title-color" aria-labelledby="cw-val-title-color-label" fillMode="outline" /> }
                                            />
                                        </Fieldset>

                                        <Fieldset legend="Labels" layout="grid" cols={2} gutters={{cols: "16px"}}>
                                            <FormField colSpan="2"
                                                label="Label Format"
                                                editorId="cw-val-label-format"
                                                editor={ <DropdownList id="cw-val-label-format" aria-labelledby="cw-val-label-format-label" value="Number" fillMode="outline" /> }
                                            />
                                            <FormField colSpan="2"
                                                label="Font"
                                                editorId="cw-val-label-font"
                                                editor={ <Combobox id="cw-val-label-font" placeholder="(Inherited font)" fillMode="outline" /> }
                                            />
                                            <FormField
                                                label="Size"
                                                editorId="cw-val-label-size"
                                                editor={ <Combobox id="cw-val-label-size" placeholder="px" fillMode="outline" /> }
                                            />
                                            <FormField
                                                label="Color"
                                                editorId="cw-val-label-color"
                                                editor={ <ColorPicker id="cw-val-label-color" aria-labelledby="cw-val-label-color-label" fillMode="outline" /> }
                                            />
                                            <FormField
                                                label="Rotation"
                                                editorId="cw-val-label-rotation"
                                                editor={ <DropdownList id="cw-val-label-rotation" aria-labelledby="cw-val-label-rotation-label" value="0°" fillMode="outline" /> }
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
