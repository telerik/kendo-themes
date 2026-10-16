import { ImageEditorRotate, ImageEditorRotateHandle } from '..';
import { Tooltip } from '../../tooltip';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Rotate Pane &mdash; Default</h4>

            <ImageEditorRotate contentHeight="482px" />

            <h4>Image Editor Rotate Pane &mdash; Rotating</h4>

            <ImageEditorRotate contentHeight="482px" rotation={30}>
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
                <div className="k-imageeditor-rotate">
                    <div className="k-imageeditor-crop-grid"></div>
                    <span className="k-scale-handle k-resize-nw"></span>
                    <span className="k-scale-handle k-resize-n"></span>
                    <span className="k-scale-handle k-resize-ne"></span>
                    <span className="k-scale-handle k-resize-w"></span>
                    <span className="k-scale-handle k-resize-e"></span>
                    <span className="k-scale-handle k-resize-sw"></span>
                    <span className="k-scale-handle k-resize-s"></span>
                    <span className="k-scale-handle k-resize-se"></span>
                    <ImageEditorRotateHandle />
                </div>
                <Tooltip
                    themeColor="inverse"
                    style={{ position: "absolute", insetBlockEnd: "-52px", insetInlineEnd: "0" }}
                    content={<div>30°</div>}
                ></Tooltip>
            </ImageEditorRotate>

        </div>
    </>
);
