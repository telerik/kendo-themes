import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { NumericTextbox } from '../../numerictextbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-hue-slider {
        --kendo-slider-start: 0;
        --kendo-slider-end: 0;
    }
    .k-alpha-slider {
        --kendo-slider-start: 0;
        --kendo-slider-end: 100;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Focus</span>
            <section>
                <div className="k-colorgradient k-focus">
                    <div className="k-colorgradient-canvas k-hstack">
                        <div className="k-hsv-rectangle" style={{ background: "rgb(255, 0, 0)" }}>
                            <div className="k-hsv-gradient">
                                <div className="k-hsv-draghandle k-draghandle" style={{ top: '50px', left: "73px" }}></div>
                            </div>
                        </div>
                        <div className="k-hsv-controls k-hstack">
                            <div className="k-slider k-slider-vertical k-hue-slider k-colorgradient-slider">
                                <div className="k-slider-track-wrap">
                                    <div className="k-slider-track">
                                        <div className="k-slider-selection"></div>
                                        <a className="k-draghandle k-draghandle-end"></a>
                                    </div>
                                </div>
                            </div>
                            <div className="k-slider k-slider-vertical k-alpha-slider k-colorgradient-slider">
                                <div className="k-slider-track-wrap">
                                    <div className="k-slider-track" style={{ background: "linear-gradient(to top, transparent, rgb(255, 0, 0))" }}>
                                        <div className="k-slider-selection"></div>
                                        <a className="k-draghandle k-draghandle-end"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="k-colorgradient-inputs k-hstack">
                        <div className="k-vstack">
                            <Button fillMode="flat" icon="arrows-kpi" className="k-colorgradient-toggle-mode"></Button>
                        </div>
                        <div className="k-vstack">
                            <NumericTextbox showSpinButton={false} showClearButton={false} value="132" />
                            <label className="k-colorgradient-input-label">R</label>
                        </div>
                        <div className="k-vstack">
                            <NumericTextbox showSpinButton={false} showClearButton={false} value="132" />
                            <label className="k-colorgradient-input-label">G</label>
                        </div>
                        <div className="k-vstack">
                            <NumericTextbox showSpinButton={false} showClearButton={false} value="132" />
                            <label className="k-colorgradient-input-label">B</label>
                        </div>
                        <div className="k-vstack">
                            <NumericTextbox showSpinButton={false} showClearButton={false} value="1.00" />
                            <label className="k-colorgradient-input-label">A</label>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
);
