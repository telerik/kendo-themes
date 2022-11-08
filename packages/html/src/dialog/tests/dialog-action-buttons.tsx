import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dialog } from '../../dialog';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-dialog {
        position: relative;
        width: 300px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <Dialog title="Title" actions={[ 'close' ]} actionButtons actionButtonsAlign="start">
                Action Buttons at start position
            </Dialog>

            <Dialog title="Title" actions={[ 'close' ]} actionButtons actionButtonsAlign="center">
                Action Buttons at center position
            </Dialog>

            <Dialog title="Title" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                Action Buttons at end position
            </Dialog>

            <Dialog title="Title" actions={[ 'close' ]} actionButtons actionButtonsAlign="stretched">
                Action Buttons with stretched position
            </Dialog>

        </div>
    </>
);
