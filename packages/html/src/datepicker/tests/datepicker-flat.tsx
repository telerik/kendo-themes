import React from 'react';
import ReactDOM from 'react-dom/client';
import { DatePicker } from '../../datepicker';

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

            <span>DatePicker Flat</span>
            <span>DatePicker Flat RTL</span>

            <div>
                <DatePicker fillMode="flat" placeholder="DatePicker..." />
            </div>
            <div dir="rtl">
                <DatePicker fillMode="flat" placeholder="DatePicker..." />
            </div>

            <div>
                <DatePicker fillMode="flat" value="Normal" />
            </div>
            <div dir="rtl">
                <DatePicker fillMode="flat" value="Normal" />
            </div>

            <div>
                <DatePicker fillMode="flat" value="Hover" hover />
            </div>
            <div dir="rtl">
                <DatePicker fillMode="flat" value="Hover" hover />
            </div>

            <div>
                <DatePicker fillMode="flat" value="Focus" focus />
            </div>
            <div dir="rtl">
                <DatePicker fillMode="flat" value="Focus" focus />
            </div>

            <div>
                <DatePicker fillMode="flat" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DatePicker fillMode="flat" value="Disabled" disabled />
            </div>

            <div>
                <DatePicker fillMode="flat" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DatePicker fillMode="flat" value="Invalid" invalid />
            </div>

            <div>
                <DatePicker fillMode="flat" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DatePicker fillMode="flat" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DatePicker fillMode="flat" value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DatePicker fillMode="flat" value="Loading..." loading />
            </div>

        </div>
    </>
);
