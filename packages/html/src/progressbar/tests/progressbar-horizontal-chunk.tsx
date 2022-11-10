import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChunkProgressBar } from '../../progressbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        grid-template-columns: auto 1fr 1fr;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>LTR</span>
            <span>RTL</span>

            <span>Chunk</span>
            <ChunkProgressBar progress={2} />
            <ChunkProgressBar progress={2} dir="rtl" />

            <span>Chunk 100%</span>
            <ChunkProgressBar progress={5} />
            <ChunkProgressBar progress={5} dir="rtl" />

            <span>Chunk reverse</span>
            <ChunkProgressBar reverse={true} progress={2} />
            <ChunkProgressBar reverse={true} progress={2} dir="rtl" />

            <span>Chunk 100% reverse</span>
            <ChunkProgressBar reverse={true} progress={5} />
            <ChunkProgressBar reverse={true} progress={5} dir="rtl" />


        </div>
    </>
);
