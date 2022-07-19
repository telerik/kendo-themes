import React from 'react';
import ReactDOM from 'react-dom/client';
import { Combobox } from '../../combobox';

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

            <span>ComboBox Flat</span>
            <span>ComboBox Flat RTL</span>

            <div>
                <Combobox fillMode="flat" placeholder="ComboBox..." />
            </div>
            <div dir="rtl">
                <Combobox fillMode="flat" placeholder="ComboBox..." />
            </div>

            <div>
                <Combobox fillMode="flat" value="Normal" />
            </div>
            <div dir="rtl">
                <Combobox fillMode="flat" value="Normal" />
            </div>

            <div>
                <Combobox fillMode="flat" value="Hover" hover />
            </div>
            <div dir="rtl">
                <Combobox fillMode="flat" value="Hover" hover />
            </div>

            <div>
                <Combobox fillMode="flat" value="Focus" focus hoverButton />
            </div>
            <div dir="rtl">
                <Combobox fillMode="flat" value="Focus" focus hoverButton />
            </div>

            <div>
                <Combobox fillMode="flat" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <Combobox fillMode="flat" value="Disabled" disabled />
            </div>

            <div>
                <Combobox fillMode="flat" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <Combobox fillMode="flat" value="Invalid" invalid />
            </div>

            <div>
                <Combobox fillMode="flat" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <Combobox fillMode="flat" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <Combobox fillMode="flat" value="Loading..." loading />
            </div>
            <div dir="rtl">
                <Combobox fillMode="flat" value="Loading..." loading />
            </div>

        </div>
    </>
);
