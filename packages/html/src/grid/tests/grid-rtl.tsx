import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>jQuery grid</span>
            <section>
                <div className="k-widget k-grid k-grid-no-scrollbar" dir="rtl">
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
                                <tr>
                                    <td>3</td>
                                    <td>
                                        This text continues to the end of the grid to test overflow behavior of row contents, as well as line height and vertical alignment.
                                    </td>
                                </tr>
                                <tr className="k-alt">
                                    <td>4</td>
                                    <td><span className="k-placeholder-line"></span></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><span className="k-placeholder-line"></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="k-widget k-pager-wrap k-grid-pager">
                        <a className="k-link k-pager-nav k-pager-first k-state-disabled"><Icon name="arrow-end-left" /></a>
                        <a className="k-link k-pager-nav k-state-disabled"><Icon name="arrow-w" /></a>
                        <div className="k-pager-numbers-wrap">
                            <select className="k-picker k-dropdown-list k-dropdown">
                                <option>1</option>
                            </select>
                            <ul className="k-pager-numbers">
                                <li><span className="k-link k-state-selected">1</span></li>
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

            <span>jQuery -- fixed height, hierarchy, filter menu, sort icon</span>
            <section>
                <div className="k-widget k-grid k-grid-no-scrollbar" style={{ height: "250px" }} dir="rtl">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col className="k-hierarchy-col" /><col /><col /><col /><col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="k-header k-hierarchy-cell">
                                        </th>
                                        <th className="k-header k-filterable">
                                            <a className="k-grid-filter"><Icon name="filter" /></a>
                                            <a className="k-link">Default<span></span></a>
                                        </th>
                                        <th className="k-header k-filterable k-state-hover">
                                            <a className="k-grid-filter"><Icon name="filter" /></a>
                                            <a className="k-link">Hover<span></span></a>
                                        </th>
                                        <th className="k-header k-filterable k-state-focused">
                                            <a className="k-grid-filter"><Icon name="filter" /></a>
                                            <a className="k-link">Focus<span></span></a>
                                        </th>
                                        <th className="k-header k-filterable k-state-active">
                                            <a className="k-grid-filter"><Icon name="filter" /></a>
                                            <a className="k-link">Active<span></span></a>
                                        </th>
                                        <th className="k-header k-filterable k-sorted">
                                            <a className="k-grid-filter"><Icon name="filter" /></a>
                                            <a className="k-link">Sorted<Icon name="sort-asc-sm" /></a>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-grid-table">
                            <colgroup>
                                <col className="k-hierarchy-col" /><col /><col /><col /><col />
                            </colgroup>
                            <tbody>
                                <tr className="k-master-row">
                                    <td className="k-hierarchy-cell">
                                        <Icon name="collapse" />
                                    </td>
                                    <td>1</td>
                                    <td>Text</td>
                                    <td>Text</td>
                                    <td>Text</td>
                                    <td>Text</td>
                                </tr>
                                <tr className="k-detail-row">
                                    <td className="k-hierarchy-cell"></td>
                                    <td className="k-detail-cell" colSpan={5}>
                                        {/* hierarchy child content */}
                                        <div style={{ background: "#ccc", padding: "10px" }}>
                                            Nested content
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-alt k-master-row">
                                    <td className="k-hierarchy-cell">
                                        <Icon name="expand" />
                                    </td>
                                    <td>2</td>
                                    <td>Text</td>
                                    <td>Text</td>
                                    <td>Text</td>
                                    <td>Text</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    </>
);
