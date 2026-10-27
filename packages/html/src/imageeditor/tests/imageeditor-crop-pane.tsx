import { ImageEditorCrop } from '..';
import { IMAGEEDITOR_TEST_IMAGE_SRC } from '../constants';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <h4>Image Editor Crop Pane &mdash; Default</h4>

            <ImageEditorCrop contentHeight="482px" imageSrc={IMAGEEDITOR_TEST_IMAGE_SRC} />

            <h4>Image Editor Crop Pane &mdash; Custom Crop</h4>

            <ImageEditorCrop contentHeight="482px" cropWidth={400} cropHeight={360}>
                <canvas width="700" height="400" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundPosition: "50px -350px" }}></canvas>
                <div className="k-imageeditor-crop-overlay" style={{ "--crop-x": "150px", "--crop-y": "20px", "--crop-w": "400px", "--crop-h": "360px" } as React.CSSProperties}>
                    <div className="k-imageeditor-crop-dim"></div>
                    <div className="k-imageeditor-crop" style={{ left: "150px", top: "20px", width: "400px", height: "360px" }}>
                        <div className="k-imageeditor-crop-grid"></div>
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
