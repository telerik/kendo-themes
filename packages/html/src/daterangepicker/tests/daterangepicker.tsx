import React from 'react';
import ReactDOM from 'react-dom/client';
import { DateRangePicker } from '../../daterangepicker';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>DateRangePicker</span>
            <span>DateRangePicker RTL</span>

            <div>
                <DateRangePicker />
            </div>
            <div dir="rtl">
                <DateRangePicker />
            </div>

            <span>DateRangePicker with Swap Button</span>
            <span>DateRangePicker with Swap Button RTL</span>
            <div>
                <DateRangePicker swapButton />
            </div>
            <div dir="rtl">
                <DateRangePicker swapButton />
            </div>

            <span>DateRangePicker Disabled</span>
            <span>DateRangePicker Disabled RTL</span>
            <div>
                <DateRangePicker disabled />
            </div>
            <div dir="rtl">
                <DateRangePicker disabled />
            </div>

            <span>DateRangePicker Flat</span>
            <span>DateRangePicker Flat RTL</span>
            <div>
                <DateRangePicker fillMode="flat" />
            </div>
            <div dir="rtl">
                <DateRangePicker fillMode="flat" />
            </div>

            <span>DateRangePicker Outline</span>
            <span>DateRangePicker Outline RTL</span>
            <div>
                <DateRangePicker fillMode="outline" />
            </div>
            <div dir="rtl">
                <DateRangePicker fillMode="outline" />
            </div>
        </div>
    </>
);
