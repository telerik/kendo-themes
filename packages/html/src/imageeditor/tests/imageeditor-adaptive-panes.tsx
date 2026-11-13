import {
    ImageEditorResizeAdaptive,
    ImageEditorCropAdaptive,
    ImageEditorRotateAdaptive,
    ImageEditorInsertTextAdaptive,
    ImageEditorInsertShapeAdaptive,
    ImageEditorInsertLineAdaptive,
    ImageEditorBlurAdaptive,
    ImageEditorPixelateAdaptive,
    ImageEditorAdjustmentsAdaptive,
    ImageEditorFiltersAdaptive,
    ImageEditorFramesAdaptive,
    ImageEditorShadowAdaptive
} from '..';
import { IMAGEEDITOR_TEST_IMAGE_SRC } from '../constants';

const styles = `
    #test-area {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
    }
    #test-area .k-imageeditor-adaptive {
        width: 360px;
        height: 800px;
    }
`;

const image = { imageSrc: IMAGEEDITOR_TEST_IMAGE_SRC };

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">
            <div>
                <h4>Mobile / Resize</h4>
                <ImageEditorResizeAdaptive {...image} />
            </div>
            <div>
                <h4>Mobile / Crop</h4>
                <ImageEditorCropAdaptive {...image} />
            </div>
            <div>
                <h4>Mobile / Rotate</h4>
                <ImageEditorRotateAdaptive {...image} />
            </div>
            <div>
                <h4>Mobile / Text</h4>
                <ImageEditorInsertTextAdaptive {...image} />
            </div>
            <div>
                <h4>Mobile / Shape</h4>
                <ImageEditorInsertShapeAdaptive {...image} />
            </div>
            <div>
                <h4>Mobile / Line</h4>
                <ImageEditorInsertLineAdaptive {...image} />
            </div>
            <div>
                <h4>Mobile / Blur</h4>
                <ImageEditorBlurAdaptive {...image} />
            </div>
            <div>
                <h4>Mobile / Pixelate</h4>
                <ImageEditorPixelateAdaptive {...image} />
            </div>
            <div>
                <h4>Mobile / Adjustments</h4>
                <ImageEditorAdjustmentsAdaptive {...image} />
            </div>
            <div>
                <h4>Mobile / Filters</h4>
                <ImageEditorFiltersAdaptive {...image} />
            </div>
            <div>
                <h4>Mobile / Frame</h4>
                <ImageEditorFramesAdaptive {...image} />
            </div>
            <div>
                <h4>Mobile / Shadow</h4>
                <ImageEditorShadowAdaptive {...image} />
            </div>
        </div>
    </>
);
