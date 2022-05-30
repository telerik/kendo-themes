import React from 'react';
import ReactDOM from 'react-dom/client';
import { FloatingActionButton } from '../../fab';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: 150px repeat(3, 1fr);
        grid-template-rows: 30px repeat(4, 250px);
    }
    .relative-container {
        position: relative;
        border: 1px solid #ccc;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Start</span>
            <span>Center</span>
            <span>End</span>

            <span>Top</span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" position="top-start" style={{ top: "16px", left: "16px" }} />
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" position="top-center" style={{ top: "16px" }} />
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" position="top-end" style={{ top: "16px", right: "16px" }} />
            </span>

            <span>Middle</span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" position="middle-start" style={{ left: "16px" }} />
            </span>
            <span className="relative-container">
                NO CENTER POSITION
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" position="middle-end" style={{ right: "16px" }} />
            </span>

            <span>Bottom</span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" position="bottom-start" style={{ bottom: "16px", left: "16px" }} />
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" position="bottom-center" style={{ bottom: "16px" }} />
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" position="bottom-end" style={{ bottom: "16px", right: "16px" }} />
            </span>

        </div>
    </>
);
