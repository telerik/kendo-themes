import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    body {
        background: #fcfcfc;
    }

    .k-notification-group {
        position: static;
    }

    .fullwidth,
    .fullwidth > .k-notification {
        width: 100%;
    }

    .k-custom-notification {
        font-size: 20px;
        color: gray;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span className="k-colspan-all k-col-span-full">LTR</span>

            <div>
                {/* notification group */}
                <div className="k-notification-group">
                    <div className="k-notification-container">
                        <div className="k-widget k-notification k-notification-closable">
                            <div className="k-notification-wrap">
                                <div className="k-notification-content">
                                    Multiline notification
                                    <div>Closable multiline notification</div>
                                    <div>Closable multiline notification</div>
                                    <div>Closable multiline notification</div>
                                </div>
                                <Icon name="x" />
                            </div>
                        </div>
                    </div>
                    <div className="k-notification-container">
                        <div className="k-widget k-notification k-custom-notification">
                            <div className="k-notification-wrap">
                                <div className="k-notification-content">Custom notification</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="k-colspan-3 k-col-span-3">
                <div className="k-notification-container fullwidth">
                    <div className="k-widget k-notification k-notification-closable">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Full width notification</div>
                            <Icon name="x" />
                        </div>
                    </div>
                </div>
            </div>

            <span className="k-colspan-all k-col-span-full">RTL</span>

            <div dir="rtl">
                {/* notification group */}
                <div className="k-notification-group">
                    <div className="k-notification-container">
                        <div className="k-widget k-notification k-notification-closable">
                            <div className="k-notification-wrap">
                                <div className="k-notification-content">
                                    Multiline notification
                                    <div>Closable multiline notification</div>
                                    <div>Closable multiline notification</div>
                                    <div>Closable multiline notification</div>
                                </div>
                                <Icon name="x" />
                            </div>
                        </div>
                    </div>
                    <div className="k-notification-container">
                        <div className="k-widget k-notification k-custom-notification">
                            <div className="k-notification-wrap">
                                <div className="k-notification-content">Custom notification</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="k-colspan-3 k-col-span-3" dir="rtl">
                <div className="k-notification-container fullwidth">
                    <div className="k-widget k-notification k-notification-closable">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Full width notification</div>
                            <Icon name="x" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
);
