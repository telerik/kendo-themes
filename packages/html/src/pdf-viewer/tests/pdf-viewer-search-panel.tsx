import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area .k-pdf-viewer {
        height: 600px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <div className="k-widget k-pdf-viewer">
                <div className="k-toolbar k-widget k-toolbar-resizable">
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
                </div>
                <div className="k-canvas k-pdf-viewer-canvas k-pos-relative k-overflow-auto">
                    <div className="k-search-panel k-pos-sticky k-top-center">
                        <Button fillMode="flat" icon="handler-drag" className="k-search-dialog-draghandle"></Button>
                        <Textbox
                            suffix={
                                <Button fillMode="flat" className="k-match-case-button" icon="convert-lowercase"></Button>
                            }
                        />
                        <span className="k-search-matches">
                            <span>0</span> of <span>1</span>
                        </span>
                        <Button fillMode="flat" icon="arrow-up"></Button>
                        <Button fillMode="flat" icon="arrow-down"></Button>
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                    <div className="k-pdf-viewer-pages">
                        <div className="k-page" style={{ width: "720px", height: "360px" }}></div>
                        <div className="k-page" style={{ width: "720px", height: "360px" }}></div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
