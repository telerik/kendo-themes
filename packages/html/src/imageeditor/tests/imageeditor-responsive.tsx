import { ImageEditorNormal, ImageEditorInsertShape, ImageEditorResizeHandles } from '..';
import { Button } from '../../button';
import { FloatingToolbar } from '../../floating-toolbar/floating-toolbar.spec';

// Tablet-width container (768px) - the plain desktop layout (left icon sidebar, right side panel)
// simply reflows into the available width; no adaptive/bottom-sheet behaviour kicks in here.
const styles = `
    #test-area {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
    }
    #test-area .k-imageeditor {
        width: 768px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">

            <div>
                <h4>Tablet / Responsive / Unselected Tool</h4>
                <ImageEditorNormal contentHeight="841px">
                    <canvas width="659" height="410" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></canvas>
                </ImageEditorNormal>
            </div>

            <div>
                <h4>Tablet / Responsive / Selected Tool / Panel Opened</h4>
                <ImageEditorInsertShape contentHeight="841px">
                    <canvas width="338" height="211" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></canvas>
                    <div className="k-imageeditor-resize" style={{ width: "130px", height: "43px", top: "84px", left: "105px" }}>
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
                                fontSize: "13px",
                                lineHeight: 1,
                                color: "#4a4500",
                                whiteSpace: "nowrap"
                            }}>Shape text</p>
                        </div>
                        <ImageEditorResizeHandles variant="mixed" />
                        <FloatingToolbar fillMode="flat" resizable offset={{ top: "51px", left: "0" }}>
                            <Button fillMode="flat" icon="copy" aria-label="Duplicate"></Button>
                            <Button fillMode="flat" icon="pencil" aria-label="Edit"></Button>
                            <Button fillMode="flat" icon="flip-horizontal" aria-label="Flip Horizontal"></Button>
                            <Button fillMode="flat" icon="flip-vertical" aria-label="Flip Vertical"></Button>
                            <Button fillMode="flat" icon="trash" aria-label="Delete"></Button>
                        </FloatingToolbar>
                    </div>
                </ImageEditorInsertShape>
            </div>

        </div>
    </>
);
