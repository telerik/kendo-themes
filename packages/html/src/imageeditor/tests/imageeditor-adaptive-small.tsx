import { ImageEditor, ImageEditorInsertShape, ImageEditorCanvas, ImageEditorResizeHandles, ImageEditorRotateHandle } from '..';
import { IMAGEEDITOR_TEST_IMAGE_SRC } from '../constants';

const styles = `
    #test-area {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
    }
    #test-area .k-imageeditor-adaptive {
        width: 360px;
        height: 800px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">

            <div>
                <h4>Mobile / Adaptive / Unselected Tool</h4>
                <ImageEditor adaptive>
                    <ImageEditorCanvas adaptive imageSrc={IMAGEEDITOR_TEST_IMAGE_SRC} />
                </ImageEditor>
            </div>

            <div>
                <h4>Mobile / Adaptive / Selected Tool / Panel Opened</h4>
                <ImageEditorInsertShape adaptive selected shapeType="Oval" alignment="center" strokeColor="#b0e855" strokeWidth={8} fillColor="#eae382" textColor="#4a4500" fontSize={24}>
                    <ImageEditorCanvas adaptive imageSrc={IMAGEEDITOR_TEST_IMAGE_SRC} />
                    <div className="k-imageeditor-resize" style={{ width: "165px", height: "54px", top: "75px", left: "81px" }}>
                        <div style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            background: "#eae382",
                            border: "2px solid #b0e855",
                            boxSizing: "border-box"
                        }}>
                            <p style={{
                                margin: 0,
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontFamily: "'Trebuchet MS', sans-serif",
                                fontSize: "16px",
                                lineHeight: 1,
                                color: "#4a4500",
                                whiteSpace: "nowrap"
                            }}>Shape text</p>
                        </div>
                        <ImageEditorResizeHandles variant="mixed" />
                        <ImageEditorRotateHandle />
                    </div>
                </ImageEditorInsertShape>
            </div>

            <div>
                <h4>Tablet / Adaptive / Selected Tool / Panel Opened</h4>
                <ImageEditorInsertShape adaptive selected style={{ width: "768px", height: "1024px" }} shapeType="Oval" alignment="center" strokeColor="#b0e855" strokeWidth={8} fillColor="#eae382" textColor="#4a4500" fontSize={24}>
                    <ImageEditorCanvas width={720} height={393} imageSrc={IMAGEEDITOR_TEST_IMAGE_SRC} />
                    <div className="k-imageeditor-resize" style={{ width: "234px", height: "77px", top: "156px", left: "243px" }}>
                        <div style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            background: "#eae382",
                            border: "2px solid #b0e855",
                            boxSizing: "border-box"
                        }}>
                            <p style={{
                                margin: 0,
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontFamily: "'Trebuchet MS', sans-serif",
                                fontSize: "16px",
                                lineHeight: 1,
                                color: "#4a4500",
                                whiteSpace: "nowrap"
                            }}>Shape text</p>
                        </div>
                        <ImageEditorResizeHandles variant="mixed" />
                        <ImageEditorRotateHandle />
                    </div>
                </ImageEditorInsertShape>
            </div>

        </div>
    </>
);
