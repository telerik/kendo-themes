import React from 'react';
import ReactDOM from 'react-dom/client';
import { DropdownList } from '../../dropdownlist';
import { Icon } from '../../icon';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">

            <span>LTR</span>
            <section>
                <div className="k-pager-wrap k-widget">
                    <a className="k-link k-pager-nav k-pager-first k-state-disabled"><Icon name="arrow-end-left" /></a>
                    <a className="k-link k-pager-nav k-state-focus"><Icon name="arrow-w" /></a>
                    <div className="k-pager-numbers-wrap">
                        <select className="k-picker k-dropdown-list k-dropdown">
                            <option>1</option>
                        </select>
                        <ul className="k-pager-numbers">
                            <li><span className="k-link">1</span></li>
                            <li><a className="k-link k-state-hover">2</a></li>
                            <li><span className="k-link k-state-focus">3</span></li>
                            <li><a className="k-link k-state-selected">4</a></li>
                            <li><a className="k-link k-state-hover k-state-focus">5</a></li>
                            <li><a className="k-link k-state-selected k-state-focus">6</a></li>
                        </ul>
                    </div>
                    <a className="k-link k-pager-nav k-state-hover"><Icon name="arrow-e" /></a>
                    <a className="k-link k-pager-nav k-pager-last"><Icon name="arrow-end-right" /></a>

                    <span className="k-pager-sizes k-label">
                        <DropdownList value="20" />
                        items per page
                    </span>

                    <a className="k-pager-refresh k-link"><Icon name="reload" /></a>

                    <span className="k-pager-info k-label">1 - 20 of 91 items</span>
                </div>
            </section>
            <section>
                <div className="k-pager-wrap k-widget k-focus">
                    <a className="k-link k-pager-nav k-pager-first k-state-disabled"><Icon name="arrow-end-left" /></a>
                    <a className="k-link k-pager-nav k-state-disabled"><Icon name="arrow-w" /></a>
                    <span className="k-pager-input k-label">
                        Page
                        <Textbox showClearButton={false} value="999" />
                        of 8
                    </span>
                    <a className="k-link k-pager-nav"><Icon name="arrow-e" /></a>
                    <a className="k-link k-pager-nav k-pager-last"><Icon name="arrow-end-right" /></a>

                    <span className="k-pager-sizes k-label">
                        <DropdownList value="20" />
                        items per page
                    </span>

                    <a className="k-pager-refresh k-link"><Icon name="reload" /></a>

                    <span className="k-pager-info k-label">1 - 20 of 91 items</span>
                </div>
            </section>
            <section>
                <div className="k-pager-wrap k-widget">
                    <a className="k-link k-pager-nav k-pager-first k-state-disabled"><Icon name="arrow-end-left" /></a>
                    <a className="k-link k-pager-nav k-state-disabled"><Icon name="arrow-w" /></a>
                    <div className="k-pager-numbers-wrap">
                        <select className="k-picker k-dropdown-list k-dropdown">
                            <option>1</option>
                        </select>
                        <ul className="k-pager-numbers">
                            <li><a className="k-link">1</a></li>
                            <li><a className="k-link">2</a></li>
                            <li><a className="k-link">3</a></li>
                            <li><a className="k-link">4</a></li>
                            <li><a className="k-link">5</a></li>
                        </ul>
                    </div>
                    <a className="k-link k-pager-nav"><Icon name="arrow-e" /></a>
                    <a className="k-link k-pager-nav k-pager-last"><Icon name="arrow-end-right" /></a>

                    <span className="k-pager-sizes k-label">
                        <DropdownList value="20" />
                        items per page
                    </span>

                    <a className="k-pager-refresh k-link"><Icon name="reload" /></a>

                    <span className="k-pager-info k-label">1 - 20 of 91 items</span>
                </div>
            </section>


            <span>RTL</span>
            <section>
                <div className="k-pager-wrap k-widget" dir="rtl">
                    <a className="k-link k-pager-nav k-pager-first k-state-disabled"><Icon name="arrow-end-left" /></a>
                    <a className="k-link k-pager-nav k-state-disabled"><Icon name="arrow-w" /></a>
                    <div className="k-pager-numbers-wrap">
                        <select className="k-picker k-dropdown-list k-dropdown">
                            <option>1</option>
                        </select>
                        <ul className="k-pager-numbers">
                            <li><a className="k-link">1</a></li>
                            <li><a className="k-link">2</a></li>
                            <li><a className="k-link">3</a></li>
                            <li><a className="k-link">4</a></li>
                            <li><a className="k-link">5</a></li>
                        </ul>
                    </div>
                    <a className="k-link k-pager-nav"><Icon name="arrow-e" /></a>
                    <a className="k-link k-pager-nav k-pager-last"><Icon name="arrow-end-right" /></a>

                    <span className="k-pager-sizes k-label">
                        <DropdownList value="20" />
                        items per page
                    </span>

                    <a className="k-pager-refresh k-link"><Icon name="reload" /></a>

                    <span className="k-pager-info k-label">1 - 20 of 91 items</span>
                </div>
            </section>
            <section>
                <div className="k-pager-wrap k-widget" dir="rtl">
                    <a className="k-link k-pager-nav k-pager-first k-state-disabled"><Icon name="arrow-end-left" /></a>
                    <a className="k-link k-pager-nav k-state-disabled"><Icon name="arrow-w" /></a>
                    <span className="k-pager-input k-label">
                        Page
                        <Textbox showClearButton={false} value="999" />
                        of 8
                    </span>
                    <a className="k-link k-pager-nav"><Icon name="arrow-e" /></a>
                    <a className="k-link k-pager-nav k-pager-last"><Icon name="arrow-end-right" /></a>

                    <span className="k-pager-sizes k-label">
                        <DropdownList value="20" />
                        items per page
                    </span>

                    <a className="k-pager-refresh k-link"><Icon name="reload" /></a>

                    <span className="k-pager-info k-label">1 - 20 of 91 items</span>
                </div>
            </section>
            <section>
                <div className="k-pager-wrap k-widget" dir="rtl">
                    <a className="k-link k-pager-nav k-pager-first k-state-disabled"><Icon name="arrow-end-left" /></a>
                    <a className="k-link k-pager-nav k-state-disabled"><Icon name="arrow-w" /></a>
                    <div className="k-pager-numbers-wrap">
                        <select className="k-picker k-dropdown-list k-dropdown">
                            <option>1</option>
                        </select>
                        <ul className="k-pager-numbers">
                            <li><a className="k-link">1</a></li>
                            <li><a className="k-link">2</a></li>
                            <li><a className="k-link">3</a></li>
                            <li><a className="k-link">4</a></li>
                            <li><a className="k-link">5</a></li>
                        </ul>
                    </div>
                    <a className="k-link k-pager-nav"><Icon name="arrow-e" /></a>
                    <a className="k-link k-pager-nav k-pager-last"><Icon name="arrow-end-right" /></a>

                    <span className="k-pager-sizes k-label">
                        <DropdownList value="20" />
                        items per page
                    </span>

                    <a className="k-pager-refresh k-link"><Icon name="reload" /></a>

                    <span className="k-pager-info k-label">1 - 20 of 91 items</span>
                </div>
            </section>

        </div>
    </>
);
