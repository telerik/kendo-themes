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
import { NumericTextbox } from '../../numerictextbox';
import { RadioButton } from '../../radio';
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
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>

                <Window title="Edit event" actions={[ 'minimize', 'maximize', 'close' ]} actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary" icon="save">Save</Button>
                        <Button icon="cancel">Cancel</Button>
                        <span className="k-spacer"></span>
                        <Button fillMode="flat" themeColor="primary" icon="delete">Delete</Button>
                    </>
                }>
                    <Form tag="div" className="k-scheduler-edit-form" orientation="vertical">
                        <FormField className="k-form-field-error" label="Title" error="Error" editor={ <Textbox invalid value="Invalid" /> }/>
                        <FormField label="Start" editor={ <DateTimePicker placeholder="dd/MM/yyyy hh:mm AM" /> }/>
                        <FormField label=" " editor={
                            <>
                                <Checkbox checked />
                                <label className="k-checkbox-label">Specify Time Zone</label>
                            </>
                        } />
                        <FormField label="Start Time Zone" editor={
                            <Combobox placeholder="Eastern European Summer Time (Sofia-Bulgaria)" />
                        } />
                        <FormField label="End" editor={ <DateTimePicker placeholder="dd/MM/yyyy hh:mm AM" /> }/>
                        <FormField label=" " editor={
                            <>
                                <Checkbox checked />
                                <label className="k-checkbox-label">End in different Time Zone</label>
                            </>
                        } />
                        <FormField label="End Time Zone" editor={
                            <Combobox placeholder="Select Time Zone, Country, City" />
                        } />
                        <FormField label=" " editor={
                            <>
                                <Checkbox />
                                <label className="k-checkbox-label">All Day Event</label>
                            </>
                        }/>
                        <FormField label="Repeat" editor={
                            <div className="k-recurrence-editor">
                                <ButtonGroup stretched className="k-scheduler-recurrence-repeat">
                                    <Button>Never</Button>
                                    <Button>Daily</Button>
                                    <Button selected >Weekly</Button>
                                    <Button>Monthly</Button>
                                    <Button>Yearly</Button>
                                </ButtonGroup>
                                <div className="k-recur-view">
                                    <div className="k-scheduler-recurrence-interval-editor">
                                        <FormField label="Repeat every:" editor={
                                            <>
                                                <NumericTextbox className="k-recur-interval" />
                                                <span> weeks(s)</span>
                                            </>
                                        }/>
                                        <FormField label="Repeat on:" editor={
                                            <ButtonGroup stretched>
                                                <Button>Sun</Button>
                                                <Button selected >Mon</Button>
                                                <Button>Tue</Button>
                                                <Button>Wed</Button>
                                                <Button>Thu</Button>
                                                <Button>Fri</Button>
                                                <Button>Sat</Button>
                                            </ButtonGroup>
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
                        }/>
                        <FormField label="Description" editor={ <Textarea /> }/>
                        <FormField label="Owner" editor={ <Combobox placeholder="Select owner" /> }/>
                        <FormField label="Atendee" optional editor={ <MultiSelect placeholder="Invite people" /> }/>
                    </Form>
                </Window>

            </section>

        </div>
    </>
);
