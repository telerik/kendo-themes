import React from 'react';
import ReactDOM from 'react-dom/client';
import { Window } from '../../window';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-window {
        position: relative;
        width: 300px;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <Window title="Title" actions={[ 'window-minimize', 'window-maximize', 'close' ]} actionButtons actionButtonsAlign="start">
                Action Buttons at start position
            </Window>

            <Window title="Title" actions={[ 'window-minimize', 'window-maximize', 'close' ]} actionButtons actionButtonsAlign="center">
                Action Buttons at center position
            </Window>

            <Window title="Title" actions={[ 'window-minimize', 'window-maximize', 'close' ]} actionButtons actionButtonsAlign="end">
                Action Buttons at end position
            </Window>

            <Window title="Title" actions={[ 'window-minimize', 'window-maximize', 'close' ]} actionButtons actionButtonsAlign="stretched">
                Action Buttons with stretched position
            </Window>

        </div>
    </>
);
