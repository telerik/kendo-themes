import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">
            <h3>Edit Row</h3>
            <div className="k-grid k-widget telerik-blazor">
                <div className="k-toolbar k-grid-toolbar">
                    <Button icon="add">Add</Button>
                </div>
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
                                        <Checkbox />
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
                        <div style={{ position: "relative" }}>
                            <div className="k-virtual-position">
                                <table role="grid" className="k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody role="rowgroup">
                                        <tr role="row" className="k-master-row k-grid-edit-row">
                                            <td colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td colSpan={0} className=" k-grid-edit-cell">
                                                <Textbox />
                                            </td>
                                            <td className="k-command-cell   " colSpan={0}>
                                                <span className="k-d-flex k-gap-1">
                                                    <Button icon="save">Update</Button>
                                                    <Button icon="cancel">Cancel</Button>
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
                                                <span className="k-d-flex k-gap-1">
                                                    <Button icon="edit">Edit</Button>
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
            <h3>New Row</h3>
            <div className="k-grid k-widget telerik-blazor">
                <div className="k-toolbar k-grid-toolbar">
                    <Button icon="add">Add</Button>
                </div>
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
                                        <Checkbox />
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
                        <div style={{ position: "relative" }}>
                            <div className="k-virtual-position">
                                <table role="grid" className="k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody role="rowgroup">
                                        <tr role="row" className="k-master-row k-grid-add-row k-grid-edit-row">
                                            <td colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td colSpan={0} className=" k-grid-edit-cell">
                                                <Textbox />
                                            </td>
                                            <td className="k-command-cell" colSpan={0}>
                                                <span className="k-d-flex k-gap-1">
                                                    <Button icon="save">Update</Button>
                                                    <Button icon="cancel">Cancel</Button>
                                                </span>
                                            </td>
                                        </tr>
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
                                                <span className="k-d-flex k-gap-1">
                                                    <Button icon="edit">Edit</Button>
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
                                                <span className="k-d-flex k-gap-1">
                                                    <Button icon="edit">Edit</Button>
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
