import { ImageEditorResize } from '..';
import { Tooltip } from '../../tooltip';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Resize Pane &mdash; Default</h4>

            <ImageEditorResize contentHeight="482px" />

            <h4>Image Editor Resize Pane &mdash; Resizing</h4>

            <ImageEditorResize contentHeight="482px" scaleUnit="pixel">
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
                <div className="k-imageeditor-resize">
                    <span className="k-scale-handle k-resize-nw"></span>
                    <span className="k-scale-handle k-resize-ne"></span>
                    <span className="k-scale-handle k-resize-sw"></span>
                    <span className="k-scale-handle k-resize-se"></span>
                    <span className="k-resize-handle k-resize-n"></span>
                    <span className="k-resize-handle k-resize-s"></span>
                    <span className="k-resize-handle k-resize-w"></span>
                    <span className="k-resize-handle k-resize-e"></span>
                </div>
                <Tooltip
                    themeColor="inverse"
                    style={{ position: "absolute", insetBlockEnd: "-52px", insetInlineEnd: "0" }}
                    content={
                        <>
                            <div>W: 494</div>
                            <div>H: 307</div>
                        </>
                    }
                ></Tooltip>
            </ImageEditorResize>

        </div>
    </>
);
