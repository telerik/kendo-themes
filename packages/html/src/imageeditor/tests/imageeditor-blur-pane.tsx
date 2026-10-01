import { ImageEditorBlur } from '..';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Blur Pane &mdash; Rectangular Markee</h4>

            <ImageEditorBlur contentHeight="482px" shape="rectangular" intensity={16}>
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover", filter: "blur(8px)" }}></canvas>
                <div className="k-imageeditor-crop-overlay">
                    <div className="k-imageeditor-crop" style={{ borderStyle: "dashed" }}></div>
                </div>
            </ImageEditorBlur>

            <h4>Image Editor Blur Pane &mdash; Elliptical Markee</h4>

            <ImageEditorBlur contentHeight="482px" shape="elliptical" intensity={18}>
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
                <canvas width="494" height="307" aria-hidden="true" style={{ position: "absolute", insetBlockStart: 0, insetInlineStart: 0, backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover", filter: "blur(8px)", clipPath: "ellipse(160px 98.5px at center)" }}></canvas>
                <div className="k-imageeditor-crop-overlay">
                    <div className="k-imageeditor-crop" style={{ width: "320px", height: "197px", borderStyle: "dashed", borderRadius: "50%", insetInlineStart: "50%", insetBlockStart: "50%", transform: "translate(-50%, -50%)" }}></div>
                </div>
            </ImageEditorBlur>

        </div>
    </>
);
