import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dialog } from '../../dialog';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        width: 500px;
        height: 400px;
        transform: translate( 0, 0 );
    }
    .k-dialog {
        width: 300px;
        height: 200px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-grid-cols-1">
            <div className="k-dialog-wrapper">
                <div className="k-overlay"></div>
                <Dialog title="Title" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                    Dialog content template
                </Dialog>
            </div>
        </div>
    </>
);
