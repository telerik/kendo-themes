import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dialog } from '../../dialog';


const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-dialog {
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <Dialog title="Title
                        g y p
                        t d l" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                Dialog content template
            </Dialog>

            <Dialog title="Cursive
                        g y p
                        t d l" actionButtons actionButtonsAlign="end">
                Dialog without titlebar actions
            </Dialog>

            <Dialog title="" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                Dialog with empty title and actions
            </Dialog>

            <Dialog title="">
                Dialog with empty title and no actions
            </Dialog>

            <Dialog actionButtons actionButtonsAlign="end">
                Dialog without title
            </Dialog>

            <Dialog title="Scrolling" actions={[ 'close' ]} actionButtons actionButtonsAlign="end" style={{ height: "170px" }}>
                <p>Dialog content template with long text and vertical scrolling.</p>
                <p>Dialog content template with long text and vertical scrolling.</p>
                <p>Dialog content template with long text and vertical scrolling.</p>
            </Dialog>

        </div>
    </>
);
