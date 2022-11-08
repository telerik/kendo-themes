import React from 'react';
import ReactDOM from 'react-dom/client';
import { Window } from '../../window';
import { Dialog } from '../../dialog';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

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

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>

                <Window title="Window with dialog" actions={[ 'window-minimize', 'window-maximize', 'close' ]} className="k-window-wrapper">
                    Window content
                    <div className="k-dialog-wrapper">
                        <div className="k-overlay"></div>
                        <Dialog title="Dialog in window" actions={[ 'close' ]}>
                            Dialog content
                        </Dialog>
                    </div>
                </Window>
            </section>
        </div>
    </>
);
