import React from 'react';
import ReactDOM from 'react-dom/client';
import { Pager } from '../../pager';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid ">
            <span>Large</span>
            <Pager size="large" />
            <span></span>
            <Pager size="large" mobile="medium" />
            <span></span>
            <Pager size="large" mobile="small" />
            <span>Medium</span>
            <Pager />
            <span></span>
            <Pager mobile="medium" />
            <span></span>
            <Pager mobile="small" />
            <span>Small</span>
            <Pager size="small" />
            <span></span>
            <Pager size="small" mobile="medium" />
            <span></span>
            <Pager size="small" mobile="small" />
        </div>
    </>
);
