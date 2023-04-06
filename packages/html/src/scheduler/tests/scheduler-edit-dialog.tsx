import ReactDOM from 'react-dom/client';
import { Window } from '../../window';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { DatePicker } from '../../datepicker';
import { NumericTextbox } from '../../numerictextbox';
import { RadioButton } from '../../radio';
import { Textarea } from '../../textarea';
import { Textbox } from '../../textbox';
import { TimePicker } from '../../timepicker';
import { Form, FormField } from '../../form';
import { ButtonGroup } from '../../button-group';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        width: 700px;
    }
    .k-window {
        width: 100%;
        position: relative;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>

                <Window title="Event" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                    <Form tag="div" orientation="horizontal" className="k-scheduler-edit-form">
                        <FormField label="Title" editor={ <Textbox placeholder="Title..." /> } />
                        <FormField label="Start" editor={
                            <div className="k-scheduler-datetime-picker">
                                <DatePicker />
                                <TimePicker />
                            </div>
                        } />
                        <FormField label="End" editor={
                            <div className="k-scheduler-datetime-picker">
                                <DatePicker />
                                <TimePicker />
                            </div>
                        } />
                        <FormField label=" " editor={
                            <>
                                <Checkbox id="k-is-allday-chkbox" />
                                <label htmlFor="k-is-allday-chkbox" className="k-checkbox-label">All Day Event</label>
                            </>
                        } />
                        <FormField label=" " editor={
                            <>
                                <Checkbox id="k-set-timezone" />
                                <label htmlFor="k-set-timezone" className="k-checkbox-label">Specify Time Zone</label>
                            </>
                        } />
                        <div className="k-recurrence-editor">
                            <FormField label="Repeat" editor={
                                <ButtonGroup className="k-scheduler-recurrence-repeat k-button-group-stretched" >
                                    <Button>Never</Button>
                                    <Button selected>Daily</Button>
                                    <Button>Weekly</Button>
                                    <Button>Monthly</Button>
                                    <Button>Yearly</Button>
                                </ButtonGroup>
                            } />
                            <div className="k-recur-view">
                                <div className="k-scheduler-recurrence-interval-editor">
                                    <FormField label="Repeat every" editor={
                                        <>
                                            <NumericTextbox className="k-recur-interval" />
                                            <span>day(s)</span>
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
                        <FormField label="Description" editor={ <Textarea /> } />
                    </Form>
                </Window>

            </section>

        </div>
    </>
);
