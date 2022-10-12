import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { Toolbar } from '../../toolbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">

            <div className="k-widget k-grid k-grid-no-scrollbar">
                <Toolbar className="k-grid-toolbar">
                    <Button>Add new</Button>
                    <Button>Save Changes</Button>
                    <Button>Cancel Changes</Button>
                </Toolbar>
                <div className="k-grid-aria-root">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col /><col /><col /><col style={{ width: "300px" }} />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="k-header"><a className="k-link">Name<span></span></a></th>
                                        <th className="k-header"><a className="k-link">Price<span></span></a></th>
                                        <th className="k-header"><a className="k-link">Available<span></span></a></th>
                                        <th className="k-header"></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container">
                        <div className="k-grid-content">
                            <div>
                                <table className="k-grid-table">
                                    <colgroup>
                                        <col /><col /><col /><col style={{ width: "300px" }} />
                                    </colgroup>
                                    <tbody>
                                        <tr className="k-grid-add-row k-grid-edit-row">
                                            <td>
                                                <Textbox value="Towel" />
                                            </td>
                                            <td>
                                                <NumericTextbox value="42" />
                                            </td>
                                            <td><Checkbox /></td>
                                            <td className="k-command-cell">
                                                <Button>Add</Button>
                                                <Button>Cancel</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Chai</td>
                                            <td>18</td>
                                            <td>false</td>
                                            <td className="k-command-cell">
                                                <Button>Remove</Button>
                                            </td>
                                        </tr>
                                        <tr className="k-alt">
                                            <td>Chang</td>
                                            <td>19</td>
                                            <td>false</td>
                                            <td className="k-command-cell">
                                                <Button>Remove</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="k-widget k-grid k-grid-no-scrollbar">
                <Toolbar className="k-grid-toolbar">
                    <Button icon="add">Add new record</Button>
                </Toolbar>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table>
                            <colgroup>
                                <col /><col /><col /><col style={{ width: "300px" }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col" className="k-header">Name</th>
                                    <th scope="col" className="k-header">Price</th>
                                    <th scope="col" className="k-header">Available</th>
                                    <th scope="col" className="k-header">&nbsp;</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-content">
                    <table style={{ height: 'auto' }}>
                        <colgroup>
                            <col /><col /><col /><col style={{ width: "300px" }} />
                        </colgroup>
                        <tbody>
                            <tr className="k-grid-edit-row">
                                <td>
                                    <Textbox value="Towel" required />
                                </td>
                                <td>
                                    <NumericTextbox invalid />
                                    <div className="k-tooltip k-validator-tooltip k-tooltip-error k-invalid-msg"><Icon className="k-tooltip-icon" name="warning" /><span className="k-tooltip-content">Price</span><div className="k-callout k-callout-n"></div></div>
                                </td>
                                <td><Checkbox id="e77452cd-b3b5-4dc9-8210-17007584b695" /><label className="k-checkbox-label" htmlFor="e77452cd-b3b5-4dc9-8210-17007584b695"></label></td>
                                <td className="k-command-cell">
                                    <Button icon="check" themeColor="primary">Update</Button>
                                    <Button icon="cancel">Cancel</Button>
                                </td>
                            </tr>
                            <tr className="k-alt k-grid-edit-row">
                                <td className="k-dirty-cell">
                                    <span className="k-dirty"></span>
                                    LongSingleWordTestLongSingleWordTestLongSingleWordTestLongSingleWordTest
                                </td>
                                <td>18</td>
                                <td>false</td>
                                <td className="k-command-cell">
                                    <Button icon="edit">Edit</Button>
                                    <Button icon="close">Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Chang</td>
                                <td>19</td>
                                <td>false</td>
                                <td className="k-command-cell">
                                    <Button icon="edit">Edit</Button>
                                    <Button icon="close">Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
);
