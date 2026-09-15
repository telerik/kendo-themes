import { ImageEditorPixelate } from '..';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Pixelate Pane &mdash; Rectangular Markee</h4>

            <ImageEditorPixelate contentHeight="482px" shape="rectangular" intensity={24}>
                <canvas width="494" height="307" style={{ backgroundImage: "url('/packages/html/assets/sofia-pixelated.jpg')", backgroundSize: "cover", imageRendering: "pixelated" }}></canvas>
                <div className="k-imageeditor-crop-overlay">
                    <div className="k-imageeditor-crop" style={{ borderStyle: "dashed" }}></div>
                </div>
            </ImageEditorPixelate>

            <h4>Image Editor Pixelate Pane &mdash; Elliptical Markee</h4>

            <ImageEditorPixelate contentHeight="482px" shape="elliptical" intensity={24}>
                <canvas width="494" height="307" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
                <canvas width="494" height="307" style={{ position: "absolute", insetBlockStart: 0, insetInlineStart: 0, backgroundImage: "url('/packages/html/assets/sofia-pixelated.jpg')", backgroundSize: "cover", imageRendering: "pixelated", clipPath: "ellipse(160px 98.5px at center)" }}></canvas>
                <div className="k-imageeditor-crop-overlay">
                    <div className="k-imageeditor-crop" style={{ width: "320px", height: "197px", borderStyle: "dashed", borderRadius: "50%", insetInlineStart: "50%", insetBlockStart: "50%", transform: "translate(-50%, -50%)" }}></div>
                </div>
            </ImageEditorPixelate>

        </div>
    </>
);
