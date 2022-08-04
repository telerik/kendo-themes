import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Toolbar } from '../../toolbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">
            <div className="k-grid k-widget telerik-blazor">
                <Toolbar className="k-grid-toolbar">
                    <Button icon="add">Add</Button>
                </Toolbar>
                <div className="k-grouping-header">
                    Drag a column header and drop it here to group by that column
                </div>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead role="rowgroup">
                                <tr role="row">
                                    <th className="k-header" colSpan={1}>
                                        <Checkbox />
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        Id
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        Name
                                    </th>
                                    <th className="k-header" colSpan={1}>
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
                                <table role="grid" className="k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
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
                                                1
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
                                                2
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
        </div>
    </>
);
