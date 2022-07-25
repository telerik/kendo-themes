import React from 'react';
import ReactDOM from 'react-dom/client';

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
        <div id="test-area">
            <div style={{ width: "200px", height: "200px" }} className="k-circular-progressbar">
                <div className="k-circular-progressbar-surface">
                    <div>
                        <svg>
                            <g>
                                <circle strokeWidth="9.5" className="k-circular-progressbar-scale" r="90" cx="100" cy="100"></circle>
                                <circle style={{ strokeDasharray: "565.487", strokeDashoffset: "989.602" }} strokeWidth="9.5" className="k-circular-progressbar-arc" r="90" cx="100" cy="100"></circle>
                            </g>
                        </svg>
                        <div style={{ left: "70.5px", top: "91px" }} className="k-circular-progressbar-label">
                            value: 75
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
