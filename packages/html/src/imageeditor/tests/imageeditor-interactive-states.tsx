import { ImageEditor, ImageEditorDisabled, ImageEditorInsertText, ImageEditorResize, ImageEditorResizeHandles, ImageEditorRotateHandle } from '..';
import { ImageEditorPlaceholder } from '../imageeditor-placeholder';
import { Loader } from '../../loader';
import { Button } from '../../button';
import { Dialog } from '../../dialog';
import { Tooltip } from '../../tooltip';
import { FloatingToolbar } from '../../floating-toolbar/floating-toolbar.spec';

const styles = `
    .k-dialog-wrapper {
        position: absolute;
    }
    .k-overlay {
        position: absolute;
    }
`;

export default () => (
    <>
    <style>{styles}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-1">

        <span>Empty</span>
        <ImageEditorDisabled
            contentHeight="260px"
            placeholder={
                <ImageEditorPlaceholder
                    icon="image-add"
                    title="Ready to create?"
                    text="Upload a JPEG, PNG, or WebP file to unlock the full capabilities of ImageEditor."
                    buttonText="Upload Image"
                />
            }
        />

        <span>Loading</span>
        <ImageEditorDisabled
            contentHeight="260px"
            placeholder={
                <ImageEditorPlaceholder>
                    <Loader
                        animation="pulsing"
                        themeColor="secondary"
                        size="large"
                        className="k-imageeditor-placeholder-loader"
                    />
                    <div className="k-imageeditor-placeholder-hint">
                        <div className="k-imageeditor-placeholder-title">Getting your canvas ready...</div>
                        <div className="k-imageeditor-placeholder-text">Just a moment while we load your image!</div>
                    </div>
                </ImageEditorPlaceholder>
            }
        />

        <span>Exporting</span>
        <ImageEditor contentHeight="260px" exporting>
            <canvas
                width="400"
                height="200"
                role="img"
                aria-label="Image being edited"
                style={{
                    backgroundImage: "url('/packages/html/assets/sofia.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            ></canvas>
        </ImageEditor>

        <span>Error - Failed Upload</span>
        <ImageEditorDisabled
            contentHeight="260px"
            placeholder={
                <ImageEditorPlaceholder
                    icon="file-error"
                    title="Upload failed!"
                    text="Try again so you can get back to creating."
                    buttonText="Upload Image"
                />
            }
        />

        <span>Error - Unsupported File Format</span>
        <ImageEditorDisabled
            contentHeight="260px"
            placeholder={
                <ImageEditorPlaceholder
                    icon="file-error"
                    title="Unsupported file format"
                    text="Please upload a JPEG or PNG file."
                    buttonText="Upload Image"
                />
            }
        />

        <span>Error - Maximum File Size Exceeded</span>
        <ImageEditorDisabled
            contentHeight="260px"
            placeholder={
                <ImageEditorPlaceholder
                    icon="file-error"
                    title="Maximum file size exceeded!"
                    text="Please upload a file smaller than 6 MB"
                    buttonText="Upload Image"
                />
            }
        />

        <span>Unsaved Changes</span>
        <div className="k-pos-relative">
            <ImageEditorInsertText contentHeight="694px" selected fontSize={70} fillColor="#f5e93d" opacity={70}>
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
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
                    <ImageEditorRotateHandle />
                    <FloatingToolbar fillMode="flat" style={{ width: "max-content" }} offset={{ top: "120px", left: "0" }}>
                        <Button fillMode="flat" icon="squares-overlapping-plus" aria-label="Duplicate"></Button>
                        <Button fillMode="flat" icon="pencil" aria-label="Edit"></Button>
                        <Button fillMode="flat" icon="flip-horizontal" aria-label="Flip Horizontal"></Button>
                        <Button fillMode="flat" icon="flip-vertical" aria-label="Flip Vertical"></Button>
                        <Button fillMode="flat" icon="trash" aria-label="Delete"></Button>
                    </FloatingToolbar>
                </div>
            </ImageEditorInsertText>

            <Dialog
                title="Unsaved changes"
                actions={[ 'x' ]}
                actionButtonsAlign="end"
                style={{ width: "354px" }}
                actionButtons={
                    <>
                        <Button>Discard</Button>
                        <Button themeColor="primary">Confirm</Button>
                    </>
                }
            >
                <p style={{ textAlign: "center" }}>You have unsaved changes.<br />Click confirm to save them.</p>
            </Dialog>
        </div>

        <span>Deleting Annotation</span>
        <div className="k-pos-relative">
            <ImageEditorInsertText contentHeight="694px" selected fontSize={70} fillColor="#f5e93d" opacity={70}>
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
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
                    <ImageEditorRotateHandle />
                    <FloatingToolbar fillMode="flat" style={{ width: "max-content" }} offset={{ top: "120px", left: "0" }}>
                        <Button fillMode="flat" icon="squares-overlapping-plus" aria-label="Duplicate"></Button>
                        <Button fillMode="flat" icon="pencil" aria-label="Edit"></Button>
                        <Button fillMode="flat" icon="flip-horizontal" aria-label="Flip Horizontal"></Button>
                        <Button fillMode="flat" icon="flip-vertical" aria-label="Flip Vertical"></Button>
                        <Button fillMode="flat" icon="trash" aria-label="Delete" hover></Button>
                    </FloatingToolbar>
                </div>
            </ImageEditorInsertText>

            <Dialog
                title="Delete annotation"
                actions={[ 'x' ]}
                actionButtonsAlign="end"
                style={{ width: "354px" }}
                actionButtons={
                    <>
                        <Button>Cancel</Button>
                        <Button themeColor="primary">Delete</Button>
                    </>
                }
            >
                <p style={{ textAlign: "center" }}>You are about to delete this annotation.</p>
            </Dialog>
        </div>

        <span>Deleting Image</span>
        <div className="k-pos-relative">
            <ImageEditorResize contentHeight="694px" scaleUnit="pixel">
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
                <div className="k-imageeditor-resize">
                    <ImageEditorResizeHandles variant="mixed" />
                    <Tooltip
                        themeColor="inverse"
                        style={{ position: "absolute", insetBlockEnd: "8px", insetInlineEnd: "8px" }}
                        content={
                            <>
                                <div>W: 494</div>
                                <div>H: 307</div>
                            </>
                        }
                    ></Tooltip>
                    <FloatingToolbar fillMode="flat" style={{ width: "max-content" }} offset={{ top: "calc(100% + 12px)", left: "calc(100% - 148px)" }}>
                        <Button fillMode="flat" icon="flip-horizontal" aria-label="Flip Horizontal"></Button>
                        <Button fillMode="flat" icon="flip-vertical" aria-label="Flip Vertical"></Button>
                        <Button fillMode="flat" icon="download" aria-label="Download"></Button>
                        <Button fillMode="flat" icon="trash" aria-label="Delete" hover></Button>
                    </FloatingToolbar>
                </div>
            </ImageEditorResize>

            <Dialog
                title="Delete image"
                actions={[ 'x' ]}
                actionButtonsAlign="end"
                style={{ width: "354px" }}
                actionButtons={
                    <>
                        <Button>Cancel</Button>
                        <Button themeColor="primary">Delete</Button>
                    </>
                }
            >
                <p style={{ textAlign: "center" }}>You are about to delete this image.</p>
            </Dialog>
        </div>

    </div>
    </>
);
