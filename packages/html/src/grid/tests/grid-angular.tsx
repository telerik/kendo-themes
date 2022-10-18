import React from 'react';
import ReactDOM from 'react-dom/client';
import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';
import { Pager } from '../../pager';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="col-2">Angular grid</span>

            <section className="col-2">
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
                                <div className="k-height-container">
                                    {/* set height to scroll height (virtual scrolling) */}
                                    <div style={{ height: '0px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Pager className="k-grid-pager" />
                </div>
            </section>

            <span className="col-2">Angular -- fixed height, hierarchy, filter menu, sort icon</span>
            <section className="col-2">
                <div className="k-widget k-grid k-grid-no-scrollbar" style={{ height: "240px" }}>
                    <div className="k-grid-aria-root">
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap">
                                <table>
                                    <colgroup>
                                        <col className="k-hierarchy-col" /><col /><col /><col /><col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th className="k-header k-hierarchy-cell"></th>
                                            <th className="k-header k-filterable">
                                                <div><a className="k-grid-filter"><Icon name="filter" /></a></div>
                                                <a className="k-link">Default<span></span></a>
                                            </th>
                                            <th className="k-header k-filterable">
                                                <div><a className="k-grid-filter"><Icon name="filter" /></a></div>
                                                <a className="k-link">Hover<span></span></a>
                                            </th>
                                            <th className="k-header k-filterable k-focus">
                                                <div><a className="k-grid-filter"><Icon name="filter" /></a></div>
                                                <a className="k-link">Focus<span></span></a>
                                            </th>
                                            <th className="k-header k-filterable">
                                                <div><a className="k-grid-filter k-active"><Icon name="filter" /></a></div>
                                                <a className="k-link">Active<span></span></a>
                                            </th>
                                            <th className="k-header k-filterable k-sorted">
                                                <div><a className="k-grid-filter"><Icon name="filter" /></a></div>
                                                <a className="k-link">Sorted<Icon name="sort-asc-sm" /></a>
                                            </th>
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
                                            <col className="k-hierarchy-col" /><col /><col /><col /><col />
                                        </colgroup>
                                        <tbody>
                                            <tr className="k-master-row k-expanded">
                                                <td className="k-hierarchy-cell"><Icon name="minus" /></td>
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
                                                    <div style={{ padding: "10px" }}>
                                                        Nested content
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-alt k-master-row">
                                                <td className="k-hierarchy-cell">
                                                    <Icon name="plus" />
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
                                <div className="k-height-container">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <span className="col-2">Angular -- expand/collapse cell and first column is a checkbox column</span>
            <section className="col-2">
                <div className="k-widget k-grid">
                    <div className="k-grid-aria-root">
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap">
                                <table>
                                    <colgroup>
                                        <col className="k-hierarchy-col" />
                                        <col style={{ width: "100px" }} />
                                        <col style={{ width: "300px" }} />
                                        <col style={{ width: "100px" }} />
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th className="k-hierarchy-cell k-header"></th>
                                            <th className="k-header"></th>
                                            <th className="k-header">Product</th>
                                            <th className="k-header">Unit Price</th>
                                            <th className="k-header">Qty Per Unit</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <div className="k-grid-container">
                            <div className="k-grid-content k-virtual-content">
                                <div className="k-grid-table-wrap">
                                    <table className="k-grid-table">
                                        <colgroup>
                                            <col className="k-hierarchy-col" />
                                            <col style={{ width: "100px" }} />
                                            <col style={{ width: "300px" }} />
                                            <col style={{ width: "100px" }} />
                                            <col />
                                        </colgroup>
                                        <tbody>
                                            <tr className="k-master-row k-expanded">
                                                <td className="k-hierarchy-cell">
                                                    <Icon name="minus" />
                                                </td>
                                                <td><Checkbox /><label className="k-checkbox-label"></label></td>
                                                <td>Chai</td>
                                                <td>18</td>
                                                <td>10 boxes x 20 bags</td>
                                            </tr>
                                            <tr className="k-detail-row">
                                                <td className="k-hierarchy-cell"></td>
                                                <td className="k-detail-cell" colSpan={4}><div style={{ padding: "10px" }}>Nested content</div></td>
                                            </tr>
                                            <tr className="k-alt k-master-row">
                                                <td className="k-hierarchy-cell">
                                                    <Icon name="plus" />
                                                </td>
                                                <td><Checkbox /><label className="k-checkbox-label"></label></td>
                                                <td>Chang</td>
                                                <td>19</td>
                                                <td>24 - 12 oz bottles</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="k-height-container">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    </>
);
