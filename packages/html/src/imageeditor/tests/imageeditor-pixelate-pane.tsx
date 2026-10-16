import { ImageEditorPixelate, ImageEditorResizeHandles, ImageEditorRotateHandle } from '..';
import { Button } from '../../button';
import { FloatingToolbar } from '../../floating-toolbar/floating-toolbar.spec';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Pixelate Pane &mdash; No Selection</h4>

            <ImageEditorPixelate contentHeight="482px" />

            <h4>Image Editor Pixelate Pane &mdash; Rectangular Markee</h4>

            <ImageEditorPixelate contentHeight="482px" selected shape="rectangular" intensity={24}>
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia-pixelated.jpg')", backgroundSize: "cover", imageRendering: "pixelated" }}></canvas>
                <div className="k-imageeditor-crop-overlay">
                    <div className="k-imageeditor-crop" style={{ borderStyle: "dashed" }}>
                        <ImageEditorResizeHandles variant="crop" corners={false} />
                        <ImageEditorRotateHandle />
                        <FloatingToolbar fillMode="flat" style={{ width: "max-content" }} offset={{ top: "calc(100% + 12px)", left: "calc(50% + 40px)" }}>
                            <Button fillMode="flat" icon="squares-overlapping-plus" aria-label="Duplicate"></Button>
                            <Button fillMode="flat" icon="pencil" aria-label="Edit"></Button>
                            <Button fillMode="flat" icon="trash" aria-label="Delete"></Button>
                        </FloatingToolbar>
                    </div>
                </div>
            </ImageEditorPixelate>

            <h4>Image Editor Pixelate Pane &mdash; Elliptical Markee</h4>

            <ImageEditorPixelate contentHeight="482px" selected shape="elliptical" intensity={24}>
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
                <canvas width="494" height="307" aria-hidden="true" style={{ position: "absolute", insetBlockStart: 0, insetInlineStart: 0, backgroundImage: "url('/packages/html/assets/sofia-pixelated.jpg')", backgroundSize: "cover", imageRendering: "pixelated", clipPath: "ellipse(160px 98.5px at center)" }}></canvas>
                <div className="k-imageeditor-crop-overlay">
                    <div className="k-imageeditor-crop" style={{ width: "320px", height: "197px", borderStyle: "dashed", borderRadius: "50%", insetInlineStart: "50%", insetBlockStart: "50%", transform: "translate(-50%, -50%)" }}>
                        <ImageEditorResizeHandles variant="crop" corners={false} />
                        <ImageEditorRotateHandle />
                        <FloatingToolbar fillMode="flat" style={{ width: "max-content" }} offset={{ top: "calc(100% + 12px)", left: "calc(50% + 40px)" }}>
                            <Button fillMode="flat" icon="squares-overlapping-plus" aria-label="Duplicate"></Button>
                            <Button fillMode="flat" icon="pencil" aria-label="Edit"></Button>
                            <Button fillMode="flat" icon="trash" aria-label="Delete"></Button>
                        </FloatingToolbar>
                    </div>
                </div>
            </ImageEditorPixelate>

        </div>
    </>
);
