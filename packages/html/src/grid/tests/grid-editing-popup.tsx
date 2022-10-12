import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        width: 500px;
    }
    .k-window {
        width: 100%;
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <div className="k-window">
                    <div className="k-window-titlebar">
                        <span className="k-window-title">Edit</span>
                        <div className="k-window-actions">
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-window-content">
                        <div className="k-form k-form-md k-form-horizontal">
                            <div className="k-form-field">
                                <div className="k-form-label">
                                    <label htmlFor="ProductName">Product Name</label>
                                </div>
                                <div className="k-form-field-wrap">
                                    <Textbox value="Chai" />
                                </div>
                            </div>
                            <div className="k-form-field">
                                <div className="k-form-label">
                                    <label htmlFor="UnitPrice">Unit Price</label>
                                </div>
                                <div className="k-form-field-wrap">
                                    <NumericTextbox />
                                    <div className="k-tooltip k-tooltip-error k-validator-tooltip k-invalid-msg">
                                        <Icon className="k-tooltip-icon" name="warning" />
                                        <span className="k-tooltip-content">Unit Price is required</span>
                                        <span className="k-callout k-callout-n"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="k-form-field">
                                <div className="k-form-label">
                                    <label htmlFor="UnitsInStock">Units In Stock</label>
                                </div>
                                <div className="k-form-field-wrap">
                                    <NumericTextbox />
                                </div>
                            </div>
                            <div className="k-form-field">
                                <div className="k-form-label">
                                    <label htmlFor="Discontinued">Discontinued</label>
                                </div>
                                <div className="k-form-field-wrap">
                                    <Checkbox id="Discontinued" />
                                    <label className="k-checkbox-label">&#8203;</label>
                                </div>
                            </div>
                            <div className="k-form-field">
                                <div className="k-form-label">
                                    <label htmlFor="files">Files</label>
                                </div>
                                <div className="k-form-field-wrap">
                                    <div className="k-widget k-upload k-header k-upload-sync">
                                        <div className="k-dropzone">
                                            <Button className="k-upload-button">Select files...</Button>
                                        </div>
                                        <ul className="k-upload-files k-reset">
                                            <li className="k-file">
                                                <div className="k-progressbar k-hidden">
                                                    <span className="k-progress" style={{ width: '100%' }}></span>
                                                </div>
                                                <span className="k-file-group-wrapper">
                                                    <Icon className="k-file-group" name="file-image" />
                                                    <span className="k-file-state"></span>
                                                </span>
                                                <span className="k-file-name-size-wrapper">
                                                    <span className="k-file-name">67409197_2322469807839836_4126207508270284800_n.png</span>
                                                    <span className="k-file-size">24.34 KB</span>
                                                </span>
                                                <strong className="k-upload-status">
                                                    <Button fillMode="flat" icon="close" className="k-upload-action"></Button>
                                                </strong>
                                            </li>
                                        </ul>
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
