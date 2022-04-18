import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-slider-horizontal {
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

            <span>Single</span>
            <span>Range</span>
            <span>Single RTL</span>
            <span>Range RTL</span>


            <section>
                <div className="k-widget k-slider k-slider-horizontal">
                    <Button icon="arrow-w" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">25</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">50</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">75</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">100</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-end"></a>
                        </div>
                    </div>
                    <Button icon="arrow-e" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>
            <section>
                <div className="k-widget k-slider k-range-slider k-slider-horizontal">
                    <Button icon="arrow-w" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">25</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">50</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">75</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">100</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-start"></a>
                            <a href="#" className="k-draghandle k-draghandle-end"></a>
                        </div>
                    </div>
                    <Button icon="arrow-e" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>
            <section dir="rtl">
                <div className="k-widget k-slider k-slider-horizontal">
                    <Button icon="arrow-w" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">25</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">50</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">75</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">100</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-end"></a>
                        </div>
                    </div>
                    <Button icon="arrow-e" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>
            <section dir="rtl">
                <div className="k-widget k-slider k-range-slider k-slider-horizontal">
                    <Button icon="arrow-w" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">25</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">50</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">75</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">100</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-start"></a>
                            <a href="#" className="k-draghandle k-draghandle-end"></a>
                        </div>
                    </div>
                    <Button icon="arrow-e" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>


            <section>
                <div className="k-widget k-slider k-slider-vertical">
                    <Button icon="arrow-s" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">25</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">50</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">75</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">100</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-end"></a>
                        </div>
                    </div>
                    <Button icon="arrow-n" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>
            <section>
                <div className="k-widget k-slider k-range-slider k-slider-vertical">
                    <Button icon="arrow-s" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">25</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">50</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">75</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">100</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-start"></a>
                            <a href="#" className="k-draghandle k-draghandle-end"></a>
                        </div>
                    </div>
                    <Button icon="arrow-n" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>
            <section dir="rtl">
                <div className="k-widget k-slider k-slider-vertical">
                    <Button icon="arrow-s" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">25</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">50</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">75</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">100</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-end"></a>
                        </div>
                    </div>
                    <Button icon="arrow-n" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>
            <section dir="rtl">
                <div className="k-widget k-slider k-range-slider k-slider-vertical">
                    <Button icon="arrow-s" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">25</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">50</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">75</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">100</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-start"></a>
                            <a href="#" className="k-draghandle k-draghandle-end"></a>
                        </div>
                    </div>
                    <Button icon="arrow-n" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>

        </div>
    </>
);
