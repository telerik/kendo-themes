import { ImageEditorResize } from '..';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Resize Pane</h4>

            <ImageEditorResize contentHeight="482px">
                <canvas width="494" height="307" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
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
            </ImageEditorResize>

        </div>
    </>
);
