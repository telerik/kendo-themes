import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .example {
        width: 100%;
        min-height: 200px;
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span></span>
            <span className="col">Dark</span>
            <span className="col">Light</span>


            <span>Panel</span>
            <span className="example">
                <div className="k-loader-container k-loader-container-lg k-loader-top">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-primary k-loader-lg">
                            <div className="k-loader-canvas">
                                <span className="k-loader-segment"></span>
                                <span className="k-loader-segment"></span>
                            </div>
                        </div>
                        <div className="k-loader-container-label !k-text-primary">Loading...</div>
                    </div>
                </div>
            </span>

            <span className="example">
                <div className="k-loader-container k-loader-container-lg k-loader-top">
                    <div className="k-loader-container-overlay k-overlay-light"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-primary k-loader-lg">
                            <div className="k-loader-canvas">
                                <span className="k-loader-segment"></span>
                                <span className="k-loader-segment"></span>
                            </div>
                        </div>
                        <div className="k-loader-container-label !k-text-primary">Loading...</div>
                    </div>
                </div>
            </span>

            <span>No Panel</span>
            <span className="example">
                <div className="k-loader-container k-loader-container-lg k-loader-top">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner">
                        <div className="k-loader k-loader-pulsing-2 k-loader-primary k-loader-lg">
                            <div className="k-loader-canvas">
                                <span className="k-loader-segment"></span>
                                <span className="k-loader-segment"></span>
                            </div>
                        </div>
                        <div className="k-loader-container-label !k-text-primary">Loading...</div>
                    </div>
                </div>
            </span>

            <span className="example">
                <div className="k-loader-container k-loader-container-lg k-loader-top">
                    <div className="k-loader-container-overlay k-overlay-light"></div>
                    <div className="k-loader-container-inner">
                        <div className="k-loader k-loader-pulsing-2 k-loader-primary k-loader-lg">
                            <div className="k-loader-canvas">
                                <span className="k-loader-segment"></span>
                                <span className="k-loader-segment"></span>
                            </div>
                        </div>
                        <div className="k-loader-container-label !k-text-primary">Loading...</div>
                    </div>
                </div>
            </span>

        </div>
    </>
);
