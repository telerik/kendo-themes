import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Textbox } from '../../textbox';
import { Icon } from '../../icon';
import { Toolbar } from '../../toolbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area .k-pdf-viewer {
        height: 600px;
    }
    .k-dropzone {
        gap: 8px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <div className="k-widget k-pdf-viewer">
                <Toolbar resizable>
                    <div className="k-pager">
                        <Button fillMode="flat" icon="arrow-end-left" className="k-pager-nav k-pager-first"></Button>
                        <Button fillMode="flat" icon="arrow-60-left" className="k-pager-nav"></Button>
                        <span className="k-pager-input k-label"><Textbox />of 4 pages</span>
                        <Button fillMode="flat" icon="arrow-60-right" className="k-pager-nav"></Button>
                        <Button fillMode="flat" icon="arrow-end-right" className="k-pager-nav k-pager-last"></Button>
                    </div>
                    <span className="k-spacer"></span>
                    <Button fillMode="flat" icon="file-pdf"></Button>
                    <Button fillMode="flat" icon="print"></Button>
                    <Button fillMode="flat" icon="fullscreen"></Button>
                </Toolbar>
                <div className="k-canvas k-pdf-viewer-canvas k-pos-relative k-overflow-auto">
                    <div className="k-pdf-viewer-pages">
                        <div className="k-page k-blank-page">
                            <div className="k-external-dropzone">
                                <div className="k-dropzone-inner">
                                    <Icon name="upload" />
                                    <span className="k-dropzone-hint">Drag and drop files here to upload</span>
                                </div>
                            </div>
                            <div className="k-upload">
                                <div className="k-dropzone">
                                    <Button className="k-upload-button">Select files...</Button>
                                    <em className="k-dropzone-hint">Drop files here to upload</em>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
