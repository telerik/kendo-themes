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
        width: 300px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <div className="k-widget k-window k-dialog">
                <div className="k-window-titlebar k-dialog-titlebar k-header">
                    <div className="k-window-title k-dialog-title">Title</div>
                    <div className="k-window-actions k-dialog-actions">
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                </div>
                <div className="k-window-content k-dialog-content">
                    Action Buttons at start position
                </div>

                <ActionButtons className="k-dialog-buttongroup" alignment="start">
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </ActionButtons>
            </div>

            <div className="k-widget k-window k-dialog">
                <div className="k-window-titlebar k-dialog-titlebar k-header">
                    <div className="k-window-title k-dialog-title">Title</div>
                    <div className="k-window-actions k-dialog-actions">
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                </div>
                <div className="k-window-content k-dialog-content">
                    Action Buttons at center position
                </div>
                <ActionButtons className="k-dialog-buttongroup" alignment="center">
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </ActionButtons>
            </div>

            <div className="k-widget k-window k-dialog">
                <div className="k-window-titlebar k-dialog-titlebar k-header">
                    <div className="k-window-title k-dialog-title">Title</div>
                    <div className="k-window-actions k-dialog-actions">
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                </div>
                <div className="k-window-content k-dialog-content">
                    Action Buttons at end position
                </div>
                <ActionButtons className="k-dialog-buttongroup" alignment="end">
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </ActionButtons>
            </div>

            <div className="k-widget k-window k-dialog">
                <div className="k-window-titlebar k-dialog-titlebar k-header">
                    <div className="k-window-title k-dialog-title">Title</div>
                    <div className="k-window-actions k-dialog-actions">
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                </div>
                <div className="k-window-content k-dialog-content">
                    Action Buttons with stretched position
                </div>
                <ActionButtons className="k-dialog-buttongroup" alignment="stretched">
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </ActionButtons>
            </div>

        </div>
    </>
);
