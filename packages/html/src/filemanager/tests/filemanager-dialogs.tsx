import { Button } from '../../button';
import { DialogNormal } from '../../dialog';
import { UploadNormal } from '../../upload';


const styles = `
    .k-dialog {
        width: 430px;
    }

    section {
        height: 250px;
        transform: translate( 0, 0 );
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            {/* Upload Dialog */}
            <section>
                <DialogNormal title="Upload Files" actions={[ 'x' ]} actionButtonsAlign="start" className="k-filemanager-upload-dialog" actionButtons={
                    <>
                        <Button themeColor="primary">Upload</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <UploadNormal empty status="upload"/>
                </DialogNormal>

            </section>

            {/* Move/Copy Dialog */}
            <section>

                <DialogNormal title="Confirm" actions={[ 'x' ]} actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Confirm</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <p>Do you want to move or copy?</p>
                </DialogNormal>

            </section>

            {/* Delete Dialog */}
            <section>

                <DialogNormal title="Confirm" actions={[ 'x' ]} actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Confirm</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <p>Are you sure you want to delete this file?</p>
                    <p>You can&apos;t undo this action.</p>
                </DialogNormal>

            </section>

        </div>
    </>
);
