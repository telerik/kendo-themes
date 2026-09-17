import { ImageEditorOptionList, ImageEditorOptionPreview } from '..';

export default () => (
    <div id="test-area" className="k-d-grid k-grid-cols-1">

        <h4>Option List / States</h4>
        <ImageEditorOptionList>
            <ImageEditorOptionPreview label="Normal" />
            <ImageEditorOptionPreview label="Hover" hover />
            <ImageEditorOptionPreview label="Focused" focus />
            <ImageEditorOptionPreview label="Selected" selected />
            <ImageEditorOptionPreview label="Selected + Hover" selected hover />
            <ImageEditorOptionPreview label="Selected + Focused" selected focus />
        </ImageEditorOptionList>

    </div>
);
