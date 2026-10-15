import { ImageEditorShadow } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Shadow Pane</h4>

            <ImageEditorShadow contentHeight="640px" positionX={2} positionY={-4} blur={32} spread={12} opacity={32} />

        </div>
    </>
);
