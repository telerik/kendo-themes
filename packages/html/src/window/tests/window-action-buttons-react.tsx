import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { ActionButtons } from '../../action-buttons';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-window {
        position: relative;
        width: 300px;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <div className="k-widget k-window">
                <div className="k-window-titlebar k-dialog-titlebar">
                    <div className="k-window-title">Title</div>
                    <div className="k-window-actions">
                        <Button fillMode="flat" icon="window-minimize"></Button>
                        <Button fillMode="flat" icon="window-maximize"></Button>
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                </div>
                <div className="k-window-content">
                    Action Buttons at start position
                </div>
                <ActionButtons alignment="start" className="k-window-buttons">
                    <Button>Cancel</Button>
                    <Button themeColor="primary">Submit</Button>
                </ActionButtons>
            </div>

            <div className="k-widget k-window">
                <div className="k-window-titlebar k-dialog-titlebar">
                    <div className="k-window-title">Title</div>
                    <div className="k-window-actions">
                        <Button fillMode="flat" icon="window-minimize"></Button>
                        <Button fillMode="flat" icon="window-maximize"></Button>
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                </div>
                <div className="k-window-content">
                    Action Buttons at center position
                </div>
                <ActionButtons alignment="center" className="k-window-buttons">
                    <Button>Cancel</Button>
                    <Button themeColor="primary">Submit</Button>
                </ActionButtons>
            </div>

            <div className="k-widget k-window">
                <div className="k-window-titlebar k-dialog-titlebar">
                    <div className="k-window-title">Title</div>
                    <div className="k-window-actions">
                        <Button fillMode="flat" icon="window-minimize"></Button>
                        <Button fillMode="flat" icon="window-maximize"></Button>
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                </div>
                <div className="k-window-content">
                    Action Buttons at end position
                </div>
                <ActionButtons alignment="end" className="k-window-buttons">
                    <Button>Cancel</Button>
                    <Button themeColor="primary">Submit</Button>
                </ActionButtons>
            </div>

            <div className="k-widget k-window">
                <div className="k-window-titlebar k-dialog-titlebar">
                    <div className="k-window-title">Title</div>
                    <div className="k-window-actions">
                        <Button fillMode="flat" icon="window-minimize"></Button>
                        <Button fillMode="flat" icon="window-maximize"></Button>
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                </div>
                <div className="k-window-content">
                    Action Buttons with stretched position
                </div>
                <ActionButtons alignment="stretched" className="k-window-buttons">
                    <Button>Cancel</Button>
                    <Button themeColor="primary">Submit</Button>
                </ActionButtons>
            </div>

        </div>
    </>
);
