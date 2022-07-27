import React from 'react';
import ReactDOM from 'react-dom/client';
import { DropdownList } from '../../dropdownlist';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: auto 3fr 1fr;
        align-items: center;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>LTR</span>
            <span></span>

            <span>lg</span>
            <div className="k-pager k-widget k-pager-lg">
                <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="arrow-end-left" /></a>
                <a className="k-link k-pager-nav k-focus"><Icon name="arrow-w" /></a>
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
                <a className="k-link k-pager-nav k-hover"><Icon name="arrow-e" /></a>
                <a className="k-link k-pager-nav k-pager-last"><Icon name="arrow-end-right" /></a>

                <span className="k-pager-sizes k-label">
                    <DropdownList value="20" />
                    items per page
                </span>

                <a className="k-pager-refresh k-link"><Icon name="reload" /></a>

                <span className="k-pager-info k-label">1 - 20 of 91 items</span>
            </div>
            <span></span>

            <span>md</span>
            <div className="k-pager k-widget k-pager-md">
                <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="arrow-end-left" /></a>
                <a className="k-link k-pager-nav k-disabled"><Icon name="arrow-w" /></a>
                <div className="k-pager-numbers-wrap">
                    <select className="k-picker k-dropdown-list k-dropdown">
                        <option>1</option>
                    </select>
                    <ul className="k-pager-numbers">
                        <li><span className="k-link k-selected">1</span></li>
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
            <span></span>

            <span>sm</span>
            <div className="k-pager k-widget k-pager-sm">
                <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="arrow-end-left" /></a>
                <a className="k-link k-pager-nav k-disabled"><Icon name="arrow-w" /></a>
                <div className="k-pager-numbers-wrap">
                    <select className="k-picker k-dropdown-list k-dropdown">
                        <option>1</option>
                    </select>
                    <ul className="k-pager-numbers">
                        <li><span className="k-link k-selected">1</span></li>
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
            <div className="k-pager k-widget k-pager-sm">
                <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="arrow-end-left" /></a>
                <a className="k-link k-pager-nav k-disabled"><Icon name="arrow-w" /></a>
                <div className="k-pager-numbers-wrap">
                    <select className="k-picker k-dropdown-list k-dropdown">
                        <option>1</option>
                    </select>
                    <ul className="k-pager-numbers">
                        <li><a className="k-link">1</a></li>
                        <li><a className="k-link k-hover">2</a></li>
                        <li><span className="k-link k-selected">3</span></li>
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

            <span></span>
            <span>RTL</span>
            <span></span>

            <span>lg</span>
            <div className="k-pager k-widget k-pager-lg" dir="rtl">
                <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="arrow-end-left" /></a>
                <a className="k-link k-pager-nav k-disabled"><Icon name="arrow-w" /></a>
                <div className="k-pager-numbers-wrap">
                    <select className="k-picker k-dropdown-list k-dropdown">
                        <option>1</option>
                    </select>
                    <ul className="k-pager-numbers">
                        <li><span className="k-link k-selected">1</span></li>
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
            <span></span>

            <span>md</span>
            <div className="k-pager k-widget k-pager-md" dir="rtl">
                <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="arrow-end-left" /></a>
                <a className="k-link k-pager-nav k-disabled"><Icon name="arrow-w" /></a>
                <div className="k-pager-numbers-wrap">
                    <select className="k-picker k-dropdown-list k-dropdown">
                        <option>1</option>
                    </select>
                    <ul className="k-pager-numbers">
                        <li><span className="k-link k-selected">1</span></li>
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
            <span></span>

            <span>sm</span>
            <div className="k-pager k-widget k-pager-sm" dir="rtl">
                <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="arrow-end-left" /></a>
                <a className="k-link k-pager-nav k-disabled"><Icon name="arrow-w" /></a>
                <div className="k-pager-numbers-wrap">
                    <select className="k-picker k-dropdown-list k-dropdown">
                        <option>1</option>
                    </select>
                    <ul className="k-pager-numbers">
                        <li><span className="k-link k-selected">1</span></li>
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
            <div className="k-pager k-widget k-pager-sm" dir="rtl">
                <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="arrow-end-left" /></a>
                <a className="k-link k-pager-nav k-disabled"><Icon name="arrow-w" /></a>
                <div className="k-pager-numbers-wrap">
                    <select className="k-picker k-dropdown-list k-dropdown">
                        <option>1</option>
                    </select>
                    <ul className="k-pager-numbers">
                        <li><a className="k-link">1</a></li>
                        <li><a className="k-link k-hover">2</a></li>
                        <li><span className="k-link k-selected">3</span></li>
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

        </div>
    </>
);
