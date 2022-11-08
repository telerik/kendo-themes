import React from 'react';
import ReactDOM from 'react-dom/client';
import { Window } from '../../window';


const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-window {
        position: relative;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <Window title="Window" actions={[ 'window-minimize', 'window-maximize', 'close' ]}>Window content</Window>
            </section>

            <section>
                <Window title="" actions={[ 'window-minimize', 'window-maximize', 'close' ]}>Window with no title specified</Window>
            </section>

            <section>
                <Window title="">Window with empty title and no actions</Window>
            </section>

            <section>
                <Window>Window without a title</Window>
            </section>

            <section>
                <Window title="Window minimized" actions={[ 'window-minimize', 'window-maximize', 'close' ]} minimized>Window content</Window>
            </section>
        </div>
    </>
);
