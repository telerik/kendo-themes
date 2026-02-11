import { Dialog } from '../../dialog/dialog.spec';
import { DialogNormal } from '../../dialog/templates/dialog-normal';

const styles = `
    .k-dialog {
        width: 270px
    }

    section {
        height: 250px;
        transform: translate( 0, 0 );
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            {Dialog.options.themeColor.map((themeColor) => (
                <section>
                    <DialogNormal themeColor={themeColor} actionButtonsAlign="end" >
                        Dialog with <b>{`${themeColor}`}</b> theme color
                    </DialogNormal>
                </section>
            ))}
        </div>
    </>
);
