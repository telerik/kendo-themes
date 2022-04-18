import React from 'react';
import ReactDOM from 'react-dom/client';
import { Autocomplete } from '../../autocomplete';

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

            <span>Autocomplete Outline</span>
            <span>Autocomplete Outline RTL</span>

            <div>
                <Autocomplete fillMode="outline" placeholder="Autocomplete..." />
            </div>
            <div dir="rtl">
                <Autocomplete fillMode="outline" placeholder="Autocomplete..." />
            </div>

            <div>
                <Autocomplete fillMode="outline" value="Normal"/>
            </div>
            <div dir="rtl">
                <Autocomplete fillMode="outline" value="Normal" />
            </div>

            <div>
                <Autocomplete fillMode="outline" value="Hover" hover />
            </div>
            <div dir="rtl">
                <Autocomplete fillMode="outline" value="Hover" hover />
            </div>

            <div>
                <Autocomplete fillMode="outline" value="Focus" focus />
            </div>
            <div dir="rtl">
                <Autocomplete fillMode="outline" value="Focus" focus />
            </div>

            <div>
                <Autocomplete fillMode="outline" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <Autocomplete fillMode="outline" value="Disabled" disabled />
            </div>

            <div>
                <Autocomplete fillMode="outline" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <Autocomplete fillMode="outline" value="Invalid" invalid />
            </div>

            <div>
                <Autocomplete fillMode="outline" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <Autocomplete fillMode="outline" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <Autocomplete fillMode="outline" value="Loading..." loading />
            </div>
            <div dir="rtl">
                <Autocomplete fillMode="outline" value="Loading..." loading />
            </div>

        </div>
    </>
);
