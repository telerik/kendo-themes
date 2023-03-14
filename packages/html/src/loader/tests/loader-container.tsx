import React from 'react';
import { LoaderContainer } from '../../loader';
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
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span></span>
            <span className="col">Small</span>
            <span className="col">Medium</span>
            <span className="col">Large</span>


            <span>Top</span>
            <span className="example">
                <LoaderContainer size={'small'} position={'top'} themeColor={'primary'} overlay={'dark'} panel={true} />
            </span>

            <span className="example">
                <LoaderContainer size={'medium'} position={'top'} themeColor={'primary'} overlay={'dark'} panel={true} />
            </span>

            <span className="example">
                <LoaderContainer size={'large'} position={'top'} themeColor={'primary'} overlay={'dark'} panel={true} />
            </span>

            <span>End</span>
            <span className="example">
                <LoaderContainer size={'small'} position={'end'} themeColor={'primary'} overlay={'dark'} panel={true} />
            </span>

            <span className="example">
                <LoaderContainer size={'medium'} position={'end'} themeColor={'primary'} overlay={'dark'} panel={true} />
            </span>

            <span className="example">
                <LoaderContainer size={'large'} position={'end'} themeColor={'primary'} overlay={'dark'} panel={true} />
            </span>

            <span>Start</span>
            <span className="example">
                <LoaderContainer size={'small'} position={'start'} themeColor={'primary'} overlay={'dark'} panel={true} />
            </span>

            <span className="example">
                <LoaderContainer size={'medium'} position={'start'} themeColor={'primary'} overlay={'dark'} panel={true} />
            </span>

            <span className="example">
                <LoaderContainer size={'large'} position={'start'} themeColor={'primary'} overlay={'dark'} panel={true} />
            </span>
        </div>
    </>
);
