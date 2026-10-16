import { ImageEditorFrames } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Frames Pane - None</h4>

            <ImageEditorFrames contentHeight="640px" style="none" imageRoundness={24} />

            <h4>Image Editor Frames Pane - Single</h4>

            <ImageEditorFrames contentHeight="640px" style="single" imageRoundness={24} />

            <h4>Image Editor Frames Pane - Multiple</h4>

            <ImageEditorFrames contentHeight="640px" style="multiple" imageRoundness={24} />

        </div>
    </>
);
