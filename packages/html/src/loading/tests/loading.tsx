import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: 100px 1fr;
    }
    .loading-container {
        height: 300px;
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span>icon</span>
            <section><Icon name="loading" /></section>

            <span>loading image</span>
            <section className="loading-container"><span className="k-loading-image"></span></section>
        </div>
    </>
);
