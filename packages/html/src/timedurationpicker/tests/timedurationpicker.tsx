import React from 'react';
import ReactDOM from 'react-dom/client';
import { TimeDurationPicker } from '../../timedurationpicker';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>TimeDurationPicker</span>
            <span>TimeDurationPicker RTL</span>

            <div>
                <TimeDurationPicker placeholder="02 days : 01 hours : 30 mins" />
            </div>
            <div dir="rtl">
                <TimeDurationPicker placeholder="02 days : 01 hours : 30 mins" />
            </div>

            <div>
                <TimeDurationPicker value="Normal" />
            </div>
            <div dir="rtl">
                <TimeDurationPicker value="Normal" />
            </div>

            <div>
                <TimeDurationPicker value="Hover" hover />
            </div>
            <div dir="rtl">
                <TimeDurationPicker value="Hover" hover />
            </div>

            <div>
                <TimeDurationPicker value="Focus" focus />
            </div>
            <div dir="rtl">
                <TimeDurationPicker value="Focus" focus />
            </div>

            <div>
                <TimeDurationPicker value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <TimeDurationPicker value="Disabled" disabled />
            </div>

            <div>
                <TimeDurationPicker value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <TimeDurationPicker value="Invalid" invalid />
            </div>

            <div>
                <TimeDurationPicker value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <TimeDurationPicker value="Invalid Focus" invalid focus />
            </div>

            <div>
                <TimeDurationPicker value="Loading..." loading />
            </div>
            <div dir="rtl">
                <TimeDurationPicker value="Loading..." loading />
            </div>

        </div>
    </>
);
