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
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span></span>
            <span className="col">Small</span>
            <span className="col">Medium</span>
            <span className="col">Large</span>


            <span>Top</span>
            <span className="example">
                <div className="k-loader-container k-loader-container-sm k-loader-top">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-primary k-loader-sm">
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
                <div className="k-loader-container k-loader-container-md k-loader-top">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-primary k-loader-md">
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

            <span>End</span>
            <span className="example">
                <div className="k-loader-container k-loader-container-sm k-loader-end">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-primary k-loader-sm">
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
                <div className="k-loader-container k-loader-container-md k-loader-end">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-primary k-loader-md">
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
                <div className="k-loader-container k-loader-container-lg k-loader-end">
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

            <span>Start</span>
            <span className="example">
                <div className="k-loader-container k-loader-container-sm k-loader-start">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-primary k-loader-sm">
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
                <div className="k-loader-container k-loader-container-md k-loader-start">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-primary k-loader-md">
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
                <div className="k-loader-container k-loader-container-lg k-loader-start">
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

        </div>
    </>
);
