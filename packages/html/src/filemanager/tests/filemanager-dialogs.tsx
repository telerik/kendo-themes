import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Dialog } from '../../dialog';
import { Upload } from '../../upload';

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
                <Dialog title="Upload Files" actions={[ 'close' ]} actionButtonsAlign="end" className="k-filemanager-upload-dialog" actionButtons={
                    <>
                        <Button>Action</Button>
                        <Button themeColor="primary">Primary</Button>
                    </>
                }>
                    <Upload async empty status="upload"></Upload>
                </Dialog>

            </section>
            <span>{' '}</span>

            {/* Move/Copy Dialog */}
            <section>

                <Dialog title="Confirm" actions={[ 'close' ]} actionButtonsAlign="end" actionButtons={
                    <>
                        <Button>Action</Button>
                        <Button themeColor="primary">Primary</Button>
                    </>
                }>
                    <p>Do you want to move or copy?</p>
                </Dialog>

            </section>

            {/* Delete Dialog */}
            <section>

                <Dialog title="Confirm" actions={[ 'close' ]} actionButtonsAlign="end" actionButtons={
                    <>
                        <Button>Action</Button>
                        <Button themeColor="primary">Primary</Button>
                    </>
                }>
                    <p>Are you sure you want to delete this file?</p>
                    <p>You can&apos;t undo this action.</p>
                </Dialog>

            </section>

        </div>
    </>
);
