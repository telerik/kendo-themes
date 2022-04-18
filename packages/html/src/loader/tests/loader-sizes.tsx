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


            <span>Small</span>
            <span>
                <div className="k-loader k-loader-pulsing-2 k-loader-primary k-loader-sm">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-3 k-loader-primary k-loader-sm">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-4 k-loader-primary k-loader-sm">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>Medium</span>
            <span>
                <div className="k-loader k-loader-pulsing-2 k-loader-primary k-loader-md">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-3 k-loader-primary k-loader-md">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>
                <div className="k-loader k-loader-spinner-4 k-loader-primary k-loader-md">
                    <div className="k-loader-canvas">
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                        <span className="k-loader-segment"></span>
                    </div>
                </div>
            </span>

            <span>Large</span>
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

        </div>
    </>
);
