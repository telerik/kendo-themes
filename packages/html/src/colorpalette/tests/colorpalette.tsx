import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorPalette } from '../../colorpalette';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>ColorPalette</span>
            <section>
                <ColorPalette palette="basic"></ColorPalette>
            </section>

        </div>
    </>
);
