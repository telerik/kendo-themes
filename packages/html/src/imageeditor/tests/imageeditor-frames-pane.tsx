import { ImageEditorFrames } from '..';
import { IMAGEEDITOR_TEST_IMAGE_SRC } from '../constants';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Frames Pane - None</h4>

            <ImageEditorFrames contentHeight="640px" style="none" imageRoundness={24} imageSrc={IMAGEEDITOR_TEST_IMAGE_SRC} />

            <h4>Image Editor Frames Pane - Single</h4>

            <ImageEditorFrames contentHeight="640px" style="single" imageRoundness={24} frameThickness={12} frameRoundness={16} offset={12} imageSrc={IMAGEEDITOR_TEST_IMAGE_SRC} />

            <h4>Image Editor Frames Pane - Multiple</h4>

            <ImageEditorFrames contentHeight="640px" style="multiple" imageRoundness={24} frameThickness={12} frameRoundness={40} offset={12} imageSrc={IMAGEEDITOR_TEST_IMAGE_SRC} />

        </div>
    </>
);
