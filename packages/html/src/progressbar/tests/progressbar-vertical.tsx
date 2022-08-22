import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        justify-items: center;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-12">

            <span>Partial</span>
            <span>100%</span>
            <span>Chunk</span>
            <span>Ch 100%</span>
            <span>Reversed</span>
            <span>R 100%</span>
            <span>R ch</span>
            <span>R ch 100%</span>
            <span>Indeterminate</span>
            <span>No Label</span>
            <span>Thin style</span>
            <span>Thick style</span>

            <div className="k-widget k-progressbar k-progressbar-vertical">
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">95%</span>
                </span>
                <div className="k-selected" style={{ height: "95%" }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ height: "105.263%" }} >
                        <span className="k-progress-status">95%</span>
                    </span>
                </div>
            </div>
            <div className="k-widget k-progressbar k-progressbar-vertical">
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">100%</span>
                </span>
                <div className="k-selected k-complete" style={{ height: "100%" }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ height: "100%" }} >
                        <span className="k-progress-status">100%</span>
                    </span>
                </div>
            </div>
            <div className="k-widget k-progressbar k-progressbar-vertical">
                <ul className="k-reset">
                    <li className="k-item k-first" style={{ height: "20%" }} ></li>
                    <li className="k-item" style={{ height: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ height: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ height: "20%" }} ></li>
                    <li className="k-item k-last k-selected" style={{ height: "20%" }} ></li>
                </ul>
            </div>
            <div className="k-widget k-progressbar k-progressbar-vertical">
                <ul className="k-reset">
                    <li className="k-item k-selected k-first" style={{ height: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ height: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ height: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ height: "20%" }} ></li>
                    <li className="k-item k-last k-selected" style={{ height: "20%" }} ></li>
                </ul>
            </div>
            <div className="k-widget k-progressbar k-progressbar-vertical k-progressbar-reverse">
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">5%</span>
                </span>
                <div className="k-selected" style={{ height: "5%" }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ height: "2000%" }} >
                        <span className="k-progress-status">5%</span>
                    </span>
                </div>
            </div>
            <div className="k-widget k-progressbar k-progressbar-vertical k-progressbar-reverse">
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">100%</span>
                </span>
                <div className="k-selected k-complete" style={{ height: "100%" }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ height: "100%" }} >
                        <span className="k-progress-status">100%</span>
                    </span>
                </div>
            </div>
            <div className="k-widget k-progressbar k-progressbar-vertical k-progressbar-reverse">
                <ul className="k-reset">
                    <li className="k-item k-first k-selected" style={{ height: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ height: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ height: "20%" }} ></li>
                    <li className="k-item" style={{ height: "20%" }} ></li>
                    <li className="k-item k-last" style={{ height: "20%" }} ></li>
                </ul>
            </div>
            <div className="k-widget k-progressbar k-progressbar-vertical k-progressbar-reverse">
                <ul className="k-reset">
                    <li className="k-item k-first k-selected" style={{ height: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ height: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ height: "20%" }} ></li>
                    <li className="k-item k-selected" style={{ height: "20%" }} ></li>
                    <li className="k-item k-selected k-last" style={{ height: "20%" }} ></li>
                </ul>
            </div>
            <div className="k-widget k-progressbar k-progressbar-vertical k-progressbar-indeterminate">
                <span className="k-progress-status-wrap">
                    <span className="k-progress-status">0</span>
                </span>
            </div>
            <div className="k-widget k-progressbar k-progressbar-vertical">
                <span className="k-progress-status-wrap k-progress-end"></span>
                <div className="k-selected" style={{ height: "50%" }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ height: "200%" }} ></span>
                </div>
            </div>
            <div className="k-widget k-progressbar k-progressbar-vertical" style={{ width: "2px" }} >
                <span className="k-progress-status-wrap k-progress-end"></span>
                <div className="k-selected" style={{ height: "50%" }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ height: "200%" }} ></span>
                </div>
            </div>
            <div className="k-widget k-progressbar k-progressbar-vertical" style={{ width: '50px' }} >
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">50%</span>
                </span>
                <div className="k-selected" style={{ height: "50%" }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ height: "200%" }} >
                        <span className="k-progress-status">50%</span>
                    </span>
                </div>
            </div>

        </div>
    </>
);
