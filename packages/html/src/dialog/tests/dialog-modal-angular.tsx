import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        width: 500px;
        height: 400px;
        transform: translate( 0, 0 );
    }
    .k-dialog {
        width: 300px;
        height: 200px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-grid-cols-1">
            <div className="k-dialog-wrapper">
                <div className="k-overlay"></div>

                <div className="k-widget k-window k-dialog">
                    <div className="k-window-titlebar k-dialog-titlebar k-header">
                        <div className="k-window-title k-dialog-title">
                            Title
                        </div>
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
            </div>
        </div>
    </>
);
