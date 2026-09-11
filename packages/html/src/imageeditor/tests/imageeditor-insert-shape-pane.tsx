import { ImageEditorInsertShape } from '..';
import { Button } from '../../button';
import { FloatingToolbar } from '../../toolbar';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Insert Shape Pane</h4>

            <ImageEditorInsertShape contentHeight="860px">
                <canvas width="494" height="307" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
                <div className="k-imageeditor-resize" style={{ width: "165px", height: "54px", top: "140px", left: "165px" }}>
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
                            color: "#706903",
                            whiteSpace: "nowrap"
                        }}>Shape text</p>
                    </div>
                    <span className="k-scale-handle k-resize-nw"></span>
                    <span className="k-scale-handle k-resize-ne"></span>
                    <span className="k-scale-handle k-resize-sw"></span>
                    <span className="k-scale-handle k-resize-se"></span>
                    <span className="k-resize-handle k-resize-n"></span>
                    <span className="k-resize-handle k-resize-s"></span>
                    <span className="k-resize-handle k-resize-w"></span>
                    <span className="k-resize-handle k-resize-e"></span>
                    <FloatingToolbar resizable offset={{ top: "62px", left: "0" }}>
                        <Button icon="copy" aria-label="Duplicate"></Button>
                        <Button icon="pencil" aria-label="Edit"></Button>
                        <Button icon="flip-horizontal" aria-label="Flip Horizontal"></Button>
                        <Button icon="flip-vertical" aria-label="Flip Vertical"></Button>
                        <Button icon="trash" aria-label="Delete"></Button>
                    </FloatingToolbar>
                </div>
            </ImageEditorInsertShape>

        </div>
    </>
);
