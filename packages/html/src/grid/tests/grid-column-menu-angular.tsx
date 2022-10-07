import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">
            <div dir="ltr" className="k-grid k-grid-md">
                <div className="k-grid-aria-root" role="grid">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header k-filterable" rowSpan={1} colSpan={1}>
                                            <div><a className="k-grid-header-menu k-grid-filter-menu" href="#"><Icon name="more-vertical" /></a></div><Checkbox />
                                        </th>
                                        <th className="k-table-th k-header k-filterable" rowSpan={1} colSpan={1}>
                                            <div><a className="k-grid-header-menu k-grid-filter-menu" href="#"><Icon name="more-vertical" /></a></div>Name
                                        </th>
                                        <th className="k-table-th k-header k-filterable" rowSpan={1} colSpan={1}>
                                            <div><a className="k-grid-header-menu k-grid-filter-menu" href="#"><Icon name="more-vertical" /></a></div>Command
                                        </th>
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
                                        <col style={{ width: '50px' }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row">
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}>Product1</td>
                                            <td className="k-table-td k-touch-action-auto k-command-cell" colSpan={1}><Button icon="trash">Delete</Button></td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt">
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}>Product2</td>
                                            <td className="k-table-td k-touch-action-auto k-command-cell" colSpan={1}><Button icon="trash">Delete</Button></td>
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
            <h3>Sortable</h3>
            <div dir="ltr" className="k-grid k-grid-md">
                <div className="k-grid-aria-root" role="grid">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header k-filterable" rowSpan={1} colSpan={1}>
                                            <div><a className="k-grid-header-menu k-grid-filter-menu" href="#"><Icon name="more-vertical" /></a></div><Checkbox />
                                        </th>
                                        <th className="k-table-th k-header k-filterable" rowSpan={1} colSpan={1}><span className="k-cell-inner"><span className="k-link"><span className="k-column-title">Name</span><span></span></span><span className="k-sort-status" role="status" style={{ position: "absolute", left: "-10000px" }}></span>
                                            <div><a className="k-grid-header-menu k-grid-filter-menu" href="#"><Icon name="more-vertical" /></a></div></span></th>
                                        <th className="k-table-th k-header k-filterable" rowSpan={1} colSpan={1}>
                                            <div><a className="k-grid-header-menu k-grid-filter-menu" href="#"><Icon name="more-vertical" /></a></div>Command
                                        </th>
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
                                        <col style={{ width: '50px' }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row">
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}>Product1</td>
                                            <td className="k-table-td k-touch-action-auto k-command-cell" colSpan={1}><Button icon="trash">Delete</Button></td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt">
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}>Product2</td>
                                            <td className="k-table-td k-touch-action-auto k-command-cell" colSpan={1}><Button icon="trash">Delete</Button></td>
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
            <h3>Sortable &amp; Resizable</h3>
            <div dir="ltr" className="k-grid k-grid-md">
                <div className="k-grid-aria-root" role="grid">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header k-filterable" rowSpan={1} colSpan={1}>
                                            <div><a className="k-grid-header-menu k-grid-filter-menu" href="#"><Icon name="more-vertical" /></a></div><Checkbox />
                                        </th>
                                        <th className="k-table-th k-header k-filterable" rowSpan={1} colSpan={1}><span className="k-cell-inner"><span className="k-link"><span className="k-column-title">Name</span><span></span></span><span className="k-sort-status" role="status" style={{ position: "absolute", left: "10000px" }}></span>
                                            <div><a className="k-grid-header-menu k-grid-filter-menu" href="#"><Icon name="more-vertical" /></a></div></span></th>
                                        <th className="k-table-th k-header k-filterable" rowSpan={1} colSpan={1}>
                                            <div><a className="k-grid-header-menu k-grid-filter-menu" href="#"><Icon name="more-vertical" /></a></div>Command
                                        </th>
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
                                        <col style= {{ width: '50px' }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row">
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}>Product1</td>
                                            <td className="k-table-td k-touch-action-auto k-command-cell" colSpan={1}><Button icon="trash">Delete</Button></td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt">
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-table-td k-touch-action-auto" colSpan={1}>Product2</td>
                                            <td className="k-table-td k-touch-action-auto k-command-cell" colSpan={1}><Button icon="trash">Delete</Button></td>
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
        </div>
    </>
);
