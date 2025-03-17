import { DialogNormal } from '../../dialog';

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

            <section>
                <DialogNormal title="Title
                        g y p
                        t d l" actionButtonsAlign="end"
                />
            </section>

            <section>
                <DialogNormal title="Cursive
                        g y p
                        t d l" actionButtonsAlign="end" actions={null}>
                Dialog without titlebar actions
                </DialogNormal>
            </section>

            <section>
                <DialogNormal title={null} actionButtonsAlign="end" >
                Dialog with empty title and actions
                </DialogNormal>
            </section>

            <section>
                <DialogNormal title={null} actionButtons={null} actions={null} >
                Dialog with empty title and no actions
                </DialogNormal>
            </section>

            <section>
                <DialogNormal title={undefined} actionButtonsAlign="end" actions={null} >
                Dialog without title
                </DialogNormal>
            </section>

            <section>
                <DialogNormal title="Scrolling" actionButtonsAlign="end" style={{ height: "220px" }} >
                    <p>Dialog content template with long text and vertical scrolling. Dialog content template with long text and vertical scrolling. Dialog content template with long text and vertical scrolling. Dialog content template with long text and vertical scrolling.</p>
                </DialogNormal>
            </section>

        </div>
    </>
);
