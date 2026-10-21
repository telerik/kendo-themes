import { ImageEditorAdjustments } from '..';
import { IMAGEEDITOR_TEST_IMAGE_SRC } from '../constants';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Adjustments Pane</h4>

            <ImageEditorAdjustments contentHeight="640px" imageSrc={IMAGEEDITOR_TEST_IMAGE_SRC} />

        </div>
    </>
);
