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
            <div className="k-grid k-widget telerik-blazor">
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                            </colgroup>
                            <thead role="rowgroup">
                                <tr role="row">
                                    <th className="k-header" colSpan={1}>
                                        <Checkbox/>
                                        <span className="k-grid-header-menu k-grid-filter-menu">
                                            <Icon name="more-vertical" />
                                        </span>
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        Name
                                        <span className="k-grid-header-menu k-grid-filter-menu">
                                            <Icon name="more-vertical" />
                                        </span>
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        Command
                                        <span className="k-grid-header-menu k-grid-filter-menu">
                                            <Icon name="more-vertical" />
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-container">
                    <div className="k-grid-content k-virtual-content">
                        <div style={{ position: "relative" }}>
                            <div className="k-virtual-position">
                                <table role="grid" className="k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody role="rowgroup">
                                        <tr role="row" className="k-master-row">
                                            <td colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td colSpan={0}>
                                                Product1
                                            </td>
                                            <td className="k-command-cell" colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-master-row k-alt">
                                            <td colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td colSpan={0}>
                                                Product2
                                            </td>
                                            <td className="k-command-cell   " colSpan={0}>
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

            <div className="k-grid k-widget telerik-blazor">
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                            </colgroup>
                            <thead role="rowgroup">
                                <tr role="row">
                                    <th className="k-header" colSpan={1}>
                                        <Checkbox/>
                                        <span className="k-grid-header-menu k-grid-filter-menu">
                                            <Icon name="more-vertical" />
                                        </span>
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">
                                                    Name
                                                </span>
                                                <Icon name="sort-asc-sm" />
                                            </span>
                                            <span className="k-sort-status" style={{ position: "absolute", left: "-10000px" }}>Sorted in ascending order</span>
                                        </span>
                                        <span className="k-grid-header-menu k-grid-filter-menu">
                                            <Icon name="more-vertical" />
                                        </span>
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        Command
                                        <span className="k-grid-header-menu k-grid-filter-menu">
                                            <Icon name="more-vertical" />
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-container">
                    <div className="k-grid-content k-virtual-content">
                        <div style={{ position: "relative" }}>
                            <div className="k-virtual-position">
                                <table role="grid" className="k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody role="rowgroup">
                                        <tr role="row" className="k-master-row">
                                            <td colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td colSpan={0}>
                                                Product1
                                            </td>
                                            <td className="k-command-cell   " colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-master-row k-alt">
                                            <td colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td colSpan={0}>
                                                Product2
                                            </td>
                                            <td className="k-command-cell   " colSpan={0}>
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

            <div className="k-grid k-widget telerik-blazor">
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                            </colgroup>
                            <thead role="rowgroup">
                                <tr role="row"></tr>
                                <tr role="row">
                                    <th className="k-header" colSpan={1}>
                                        <Checkbox/>
                                        <span className="k-grid-header-menu k-grid-filter-menu">
                                            <Icon name="more-vertical" />
                                        </span>
                                        <span className="k-column-resizer" style={{ right: '0px', cursor: "col-resize" }}></span>
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">
                                                    Name
                                                </span>
                                            </span>
                                        </span>
                                        <span className="k-grid-header-menu k-grid-filter-menu">
                                            <Icon name="more-vertical" />
                                        </span>
                                        <span className="k-column-resizer" style={{ right: '0px', cursor: "col-resize" }}></span>
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        Command
                                        <span className="k-grid-header-menu k-grid-filter-menu">
                                            <Icon name="more-vertical" />
                                        </span>
                                        <span className="k-column-resizer" style={{ right: '0px', cursor: "col-resize" }}></span>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-container">
                    <div className="k-grid-content k-virtual-content">
                        <div style={{ position: "relative" }}>
                            <div className="k-virtual-position">
                                <table role="grid" className="k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody role="rowgroup">
                                        <tr role="row" className="k-master-row">
                                            <td colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td colSpan={0}>
                                                Product1
                                            </td>
                                            <td className="k-command-cell   " colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-master-row k-alt">
                                            <td colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td colSpan={0}>
                                                Product2
                                            </td>
                                            <td className="k-command-cell" colSpan={0}>
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
