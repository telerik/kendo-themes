import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        width: 500px;
        transform: translate( 0, 0 );
    }
    .k-window {
        width: 100%;
        height: 400px;
        position: relative;
    }
    .k-dialog {
        width: 300px;
        height: 200px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <div className="k-widget k-window k-window-wrapper">
                    <div className="k-window-titlebar k-header">
                        <div className="k-window-title">Window with dialog</div>
                        <div className="k-window-actions">
                            <Button fillMode="flat" icon="window-minimize"></Button>
                            <Button fillMode="flat" icon="window-maximize"></Button>
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-window-content">
                        Window content
                        <div className="k-dialog-wrapper">
                            <div className="k-overlay"></div>
                            <div className="k-widget k-window k-dialog">
                                <div className="k-window-titlebar k-dialog-titlebar k-header">
                                    <div className="k-window-title k-dialog-title">Dialog in window</div>
                                    <div className="k-window-actions k-dialog-actions">
                                        <Button fillMode="flat" icon="close"></Button>
                                    </div>
                                </div>
                                <div className="k-window-content k-dialog-content">
                                    Dialog content
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
);
