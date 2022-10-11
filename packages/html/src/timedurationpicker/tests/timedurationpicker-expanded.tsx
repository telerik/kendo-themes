import React from 'react';
import ReactDOM from 'react-dom/client';
import { TimeDurationPicker } from '../../timedurationpicker';
import { TimeSelector, TimeSelectorFastSelection } from '../../time-selector';
import { Button } from '../../button';
import { ActionButtons } from '../../action-buttons';

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
            <span>TimeDurationPicker</span>
            <span>TimeDurationPicker RTL</span>

            <div>
                <TimeDurationPicker placeholder="02 days : 01 hours : 30 mins" />
            </div>
            <div dir="rtl">
                <TimeDurationPicker placeholder="02 days : 01 hours : 30 mins" />
            </div>


            <div className="k-animation-container">
                <div className="k-popup k-reset">
                    <TimeSelector columns={[ "dd", "HH", "mm" ]} focusedColumn="HH" fastSelection={(<TimeSelectorFastSelection/>)}/>
                    <ActionButtons alignment="stretched" className="k-timeduration-footer">
                        <Button className="k-time-cancel">Cancel</Button>
                        <Button themeColor="primary" className="k-time-accept">Set</Button>
                    </ActionButtons>
                </div>
            </div>
            <div className="k-animation-container">
                <div className="k-popup k-reset k-rtl">
                    <TimeSelector columns={[ "dd", "HH", "mm" ]} focusedColumn="HH" fastSelection={(<TimeSelectorFastSelection/>)}/>
                    <ActionButtons alignment="stretched" className="k-timeduration-footer">
                        <Button className="k-time-cancel">Cancel</Button>
                        <Button themeColor="primary" className="k-time-accept">Set</Button>
                    </ActionButtons>
                </div>
            </div>

        </div>

    </>
);
