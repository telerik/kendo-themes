import React from 'react';
import ReactDOM from 'react-dom/client';
import { TimePicker } from '../../timepicker';

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

            <span>TimePicker Outline</span>
            <span>TimePicker Outline RTL</span>

            <div>
                <TimePicker fillMode="outline" placeholder="TimePicker..." />
            </div>
            <div dir="rtl">
                <TimePicker fillMode="outline" placeholder="TimePicker..." />
            </div>

            <div>
                <TimePicker fillMode="outline" value="Normal" />
            </div>
            <div dir="rtl">
                <TimePicker fillMode="outline" value="Normal" />
            </div>

            <div>
                <TimePicker fillMode="outline" value="Hover" hover />
            </div>
            <div dir="rtl">
                <TimePicker fillMode="outline" value="Hover" hover />
            </div>

            <div>
                <TimePicker fillMode="outline" value="Focus" focus />
            </div>
            <div dir="rtl">
                <TimePicker fillMode="outline" value="Focus" focus />
            </div>

            <div>
                <TimePicker fillMode="outline" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <TimePicker fillMode="outline" value="Disabled" disabled />
            </div>

            <div>
                <TimePicker fillMode="outline" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <TimePicker fillMode="outline" value="Invalid" invalid />
            </div>

            <div>
                <TimePicker fillMode="outline" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <TimePicker fillMode="outline" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <TimePicker fillMode="outline" value="Loading..." loading />
            </div>
            <div dir="rtl">
                <TimePicker fillMode="outline" value="Loading..." loading />
            </div>

        </div>
    </>
);
