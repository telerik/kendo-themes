import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Textarea } from '../../textarea/textarea';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        width: 500px;
    }
    .k-window {
        width: 100%;
        position: relative;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <div className="k-window">
                    <div className="k-window-titlebar">
                        <span className="k-window-title">Insert comment</span>
                        <div className="k-window-actions">
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-window-content">
                        <div className="k-form k-form-md k-form-horizontal">
                            <div className="k-form-field">
                                <div className="k-form-label">
                                    <label>Comment:</label>
                                </div>
                                <div className="k-form-field-wrap">
                                    <Textarea />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ActionButtons alignment="end" className="k-window-buttons">
                        <Button>Cancel</Button>
                        <Button themeColor="primary">Insert</Button>
                    </ActionButtons>
                </div>
            </section>

            <section>
                <div className="k-window">
                    <div className="k-window-titlebar">
                        <span className="k-window-title">Insert image</span>
                        <div className="k-window-actions">
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-window-content">
                        <div className="k-spreadsheet-insert-image-dialog">
                            <label>
                                <div>Drag an image here, or click to select</div>
                                <input type="file" />
                            </label>
                        </div>
                    </div>
                    <ActionButtons alignment="end" className="k-window-buttons">
                        <Button>Cancel</Button>
                        <Button themeColor="primary">Insert</Button>
                    </ActionButtons>
                </div>
            </section>

        </div>
    </>
);
