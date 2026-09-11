import { ImageEditorInsertLine } from '..';
import { Button } from '../../button';
import { FloatingToolbar } from '../../toolbar';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Insert Line Pane</h4>

            <ImageEditorInsertLine contentHeight="640px">
                <canvas width="494" height="307" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
                <div style={{ position: "absolute", top: "150px", left: "90px", width: "220px", height: "0" }}>
                    <div style={{
                        position: "absolute", left: "0", right: "0", top: "-1px", height: "2px",
                        background: "#5558e8"
                    }}></div>
                    <div style={{
                        position: "absolute", left: "0", right: "0", top: "-4px", height: "8px",
                        backgroundImage: "radial-gradient(circle, #b0e855 45%, transparent 46%)",
                        backgroundSize: "16px 8px", backgroundRepeat: "repeat-x", backgroundPosition: "left center"
                    }}></div>
                    <span style={{
                        position: "absolute", left: "-7px", top: "-7px",
                        width: "14px", height: "14px", borderRadius: "50%",
                        background: "#fff", border: "2px solid #5558e8", boxSizing: "border-box"
                    }}></span>
                    <span style={{
                        position: "absolute", right: "-9px", top: "-9px",
                        width: "18px", height: "18px", transform: "rotate(45deg)",
                        background: "#b0e855", border: "2px solid #5558e8", boxSizing: "border-box"
                    }}>
                        <span style={{
                            position: "absolute", left: "50%", top: "50%",
                            width: "5px", height: "5px", borderRadius: "50%",
                            background: "#fff", transform: "translate(-50%, -50%)"
                        }}></span>
                    </span>
                    <FloatingToolbar resizable offset={{ top: "36px", left: "-10px" }}>
                        <Button icon="copy" aria-label="Duplicate"></Button>
                        <Button icon="pencil" aria-label="Edit"></Button>
                        <Button icon="flip-horizontal" aria-label="Flip Horizontal"></Button>
                        <Button icon="flip-vertical" aria-label="Flip Vertical"></Button>
                        <Button icon="trash" aria-label="Delete"></Button>
                    </FloatingToolbar>
                </div>
            </ImageEditorInsertLine>

        </div>
    </>
);
