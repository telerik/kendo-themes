import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProgressBar, ChunkProgressBar } from '../../progressbar';


const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-progressbar-indeterminate,
    .k-progressbar-indeterminate::before,
    .k-progressbar-indeterminate::after {
        /* Comment if you need to preview the indeterminate animation */
        animation: none !important;
    }

    .subgrid-horizontal {
        display: grid;
        grid-template-columns: auto 1fr 1fr;
        grid-gap: 20px;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">
            <div className="subgrid-horizontal">
                <span></span>
                <span>LTR</span>
                <span>RTL</span>

                <span>Indeterminate</span>
                <ProgressBar indeterminate={true} />
                <ProgressBar indeterminate={true} dir="rtl" />

                <span>Chunk Indeterminate</span>
                <ChunkProgressBar indeterminate={true} />
                <ChunkProgressBar indeterminate={true} dir="rtl" />
            </div>
        </div>
    </>
);
