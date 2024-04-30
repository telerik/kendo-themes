import { ImageEditorCrop } from '..';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Crop Pane</h4>

            <ImageEditorCrop contentHeight="482px">
                <canvas width="700" height="400" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundPosition: "50px -350px" }}></canvas>
                <div className="k-imageeditor-crop-overlay">
                    <div className="k-imageeditor-crop" style={{ width: "400px", height: "400px", backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundClip: "content-box", backgroundPosition: "748px -350px" }}>
                        <span className="k-resize-handle k-resize-nw"></span>
                        <span className="k-resize-handle k-resize-n"></span>
                        <span className="k-resize-handle k-resize-ne"></span>
                        <span className="k-resize-handle k-resize-w"></span>
                        <span className="k-resize-handle k-resize-e"></span>
                        <span className="k-resize-handle k-resize-sw"></span>
                        <span className="k-resize-handle k-resize-s"></span>
                        <span className="k-resize-handle k-resize-se"></span>
                    </div>
                </div>
            </ImageEditorCrop>

        </div>
    </>
);
