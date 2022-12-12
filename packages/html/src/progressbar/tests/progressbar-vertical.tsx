import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProgressBar, ChunkProgressBar } from '../../progressbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        justify-items: center;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-12">

            <span>Partial</span>
            <span>100%</span>
            <span>Chunk</span>
            <span>Ch 100%</span>
            <span>Reversed</span>
            <span>R 100%</span>
            <span>R ch</span>
            <span>R ch 100%</span>
            <span>Indeterminate</span>
            <span>No Label</span>
            <span>Thin style</span>
            <span>Thick style</span>

            <ProgressBar orientation="vertical" labelPosition="end" value="95" />
            <ProgressBar orientation="vertical" labelPosition="end" value="100" />
            <ChunkProgressBar orientation="vertical" progress={3} />
            <ChunkProgressBar orientation="vertical" progress={5} />
            <ProgressBar reverse={true} orientation="vertical" labelPosition="end" value="5" />
            <ProgressBar reverse={true} orientation="vertical" labelPosition="end" value="100" />
            <ChunkProgressBar reverse={true} orientation="vertical" progress={3} />
            <ChunkProgressBar reverse={true} orientation="vertical" progress={5} />
            <ProgressBar orientation="vertical" indeterminate={true} />
            <ProgressBar orientation="vertical" label={false} value="50" />
            <ProgressBar orientation="vertical" label={false} width="2px" value="50" />
            <ProgressBar orientation="vertical" width="50px" labelPosition="end" value="50" />
        </div>
    </>
);
