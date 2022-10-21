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
            <div className="k-grid k-grid-md telerik-blazor">
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table className="k-table k-table-md k-grid-header-table" role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                            </colgroup>
                            <thead className="k-table-thead">
                                <tr className="k-table-row">
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <Checkbox />
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        Name
                                        <div className="k-grid-filter">
                                            <Icon name="filter" />
                                        </div>
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        Command
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-container">
                    <div className="k-grid-content k-virtual-content">
                        <div className="k-pos-relative">
                            <div className="k-virtual-position">
                                <table role="grid" className="k-table k-table-md k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                Product1
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                Product2
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="k-height-container">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Sortable</h3>
            <div className="k-grid k-grid-md telerik-blazor">
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table className="k-table k-table-md k-grid-header-table" role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                            </colgroup>
                            <thead className="k-table-thead">
                                <tr className="k-table-row">
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <Checkbox />
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">
                                                    Name
                                                </span>
                                                <span className="k-sort-icon"><Icon name="sort-asc-small" /></span>
                                            </span>
                                            <span className="k-sort-status" style={{ position: "absolute", left: "-10000px" }}>Sorted in ascending order</span>
                                        </span>
                                        <div className="k-grid-filter">
                                            <Icon name="filter" />
                                        </div>
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        Command
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-container">
                    <div className="k-grid-content k-virtual-content">
                        <div className="k-pos-relative">
                            <div className="k-virtual-position">
                                <table role="grid" className="k-table k-table-md k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                Product1
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                Product2
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="k-height-container">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Sortable & Resizable</h3>
            <div className="k-grid k-grid-md telerik-blazor">
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table className="k-table k-table-md k-grid-header-table" role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                            </colgroup>
                            <thead className="k-table-thead">
                                <tr className="k-table-row">
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <Checkbox />
                                        <span className="k-column-resizer" style={{ right: '0px', cursor: "col-resize" }}></span>
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">
                                                    Name
                                                </span>
                                            </span>
                                        </span>
                                        <div className="k-grid-filter">
                                            <Icon name="filter" />
                                        </div>
                                        <span className="k-column-resizer" style={{ right: '0px', cursor: "col-resize" }}></span>
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        Command
                                        <span className="k-column-resizer" style={{ right: '0px', cursor: "col-resize" }}></span>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-container">
                    <div className="k-grid-content k-virtual-content">
                        <div className="k-pos-relative">
                            <div className="k-virtual-position">
                                <table role="grid" className="k-table k-table-md k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                Product1
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                Product2
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="k-height-container">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
