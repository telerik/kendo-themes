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
            <div dir="ltr" className="k-widget k-grid">
                <div className="k-toolbar k-grid-toolbar">
                    <Button icon="add">Add</Button>
                </div>
                <div className="k-grid-aria-root" role="grid">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr role="row">
                                        <th className="k-header" rowSpan={1} colSpan={1}><Checkbox /></th>
                                        <th className="k-header" rowSpan={1} colSpan={1}>Name</th>
                                        <th className="k-header" rowSpan={1} colSpan={1}>Command</th>
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
                                        <col style={{ width: '50px' }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr className="k-grid-edit-row" role="row">
                                            <td className="k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-touch-action-auto" colSpan={1}>
                                                <Textbox />
                                            </td>
                                            <td className="k-touch-action-auto k-command-cell" colSpan={1}>
                                                <Button>Update</Button>
                                                <Button>Cancel</Button>
                                            </td>
                                        </tr>
                                        <tr className="k-alt" role="row">
                                            <td className="k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-touch-action-auto" colSpan={1}>Product2</td>
                                            <td className="k-touch-action-auto k-command-cell" colSpan={1}>
                                                <Button>Edit</Button>
                                                <Button>Remove</Button>
                                            </td>
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
            <h3>New Row</h3>
            <div dir="ltr" className="k-widget k-grid">
                <div className="k-toolbar k-grid-toolbar">
                    <Button icon="add">Add</Button>
                </div>
                <div className="k-grid-aria-root" role="grid">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr role="row">
                                        <th className="k-header" rowSpan={1} colSpan={1}><Checkbox /></th>
                                        <th className="k-header" rowSpan={1} colSpan={1}>Name</th>
                                        <th className="k-header" rowSpan={1} colSpan={1}>Command</th>
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
                                        <col style={{ width: '50px' }} />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr className="k-grid-add-row k-grid-edit-row" role="row">
                                            <td colSpan={1}></td>
                                            <td colSpan={1}>
                                                <Textbox />
                                            </td>
                                            <td colSpan={1} className="k-command-cell">
                                                <Button>Add</Button>
                                                <Button>Discard changes</Button>
                                            </td>
                                        </tr>
                                        <tr role="row">
                                            <td className="k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-touch-action-auto" colSpan={1}>Product1</td>
                                            <td className="k-touch-action-auto k-command-cell" colSpan={1}>
                                                <Button>Edit</Button>
                                                <Button>Remove</Button>
                                            </td>
                                        </tr>
                                        <tr className="k-alt" role="row">
                                            <td className="k-touch-action-auto" colSpan={1}><Checkbox /></td>
                                            <td className="k-touch-action-auto" colSpan={1}>Product2</td>
                                            <td className="k-touch-action-auto k-command-cell" colSpan={1}>
                                                <Button>Edit</Button>
                                                <Button>Remove</Button>
                                            </td>
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
