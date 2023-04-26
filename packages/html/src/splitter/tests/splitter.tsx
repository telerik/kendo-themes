import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area">

            <div style={{ height: "280px" }} className="k-widget k-splitter k-splitter-flex k-splitter-vertical">
                <div style={{ order: "0" }} className="k-pane-flex k-pane">
                    <div className="k-widget k-splitter k-splitter-flex k-splitter-horizontal">
                        <div style={{ flexBasis: "20%", order: "0" }} className="k-pane-static k-pane k-scrollable">
                            <p>Collapsible pane<br />Size = 20%</p>
                        </div>
                        <div style={{ order: "2" }} className="k-pane k-scrollable">
                            <p>Fluid, scollable pane</p>
                            <p>Content</p>
                            <p>Content</p>
                            <p>Content</p>
                            <p>Content</p>
                            <p>Content</p>
                            <p>Content</p>
                        </div>
                        <div style={{ flexBasis: "30%", order: "4" }} className="k-pane-static k-pane">
                            <p>Collapsible pane<br />Size = 30%</p>
                        </div>
                        <div style={{ flexBasis: "10px", order: "6" }} className="k-pane-static k-pane">
                        </div>
                        <div style={{ flexBasis: "10px", order: "8" }} className="k-pane-static k-pane">
                        </div>
                        <div style={{ flexBasis: "10px", order: "10" }} className="k-pane-static k-pane">
                        </div>
                        <div className="k-splitbar k-splitbar-horizontal k-splitbar-draggable-horizontal" style={{ order: "1" }}>
                            <div className="k-collapse-prev">
                                <Icon icon="caret-alt-left" size="xsmall"></Icon>
                            </div>
                            <div className="k-resize-handle"></div>
                            <Icon />
                        </div>
                        <div className="k-splitbar k-splitbar-horizontal k-splitbar-draggable-horizontal" style={{ order: "3" }}>
                            <Icon />
                            <div className="k-resize-handle"></div>
                            <div className="k-collapse-next">
                                <Icon icon="caret-alt-right" size="xsmall"></Icon>
                            </div>
                        </div>
                        <div className="k-splitbar k-splitbar-horizontal k-splitbar-draggable-horizontal" style={{ order: "5" }}>
                            <div className="k-collapse-prev">
                                <Icon icon="caret-alt-left" size="xsmall"></Icon>
                            </div>
                            <div className="k-resize-handle"></div>
                            <div className="k-collapse-next">
                                <Icon icon="caret-alt-right" size="xsmall"></Icon>
                            </div>
                        </div>
                        <div className="k-splitbar k-hover k-splitbar-horizontal k-splitbar-draggable-horizontal" style={{ order: "7" }}>
                            <div className="k-collapse-prev">
                                <Icon icon="caret-alt-left" size="xsmall"></Icon>
                            </div>
                            <div className="k-resize-handle"></div>
                            <div className="k-collapse-next">
                                <Icon icon="caret-alt-right" size="xsmall"></Icon>
                            </div>
                        </div>
                        <div className="k-splitbar k-focus k-splitbar-horizontal k-splitbar-draggable-horizontal" style={{ order: "9" }}>
                            <div className="k-collapse-prev">
                                <Icon icon="caret-alt-left" size="xsmall"></Icon>
                            </div>
                            <div className="k-resize-handle"></div>
                            <div className="k-collapse-next">
                                <Icon icon="caret-alt-right" size="xsmall"></Icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ flexBasis: "80px", order: "2" }} className="k-pane-static k-pane k-scrollable">
                    <p>Pane size: 80px</p>
                </div>
                <div style={{ flexBasis: "80px", order: "4" }} className="k-pane-static k-pane k-scrollable">
                    <p>Static pane<br />Size = 80px</p>
                </div>
                <div style={{ order: "6" }} className="k-pane-static k-pane k-scrollable" hidden>
                    <h2>Hidden pane, should be invisible!</h2>
                </div>
                <div className="k-splitbar k-splitbar-vertical k-splitbar-draggable-vertical" style={{ order: "1" }}>
                    <Icon />
                    <div className="k-resize-handle"></div>
                    <Icon />
                </div>
                <div className="k-splitbar k-splitbar-vertical k-splitbar-static-vertical" style={{ order: "3" }}>
                    <Icon />
                    <div className="k-resize-handle"></div>
                    <Icon />
                </div>
            </div>

        </div>
    </>
);
