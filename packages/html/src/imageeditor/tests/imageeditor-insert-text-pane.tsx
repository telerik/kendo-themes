import { ImageEditorInsertText } from '..';
import { Button } from '../../button';
import { FloatingToolbar } from '../../toolbar';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Insert Text Pane</h4>

            <ImageEditorInsertText contentHeight="640px">
                <canvas width="494" height="307" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
                <div className="k-imageeditor-resize" style={{ width: "270px", height: "64px", top: "122px", left: "112px" }}>
                    <p style={{
                        margin: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Trebuchet MS', sans-serif",
                        fontWeight: "bold",
                        fontSize: "38px",
                        lineHeight: 1,
                        color: "#f5e93d",
                        opacity: 0.7,
                        textTransform: "uppercase",
                        whiteSpace: "nowrap"
                    }}>Text Example</p>
                    <span className="k-scale-handle k-resize-nw"></span>
                    <span className="k-scale-handle k-resize-ne"></span>
                    <span className="k-scale-handle k-resize-sw"></span>
                    <span className="k-scale-handle k-resize-se"></span>
                    <span className="k-resize-handle k-resize-n"></span>
                    <span className="k-resize-handle k-resize-s"></span>
                    <span className="k-resize-handle k-resize-w"></span>
                    <span className="k-resize-handle k-resize-e"></span>
                    <FloatingToolbar offset={{ top: "72px", left: "0" }}>
                        <Button icon="copy" aria-label="Duplicate"></Button>
                        <Button icon="pencil" aria-label="Edit"></Button>
                        <Button icon="flip-horizontal" aria-label="Flip Horizontal"></Button>
                        <Button icon="flip-vertical" aria-label="Flip Vertical"></Button>
                        <Button icon="trash" aria-label="Delete"></Button>
                    </FloatingToolbar>
                </div>
            </ImageEditorInsertText>

        </div>
    </>
);
