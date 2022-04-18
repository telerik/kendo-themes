import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-dialog {
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <div className="k-widget k-window k-dialog">
                <div className="k-window-titlebar k-dialog-titlebar">
                    <span className="k-window-title k-dialog-title">
                        Title
                        g y p
                        t d l
                    </span>
                    <div className="k-window-actions k-dialog-actions">
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                </div>

                <div className="k-window-content k-dialog-content">
                    Dialog content template
                </div>

                <ActionButtons className="k-dialog-buttongroup" alignment="end">
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </ActionButtons>
            </div>

            <div className="k-widget k-window k-dialog">
                <div className="k-window-titlebar k-dialog-titlebar">
                    <span className="k-window-title k-dialog-title" style={{ fontFamily: "cursive" }}>
                        Cursive
                        g y p
                        t d l
                    </span>
                </div>

                <div className="k-window-content k-dialog-content">
                    Dialog without titlebar actions
                </div>

                <ActionButtons className="k-dialog-buttongroup" alignment="end">
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </ActionButtons>
            </div>

            <div className="k-widget k-window k-dialog">
                <div className="k-window-titlebar k-dialog-titlebar">
                    <span className="k-window-title k-dialog-title"></span>
                    <div className="k-window-actions k-dialog-actions">
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                </div>

                <div className="k-window-content k-dialog-content">
                    Dialog with empty title and actions
                </div>

                <ActionButtons className="k-dialog-buttongroup" alignment="end">
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </ActionButtons>
            </div>

            <div className="k-widget k-window k-dialog">
                <div className="k-window-titlebar k-dialog-titlebar">
                    <span className="k-window-title k-dialog-title"></span>
                </div>

                <div className="k-window-content k-dialog-content">
                    Dialog with empty title and no actions
                </div>
            </div>

            <div className="k-widget k-window k-dialog">
                <div className="k-window-content k-dialog-content">
                    Dialog without title
                </div>

                <ActionButtons className="k-dialog-buttongroup" alignment="end">
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </ActionButtons>
            </div>

            <div className="k-widget k-window k-dialog" style={{ height: "170px" }}>
                <div className="k-window-titlebar k-dialog-titlebar">
                    <span className="k-window-title k-dialog-title">Scrolling</span>
                    <div className="k-window-actions k-dialog-actions">
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                </div>

                <div className="k-window-content k-dialog-content k-scroll">
                    <p>Dialog content template with long text and vertical scrolling.</p>
                    <p>Dialog content template with long text and vertical scrolling.</p>
                    <p>Dialog content template with long text and vertical scrolling.</p>
                </div>

                <ActionButtons className="k-dialog-buttongroup" alignment="end">
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </ActionButtons>
            </div>

        </div>
    </>
);
