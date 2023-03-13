import React from 'react';
import ReactDOM from 'react-dom/client';
import DateTimeSelector from '../datetime-selector.spec';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-animation-container {
        width: min-content;
        max-width: 100%;
        position: relative;
        overflow: visible;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Date tab</span>
            <span>Time tab</span>

            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-reset k-datetime-container">
                        <DateTimeSelector />
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-reset k-datetime-container">
                        <DateTimeSelector tab="time" />
                    </div>
                </div>
            </section>

        </div>
    </>
);
