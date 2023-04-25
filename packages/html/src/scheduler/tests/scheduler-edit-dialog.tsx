import ReactDOM from 'react-dom/client';
import { Window } from '../../window';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Textarea } from '../../textarea';
import { Textbox } from '../../textbox';
import { DateTimePicker } from '../../datetimepicker';
import { Combobox } from '../../combobox';
import { MultiSelect } from '../../multiselect';
import { Form, FormField } from '../../form';
import { ButtonGroup } from '../../button-group';
import { RadioButton } from '../../radio';
import { NumericTextbox } from '../../numerictextbox';
import { DatePicker } from '../../datepicker';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        width: 700px;
    }
    .k-window {
        min-width: 400px;
        position: relative;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <Window title="Edit event" actions={[ 'window-minimize', 'window', 'x' ]} actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary" icon="save">Save</Button>
                        <Button icon="cancel">Cancel</Button>
                        <span className="k-spacer"></span>
                        <Button fillMode="flat" themeColor="primary" icon="trash">Delete</Button>
                    </>
                }>
                    <Form tag="div" className="k-scheduler-edit-form" orientation="vertical">
                        <FormField className="k-form-field-error" label="Title" error="Error" editor={ <Textbox invalid value="Invalid" /> }/>
                        <FormField label="Start" editor={ <DateTimePicker placeholder="dd/MM/yyyy hh:mm AM" /> }/>
                        <FormField label="End" editor={ <DateTimePicker placeholder="dd/MM/yyyy hh:mm AM" /> }/>
                        <FormField label=" " editor={
                            <>
                                <Checkbox />
                                <label className="k-checkbox-label">All Day Event</label>
                            </>
                        }/>
                        <FormField label=" " editor={
                            <>
                                <Checkbox />
                                <label className="k-checkbox-label">Specify Time Zone</label>
                            </>
                        }/>
                        <div className="k-recurrence-editor">
                            <FormField label="Repeat" editor={
                                <ButtonGroup stretched className="k-scheduler-recurrence-repeat">
                                    <Button>Never</Button>
                                    <Button selected >Daily</Button>
                                    <Button>Weekly</Button>
                                    <Button>Monthly</Button>
                                    <Button>Yearly</Button>
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
                                        <ul className="k-radio-list">
                                            <li className="k-radio-list-item">
                                                <RadioButton id="k-endrule-never" />
                                                <label className="k-radio-label" htmlFor="k-endrule-never">Never</label>
                                            </li>
                                            <li className="k-radio-list-item">
                                                <RadioButton id="k-endrule-count" />
                                                <label className="k-radio-label" htmlFor="k-endrule-count">After</label>
                                                <NumericTextbox className="k-recur-count" />
                                                <span>occurrence(s)</span>
                                            </li>
                                            <li className="k-radio-list-item">
                                                <RadioButton id="k-endrule-until" />
                                                <label className="k-radio-label" htmlFor="k-endrule-until">On</label>
                                                <DatePicker className="k-recur-until" disabled />
                                            </li>
                                        </ul>
                                    } />
                                </div>
                            </div>
                        </div>
                        <FormField label="Description" editor={ <Textarea /> }/>
                        <FormField label="Owner" editor={ <Combobox placeholder="Select owner" /> }/>
                        <FormField label="Atendee" optional editor={ <MultiSelect placeholder="Invite people" /> }/>
                    </Form>
                </Window>
            </section>
        </div>
    </>
);
