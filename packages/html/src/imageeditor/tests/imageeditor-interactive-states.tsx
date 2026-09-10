import { ImageEditor, ImageEditorDisabled } from '..';
import { ImageEditorPlaceholder } from '../imageeditor-placeholder';
import { Loader } from '../../loader';

export default () => (
    <div id="test-area" className="k-d-grid k-grid-cols-1">

        <span>Empty</span>
        <ImageEditorDisabled
            contentHeight="260px"
            placeholder={
                <ImageEditorPlaceholder
                    icon="image-add"
                    title="Ready to create?"
                    text="Upload a JPEG or PNG image to unlock the full capabilities of ImageEditor."
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
                />
            }
        />

    </div>
);
