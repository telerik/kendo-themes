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
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Primary</span>
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

            <span>Secondary</span>
            <span className="example">
                <div className="k-loader-container k-loader-container-lg k-loader-top">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-secondary k-loader-lg">
                            <div className="k-loader-canvas">
                                <span className="k-loader-segment"></span>
                                <span className="k-loader-segment"></span>
                            </div>
                        </div>
                        <div className="k-loader-container-label !k-text-secondary">Loading...</div>
                    </div>
                </div>
            </span>

            <span>Tertiary</span>
            <span className="example">
                <div className="k-loader-container k-loader-container-lg k-loader-top">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-tertiary k-loader-lg">
                            <div className="k-loader-canvas">
                                <span className="k-loader-segment"></span>
                                <span className="k-loader-segment"></span>
                            </div>
                        </div>
                        <div className="k-loader-container-label !k-text-tertiary">Loading...</div>
                    </div>
                </div>
            </span>

            <span>Info</span>
            <span className="example">
                <div className="k-loader-container k-loader-container-lg k-loader-top">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-info k-loader-lg">
                            <div className="k-loader-canvas">
                                <span className="k-loader-segment"></span>
                                <span className="k-loader-segment"></span>
                            </div>
                        </div>
                        <div className="k-loader-container-label !k-text-info">Loading...</div>
                    </div>
                </div>
            </span>

            <span>Success</span>
            <span className="example">
                <div className="k-loader-container k-loader-container-lg k-loader-top">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-success k-loader-lg">
                            <div className="k-loader-canvas">
                                <span className="k-loader-segment"></span>
                                <span className="k-loader-segment"></span>
                            </div>
                        </div>
                        <div className="k-loader-container-label !k-text-success">Loading...</div>
                    </div>
                </div>
            </span>

            <span>Warning</span>
            <span className="example">
                <div className="k-loader-container k-loader-container-lg k-loader-top">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-warning k-loader-lg">
                            <div className="k-loader-canvas">
                                <span className="k-loader-segment"></span>
                                <span className="k-loader-segment"></span>
                            </div>
                        </div>
                        <div className="k-loader-container-label !k-text-warning">Loading...</div>
                    </div>
                </div>
            </span>

            <span>Error</span>
            <span className="example">
                <div className="k-loader-container k-loader-container-lg k-loader-top">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-error k-loader-lg">
                            <div className="k-loader-canvas">
                                <span className="k-loader-segment"></span>
                                <span className="k-loader-segment"></span>
                            </div>
                        </div>
                        <div className="k-loader-container-label !k-text-error">Loading...</div>
                    </div>
                </div>
            </span>

            <span>Dark</span>
            <span className="example">
                <div className="k-loader-container k-loader-container-lg k-loader-top">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-dark k-loader-lg">
                            <div className="k-loader-canvas">
                                <span className="k-loader-segment"></span>
                                <span className="k-loader-segment"></span>
                            </div>
                        </div>
                        <div className="k-loader-container-label !k-text-dark">Loading...</div>
                    </div>
                </div>
            </span>

            <span>Light</span>
            <span className="example">
                <div className="k-loader-container k-loader-container-lg k-loader-top">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-light k-loader-lg">
                            <div className="k-loader-canvas">
                                <span className="k-loader-segment"></span>
                                <span className="k-loader-segment"></span>
                            </div>
                        </div>
                        <div className="k-loader-container-label !k-text-light">Loading...</div>
                    </div>
                </div>
            </span>

            <span>Inverse</span>
            <span className="example">
                <div className="k-loader-container k-loader-container-lg k-loader-top">
                    <div className="k-loader-container-overlay k-overlay-dark"></div>
                    <div className="k-loader-container-inner k-loader-container-panel">
                        <div className="k-loader k-loader-pulsing-2 k-loader-inverse k-loader-lg">
                            <div className="k-loader-canvas">
                                <span className="k-loader-segment"></span>
                                <span className="k-loader-segment"></span>
                            </div>
                        </div>
                        <div className="k-loader-container-label !k-text-inverse">Loading...</div>
                    </div>
                </div>
            </span>

        </div>
    </>
);
