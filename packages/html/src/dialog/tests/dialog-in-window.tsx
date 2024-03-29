import { WindowNormal } from '../../window';
import { DialogNormal } from '../../dialog';


const styles = `
    #test-area {
        width: 500px;
        transform: translate( 0, 0 );
    }
    .k-window {
        width: 100%;
        height: 400px;
        position: relative;
    }
    .k-dialog {
        width: 300px;
        height: 200px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>

                <WindowNormal title="Window with dialog" className="k-window-wrapper">
                    Window content
                    <DialogNormal title="Dialog in window" actionButtons={null} />
                </WindowNormal>
            </section>
        </div>
    </>
);
