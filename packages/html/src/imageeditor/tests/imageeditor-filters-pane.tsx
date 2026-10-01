import { ImageEditorFilters } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Filters Pane &mdash; None Selected</h4>

            <ImageEditorFilters contentHeight="640px" preset="none" />

        </div>
    </>
);
