import React from 'react';
import ReactDOM from 'react-dom/client';
import { DropdownGrid } from '../../dropdowngrid';

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

            <span>DropdownGrid Flat</span>
            <span>DropdownGrid Flat RTL</span>

            <div>
                <DropdownGrid fillMode="flat" placeholder="DropdownGrid..." />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="flat" placeholder="DropdownGrid..." />
            </div>

            <div>
                <DropdownGrid fillMode="flat" value="Normal" />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="flat" value="Normal" />
            </div>

            <div>
                <DropdownGrid fillMode="flat" value="Hover" hover />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="flat" value="Hover" hover />
            </div>

            <div>
                <DropdownGrid fillMode="flat" value="Focus" focus />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="flat" value="Focus" focus />
            </div>

            <div>
                <DropdownGrid fillMode="flat" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="flat" value="Disabled" disabled />
            </div>

            <div>
                <DropdownGrid fillMode="flat" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="flat" value="Invalid" invalid />
            </div>

            <div>
                <DropdownGrid fillMode="flat" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="flat" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DropdownGrid fillMode="flat" value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="flat" value="Loading..." loading />
            </div>

        </div>
    </>
);
