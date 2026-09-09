import { ImageEditor } from '..';

// Exporting state: a loaded image, full toolbar/sidebar (editing is momentarily
// blocked), with a busy overlay and loader panel spanning the whole editor.
export default () => (
    <div id="test-area" className="k-d-grid k-grid-cols-1">

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

    </div>
);
