import { ExpansionPanel } from '../../expansion-panel';
import { Form, Fieldset, FormField } from '../../form';
import { DropdownList } from '../../dropdownlist';
import { Textbox } from '../../textbox';
import { NumericTextbox } from '../../numerictextbox';
import { ColorPicker } from '../../colorpicker';
import { Combobox } from '../../combobox';
import { Checkbox } from '../../checkbox';
import { Switch } from '../../switch';


const styles = `
    #test-area {
        max-width: 1040px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4 k-grid-rows-2">

            <section>
                <span className="k-font-bold">ChartArea section expanded</span>
                <ExpansionPanel title="Chart area" expanded>
                    <Form>
                        <Fieldset legend="Margins" layout="grid" cols={2} gutters={{cols: "16px"}} >
                            <FormField
                                label="Left"
                                editor={ <NumericTextbox placeholder="Auto" showClearButton={false} fillMode="outline" /> }
                            />
                            <FormField
                                label="Right"
                                editor={ <NumericTextbox placeholder="Auto" showClearButton={false} fillMode="outline" /> }
                            />
                            <FormField
                                label="Top"
                                editor={ <NumericTextbox placeholder="Auto" showClearButton={false} fillMode="outline" /> }
                            />
                            <FormField
                                label="Bottom"
                                editor={ <NumericTextbox placeholder="Auto" showClearButton={false} fillMode="outline" /> }
                            />
                        </Fieldset>

                        <Fieldset legend="Background">
                            <FormField
                                label="Color"
                                editor={ <ColorPicker fillMode="outline" /> }
                            />
                        </Fieldset>
                    </Form>
                </ExpansionPanel>
            </section>

            <section>
                <span className="k-font-bold">Title section expanded</span>
                <ExpansionPanel title="Title" expanded>
                    <Form layout="grid" cols={2} gutters={{cols: "16px"}}>
                        <FormField colSpan="2"
                            label="Apply to"
                            editor={ <DropdownList placeholder="Chart title" fillMode="outline" /> }
                        >
                        </FormField>
                        <FormField colSpan="2"
                            label="Title"
                            editor={ <Textbox placeholder="Chart title" fillMode="outline" /> }
                        ></FormField>
                        <FormField colSpan="2"
                            label="Font"
                            editor={ <Combobox placeholder="(Inherited font)" fillMode="outline" /> }
                        ></FormField>
                        <FormField
                            label="Size"
                            editor={ <Combobox placeholder="px" fillMode="outline" /> }
                        ></FormField>
                        <FormField
                            label="Color"
                            editor={ <ColorPicker fillMode="outline" /> }
                        ></FormField>
                    </Form>
                </ExpansionPanel>
            </section>

            <section className="k-row-start-1 k-row-end-3 k-col-start-3 ">
                <span className="k-font-bold">CategoryAxis section expanded</span>
                <ExpansionPanel title="Category axis" expanded>
                    <Form>
                        <Fieldset legend="Title" layout="grid" cols={2} gutters={{cols: "16px"}} >
                            <FormField colSpan="2"
                                editor={ <Textbox placeholder="Axis Title" fillMode="outline" /> }
                            />
                            <FormField colSpan="2"
                                label="Font"
                                editor={ <Combobox placeholder="(Inherited font)" fillMode="outline" /> }
                            />
                            <FormField
                                label="Size"
                                editor={ <Combobox placeholder="px" fillMode="outline" /> }
                            ></FormField>
                            <FormField
                                label="Color"
                                editor={ <ColorPicker fillMode="outline" /> }
                            ></FormField>
                        </Fieldset>

                        <Fieldset legend="Labels" layout="grid" cols={2} gutters={{cols: "16px"}} >
                            <FormField colSpan="2"
                                label="Font"
                                editor={ <Combobox placeholder="(Inherited font)" fillMode="outline" /> }
                            />
                            <FormField
                                label="Size"
                                editor={ <Combobox placeholder="px" fillMode="outline" /> }
                            ></FormField>
                            <FormField
                                label="Color"
                                editor={ <ColorPicker fillMode="outline" /> }
                            ></FormField>
                            <FormField
                                label="Rotation"
                                editor={ <DropdownList value="0&deg;" fillMode="outline" /> }
                            ></FormField>
                            <span></span>
                            <FormField colSpan="2"
                                editor={
                                    <>
                                        <Checkbox/>
                                        <label className="k-checkbox-label">Reverse order</label>
                                    </>
                                }
                            >
                            </FormField>
                        </Fieldset>
                    </Form>
                </ExpansionPanel>
            </section>

            <section className="k-row-start-1 k-row-end-3 k-col-start-4">
                <span className="k-font-bold">ValueAxis section expanded</span>
                <ExpansionPanel title="Value axis" expanded>
                    <Form>
                        <Fieldset legend="Title" layout="grid" cols={2} gutters={{cols: "16px"}} >
                            <FormField colSpan="2"
                                editor={ <Textbox placeholder="Axis Title" fillMode="outline" /> }
                            />
                            <FormField colSpan="2"
                                label="Font"
                                editor={ <Combobox placeholder="(Inherited font)" fillMode="outline" /> }
                            />
                            <FormField
                                label="Size"
                                editor={ <Combobox placeholder="px" fillMode="outline" /> }
                            ></FormField>
                            <FormField
                                label="Color"
                                editor={ <ColorPicker fillMode="outline" /> }
                            ></FormField>
                        </Fieldset>

                        <Fieldset legend="Labels" layout="grid" cols={2} gutters={{cols: "16px"}}>
                            <FormField colSpan="2"
                                label="Label Format"
                                editor={ <DropdownList value="Number" fillMode="outline" /> }
                            />
                            <FormField colSpan="2"
                                label="Font"
                                editor={ <Combobox placeholder="(Inherited font)" fillMode="outline" /> }
                            />
                            <FormField
                                label="Size"
                                editor={ <Combobox placeholder="px" fillMode="outline" /> }
                            ></FormField>
                            <FormField
                                label="Color"
                                editor={ <ColorPicker fillMode="outline" /> }
                            ></FormField>
                            <FormField
                                label="Rotation"
                                editor={ <DropdownList value="0&deg;" fillMode="outline" /> }
                            ></FormField>
                        </Fieldset>
                    </Form>
                </ExpansionPanel>
            </section>

            <section>
                <span className="k-font-bold">Legend section expanded</span>
                <ExpansionPanel title="Legend" expanded>
                    <Form layout="grid" cols={2} gutters={{cols: "16px"}}>
                        <label className="k-label">Show Legend</label>
                        <Switch onLabel="On" offLabel="Off" checked />

                        <FormField colSpan="2"
                            label="Font"
                            editor={ <Combobox placeholder="(Inherited font)" fillMode="outline" /> }
                        ></FormField>
                        <FormField
                            label="Size"
                            editor={ <Combobox placeholder="px" fillMode="outline" /> }
                        ></FormField>
                        <FormField
                            label="Color"
                            editor={ <ColorPicker fillMode="outline" /> }
                        ></FormField>
                        <FormField colSpan="2"
                            label="Position"
                            editor={ <DropdownList value="Top" fillMode="outline" /> }
                        >
                        </FormField>
                    </Form>
                </ExpansionPanel>
            </section>

            <section>
                <span className="k-font-bold">Series section expanded</span>
                <ExpansionPanel title="Series" expanded>
                    <Form>
                        <FormField
                            label="Apply to"
                            editor={ <DropdownList placeholder="All Series" fillMode="outline" /> }
                        >
                        </FormField>
                        <FormField
                            label="Color"
                            editor={ <ColorPicker fillMode="outline" /> }
                        ></FormField>
                        <FormField
                            editor={
                                <>
                                    <Checkbox/>
                                    <label className="k-checkbox-label">Show Labels</label>
                                </>
                            }
                        >
                        </FormField>
                    </Form>
                </ExpansionPanel>
            </section>
        </div>
    </>
);
