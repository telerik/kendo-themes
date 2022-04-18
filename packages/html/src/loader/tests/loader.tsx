import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span></span>
            <span className="col">Pulsing 2</span>
            <span className="col">Spinner 3</span>
            <span className="col">Spinner 4</span>


            <span>Primary</span>
            <span>
                <div className="k-loader k-loader-pulsing-2 k-loader-primary k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-3 k-loader-primary k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-4 k-loader-primary k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>Secondary</span>
            <span>
                <div className="k-loader k-loader-pulsing-2 k-loader-secondary k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-3 k-loader-secondary k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-4 k-loader-secondary k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>Tertiary</span>
            <span>
                <div className="k-loader k-loader-pulsing-2 k-loader-tertiary k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-3 k-loader-tertiary k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-4 k-loader-tertiary k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>Info</span>
            <span>
                <div className="k-loader k-loader-pulsing-2 k-loader-info k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-3 k-loader-info k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-4 k-loader-info k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>Success</span>
            <span>
                <div className="k-loader k-loader-pulsing-2 k-loader-success k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-3 k-loader-success k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-4 k-loader-success k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>Warning</span>
            <span>
                <div className="k-loader k-loader-pulsing-2 k-loader-warning k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-3 k-loader-warning k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-4 k-loader-warning k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>Error</span>
            <span>
                <div className="k-loader k-loader-pulsing-2 k-loader-error k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-3 k-loader-error k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-4 k-loader-error k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>Dark</span>
            <span>
                <div className="k-loader k-loader-pulsing-2 k-loader-dark k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-3 k-loader-dark k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-4 k-loader-dark k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>Light</span>
            <span>
                <div className="k-loader k-loader-pulsing-2 k-loader-light k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-3 k-loader-light k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-4 k-loader-light k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>Inverse</span>
            <span>
                <div className="k-loader k-loader-pulsing-2 k-loader-inverse k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-3 k-loader-inverse k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-4 k-loader-inverse k-loader-lg">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

        </div>
    </>
);
