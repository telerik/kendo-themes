import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-window {
        width: 100%;
        position: relative;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div className="k-widget k-window">
                    <div className="k-window-titlebar k-dialog-titlebar">
                        <div className="k-window-title">
                            Angular Window
                        </div>
                        <div className="k-window-actions">
                            <Button fillMode="flat" icon="window-minimize"></Button>
                            <Button fillMode="flat" icon="window-maximize"></Button>
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-window-content">
                        Angular window content
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-window">
                    <div className="k-window-titlebar k-dialog-titlebar">
                        <div className="k-window-title"></div>
                        <div className="k-window-actions">
                            <Button fillMode="flat" icon="window-minimize"></Button>
                            <Button fillMode="flat" icon="window-maximize"></Button>
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-window-content">
                        Angular window with no title specified
                    </div>
                </div>
            </section>

            <section>

                <div className="k-widget k-window">
                    <div className="k-window-titlebar k-dialog-titlebar">
                        <div className="k-window-title"></div>
                    </div>
                    <div className="k-window-content">
                        Angular window with empty title and no actions
                    </div>
                </div>

            </section>

            <section>
                <div className="k-widget k-window k-window-minimized">
                    <div className="k-window-titlebar k-dialog-titlebar">
                        <div className="k-window-title">Angular window minimized</div>
                        <div className="k-window-actions">
                            <Button fillMode="flat" icon="window-minimize"></Button>
                            <Button fillMode="flat" icon="window-maximize"></Button>
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-window-content" hidden>
                        Angular minimized content
                    </div>
                </div>
            </section>
        </div>
    </>
);
