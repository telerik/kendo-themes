import { DialogNormal } from '../../dialog';


const styles = `
    .k-dialog {
        position: relative;
        width: 300px;
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

            <section>
                <DialogNormal actionButtonsAlign="start">
                Action Buttons at start position
                </DialogNormal>
            </section>

            <section>
                <DialogNormal actionButtonsAlign="center">
                Action Buttons at center position
                </DialogNormal>
            </section>

            <section>
                <DialogNormal actionButtonsAlign="end">
                Action Buttons at end position
                </DialogNormal>
            </section>

            <section>
                <DialogNormal>
                Action Buttons with stretched position
                </DialogNormal>
            </section>

        </div>
    </>
);
