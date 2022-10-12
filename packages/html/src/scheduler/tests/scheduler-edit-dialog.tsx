import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { DatePicker } from '../../datepicker';
import { NumericTextbox } from '../../numerictextbox';
import { RadioButton } from '../../radio';
import { Textarea } from '../../textarea/textarea';
import { Textbox } from '../../textbox/textbox';
import { TimePicker } from '../../timepicker';

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

                <div className="k-window">
                    <div className="k-window-titlebar">
                        <div className="k-window-title">Event</div>
                        <div className="k-window-actions"><Button fillMode="flat" icon="close"></Button></div>
                    </div>
                    <div className="k-window-content">
                        <div className="k-scheduler-edit-form k-form k-form-md k-form-horizontal">
                            <div className="k-form-field">
                                <div className="k-form-label">
                                    <label htmlFor="k-event-title">Title</label>
                                </div>
                                <div className="k-form-field-wrap">
                                    <Textbox placeholder="Title..." />
                                </div>
                            </div>
                            <div className="k-form-field">
                                <div className="k-form-label">
                                    <label>Start</label>
                                </div>
                                <div className="k-form-field-wrap">
                                    <div className="k-scheduler-datetime-picker">
                                        <DatePicker />
                                        <TimePicker />
                                    </div>
                                </div>
                            </div>
                            <div className="k-form-field">
                                <div className="k-form-label">
                                    <label>End</label>
                                </div>
                                <div className="k-form-field-wrap">
                                    <div className="k-scheduler-datetime-picker">
                                        <DatePicker />
                                        <TimePicker />
                                    </div>
                                </div>
                            </div>
                            <div className="k-form-field">
                                <div className="k-form-label k-empty"></div>
                                <div className="k-form-field-wrap">
                                    <Checkbox id="k-is-allday-chkbox" />
                                    <label className="k-checkbox-label" htmlFor="k-is-allday-chkbox">All Day Event</label>
                                </div>
                            </div>
                            <div className="k-form-field">
                                <div className="k-form-label k-empty"></div>
                                <div className="k-form-field-wrap">
                                    <Checkbox id="k-set-timezone" />
                                    <label className="k-checkbox-label" htmlFor="k-set-timezone">Specify Time Zone</label>
                                </div>
                            </div>
                            <div className="k-recurrence-editor">
                                <div className="k-form-field">
                                    <div className="k-form-label">
                                        <label>Repeat</label>
                                    </div>
                                    <div className="k-form-field-wrap">
                                        <div className="k-scheduler-recurrence-repeat k-button-group k-button-group-stretched">
                                            <Button>Never</Button>
                                            <Button selected>Daily</Button>
                                            <Button>Weekly</Button>
                                            <Button>Monthly</Button>
                                            <Button>Yearly</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="k-recur-view">
                                    <div className="k-scheduler-recurrence-interval-editor">
                                        <div className="k-form-field">
                                            <div className="k-form-label">
                                                <label>Repeat every</label>
                                            </div>
                                            <div className="k-form-field-wrap">
                                                <NumericTextbox className="k-recur-interval" />
                                                <span>day(s)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="k-scheduler-recurrence-end-rule-editor">
                                        <div className="k-form-field">
                                            <div className="k-form-label">
                                                <label>End</label>
                                            </div>
                                            <div className="k-form-field-wrap">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="k-form-field">
                                <div className="k-form-label">
                                    <label htmlFor="k-event-description">Description</label>
                                </div>
                                <div className="k-form-field-wrap">
                                    <Textarea />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ActionButtons alignment="end" className="k-window-buttons">
                        <Button>Cancel</Button>
                        <Button themeColor="primary">Save</Button>
                    </ActionButtons>
                </div>

            </section>

        </div>
    </>
);
