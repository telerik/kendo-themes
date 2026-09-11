import { ImageEditorInsertShapes } from '..';

const styles = `
    #test-area {
        justify-items: start;
    }

    #test-area .k-imageeditor {
        width: 1024px;
    }

    #test-area .k-diagram-shapes-container {
        grid-template-columns: repeat(3, max-content);
        gap: 12px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Insert Shapes Pane</h4>

            <ImageEditorInsertShapes contentHeight="482px"></ImageEditorInsertShapes>

            <h4>Image Editor Insert Shapes Pane RTL</h4>

            <ImageEditorInsertShapes contentHeight="482px" dir="rtl"></ImageEditorInsertShapes>

        </div>
    </>
);
