import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Toolbar, ToolbarSeparator } from '../../toolbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Resize Pane</h4>
            <div className="k-widget k-imageeditor">

                {/* Header */}
                <div className="k-imageeditor-header">
                    <Toolbar className="k-imageeditor-toolbar">
                        <Button icon="upload"></Button>
                        <Button icon="download"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="undo"></Button>
                        <Button icon="redo"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="crop"></Button>
                        <Button icon="image-resize"></Button>
                        <Button icon="zoom-in"></Button>
                        <Button icon="zoom-out"></Button>
                        <div>
                            <DropdownList value="Zoom options" />
                        </div>
                    </Toolbar>
                </div>

                {/* Content */}
                <div className="k-imageeditor-content" style={{ height: "482px" }}>

                    <div className="k-imageeditor-canvas-container">
                        <div className="k-imageeditor-canvas">
                            <canvas width="61" height="68" style={{ height: "68px" }}></canvas>
                        </div>
                    </div>

                    <div className="k-imageeditor-action-pane">
                        <div className="k-imageeditor-pane-form k-widget k-form k-form-md">
                            <fieldset className="k-form-fieldset">
                                <legend className="k-form-legend">Resize image</legend>
                                <div className="k-form-layout k-d-grid k-grid-cols-2" style={{ gap: "0px 8px" }}>
                                    <div className="k-form-field  k-col-span-1-1 k-col-span-1">
                                        <label className="k-label k-form-label">Width:</label>
                                        <div className="k-form-field-wrap">
                                            <NumericTextbox showClearButton={false} value="61" />
                                        </div>
                                    </div>
                                    <div className="k-form-field k-colspan-1 k-col-span-1">
                                        <label className="k-label k-form-label">&nbsp;</label>
                                        <div className="k-form-field-wrap">
                                            <DropdownList value="Pixels" />
                                        </div>
                                    </div>
                                    <div className="k-form-field k-colspan-1 k-col-span-1">
                                        <label className="k-label k-form-label">Height:</label>
                                        <div className="k-form-field-wrap">
                                            <NumericTextbox showClearButton={false} value="68" />
                                        </div>
                                    </div>
                                    <div className="k-form-field k-colspan-1 k-col-span-1">
                                        <label className="k-label k-form-label">&nbsp;</label>
                                        <div className="k-form-field-wrap">
                                            <DropdownList value="Pixels" />
                                        </div>
                                    </div>
                                    <div className="k-form-field k-colspan-2 k-col-span-2">
                                        <label className="k-label k-form-label">Lock aspect ratio:</label>
                                        <div className="k-form-field-wrap">
                                            <Checkbox />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="k-form-buttons">
                                <Button>Cancel</Button>
                                <Button themeColor="primary">Confirm</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </>
);
