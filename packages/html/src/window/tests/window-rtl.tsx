import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-window {
        position: relative;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div className="k-widget k-window k-rtl">
                    <div className="k-window-titlebar k-header">
                        <span className="k-window-title">jQuery window</span>
                        <div className="k-window-actions">
                            <Button fillMode="flat" icon="window-minimize"></Button>
                            <Button fillMode="flat" icon="window-maximize"></Button>
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-rtl k-window-content">
                        jQuery window content
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-window k-rtl">
                    <div className="k-window-titlebar k-header">
                        <span className="k-window-title"></span>
                        <div className="k-window-actions">
                            <Button fillMode="flat" icon="window-minimize"></Button>
                            <Button fillMode="flat" icon="window-maximize"></Button>
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-rtl k-window-content">
                        jQuery window with no title specified
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-window k-rtl">
                    <div className="k-window-titlebar k-header">
                        <span className="k-window-title"></span>
                        <div className="k-window-actions"></div>
                    </div>
                    <div className="k-rtl k-window-content">
                        jQuery window with empty title and no actions
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-window k-rtl k-window-titleless">
                    <div className="k-rtl k-window-content">
                        jQuery window without a title
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-window k-rtl">
                    <div className="k-window-titlebar k-header">
                        <span className="k-window-title">jQuery Window minimized</span>
                        <div className="k-window-actions">
                            <Button fillMode="flat" icon="window-minimize"></Button>
                            <Button fillMode="flat" icon="window-maximize"></Button>
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-rtl k-window-content" hidden>
                        jQuery Window content
                    </div>
                </div>
            </section>
        </div>
    </>
);
