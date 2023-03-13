import React from 'react';
import ReactDOM from 'react-dom/client';
import { TimeDurationPicker } from '../../timedurationpicker';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        max-width: 660px;
    }
`;

root.render(
    <>
        <style>{style}</style>

        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>TimeDurationPicker</span>
            <span>TimeDurationPicker RTL</span>

            <div>
                <TimeDurationPicker placeholder="02 days : 01 hours : 30 mins" opened />
            </div>
            <div dir="rtl">
                <TimeDurationPicker placeholder="02 days : 01 hours : 30 mins" opened />
            </div>
        </div>

    </>
);
