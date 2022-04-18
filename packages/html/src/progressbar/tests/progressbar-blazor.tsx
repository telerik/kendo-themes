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
            <div className="k-widget k-progressbar k-progressbar-horizontal" style={{ "--kendo-progressbar-progress": "5" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-start">
                    <span className="k-progress-status">5%</span>
                </span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-start">
                        <span className="k-progress-status">5%</span>
                    </span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal" style={{ "--kendo-progressbar-progress": "5" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-start">
                    <span className="k-progress-status">5%</span>
                </span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-start">
                        <span className="k-progress-status">5%</span>
                    </span>
                </div>
            </div>

            <span>Partial center</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal" style={{ "--kendo-progressbar-progress": "50" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-center">
                    <span className="k-progress-status">50%</span>
                </span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-center">
                        <span className="k-progress-status">50%</span>
                    </span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal" style={{ "--kendo-progressbar-progress": "50" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-center">
                    <span className="k-progress-status">50%</span>
                </span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-center">
                        <span className="k-progress-status">50%</span>
                    </span>
                </div>
            </div>

            <span>Partial end</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal" style={{ "--kendo-progressbar-progress": "95" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">95%</span>
                </span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-end">
                        <span className="k-progress-status">95%</span>
                    </span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal" style={{ "--kendo-progressbar-progress": "95" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">95%</span>
                </span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-end">
                        <span className="k-progress-status">95%</span>
                    </span>
                </div>
            </div>

            <span>100% start</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal" style={{ "--kendo-progressbar-progress": "100" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-start">
                    <span className="k-progress-status">100%</span>
                </span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-start">
                        <span className="k-progress-status">100%</span>
                    </span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal" style={{ "--kendo-progressbar-progress": "100" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-start">
                    <span className="k-progress-status">100%</span>
                </span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-start">
                        <span className="k-progress-status">100%</span>
                    </span>
                </div>
            </div>

            <span>100% center</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal" style={{ "--kendo-progressbar-progress": "100" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-center">
                    <span className="k-progress-status">100%</span>
                </span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-center">
                        <span className="k-progress-status">100%</span>
                    </span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal" style={{ "--kendo-progressbar-progress": "100" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-center">
                    <span className="k-progress-status">100%</span>
                </span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-center">
                        <span className="k-progress-status">100%</span>
                    </span>
                </div>
            </div>

            <span>100% end</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal" style={{ "--kendo-progressbar-progress": "100" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">100%</span>
                </span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-end">
                        <span className="k-progress-status">100%</span>
                    </span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal" style={{ "--kendo-progressbar-progress": "100" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">100%</span>
                </span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-end">
                        <span className="k-progress-status">100%</span>
                    </span>
                </div>
            </div>
            <span>No Label</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal" style={{ "--kendo-progressbar-progress": "50" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-end"></span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-end"></span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal" style={{ "--kendo-progressbar-progress": "50" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-end"></span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-end"></span>
                </div>
            </div>

            <span>Thin style</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal" style={{ height: "2px", "--kendo-progressbar-progress": "50" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-end"></span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-end"></span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal" style={{ height: "2px", "--kendo-progressbar-progress": "50" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-end"></span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-end"></span>
                </div>
            </div>

            <span>Thick style</span>
            <div className="k-widget k-progressbar k-progressbar-horizontal" style={{ height: '50px', "--kendo-progressbar-progress": "50" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">50%</span>
                </span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-end">
                        <span className="k-progress-status">50%</span>
                    </span>
                </div>
            </div>
            <div dir="rtl" className="k-widget k-progressbar k-progressbar-horizontal" style={{ height: '50px', "--kendo-progressbar-progress": "50" } as React.CSSProperties}>
                <span className="k-progress-status-wrap k-progress-end">
                    <span className="k-progress-status">50%</span>
                </span>
                <div className="k-state-selected">
                    <span className="k-progress-status-wrap k-progress-end">
                        <span className="k-progress-status">50%</span>
                    </span>
                </div>
            </div>

        </div>
    </>
);
