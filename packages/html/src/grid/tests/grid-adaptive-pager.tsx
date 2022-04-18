import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>LTR</span>
            <section>
                <div className="k-pane-wrapper k-widget">
                    <div className="k-pane">
                        <div className="k-view k-widget">
                            <div className="k-stretched-view k-content">
                                <div className="k-grid k-widget k-grid-display-block k-grid-mobile k-editable">
                                    <div className="k-pager-wrap k-grid-pager k-widget k-pager-sm">
                                        <a className="k-link k-pager-nav k-pager-first"><Icon name="arrow-end-left" /></a>
                                        <a className="k-link k-pager-nav"><Icon name="arrow-w" /></a>
                                        <div className="k-pager-numbers-wrap">
                                            <select className="k-picker k-dropdown-list k-dropdown k-rounded-md">
                                                <option>1</option>
                                            </select>
                                            <ul className="k-pager-numbers">
                                                <li><a className="k-link">1</a></li>
                                                <li><a className="k-link">2</a></li>
                                                <li><a className="k-link">3</a></li>
                                                <li><span className="k-link k-state-selected">4</span></li>
                                            </ul>
                                        </div>
                                        <a className="k-link k-pager-nav k-state-disabled"><Icon name="arrow-e" /></a>
                                        <a className="k-link k-pager-nav k-pager-last k-state-disabled"><Icon name="arrow-end-right" /></a>
                                        <span className="k-pager-info k-label">61 - 77 of 77 items</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <span>RTL</span>
            <section className="k-rtl">
                <div className="k-pane-wrapper k-widget">
                    <div className="k-pane">
                        <div className="k-view k-widget">
                            <div className="k-stretched-view k-content">
                                <div className="k-grid k-widget k-grid-display-block k-grid-mobile k-editable">
                                    <div className="k-pager-wrap k-grid-pager k-widget k-pager-sm">
                                        <a className="k-link k-pager-nav k-pager-first"><Icon name="arrow-end-left" /></a>
                                        <a className="k-link k-pager-nav"><Icon name="arrow-w" /></a>
                                        <div className="k-pager-numbers-wrap">
                                            <select className="k-picker k-dropdown-list k-dropdown k-rounded-md">
                                                <option>1</option>
                                            </select>
                                            <ul className="k-pager-numbers">
                                                <li className="k-current-page"><span className="k-link k-pager-nav">4</span></li>
                                                <li><a className="k-link">1</a></li>
                                                <li><a className="k-link">2</a></li>
                                                <li><a className="k-link">3</a></li>
                                                <li><span className="k-link k-state-selected">4</span></li>
                                            </ul>
                                        </div>
                                        <a className="k-link k-pager-nav k-state-disabled"><Icon name="arrow-e" /></a>
                                        <a className="k-link k-pager-nav k-pager-last k-state-disabled"><Icon name="arrow-end-right" /></a>
                                        <span className="k-pager-info k-label">61 - 77 of 77 items</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
