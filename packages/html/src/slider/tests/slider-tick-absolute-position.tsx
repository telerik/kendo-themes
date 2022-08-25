import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-slider-horizontal {
        width: 1px;
        width: 100%;
    }
    .k-slider-vertical {
        height: 300px;
    }

    .k-slider {
        --kendo-slider-start: 0;
        --kendo-slider-end: 60;
    }
    .k-range-slider {
        --kendo-slider-start: 20;
        --kendo-slider-end: 60;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <section>
                <div className="k-widget k-slider k-slider-horizontal">
                    <Button icon="caret-alt-left" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items" style={{ position: 'relative' }}>
                            <li className="k-tick k-tick-large k-tick-horizontal" style={{ zIndex: 1, position: 'absolute', left: '0%' }}>
                                <span className="k-label">0</span>
                            </li>

                            <li className="k-tick k-tick-large k-tick-horizontal" style={{ zIndex: 1, position: 'absolute', left: '33%' }}>
                                <span className="k-label">33</span>
                            </li>

                            <li className="k-tick k-tick-large k-tick-horizontal" style={{ zIndex: 1, position: 'absolute', left: '50%' }}>
                                <span className="k-label">50</span>
                            </li>

                            <li className="k-tick k-tick-large k-tick-horizontal" style={{ zIndex: 1, position: 'absolute', left: '75%' }}>
                                <span className="k-label">75</span>
                            </li>

                            <li className="k-tick k-tick-large k-tick-horizontal" style={{ zIndex: 1, position: 'absolute', left: '100%' }}>
                                <span className="k-label">100</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection" style={{ width: '33%' }}></div>
                            <a href="#" className="k-draghandle k-draghandle-end" style={{ left: '33%', zIndex: 1 }}></a>
                        </div>
                    </div>
                    <Button icon="caret-alt-right" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>

            <section>
                <div className="k-widget k-slider k-slider-vertical">
                    <Button icon="arrow-s" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items" style={{ position: 'relative' }}>
                            <li className="k-tick k-tick-large k-tick-vertical" style={{ zIndex: 1, position: 'absolute', bottom: '100%' }}>
                                <span className="k-label">100</span>
                            </li>
                            <li className="k-tick k-tick-large k-tick-vertical" style={{ zIndex: 1, position: 'absolute', bottom: '75%' }}>
                                <span className="k-label">75</span>
                            </li>

                            <li className="k-tick k-tick-large k-tick-vertical" style={{ zIndex: 1, position: 'absolute', bottom: '50%' }}>
                                <span className="k-label">50</span>
                            </li>

                            <li className="k-tick k-tick-large k-tick-vertical" style={{ zIndex: 1, position: 'absolute', bottom: '33%' }}>
                                <span className="k-label">33</span>
                            </li>

                            <li className="k-tick k-tick-large k-tick-vertical" style={{ zIndex: 1, position: 'absolute', bottom: '0' }}>
                                <span className="k-label">0</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection" style={{ bottom: '0', height: '33%' }}></div>
                            <a href="#" className="k-draghandle k-draghandle-end" style={{ bottom: '33%', zIndex: 1 }}></a>
                        </div>
                    </div>
                    <Button icon="arrow-n" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>

        </div>
    </>
);
