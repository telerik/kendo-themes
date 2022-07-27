import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>jQuery grid</span>
            <span>Angular grid</span>

            <section>
                <div className="k-widget k-grid k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="k-header">100px</th>
                                        <th className="k-header">no width</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-grid-table">
                            <colgroup>
                                <col style={{ width: "100px" }} />
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Row</td>
                                </tr>
                                <tr className="k-alt">
                                    <td>2</td>
                                    <td>Alt row</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="k-widget k-pager k-grid-pager k-focus">
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
                            </ul>
                        </div>
                        <a className="k-link k-pager-nav"><Icon name="arrow-e" /></a>
                        <a className="k-link k-pager-nav k-pager-last"><Icon name="arrow-end-right" /></a>
                        <span className="k-pager-info k-label">1 - 6 of 9 items</span>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-grid k-grid-no-scrollbar">
                    <div className="k-grid-aria-root">
                        {/* add padding-left or -right for scrollbar width */}
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap">
                                <table>
                                    <colgroup>
                                        <col style={{ width: "100px" }} />
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th className="k-header">100px</th>
                                            <th className="k-header">no width</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>

                        <div className="k-grid-container">
                            <div className="k-grid-content k-virtual-content">
                                <div>
                                    <table className="k-grid-table">
                                        <colgroup>
                                            <col style={{ width: "100px" }} />
                                            <col />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Row</td>
                                            </tr>
                                            <tr className="k-alt">
                                                <td>2</td>
                                                <td>Alt row</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="k-height-container">
                                    {/* set height to scroll height (virtual scrolling) */}
                                    <div style={{ height: '0px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="k-widget k-pager k-grid-pager k-focus">
                        <div>
                            <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="seek-w" /></a>
                            <a className="k-link k-pager-nav k-disabled"><Icon name="arrow-w" /></a>
                        </div>
                        <div>
                            <ul className="k-pager-numbers">
                                <li><a className="k-link k-selected">1</a></li>
                                <li><a className="k-link">2</a></li>
                                <li><a className="k-link">3</a></li>
                            </ul>
                        </div>
                        <div>
                            <a className="k-link k-pager-nav"><Icon name="arrow-e" /></a>
                            <a className="k-link k-pager-nav k-pager-last"><Icon name="seek-e" />
                            </a>
                        </div>
                        <div className="k-pager-info k-label">1 - 2 of 5 items</div>
                    </div>
                </div>
            </section>


            <span>jQuery grid pager top</span>
            <span>Angular grid pager top</span>

            <section>
                <div className="k-widget k-grid k-grid-no-scrollbar">
                    <div className="k-widget k-pager k-grid-pager k-grid-pager-top">
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
                            </ul>
                        </div>
                        <a className="k-link k-pager-nav"><Icon name="arrow-e" /></a>
                        <a className="k-link k-pager-nav k-pager-last"><Icon name="arrow-end-right" /></a>
                        <span className="k-pager-info k-label">1 - 6 of 9 items</span>
                    </div>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="k-header">100px</th>
                                        <th className="k-header">no width</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-grid-table">
                            <colgroup>
                                <col style={{ width: "100px" }} />
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Row</td>
                                </tr>
                                <tr className="k-alt">
                                    <td>2</td>
                                    <td>Alt row</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-grid k-grid-no-scrollbar">
                    <div className="k-widget k-pager k-grid-pager k-grid-pager-top">
                        <div>
                            <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="seek-w" /></a>
                            <a className="k-link k-pager-nav k-disabled"><Icon name="arrow-w" /></a>
                        </div>
                        <div>
                            <ul className="k-pager-numbers">
                                <li><a className="k-link k-selected">1</a></li>
                                <li><a className="k-link">2</a></li>
                                <li><a className="k-link">3</a></li>
                            </ul>
                        </div>
                        <div>
                            <a className="k-link k-pager-nav"><Icon name="arrow-e" /></a>
                            <a className="k-link k-pager-nav k-pager-last"><Icon name="seek-e" />
                            </a>
                        </div>
                        <div className="k-pager-info k-label">1 - 2 of 5 items</div>
                    </div>
                    <div className="k-grid-aria-root">
                        {/* add padding-left or -right for scrollbar width */}
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap">
                                <table>
                                    <colgroup>
                                        <col style={{ width: "100px" }} />
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th className="k-header">100px</th>
                                            <th className="k-header">no width</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>

                        <div className="k-grid-container">
                            <div className="k-grid-content k-virtual-content">
                                <div>
                                    <table className="k-grid-table">
                                        <colgroup>
                                            <col style={{ width: "100px" }} />
                                            <col />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Row</td>
                                            </tr>
                                            <tr className="k-alt">
                                                <td>2</td>
                                                <td>Alt row</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="k-height-container">
                                    {/* set height to scroll height (virtual scrolling) */}
                                    <div style={{ height: '0px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
