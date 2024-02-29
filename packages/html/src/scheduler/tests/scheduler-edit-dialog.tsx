import { WindowNormal } from '../../window';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Textarea } from '../../textarea';
import { Textbox } from '../../textbox';
import { DateTimePicker } from '../../datetimepicker';
import { Combobox } from '../../combobox';
import { MultiSelect } from '../../multiselect';
import { FormNormal, FormField } from '../../form';
import { ButtonGroup } from '../../button-group';
import { RadioButtonWithLabelAfter, RadioGroup, RadioItem } from '../../radio';
import { NumericTextbox } from '../../numerictextbox';
import { DatePicker } from '../../datepicker';


const style = `
    #test-area {
        width: 700px;
    }
    .k-window {
        min-width: 400px;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <WindowNormal title="Edit event" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary" icon="save">Save</Button>
                        <Button icon="cancel">Cancel</Button>
                        <span className="k-spacer"></span>
                        <Button fillMode="flat" themeColor="primary" icon="trash">Delete</Button>
                    </>
                }>
                    <FormNormal formButtons={null} tag="div" className="k-scheduler-edit-form">
                        <FormField className="k-form-field-error" label="Title" error="Error" editor={ <Textbox invalid value="Invalid" /> }/>
                        <FormField label="Start" editor={ <DateTimePicker placeholder="dd/MM/yyyy hh:mm AM" /> }/>
                        <FormField label="End" editor={ <DateTimePicker placeholder="dd/MM/yyyy hh:mm AM" /> }/>
                        <FormField editor={
                            <>
                                <Checkbox />
                                <label className="k-checkbox-label">All Day Event</label>
                            </>
                        }/>
                        <FormField editor={
                            <>
                                <Checkbox />
                                <label className="k-checkbox-label">Specify Time Zone</label>
                            </>
                        }/>
                        <div className="k-recurrence-editor">
                            <FormField label="Repeat" editor={
                                <ButtonGroup stretched className="k-scheduler-recurrence-repeat">
                                    <Button className="k-group-start">Never</Button>
                                    <Button selected >Daily</Button>
                                    <Button>Weekly</Button>
                                    <Button>Monthly</Button>
                                    <Button className="k-group-end">Yearly</Button>
                                </ButtonGroup>
                            }/>
                            <div className="k-recur-view">
                                <div className="k-scheduler-recurrence-interval-editor">
                                    <FormField label="Repeat every" editor={
                                        <>
                                            <NumericTextbox className="k-recur-interval" />
                                            <span> day(s)</span>
                                        </>
                                    } />
                                </div>
                                <div className="k-scheduler-recurrence-end-rule-editor">
                                    <FormField label="End" editor={
                                        <RadioGroup>
                                            <RadioItem>
                                                <RadioButtonWithLabelAfter id="k-endrule-never">Never</RadioButtonWithLabelAfter>
                                            </RadioItem>
                                            <RadioItem>
                                                <RadioButtonWithLabelAfter id="k-endrule-count" >After</RadioButtonWithLabelAfter>
                                                <NumericTextbox className="k-recur-count" />
                                                <span>occurrence(s)</span>
                                            </RadioItem>
                                            <RadioItem>
                                                <RadioButtonWithLabelAfter id="k-endrule-until" >On</RadioButtonWithLabelAfter>
                                                <DatePicker className="k-recur-until" disabled />
                                            </RadioItem>
                                        </RadioGroup>
                                    } />
                                </div>
                            </div>
                        </div>
                        <FormField label="Description" editor={ <Textarea /> }/>
                        <FormField label="Owner" editor={ <Combobox placeholder="Select owner" /> }/>
                        <FormField label="Atendee" optional editor={ <MultiSelect placeholder="Invite people" /> }/>
                    </FormNormal>
                </WindowNormal>
            </section>
        </div>
    </>
);
