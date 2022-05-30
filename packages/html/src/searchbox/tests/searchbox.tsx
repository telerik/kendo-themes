import React from 'react';
import ReactDOM from 'react-dom/client';
import { Searchbox } from '../../searchbox';

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
            <span>Searchbox</span>
            <span>Searchbox RTL</span>

            <div>
                <Searchbox placeholder="Searchbox..." />
            </div>
            <div dir="rtl">
                <Searchbox placeholder="Searchbox..." />
            </div>

            <div>
                <Searchbox value="Normal" />
            </div>
            <div dir="rtl">
                <Searchbox value="Normal" />
            </div>

            <div>
                <Searchbox value="Hover" hover />
            </div>
            <div dir="rtl">
                <Searchbox value="Hover" hover />
            </div>

            <div>
                <Searchbox value="Focus" focus />
            </div>
            <div dir="rtl">
                <Searchbox value="Focus" focus />
            </div>

            <div>
                <Searchbox value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <Searchbox value="Disabled" disabled />
            </div>

            <div>
                <Searchbox value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <Searchbox value="Invalid" invalid />
            </div>

            <div>
                <Searchbox value="Invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <Searchbox value="Invalid focus" invalid focus />
            </div>

            <div>
                <Searchbox value="Loading" loading />
            </div>
            <div dir="rtl">
                <Searchbox value="Loading" loading />
            </div>

        </div>
    </>
);
