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

            <span>Partial start</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal">
                <span className="k-progress-status-wrap k-progress-start">
                    <span className="k-progress-status">5%</span>
                </span>
                <div className="k-selected" style={{ width: "5%" }} >
                    <span className="k-progress-status-wrap k-progress-start" style={{ width: "2000%" }} >
                        <span className="k-progress-status">5%</span>
                    </span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal">
                <span className="k-progress-status-wrap k-progress-start">
                    <span className="k-progress-status">5%</span>
                </span>
                <div className="k-selected" style={{ width: "5%" }} >
                    <span className="k-progress-status-wrap k-progress-start" style={{ width: "2000%" }} >
                        <span className="k-progress-status">5%</span>
                    </span>
                </div>
            </div>

            <span>Partial center</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal">
                <span className="k-progress-status-wrap k-progress-center">
                    <span className="k-progress-status">50%</span>
                </span>
                <div className="k-selected" style={{ width: "50%" }} >
                    <span className="k-progress-status-wrap k-progress-center" style={{ width: "200%" }} >
                        <span className="k-progress-status">50%</span>
                    </span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal">
                <span className="k-progress-status-wrap k-progress-center">
                    <span className="k-progress-status">50%</span>
                </span>
                <div className="k-selected" style={{ width: "50%" }} >
                    <span className="k-progress-status-wrap k-progress-center" style={{ width: "200%" }} >
                        <span className="k-progress-status">50%</span>
                    </span>
                </div>
            </div>

            <span>Partial end</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal">
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">95%</span>
                </span>
                <div className="k-selected" style={{ width: "95%" }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ width: "105.263%" }} >
                        <span className="k-progress-status">95%</span>
                    </span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal">
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">95%</span>
                </span>
                <div className="k-selected" style={{ width: "95%" }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ width: "105.263%" }} >
                        <span className="k-progress-status">95%</span>
                    </span>
                </div>
            </div>

            <span>100% start</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal">
                <span className="k-progress-status-wrap k-progress-start">
                    <span className="k-progress-status">100%</span>
                </span>
                <div className="k-selected" style={{ width: '100%' }} >
                    <span className="k-progress-status-wrap k-progress-start" style={{ width: '100%' }} >
                        <span className="k-progress-status">100%</span>
                    </span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal">
                <span className="k-progress-status-wrap k-progress-start">
                    <span className="k-progress-status">100%</span>
                </span>
                <div className="k-selected" style={{ width: '100%' }} >
                    <span className="k-progress-status-wrap k-progress-start" style={{ width: '100%' }} >
                        <span className="k-progress-status">100%</span>
                    </span>
                </div>
            </div>

            <span>100% center</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal">
                <span className="k-progress-status-wrap k-progress-center">
                    <span className="k-progress-status">100%</span>
                </span>
                <div className="k-selected" style={{ width: '100%' }} >
                    <span className="k-progress-status-wrap k-progress-center" style={{ width: '100%' }} >
                        <span className="k-progress-status">100%</span>
                    </span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal">
                <span className="k-progress-status-wrap k-progress-center">
                    <span className="k-progress-status">100%</span>
                </span>
                <div className="k-selected" style={{ width: '100%' }} >
                    <span className="k-progress-status-wrap k-progress-center" style={{ width: '100%' }} >
                        <span className="k-progress-status">100%</span>
                    </span>
                </div>
            </div>

            <span>100% end</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal">
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">100%</span>
                </span>
                <div className="k-selected" style={{ width: '100%' }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ width: '100%' }} >
                        <span className="k-progress-status">100%</span>
                    </span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal">
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">100%</span>
                </span>
                <div className="k-selected" style={{ width: '100%' }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ width: '100%' }} >
                        <span className="k-progress-status">100%</span>
                    </span>
                </div>
            </div>
            <span>No Label</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal">
                <span className="k-progress-status-wrap k-progress-end"></span>
                <div className="k-selected" style={{ width: "50%" }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ width: "200%" }} ></span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal">
                <span className="k-progress-status-wrap k-progress-end"></span>
                <div className="k-selected" style={{ width: "50%" }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ width: "200%" }} ></span>
                </div>
            </div>

            <span>Thin style</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal" style={{ height: "2px" }} >
                <span className="k-progress-status-wrap k-progress-end"></span>
                <div className="k-selected" style={{ width: "50%" }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ width: "200%" }} ></span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal" style={{ height: "2px" }} >
                <span className="k-progress-status-wrap k-progress-end"></span>
                <div className="k-selected" style={{ width: "50%" }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ width: "200%" }} ></span>
                </div>
            </div>

            <span>Thick style</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal" style={{ height: '50px' }} >
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">50%</span>
                </span>
                <div className="k-selected" style={{ width: "50%" }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ width: "200%" }} >
                        <span className="k-progress-status">50%</span>
                    </span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal" style={{ height: '50px' }} >
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">50%</span>
                </span>
                <div className="k-selected" style={{ width: "50%" }} >
                    <span className="k-progress-status-wrap k-progress-end" style={{ width: "200%" }} >
                        <span className="k-progress-status">50%</span>
                    </span>
                </div>
            </div>

        </div>
    </>
);
