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
                <div className="k-pager k-widget">
                    <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="caret-alt-to-left" /></a>
                    <a className="k-link k-pager-nav k-focus"><Icon name="caret-alt-left" /></a>
                    <div className="k-pager-numbers-wrap">
                        <select className="k-picker k-dropdown-list k-dropdown">
                            <option>1</option>
                        </select>
                        <ul className="k-pager-numbers">
                            <li><span className="k-link">1</span></li>
                            <li><a className="k-link k-hover">2</a></li>
                            <li><span className="k-link k-focus">3</span></li>
                            <li><a className="k-link k-selected">4</a></li>
                            <li><a className="k-link k-hover k-focus">5</a></li>
                            <li><a className="k-link k-selected k-focus">6</a></li>
                        </ul>
                    </div>
                    <a className="k-link k-pager-nav k-hover"><Icon name="caret-alt-right" /></a>
                    <a className="k-link k-pager-nav k-pager-last"><Icon name="caret-alt-to-right" /></a>

                    <span className="k-pager-sizes k-label">
                        <DropdownList value="20" />
                        items per page
                    </span>

                    <a className="k-pager-refresh k-link"><Icon name="arrow-rotate-cw" /></a>

                    <span className="k-pager-info k-label">1 - 20 of 91 items</span>
                </div>
            </section>
            <section>
                <div className="k-pager k-widget k-focus">
                    <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="caret-alt-to-left" /></a>
                    <a className="k-link k-pager-nav k-disabled"><Icon name="caret-alt-left" /></a>
                    <span className="k-pager-input k-label">
                        Page
                        <Textbox showClearButton={false} value="999" />
                        of 8
                    </span>
                    <a className="k-link k-pager-nav"><Icon name="caret-alt-right" /></a>
                    <a className="k-link k-pager-nav k-pager-last"><Icon name="caret-alt-to-right" /></a>

                    <span className="k-pager-sizes k-label">
                        <DropdownList value="20" />
                        items per page
                    </span>

                    <a className="k-pager-refresh k-link"><Icon name="arrow-rotate-cw" /></a>

                    <span className="k-pager-info k-label">1 - 20 of 91 items</span>
                </div>
            </section>
            <section>
                <div className="k-pager k-widget">
                    <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="caret-alt-to-left" /></a>
                    <a className="k-link k-pager-nav k-disabled"><Icon name="caret-alt-left" /></a>
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
                    <a className="k-link k-pager-nav"><Icon name="caret-alt-right" /></a>
                    <a className="k-link k-pager-nav k-pager-last"><Icon name="caret-alt-to-right" /></a>

                    <span className="k-pager-sizes k-label">
                        <DropdownList value="20" />
                        items per page
                    </span>

                    <a className="k-pager-refresh k-link"><Icon name="arrow-rotate-cw" /></a>

                    <span className="k-pager-info k-label">1 - 20 of 91 items</span>
                </div>
            </section>


            <span>RTL</span>
            <section>
                <div className="k-pager k-widget" dir="rtl">
                    <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="caret-alt-to-left" /></a>
                    <a className="k-link k-pager-nav k-disabled"><Icon name="caret-alt-left" /></a>
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
                    <a className="k-link k-pager-nav"><Icon name="caret-alt-right" /></a>
                    <a className="k-link k-pager-nav k-pager-last"><Icon name="caret-alt-to-right" /></a>

                    <span className="k-pager-sizes k-label">
                        <DropdownList value="20" />
                        items per page
                    </span>

                    <a className="k-pager-refresh k-link"><Icon name="arrow-rotate-cw" /></a>

                    <span className="k-pager-info k-label">1 - 20 of 91 items</span>
                </div>
            </section>
            <section>
                <div className="k-pager k-widget" dir="rtl">
                    <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="caret-alt-to-left" /></a>
                    <a className="k-link k-pager-nav k-disabled"><Icon name="caret-alt-left" /></a>
                    <span className="k-pager-input k-label">
                        Page
                        <Textbox showClearButton={false} value="999" />
                        of 8
                    </span>
                    <a className="k-link k-pager-nav"><Icon name="caret-alt-right" /></a>
                    <a className="k-link k-pager-nav k-pager-last"><Icon name="caret-alt-to-right" /></a>

                    <span className="k-pager-sizes k-label">
                        <DropdownList value="20" />
                        items per page
                    </span>

                    <a className="k-pager-refresh k-link"><Icon name="arrow-rotate-cw" /></a>

                    <span className="k-pager-info k-label">1 - 20 of 91 items</span>
                </div>
            </section>
            <section>
                <div className="k-pager k-widget" dir="rtl">
                    <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="caret-alt-to-left" /></a>
                    <a className="k-link k-pager-nav k-disabled"><Icon name="caret-alt-left" /></a>
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
                    <a className="k-link k-pager-nav"><Icon name="caret-alt-right" /></a>
                    <a className="k-link k-pager-nav k-pager-last"><Icon name="caret-alt-to-right" /></a>

                    <span className="k-pager-sizes k-label">
                        <DropdownList value="20" />
                        items per page
                    </span>

                    <a className="k-pager-refresh k-link"><Icon name="arrow-rotate-cw" /></a>

                    <span className="k-pager-info k-label">1 - 20 of 91 items</span>
                </div>
            </section>

        </div>
    </>
);
