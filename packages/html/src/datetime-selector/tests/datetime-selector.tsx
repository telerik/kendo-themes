import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Calendar } from '../../calendar';
import { TimeSelector, TimeSelectorHeader } from '../../time-selector';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-animation-container {
        width: min-content;
        max-width: 100%;
        position: relative;
        overflow: visible;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Date tab</span>
            <span>Time tab</span>

            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-reset k-datetime-container">
                        <div className="k-datetime-wrap k-date-tab">
                            <div className="k-datetime-buttongroup">
                                <div className="k-button-group k-button-group-stretched">
                                    <Button className="k-group-start" selected>Date</Button>
                                    <Button className="k-group-end">Time</Button>
                                </div>
                            </div>
                            <div className="k-datetime-selector">
                                <div className="k-datetime-calendar-wrap">

                                    <Calendar calendarView="month" showOtherMonth></Calendar>

                                </div>
                                <div className="k-datetime-time-wrap">
                                </div>
                            </div>

                            <ActionButtons className="k-datetime-footer" alignment="stretched">
                                <Button className="k-time-cancel">Cancel</Button>
                                <Button themeColor="primary" className="k-time-accept">Set</Button>
                            </ActionButtons>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-reset k-datetime-container">
                        <div className="k-datetime-wrap k-time-tab">
                            <div className="k-datetime-buttongroup">
                                <div className="k-button-group k-button-group-stretched">
                                    <Button className="k-group-start">Date</Button>
                                    <Button className="k-group-end" selected>Time</Button>
                                </div>
                            </div>
                            <div className="k-datetime-selector">
                                <div className="k-datetime-calendar-wrap">
                                </div>
                                <div className="k-datetime-time-wrap">
                                    <TimeSelector columns={[ "HH", "mm", "ss", "tt" ]} focusedColumn="mm" header={(
                                        <TimeSelectorHeader title="10:00:00 AM">
                                            <Button fillMode="flat" className="k-time-now">Now</Button>
                                        </TimeSelectorHeader>
                                    )}/>
                                </div>
                            </div>
                            <ActionButtons className="k-datetime-footer" alignment="stretched">
                                <Button className="k-time-cancel">Cancel</Button>
                                <Button themeColor="primary" className="k-time-accept">Set</Button>
                            </ActionButtons>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
