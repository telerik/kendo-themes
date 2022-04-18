import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-listview {
        height: 200px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area">

            <div className="k-tabstrip-wrapper">
                <div className="k-widget k-header k-tabstrip k-tabstrip-top">
                    <div className="k-tabstrip-items-wrapper k-hstack">
                        <ul className="k-tabstrip-items k-reset">
                            <li className="k-state-active k-item k-tab-on-top k-first">
                                <span className="k-loading k-complete"></span>
                                <span className="k-link">Child listview with loading</span>
                            </li>
                        </ul>
                    </div>
                    <div className="k-content k-state-active" style={{ display: "block" }} id="tabstrip-1">
                        <div className="k-widget k-listview k-d-flex">
                            <div className="k-listview-content">
                                <div className="k-loading-mask k-opaque" style={{ width: '100%', height: "100%", top: '0px', left: '0px' }}><span className="k-loading-text">Loading...</span><div className="k-loading-image"></div><div className="k-loading-color"></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
);
