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

    #test-area {
        justify-items: start;
    }

    .k-notification-container {
        margin: 0;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span className="k-colspan-all k-col-span-full">LTR</span>

            <div>
                <div className="k-notification-container">
                    <div className="k-widget k-notification">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Default notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-closable">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Closable notification</div>
                            <Icon name="x" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-primary">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Primary notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-secondary">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Secondary notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-tertiary">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Tertiary notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-info">
                        <div className="k-notification-wrap">
                            <Icon name="info" />
                            <div className="k-notification-content">Info notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-success">
                        <div className="k-notification-wrap">
                            <Icon name="success" />
                            <div className="k-notification-content">Success notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-warning">
                        <div className="k-notification-wrap">
                            <Icon name="warning" />
                            <div className="k-notification-content">Warning notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-error">
                        <div className="k-notification-wrap">
                            <Icon name="error" />
                            <div className="k-notification-content">Error notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-dark">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Dark notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-light">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Light notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-inverse">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Inverse notification</div>
                        </div>
                    </div>
                </div>
            </div>

            <span className="k-colspan-all k-col-span-full">RTL</span>
            <div dir="rtl">
                <div className="k-notification-container">
                    <div className="k-widget k-notification">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Default notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-closable">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Closable notification</div>
                            <Icon name="x" />
                        </div>
                    </div>
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-primary">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Primary notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-secondary">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Secondary notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-tertiary">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Tertiary notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-info">
                        <div className="k-notification-wrap">
                            <Icon name="info" />
                            <div className="k-notification-content">Info notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-success">
                        <div className="k-notification-wrap">
                            <Icon name="success" />
                            <div className="k-notification-content">Success notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-warning">
                        <div className="k-notification-wrap">
                            <Icon name="warning" />
                            <div className="k-notification-content">Warning notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-error">
                        <div className="k-notification-wrap">
                            <Icon name="error" />
                            <div className="k-notification-content">Error notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-dark">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Dark notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-light">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Light notification</div>
                        </div>
                    </div>
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <div className="k-widget k-notification k-notification-inverse">
                        <div className="k-notification-wrap">
                            <div className="k-notification-content">Inverse notification</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
);
