import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Textarea } from '../../textarea';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        width: 600px;
    }
    .k-window {
        width: 100%;
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <section>
                <div className="k-window k-editor-dialog k-editor-table-wizard-dialog">
                    <div className="k-window-titlebar">
                        <span className="k-window-title">Table Wizard</span>
                        <div className="k-window-actions">
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-window-content">
                        <div className="k-tabstrip k-tabstrip-top">
                            <div className="k-tabstrip-items-wrapper k-hstack">
                                <ul className="k-tabstrip-items k-reset">
                                    <li className="k-item k-first"><span className="k-loading k-complete"></span><span className="k-link">Table</span></li>
                                    <li className="k-item"><span className="k-loading k-complete"></span><span className="k-link">Cell</span></li>
                                    <li className="k-item k-last k-tab-on-top k-active"><span className="k-loading k-complete"></span><span className="k-link">Accessibility</span></li>
                                </ul>
                            </div>
                            <div className="k-tabstrip-content k-active">
                                <div className="k-form k-form-md k-form-horizontal">
                                    <div className="k-form-field">
                                        <div className="k-form-label">
                                            <label>Header Rows</label>
                                        </div>
                                        <div className="k-form-field-wrap">
                                            <NumericTextbox />
                                        </div>
                                    </div>
                                    <div className="k-form-field">
                                        <div className="k-form-label">
                                            <label>Header Cols</label>
                                        </div>
                                        <div className="k-form-field-wrap">
                                            <NumericTextbox />
                                        </div>
                                    </div>
                                    <div className="k-form-field">
                                        <div className="k-form-label">
                                            <label>Caption</label>
                                        </div>
                                        <div className="k-form-field-wrap">
                                            <Textbox />
                                        </div>
                                    </div>
                                    <div className="k-form-field">
                                        <div className="k-form-label">
                                            <label>Alignment</label>
                                        </div>
                                        <div className="k-form-field-wrap">
                                            <DropdownList className="k-align" showValue={false} value="Remove align" valueIconName="align-remove" style={{ width: "min-content" }} />
                                        </div>
                                    </div>
                                    <div className="k-form-field">
                                        <div className="k-form-label">
                                            <label>Summary</label>
                                        </div>
                                        <div className="k-form-field-wrap">
                                            <Textarea className="k-editor-accessibility-summary" placeholder="Summary attribute is not HTML5 compatible." />
                                        </div>
                                    </div>
                                    <div className="k-form-field">
                                        <div className="k-form-label">
                                            <label>Associate headers</label>
                                        </div>
                                        <div className="k-form-field-wrap">
                                            <DropdownList value="None" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ActionButtons className="k-window-buttons" alignment="end">
                        <Button>Cancel</Button>
                        <Button themeColor="primary">Update</Button>
                    </ActionButtons>
                </div>
            </section>
        </div>
    </>
);
