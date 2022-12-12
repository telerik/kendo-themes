import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProgressBar } from '../../progressbar';

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

            <span>Partial start</span>
            <ProgressBar value="5" />
            <ProgressBar value="5" dir="rtl" />

            <span>Partial center</span>
            <ProgressBar value="50" labelPosition="center" />
            <ProgressBar value="50" labelPosition="center" dir="rtl" />

            <span>Partial end</span>
            <ProgressBar value="95" labelPosition="end" />
            <ProgressBar value="95" labelPosition="end" dir="rtl" />

            <span>100% start</span>
            <ProgressBar value="100" />
            <ProgressBar value="100" dir="rtl" />

            <span>100% center</span>
            <ProgressBar value="100" labelPosition="center" />
            <ProgressBar value="100" labelPosition="center" dir="rtl" />

            <span>100% end</span>
            <ProgressBar value="100" labelPosition="end" />
            <ProgressBar value="100" labelPosition="end" dir="rtl" />

            <span>No Label</span>
            <ProgressBar value="50" label={false} />
            <ProgressBar value="50" label={false} dir="rtl" />

            <span>Thin style</span>
            <ProgressBar value="50" label={false} height="2px" />
            <ProgressBar value="50" label={false} height="2px" dir="rtl" />

            <span>Thick style</span>
            <ProgressBar value="50" height="50px" labelPosition="end" />
            <ProgressBar value="50" height="50px" labelPosition="end" dir="rtl" />

        </div>
    </>
);
