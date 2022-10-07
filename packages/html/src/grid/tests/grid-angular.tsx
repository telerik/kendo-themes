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
                <div className="k-grid k-grid-md k-grid-no-scrollbar">
                    <div className="k-grid-aria-root">
                        {/* add padding-left or -right for scrollbar width */}
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap">
                                <table className="k-table k-table-md k-grid-header-table">
                                    <colgroup>
                                        <col style={{ width: "100px" }} />
                                        <col />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row">
                                            <th className="k-table-th k-header">100px</th>
                                            <th className="k-table-th k-header">no width</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>

                        <div className="k-grid-container">
                            <div className="k-grid-content k-virtual-content">
                                <div>
                                    <table className="k-table k-table-md k-grid-table">
                                        <colgroup>
                                            <col style={{ width: "100px" }} />
                                            <col />
                                        </colgroup>
                                        <tbody className="k-table-tbody">
                                            <tr className="k-table-row">
                                                <td className="k-table-td">1</td>
                                                <td className="k-table-td">Row</td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt">
                                                <td className="k-table-td">2</td>
                                                <td className="k-table-td">Alt row</td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">3</td>
                                                <td className="k-table-td">
                                                    This text continues to the end of the grid to test overflow behavior of row contents, as well as line height and vertical alignment.
                                                </td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt">
                                                <td className="k-table-td">4</td>
                                                <td className="k-table-td"><span className="k-placeholder-line"></span></td>
                                            </tr>
                                            <tr className="k-table-row">
                                                <td className="k-table-td">5</td>
                                                <td className="k-table-td"><span className="k-placeholder-line"></span></td>
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
                <div className="k-grid k-grid-md k-grid-no-scrollbar" style={{ height: "240px" }}>
                    <div className="k-grid-aria-root">
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap">
                                <table className="k-table k-table-md k-grid-header-table">
                                    <colgroup>
                                        <col className="k-hierarchy-col" /><col /><col /><col /><col />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row">
                                            <th className="k-table-th k-header k-hierarchy-cell"></th>
                                            <th className="k-table-th k-header k-filterable">
                                                <div><a className="k-grid-filter"><Icon name="filter" /></a></div>
                                                <a className="k-link">Default<span></span></a>
                                            </th>
                                            <th className="k-table-th k-header k-filterable">
                                                <div><a className="k-grid-filter"><Icon name="filter" /></a></div>
                                                <a className="k-link">Hover<span></span></a>
                                            </th>
                                            <th className="k-table-th k-header k-filterable k-focus">
                                                <div><a className="k-grid-filter"><Icon name="filter" /></a></div>
                                                <a className="k-link">Focus<span></span></a>
                                            </th>
                                            <th className="k-table-th k-header k-filterable">
                                                <div><a className="k-grid-filter k-active"><Icon name="filter" /></a></div>
                                                <a className="k-link">Active<span></span></a>
                                            </th>
                                            <th className="k-table-th k-header k-filterable k-sorted">
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
                                    <table className="k-table k-table-md k-grid-table">
                                        <colgroup>
                                            <col className="k-hierarchy-col" /><col /><col /><col /><col />
                                        </colgroup>
                                        <tbody className="k-table-tbody">
                                            <tr className="k-table-row k-master-row k-expanded">
                                                <td className="k-table-td k-hierarchy-cell"><Icon name="minus" /></td>
                                                <td className="k-table-td">1</td>
                                                <td className="k-table-td">Text</td>
                                                <td className="k-table-td">Text</td>
                                                <td className="k-table-td">Text</td>
                                                <td className="k-table-td">Text</td>
                                            </tr>
                                            <tr className="k-table-row k-detail-row">
                                                <td className="k-table-td k-hierarchy-cell"></td>
                                                <td className="k-table-td k-detail-cell" colSpan={5}>
                                                    {/* hierarchy child content */}
                                                    <div style={{ padding: "10px" }}>
                                                        Nested content
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt k-master-row">
                                                <td className="k-table-td k-hierarchy-cell">
                                                    <Icon name="plus" />
                                                </td>
                                                <td className="k-table-td">2</td>
                                                <td className="k-table-td">Text</td>
                                                <td className="k-table-td">Text</td>
                                                <td className="k-table-td">Text</td>
                                                <td className="k-table-td">Text</td>
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
                <div className="k-grid k-grid-md">
                    <div className="k-grid-aria-root">
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap">
                                <table className="k-table k-table-md k-grid-header-table">
                                    <colgroup>
                                        <col className="k-hierarchy-col" />
                                        <col style={{ width: "100px" }} />
                                        <col style={{ width: "300px" }} />
                                        <col style={{ width: "100px" }} />
                                        <col />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row">
                                            <th className="k-table-th k-hierarchy-cell k-header"></th>
                                            <th className="k-table-th k-header"></th>
                                            <th className="k-table-th k-header">Product</th>
                                            <th className="k-table-th k-header">Unit Price</th>
                                            <th className="k-table-th k-header">Qty Per Unit</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <div className="k-grid-container">
                            <div className="k-grid-content k-virtual-content">
                                <div className="k-grid-table-wrap">
                                    <table className="k-table k-table-md k-grid-table">
                                        <colgroup>
                                            <col className="k-hierarchy-col" />
                                            <col style={{ width: "100px" }} />
                                            <col style={{ width: "300px" }} />
                                            <col style={{ width: "100px" }} />
                                            <col />
                                        </colgroup>
                                        <tbody className="k-table-tbody">
                                            <tr className="k-table-row k-master-row k-expanded">
                                                <td className="k-table-td k-hierarchy-cell">
                                                    <Icon name="minus" />
                                                </td>
                                                <td className="k-table-td"><Checkbox /><label className="k-checkbox-label"></label></td>
                                                <td className="k-table-td">Chai</td>
                                                <td className="k-table-td">18</td>
                                                <td className="k-table-td">10 boxes x 20 bags</td>
                                            </tr>
                                            <tr className="k-table-row k-detail-row">
                                                <td className="k-table-td k-hierarchy-cell"></td>
                                                <td className="k-table-td k-detail-cell" colSpan={4}><div style={{ padding: "10px" }}>Nested content</div></td>
                                            </tr>
                                            <tr className="k-table-row k-table-alt-row k-alt k-master-row">
                                                <td className="k-table-td k-hierarchy-cell">
                                                    <Icon name="plus" />
                                                </td>
                                                <td className="k-table-td"><Checkbox /><label className="k-checkbox-label"></label></td>
                                                <td className="k-table-td">Chang</td>
                                                <td className="k-table-td">19</td>
                                                <td className="k-table-td">24 - 12 oz bottles</td>
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
