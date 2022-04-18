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
            <div className="k-widget k-window k-dialog col-3">
                <div className="k-window-titlebar k-dialog-titlebar">
                    <span className="k-window-title k-dialog-title">Title</span>
                </div>
                <div className="k-window-content k-dialog-content">
                    Normal buttons
                </div>

                <ActionButtons className="k-dialog-buttongroup" alignment="end">
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>

                    <Button hover>Hover</Button>
                    <Button hover themeColor="primary">Hover</Button>

                    <Button focus>Focus</Button>
                    <Button focus themeColor="primary">Focus</Button>

                    <Button active>Active</Button>
                    <Button active themeColor="primary">Active</Button>
                </ActionButtons>
            </div>

            <div className="k-widget k-window k-dialog col-3">
                <div className="k-window-titlebar k-dialog-titlebar">
                    <span className="k-window-title k-dialog-title">Title</span>
                </div>
                <div className="k-window-content k-dialog-content">
                    Stretched buttons
                </div>
                <ActionButtons className="k-dialog-buttongroup" alignment="stretched">
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>

                    <Button hover>Hover</Button>
                    <Button hover themeColor="primary">Hover</Button>

                    <Button focus>Focus</Button>
                    <Button focus themeColor="primary">Focus</Button>

                    <Button active>Active</Button>
                    <Button active themeColor="primary">Active</Button>
                </ActionButtons>
            </div>

            <div className="k-widget k-window k-dialog k-window-sm">
                <div className="k-window-titlebar k-dialog-titlebar k-header">
                    <span className="k-window-title k-dialog-title">Title</span>
                    <div className="k-window-actions k-dialog-actions">
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                </div>

                <div className="k-window-content k-dialog-content">
                    Narrow Dialog with Stretched button layout
                </div>

                <ActionButtons className="k-dialog-buttongroup" alignment="stretched">
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </ActionButtons>
            </div>

            <div className="k-widget k-window k-dialog k-window-sm">
                <div className="k-window-titlebar k-dialog-titlebar k-header">
                    <span className="k-window-title k-dialog-title">Title</span>
                    <div className="k-window-actions k-dialog-actions">
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                </div>

                <div className="k-window-content k-dialog-content">
                    Narrow Dialog with Normal button layout
                </div>

                <ActionButtons className="k-dialog-buttongroup" alignment="end">
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </ActionButtons>
            </div>

            <div className="k-widget k-window k-dialog k-window-md col-3">
                <div className="k-window-titlebar k-dialog-titlebar k-header">
                    <span className="k-window-title k-dialog-title">Title</span>
                    <div className="k-window-actions k-dialog-actions">
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                </div>

                <div className="k-window-content k-dialog-content">
                    Medium Dialog with Stretched button layout
                </div>

                <ActionButtons className="k-dialog-buttongroup" alignment="stretched">
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </ActionButtons>
            </div>
        </div>
    </>
);
