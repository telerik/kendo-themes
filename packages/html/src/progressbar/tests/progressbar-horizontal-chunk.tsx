import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        grid-template-columns: auto 1fr 1fr;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>LTR</span>
            <span>RTL</span>

            <span>Chunk</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal">
                <ul className="k-reset">
                    <li className="k-item k-first k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item" style={{ width: "20%" }} ></li>
                    <li className="k-item" style={{ width: "20%" }} ></li>
                    <li className="k-item k-last" style={{ width: "20%" }} ></li>
                </ul>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal">
                <ul className="k-reset">
                    <li className="k-item k-first k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item" style={{ width: "20%" }} ></li>
                    <li className="k-item" style={{ width: "20%" }} ></li>
                    <li className="k-item k-last" style={{ width: "20%" }} ></li>
                </ul>
            </div>

            <span>Chunk 100%</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal">
                <ul className="k-reset">
                    <li className="k-item k-first k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected k-last" style={{ width: "20%" }} ></li>
                </ul>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal">
                <ul className="k-reset">
                    <li className="k-item k-first k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected k-last" style={{ width: "20%" }} ></li>
                </ul>
            </div>

            <span>Chunk reverse</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-reverse">
                <ul className="k-reset">
                    <li className="k-item k-first" style={{ width: "20%" }} ></li>
                    <li className="k-item" style={{ width: "20%" }} ></li>
                    <li className="k-item" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected k-last" style={{ width: "20%" }} ></li>
                </ul>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-reverse">
                <ul className="k-reset">
                    <li className="k-item k-first" style={{ width: "20%" }} ></li>
                    <li className="k-item" style={{ width: "20%" }} ></li>
                    <li className="k-item" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected k-last" style={{ width: "20%" }} ></li>
                </ul>
            </div>

            <span>Chunk 100% reverse</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-reverse">
                <ul className="k-reset">
                    <li className="k-item k-first k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected k-last" style={{ width: "20%" }} ></li>
                </ul>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-reverse">
                <ul className="k-reset">
                    <li className="k-item k-first k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ width: "20%" }} ></li>
                    <li className="k-item k-selected k-last" style={{ width: "20%" }} ></li>
                </ul>
            </div>

        </div>
    </>
);
