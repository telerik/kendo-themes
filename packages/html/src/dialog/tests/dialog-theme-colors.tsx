import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dialog } from '..';


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

            <Dialog title="Title" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                Dialog with default theme color
            </Dialog>

            <Dialog themeColor="primary" title="Title" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                Dialog with primary theme color
            </Dialog>

            <Dialog themeColor="dark" title="Title" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                Dialog with dark theme color
            </Dialog>

            <Dialog themeColor="light" title="Title" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                Dialog with light theme color
            </Dialog>
        </div>
    </>
);
