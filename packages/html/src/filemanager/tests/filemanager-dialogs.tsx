import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dialog } from '../../dialog';
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

                <Dialog title="Upload Files" actions={[ 'close' ]} actionButtons actionButtonsAlign="end" className="k-filemanager-upload-dialog">
                    <div className="k-upload k-upload-async k-upload-empty">
                        <div className="k-dropzone">
                            <Button className="k-upload-button">Select files...</Button>
                            <em className="k-dropzone-hint">Drop files here to upload</em>
                        </div>
                    </div>
                </Dialog>

            </section>
            <span>{' '}</span>

            {/* Move/Copy Dialog */}
            <section>

                <Dialog title="Confirm" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                    <p>Do you want to move or copy?</p>
                </Dialog>

            </section>

            {/* Delete Dialog */}
            <section>

                <Dialog title="Confirm" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                    <p>Are you sure you want to delete this file?</p>
                    <p>You can&apos;t undo this action.</p>
                </Dialog>

            </section>

        </div>
    </>
);
