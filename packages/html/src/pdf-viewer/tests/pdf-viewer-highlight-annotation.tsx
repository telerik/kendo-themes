import { PDFViewerWithAnnotations, PDFViewerPage } from '..';
import { Button } from '../../button';
import { Toolbar, ToolbarSeparator } from '../../toolbar';

const styles = `
    #test-area .k-pdf-viewer {
        height: 500px;
    }
    .k-pdf-viewer .k-canvas-wrapper .k-highlight {
        fill: rgba(253, 242, 81, 0.4);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>PDF Viewer Highlight Annotation in normal, selected and hover states</span>
            <PDFViewerWithAnnotations
                annotationsToolbar={
                  <Toolbar resizable fillMode="flat">
                      <Button fillMode="flat" className="k-group-start" icon="highlight" selected />
                      <ToolbarSeparator />
                      <Button fillMode="flat" icon="free-text" />
                      <span className="k-spacer"></span>
                      <Button fillMode="flat" icon="x" />
                  </Toolbar>
                }
                children={
                  <>
                    <PDFViewerPage>
                        <div className="k-canvas-wrapper">
                          <canvas width="720" height="360" />
                          <svg version="1.1" preserveAspectRatio="none" viewBox="0 0 1 1" aria-hidden="true" className="k-highlight" data-main-rotation="0"
                            style={{
                              top: "15%",
                              left: "10%",
                              width: "15%",
                              height: "7%"
                            }}>
                            <defs>
                              <path id="path_p1_0" d="M0 1 V0 H1 V1 Z"></path>
                              <clipPath id="clip_path_p1_0" clipPathUnits="objectBoundingBox">
                                <use href="#path_p1_0" className="clip"></use>
                              </clipPath>
                            </defs>
                            <use href="#path_p1_0"></use>
                          </svg>
                          <svg version="1.1" preserveAspectRatio="none" viewBox="0 0 1 1" aria-hidden="true" className="k-highlight-outline" data-main-rotation="0"
                            style={{
                              top: "14.4%",
                              left: "9.65%",
                              width: "15.6%",
                              height: "7.8%"
                            }}>
                            <defs>
                              <path id="path_p1_1" d="M0.013315579227696417 0.9698795180722891 V0.030120481927710874 H0.9866844207723036 V0.9698795180722891 Z" vector-effect="non-scaling-stroke"></path>
                            </defs>
                            <use href="#path_p1_1"></use>
                            <use href="#path_p1_1"></use>
                          </svg>

                          <svg version="1.1" preserveAspectRatio="none" viewBox="0 0 1 1" aria-hidden="true" className="k-highlight" data-main-rotation="0"
                            style={{
                              top: "30%",
                              left: "10%",
                              width: "15%",
                              height: "7%"
                            }}>
                            <defs>
                              <path id="path_p1_0" d="M0 1 V0 H1 V1 Z"></path>
                              <clipPath id="clip_path_p1_0" clipPathUnits="objectBoundingBox">
                                <use href="#path_p1_0" className="clip"></use>
                              </clipPath>
                            </defs>
                            <use href="#path_p1_0"></use>
                          </svg>
                          <svg version="1.1" preserveAspectRatio="none" viewBox="0 0 1 1" aria-hidden="true" className="k-highlight-outline k-selected" data-main-rotation="0"
                            style={{
                              top: "29.4%",
                              left: "9.65%",
                              width: "15.6%",
                              height: "7.8%"
                            }}>
                            <defs>
                              <path id="path_p1_1" d="M0.013315579227696417 0.9698795180722891 V0.030120481927710874 H0.9866844207723036 V0.9698795180722891 Z" vector-effect="non-scaling-stroke"></path>
                            </defs>
                            <use href="#path_p1_1"></use>
                            <use href="#path_p1_1"></use>
                          </svg>

                          <svg version="1.1" preserveAspectRatio="none" viewBox="0 0 1 1" aria-hidden="true" className="k-highlight" data-main-rotation="0"
                            style={{
                              top: "45%",
                              left: "10%",
                              width: "15%",
                              height: "7%"
                            }}>
                            <defs>
                              <path id="path_p1_0" d="M0 1 V0 H1 V1 Z"></path>
                              <clipPath id="clip_path_p1_0" clipPathUnits="objectBoundingBox">
                                <use href="#path_p1_0" className="clip"></use>
                              </clipPath>
                            </defs>
                            <use href="#path_p1_0"></use>
                          </svg>
                          <svg version="1.1" preserveAspectRatio="none" viewBox="0 0 1 1" aria-hidden="true" className="k-highlight-outline k-hover" data-main-rotation="0"
                            style={{
                              top: "44.4%",
                              left: "9.65%",
                              width: "15.6%",
                              height: "7.8%"
                            }}>
                            <defs>
                              <path id="path_p1_1" d="M0.013315579227696417 0.9698795180722891 V0.030120481927710874 H0.9866844207723036 V0.9698795180722891 Z" vector-effect="non-scaling-stroke"></path>
                            </defs>
                            <use href="#path_p1_1"></use>
                            <use href="#path_p1_1"></use>
                          </svg>
                        </div>
                        <div className="k-text-layer k-highlighting">
                          <span role="presentation" dir="ltr" className="test-content">Test content for highlight annotation</span>
                        </div>
                        <div className="k-annotation-layer k-hidden"></div>
                        <div className="k-annotation-editor-layer k-annotation-editor-layer-disabled">
                          <div className="k-highlight-editor">
                          <div className="k-internal"></div>
                          {/* Floating toolbar here */}
                          </div>
                        </div>
                    </PDFViewerPage>
                  </>
              }/>
        </div>
    </>
);
