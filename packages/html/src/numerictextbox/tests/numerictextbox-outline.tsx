import React from 'react';
import ReactDOM from 'react-dom/client';
import { NumericTextbox } from '../../numerictextbox';

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
            <span>NumericTextBox Outline</span>
            <span>NumericTextBox Outline RTL</span>

            <div>
                <NumericTextbox fillMode="outline" placeholder="NumericTextBox..." />
            </div>
            <div dir="rtl">
                <NumericTextbox fillMode="outline" placeholder="NumericTextBox..." />
            </div>

            <div>
                <NumericTextbox fillMode="outline" value="Normal" />
            </div>
            <div dir="rtl">
                <NumericTextbox fillMode="outline" value="Normal" />
            </div>

            <div>
                <NumericTextbox fillMode="outline" value="Hover" hover />
            </div>
            <div dir="rtl">
                <NumericTextbox fillMode="outline" value="Hover" hover />
            </div>

            <div>
                <NumericTextbox fillMode="outline" value="Focus" focus />
            </div>
            <div dir="rtl">
                <NumericTextbox fillMode="outline" value="Focus" focus />
            </div>

            <div>
                <NumericTextbox fillMode="outline" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <NumericTextbox fillMode="outline" value="Disabled" disabled />
            </div>

            <div>
                <NumericTextbox fillMode="outline" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <NumericTextbox fillMode="outline" value="Invalid" invalid />
            </div>

            <div>
                <NumericTextbox fillMode="outline" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <NumericTextbox fillMode="outline" value="Invalid Focus" invalid focus />
            </div>
        </div>
    </>
);
