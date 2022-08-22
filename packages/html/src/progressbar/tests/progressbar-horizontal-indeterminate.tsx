import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-progressbar-indeterminate,
    .k-progressbar-indeterminate::before,
    .k-progressbar-indeterminate::after {
        /* Comment if you need to preview the indeterminate animation */
        animation: none !important;
    }

    .subgrid-horizontal {
        display: grid;
        grid-template-columns: auto 1fr 1fr;
        grid-gap: 20px;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">
            <div className="subgrid-horizontal">
                <span></span>
                <span>LTR</span>
                <span>RTL</span>

                <span>Indeterminate</span>
                <div className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-indeterminate">
                    <span className="k-progress-status-wrap">
                        <span className="k-progress-status">0</span>
                    </span>
                </div>
                <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-indeterminate">
                    <span className="k-progress-status-wrap">
                        <span className="k-progress-status">0</span>
                    </span>
                </div>

                <span>Indeterminate Angular</span>
                <div className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-indeterminate">
                    <span className="k-progress-status-wrap k-progress-end">
                        <span className="k-progress-status">75</span>
                    </span>
                    <div className="k-selected" style={{ width: "75%", height: "100%" }} >
                        <span className="k-progress-status-wrap k-progress-end" style={{ width: "133.333%", height: "100%" }} >
                            <span className="k-progress-status">75</span>
                        </span>
                    </div>
                </div>
                <div className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-indeterminate" dir="rtl">
                    <span className="k-progress-status-wrap k-progress-end">
                        <span className="k-progress-status">75</span>
                    </span>
                    <div className="k-selected" style={{ width: "75%", height: "100%" }} >
                        <span className="k-progress-status-wrap k-progress-end" style={{ width: "133.333%", height: "100%" }} >
                            <span className="k-progress-status">75</span>
                        </span>
                    </div>
                </div>

                <span>Chunk Indeterminate</span>
                <div className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-indeterminate">
                    <ul className="k-reset">
                        <li className="k-item k-first k-selected" style={{ width: "10%" }} ></li>
                        <li className="k-item k-selected" style={{ width: "10%" }} ></li>
                        <li className="k-item k-selected" style={{ width: "10%" }} ></li>
                        <li className="k-item k-selected" style={{ width: "10%" }} ></li>
                        <li className="k-item k-selected" style={{ width: "10%" }} ></li>
                        <li className="k-item" style={{ width: "10%" }} ></li>
                        <li className="k-item" style={{ width: "10%" }} ></li>
                        <li className="k-item" style={{ width: "10%" }} ></li>
                        <li className="k-item" style={{ width: "10%" }} ></li>
                        <li className="k-item k-last" style={{ width: "10%" }} ></li>
                    </ul>
                </div>
                <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-indeterminate">
                    <ul className="k-reset">
                        <li className="k-item k-first k-selected" style={{ width: "10%" }} ></li>
                        <li className="k-item k-selected" style={{ width: "10%" }} ></li>
                        <li className="k-item k-selected" style={{ width: "10%" }} ></li>
                        <li className="k-item k-selected" style={{ width: "10%" }} ></li>
                        <li className="k-item k-selected" style={{ width: "10%" }} ></li>
                        <li className="k-item" style={{ width: "10%" }} ></li>
                        <li className="k-item" style={{ width: "10%" }} ></li>
                        <li className="k-item" style={{ width: "10%" }} ></li>
                        <li className="k-item" style={{ width: "10%" }} ></li>
                        <li className="k-item k-last" style={{ width: "10%" }} ></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
);
