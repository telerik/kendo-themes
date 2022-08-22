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

    .grid hr {
        width: 100%;
        grid-column: 1 / -1;
        visibility: hidden;
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

                <span>Reverse start</span>
                <div className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-reverse">
                    <span className="k-progress-status-wrap k-progress-start">
                        <span className="k-progress-status">95%</span>
                    </span>
                    <div className="k-selected" style={{ width: "95%" }} >
                        <span className="k-progress-status-wrap k-progress-start" style={{ width: "105.263%" }} >
                            <span className="k-progress-status">95%</span>
                        </span>
                    </div>
                </div>
                <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-reverse">
                    <span className="k-progress-status-wrap k-progress-start">
                        <span className="k-progress-status">95%</span>
                    </span>
                    <div className="k-selected" style={{ width: "95%" }} >
                        <span className="k-progress-status-wrap k-progress-start" style={{ width: "105.263%" }} >
                            <span className="k-progress-status">95%</span>
                        </span>
                    </div>
                </div>

                <span>Reverse center</span>
                <div className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-reverse">
                    <span className="k-progress-status-wrap k-progress-center">
                        <span className="k-progress-status">50%</span>
                    </span>
                    <div className="k-selected" style={{ width: "50%" }} >
                        <span className="k-progress-status-wrap k-progress-center" style={{ width: "200%" }} >
                            <span className="k-progress-status">50%</span>
                        </span>
                    </div>
                </div>
                <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-reverse">
                    <span className="k-progress-status-wrap k-progress-center">
                        <span className="k-progress-status">50%</span>
                    </span>
                    <div className="k-selected" style={{ width: "50%" }} >
                        <span className="k-progress-status-wrap k-progress-center" style={{ width: "200%" }} >
                            <span className="k-progress-status">50%</span>
                        </span>
                    </div>
                </div>

                <span>Reverse end</span>
                <div className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-reverse">
                    <span className="k-progress-status-wrap k-progress-end">
                        <span className="k-progress-status">5%</span>
                    </span>
                    <div className="k-selected" style={{ width: "5%" }} >
                        <span className="k-progress-status-wrap k-progress-end" style={{ width: "2000%" }} >
                            <span className="k-progress-status">5%</span>
                        </span>
                    </div>
                </div>
                <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-reverse">
                    <span className="k-progress-status-wrap k-progress-end">
                        <span className="k-progress-status">5%</span>
                    </span>
                    <div className="k-selected" style={{ width: "5%" }} >
                        <span className="k-progress-status-wrap k-progress-end" style={{ width: "2000%" }} >
                            <span className="k-progress-status">5%</span>
                        </span>
                    </div>
                </div>

                <span>R 100% start</span>
                <div className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-reverse">
                    <span className="k-progress-status-wrap k-progress-start">
                        <span className="k-progress-status">100%</span>
                    </span>
                    <div className="k-selected" style={{ width: '100%' }} >
                        <span className="k-progress-status-wrap k-progress-start" style={{ width: '100%' }} >
                            <span className="k-progress-status">100%</span>
                        </span>
                    </div>
                </div>
                <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-reverse">
                    <span className="k-progress-status-wrap k-progress-start">
                        <span className="k-progress-status">100%</span>
                    </span>
                    <div className="k-selected" style={{ width: '100%' }} >
                        <span className="k-progress-status-wrap k-progress-start" style={{ width: '100%' }} >
                            <span className="k-progress-status">100%</span>
                        </span>
                    </div>
                </div>

                <span>R 100% center</span>
                <div className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-reverse">
                    <span className="k-progress-status-wrap k-progress-center">
                        <span className="k-progress-status">100%</span>
                    </span>
                    <div className="k-selected" style={{ width: '100%' }} >
                        <span className="k-progress-status-wrap k-progress-center" style={{ width: '100%' }} >
                            <span className="k-progress-status">100%</span>
                        </span>
                    </div>
                </div>
                <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-reverse">
                    <span className="k-progress-status-wrap k-progress-center">
                        <span className="k-progress-status">100%</span>
                    </span>
                    <div className="k-selected" style={{ width: '100%' }} >
                        <span className="k-progress-status-wrap k-progress-center" style={{ width: '100%' }} >
                            <span className="k-progress-status">100%</span>
                        </span>
                    </div>
                </div>

                <span>R 100% end</span>
                <div className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-reverse">
                    <span className="k-progress-status-wrap k-progress-end">
                        <span className="k-progress-status">100%</span>
                    </span>
                    <div className="k-selected" style={{ width: '100%' }} >
                        <span className="k-progress-status-wrap k-progress-end" style={{ width: '100%' }} >
                            <span className="k-progress-status">100%</span>
                        </span>
                    </div>
                </div>
                <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal k-progressbar-reverse">
                    <span className="k-progress-status-wrap k-progress-end">
                        <span className="k-progress-status">100%</span>
                    </span>
                    <div className="k-selected" style={{ width: '100%' }} >
                        <span className="k-progress-status-wrap k-progress-end" style={{ width: '100%' }} >
                            <span className="k-progress-status">100%</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>
);
