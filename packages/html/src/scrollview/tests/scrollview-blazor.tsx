import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-scrollview {
        width: 100%;
        height: 300px;
    }

    .k-scrollview { background: gray !important; }
    .k-scrollview-dark { background: white !important; }
    .k-scrollview-light { background: black !important; }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span className="k-colspan-all">Blazor scrollview</span>

            <span>Light mode</span>
            <span>Normal</span>
            <span>Dark mode</span>

            <div className="k-widget k-scrollview k-scrollview-light">
                <div className="k-scrollview-wrap k-scrollview-animate" style={{ ['--kendo-scrollview-views' as any]: "5", ['--kendo-scrollview-current' as any]: "3" }}>
                    <div className="k-scrollview-view"></div>
                    <div className="k-scrollview-view"> </div>
                    <div className="k-scrollview-view"></div>
                    <div className="k-scrollview-view"></div>
                    <div className="k-scrollview-view"></div>
                </div>
                <div className="k-scrollview-elements">
                    <a className="k-scrollview-prev">
                        <Icon name="arrowhead-w"></Icon>
                    </a>
                    <a className="k-scrollview-next">
                        <Icon name="arrowhead-e"></Icon>
                    </a>
                    <div className="k-scrollview-nav-wrap">
                        <ul className="k-scrollview-nav">
                            <li className="k-link"></li>
                            <li className="k-link k-primary"></li>
                            <li className="k-link k-primary k-state-focused"></li>
                            <li className="k-link k-state-focused"></li>
                            <li className="k-link"></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="k-widget k-scrollview">
                <div className="k-scrollview-wrap k-scrollview-animate" style={{ ['--kendo-scrollview-views' as any]: "9", ['--kendo-scrollview-current' as any]: "5" }}>
                    <div className="k-scrollview-view"></div>
                    <div className="k-scrollview-view"></div>
                    <div className="k-scrollview-view"></div>
                    <div className="k-scrollview-view"> </div>
                    <div className="k-scrollview-view"></div>
                    <div className="k-scrollview-view"></div>
                    <div className="k-scrollview-view"></div>
                    <div className="k-scrollview-view"></div>
                    <div className="k-scrollview-view"></div>
                </div>
                <div className="k-scrollview-elements">
                    <a className="k-scrollview-prev">
                        <Icon name="arrowhead-w"></Icon>
                    </a>
                    <a className="k-scrollview-next">
                        <Icon name="arrowhead-e"></Icon>
                    </a>
                    <div className="k-scrollview-nav-wrap">
                        <ul className="k-scrollview-nav">
                            <li className="k-link" style={{ transform: "scale(0.5)" }}></li>
                            <li className="k-link" style={{ transform: "scale(0.65)" }}></li>
                            <li className="k-link" style={{ transform: "scale(0.8)" }}></li>
                            <li className="k-link"></li>
                            <li className="k-link k-primary"></li>
                            <li className="k-link"></li>
                            <li className="k-link" style={{ transform: "scale(0.8)" }}></li>
                            <li className="k-link" style={{ transform: "scale(0.65)" }}></li>
                            <li className="k-link" style={{ transform: "scale(0.5)" }}></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="k-widget k-scrollview k-scrollview-dark">
                <div className="k-scrollview-wrap k-scrollview-animate" style={{ ['--kendo-scrollview-views' as any]: "7", ['--kendo-scrollview-current' as any]: "4" }}>
                    <div className="k-scrollview-view"></div>
                    <div className="k-scrollview-view"></div>
                    <div className="k-scrollview-view"></div>
                    <div className="k-scrollview-view"></div>
                    <div className="k-scrollview-view"></div>
                    <div className="k-scrollview-view"></div>
                    <div className="k-scrollview-view"></div>
                </div>
                <div className="k-scrollview-elements">
                    <a className="k-scrollview-prev">
                        <Icon name="arrowhead-w"></Icon>
                    </a>
                    <a className="k-scrollview-next">
                        <Icon name="arrowhead-e"></Icon>
                    </a>
                    <div className="k-scrollview-nav-wrap">
                        <ul className="k-scrollview-nav">
                            <li className="k-link" style={{ transform: "scale(0.5)" }}></li>
                            <li className="k-link" style={{ transform: "scale(0.65)" }}></li>
                            <li className="k-link"></li>
                            <li className="k-link k-primary"></li>
                            <li className="k-link"></li>
                            <li className="k-link" style={{ transform: "scale(0.65)" }}></li>
                            <li className="k-link" style={{ transform: "scale(0.5)" }}></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
);
