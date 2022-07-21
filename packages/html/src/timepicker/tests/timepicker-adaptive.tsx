import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { TimeSelector } from '../../time-selector';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-actionsheet-container {
        width: 100%;
        height: 600px;
        position: relative;
        transform: translateZ(0);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>partial</span>
            <span>full screen</span>

            <section>
                <div className="k-actionsheet-container">
                    <div className="k-overlay"></div>

                    <div className="k-actionsheet k-actionsheet-bottom k-adaptive-actionsheet">
                        <div className="k-actionsheet-titlebar">
                            <div className="k-actionsheet-title k-text-center">
                                <div>Select dates</div>
                                <div className="k-text-muted">DD / MM / YY</div>
                            </div>
                            <div className="k-actionsheet-actions">
                                <Button icon="x" fillMode="flat"></Button>
                            </div>
                        </div>
                        <div className="k-actionsheet-content">
                            <TimeSelector size="large"></TimeSelector>
                        </div>
                        <div className="k-actionsheet-footer k-actions k-actions-stretched">
                            <Button size="large" themeColor="primary">Select date</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-actionsheet-container">
                    <div className="k-overlay"></div>

                    <div className="k-actionsheet k-actionsheet-bottom k-actionsheet-fullscreen k-adaptive-actionsheet">
                        <div className="k-actionsheet-titlebar">
                            <div className="k-actionsheet-title k-text-center">
                                <div>Select dates</div>
                                <div className="k-text-muted">DD / MM / YY</div>
                            </div>
                            <div className="k-actionsheet-actions">
                                <Button icon="x" fillMode="flat"></Button>
                            </div>
                        </div>
                        <div className="k-actionsheet-content">
                            <TimeSelector size="large"></TimeSelector>
                        </div>
                        <div className="k-actionsheet-footer k-actions k-actions-stretched">
                            <Button size="large" themeColor="primary">Select date</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </>
);
