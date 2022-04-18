import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-dialog {
        width: 100%;
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            {/* Upload Dialog */}
            <section>
                <div className="k-window k-dialog k-filemanager-upload-dialog">
                    <div className="k-window-titlebar k-dialog-titlebar">
                        <span className="k-window-title k-dialog-title">Upload Files</span>
                        <div className="k-window-actions k-dialog-actions">
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-window-content k-dialog-content">
                        <div className="k-upload k-upload-async k-upload-empty">
                            <div className="k-dropzone">
                                <Button className="k-upload-button">Select files...</Button>
                                <em className="k-dropzone-hint">Drop files here to upload</em>
                            </div>
                        </div>
                    </div>
                    <ActionButtons className="k-dialog-buttongroup" alignment="end">
                        <Button>Clear List</Button>
                        <Button themeColor="primary">Done</Button>
                    </ActionButtons>
                </div>
            </section>
            <span>{' '}</span>

            {/* Move/Copy Dialog */}
            <section>
                <div className="k-window k-dialog">
                    <div className="k-window-titlebar k-dialog-titlebar">
                        <span className="k-window-title k-dialog-title">Confirm</span>
                        <div className="k-window-actions k-dialog-actions">
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-window-content k-dialog-content k-text-center">
                        <p>Do you want to move or copy?</p>
                    </div>
                    <ActionButtons className="k-dialog-buttongroup" alignment="end">
                        <Button>Move</Button>
                        <Button themeColor="primary">Copy</Button>
                    </ActionButtons>
                </div>
            </section>

            {/* Delete Dialog */}
            <section>
                <div className="k-window k-dialog">
                    <div className="k-window-titlebar k-dialog-titlebar">
                        <span className="k-window-title k-dialog-title">Confirm</span>
                        <div className="k-window-actions k-dialog-actions">
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-window-content k-dialog-content k-text-center">
                        <p>Are you sure you want to delete this file?</p>
                        <p>You can&apos;t undo this action.</p>
                    </div>
                    <ActionButtons className="k-dialog-buttongroup" alignment="end">
                        <Button>Cancel</Button>
                        <Button themeColor="primary">Delete</Button>
                    </ActionButtons>
                </div>
            </section>

        </div>
    </>
);
