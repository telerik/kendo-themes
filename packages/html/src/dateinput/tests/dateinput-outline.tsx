import React from 'react';
import ReactDOM from 'react-dom/client';
import { DateInput } from '../../dateinput';

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

            <span>DateInput Outline</span>
            <span>DateInput Outline RTL</span>

            <div>
                <DateInput fillMode="outline" placeholder="DateInput..." />
            </div>
            <div dir="rtl">
                <DateInput fillMode="outline" placeholder="DateInput..." />
            </div>

            <div>
                <DateInput fillMode="outline" value="Normal" />
            </div>
            <div dir="rtl">
                <DateInput fillMode="outline" value="Normal" />
            </div>

            <div>
                <DateInput fillMode="outline" value="Hover" hover />
            </div>
            <div dir="rtl">
                <DateInput fillMode="outline" value="Hover" hover />
            </div>

            <div>
                <DateInput fillMode="outline" value="Focus" focus />
            </div>
            <div dir="rtl">
                <DateInput fillMode="outline" value="Focus" focus />
            </div>

            <div>
                <DateInput fillMode="outline" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DateInput fillMode="outline" value="Disabled" disabled />
            </div>

            <div>
                <DateInput fillMode="outline" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DateInput fillMode="outline" value="Invalid" invalid />
            </div>

            <div>
                <DateInput fillMode="outline" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DateInput fillMode="outline" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DateInput fillMode="outline" value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DateInput fillMode="outline" value="Loading..." loading />
            </div>

        </div>
    </>
);
