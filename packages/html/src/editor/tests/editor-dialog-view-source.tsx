import React from 'react';
import ReactDOM from 'react-dom/client';
import { Window } from '../../window';
import { Textarea } from '../../textarea';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        width: 500px;
    }

    .k-window {
        width: 100%;
        height: 400px;
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <Window title="View HTML" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                    <Textarea className="k-editor-textarea"></Textarea>
                </Window>
            </section>
        </div>
    </>
);
