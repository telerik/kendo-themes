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

            <span>DatePicker</span>
            <span>DatePicker RTL</span>

            <div>
                <DatePicker placeholder="DatePicker..." />
            </div>
            <div dir="rtl">
                <DatePicker placeholder="DatePicker..." />
            </div>

            <div>
                <DatePicker value="Normal" />
            </div>
            <div dir="rtl">
                <DatePicker value="Normal" />
            </div>

            <div>
                <DatePicker value="Hover" hover />
            </div>
            <div dir="rtl">
                <DatePicker value="Hover" hover />
            </div>

            <div>
                <DatePicker value="Focus" focus />
            </div>
            <div dir="rtl">
                <DatePicker value="Focus" focus />
            </div>

            <div>
                <DatePicker value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DatePicker value="Disabled" disabled />
            </div>

            <div>
                <DatePicker value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DatePicker value="Invalid" invalid />
            </div>

            <div>
                <DatePicker value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DatePicker value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DatePicker value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DatePicker value="Loading..." loading />
            </div>

        </div>
    </>
);
