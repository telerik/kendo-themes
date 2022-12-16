import React from 'react';
import { LoaderContainer } from '../loader-container';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .example {
        width: 100%;
        min-height: 200px;
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span></span>
            <span className="col">Dark</span>
            <span className="col">Light</span>


            <span>Panel</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} themeColor={'primary'} overlay={'dark'} panel={true} />
            </span>

            <span className="example">
                <LoaderContainer size={'large'} position={'top'} themeColor={'primary'} overlay={'light'} panel={true} />
            </span>

            <span>No Panel</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} themeColor={'primary'} overlay={'dark'} />
            </span>

            <span className="example">
                <LoaderContainer size={'large'} position={'top'} themeColor={'primary'} overlay={'light'} />
            </span>

        </div>
    </>
);
