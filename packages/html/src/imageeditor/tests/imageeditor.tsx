import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { DropdownList } from '../../dropdownlist';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor</h4>
            <div className="k-widget k-imageeditor">

                {/* Header */}
                <div className="k-imageeditor-header">
                    <div className="k-imageeditor-toolbar k-toolbar k-widget">
                        <Button icon="upload"></Button>
                        <Button icon="download"></Button>
                        <div className="k-separator"></div>
                        <Button icon="undo"></Button>
                        <Button icon="redo"></Button>
                        <div className="k-separator"></div>
                        <Button icon="crop"></Button>
                        <Button icon="image-resize"></Button>
                        <Button icon="zoom-in"></Button>
                        <Button icon="zoom-out"></Button>
                        <div>
                            <DropdownList value="Zoom options" />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="k-imageeditor-content" style={{ height: "250px" }}>
                    <div className="k-imageeditor-canvas-container">
                        <div className="k-imageeditor-canvas"></div>
                    </div>
                    <div className="k-imageeditor-action-pane" hidden></div>
                </div>
            </div>
        </div>
    </>
);
