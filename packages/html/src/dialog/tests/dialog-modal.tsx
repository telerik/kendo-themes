import { DialogNonModal, DialogNormal } from '../../dialog';


const styles = `
    .k-dialog {
        width: 300px;
        height: 200px;
    }

    section {
        height: 250px;
        transform: translate( 0, 0 );
    }

    .non-modal-section {
        border: dashed 1px gray;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <section>
                <DialogNormal actionButtonsAlign="end" >
                    Dialog Modal (default)
                </DialogNormal>
            </section>

            <section className="non-modal-section">
                <DialogNonModal actionButtonsAlign="end" >
                    Dialog Non-Modal
                </DialogNonModal>
            </section>
        </div>
    </>
);
