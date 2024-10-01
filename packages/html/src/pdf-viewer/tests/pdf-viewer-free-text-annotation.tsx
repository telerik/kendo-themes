import { PDFViewerWithAnnotations, PDFViewerPage } from '..';
import { Button } from '../../button';
import { Toolbar, ToolbarSeparator } from '../../toolbar';

const styles = `
    #test-area .k-pdf-viewer {
        height: 500px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>PDF Viewer Free Text Annotation</span>
            <PDFViewerWithAnnotations
                annotationsToolbar={
                    <Toolbar resizable fillMode="flat">
                        <Button fillMode="flat" className="k-group-start" icon="highlight" />
                        <ToolbarSeparator />
                        <Button fillMode="flat" icon="free-text" selected />
                        <span className="k-spacer"></span>
                        <Button fillMode="flat" icon="x" />
                    </Toolbar>
                }
                children={
                    <>
                        <PDFViewerPage>
                            <div className="k-canvas-wrapper">
                                <canvas width="720" height="360" />
                            </div>
                            <div className="k-text-layer">
                                <span role="presentation" dir="ltr" className="test-content">Test content for highlight annotation</span>
                            </div>
                            <div className="k-annotation-layer k-hidden"></div>
                            <div className="k-annotation-editor-layer">
                                <div className="k-free-text-editor k-selected"
                                    style={{
                                        left: "42%",
                                        top: "20%"
                                    }}>
                                    <div className="k-internal" role="textbox" contentEditable="true" aria-multiline="true" default-content="Start typing..."></div>
                                </div>
                                <div className="k-free-text-editor k-selected"
                                    style={{
                                        left: "42%",
                                        top: "35%"
                                    }}>
                                    <div className="k-internal" role="textbox" contentEditable="true" aria-multiline="true" default-content="Start typing...">
                                        Currently writing text
                                    </div>
                                </div>
                                <div className="k-free-text-editor"
                                    style={{
                                        left: "42%",
                                        top: "50%"
                                    }}>
                                    <div className="k-internal" role="textbox" contentEditable="true" aria-multiline="true" default-content="Start typing...">
                                        Ready text
                                    </div>
                                </div>
                                <div className="k-free-text-editor k-selected k-draggable"
                                    style={{
                                        left: "42%",
                                        top: "65%"
                                    }}>
                                    <div className="k-internal" role="textbox" contentEditable="true" aria-multiline="true" default-content="Start typing">
                                        Selected Custom text (adds a draggable cursor)
                                    </div>
                                </div>
                            </div>
                        </PDFViewerPage>
                    </>
              }/>
        </div>
    </>
);
