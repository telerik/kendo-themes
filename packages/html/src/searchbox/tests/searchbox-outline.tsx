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
            <span>Searchbox Outline</span>
            <span>Searchbox Outline RTL</span>

            <div>
                <Searchbox fillMode="outline" placeholder="Searchbox..." />
            </div>
            <div dir="rtl">
                <Searchbox fillMode="outline" placeholder="Searchbox..." />
            </div>

            <div>
                <Searchbox fillMode="outline" value="Normal" />
            </div>
            <div dir="rtl">
                <Searchbox fillMode="outline" value="Normal" />
            </div>

            <div>
                <Searchbox fillMode="outline" value="Hover" hover />
            </div>
            <div dir="rtl">
                <Searchbox fillMode="outline" value="Hover" hover />
            </div>

            <div>
                <Searchbox fillMode="outline" value="Focus" focus />
            </div>
            <div dir="rtl">
                <Searchbox fillMode="outline" value="Focus" focus />
            </div>

            <div>
                <Searchbox fillMode="outline" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <Searchbox fillMode="outline" value="Disabled" disabled />
            </div>

            <div>
                <Searchbox fillMode="outline" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <Searchbox fillMode="outline" value="Invalid" invalid />
            </div>

            <div>
                <Searchbox fillMode="outline" value="Invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <Searchbox fillMode="outline" value="Invalid focus" invalid focus />
            </div>

            <div>
                <Searchbox fillMode="outline" value="Loading" loading />
            </div>
            <div dir="rtl">
                <Searchbox fillMode="outline" value="Loading" loading />
            </div>

        </div>
    </>
);
