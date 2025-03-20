import { Button } from "../../button";
import { DialogNonModal } from "../../dialog";

const styles = `
    #test-area {
        max-width: 900px;
    }

    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
    }

    .k-dialog-wrapper {
        max-width: 360px;
        height: 215px;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>PDF Viewer Delete Highlight Annotation Dialog</span>
            <span>PDF Viewer Delete Underline Annotation Dialog</span>

            <div>
                <DialogNonModal title="Delete highlight annotation" actions={[ 'x' ]} className="k-pdf-viewer-delete-dialog" actionButtonsAlign="stretched" actionButtons={
                    <>
                        <Button themeColor="primary">Delete</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <p className="k-text-center">Are you sure you want to delete the highlight annotation?</p>
                </DialogNonModal>
            </div>
            <div>
              <DialogNonModal title="Delete underline annotation" actions={[ 'x' ]} className="k-pdf-viewer-delete-dialog" actionButtonsAlign="stretched" actionButtons={
                  <>
                      <Button themeColor="primary">Delete</Button>
                      <Button>Cancel</Button>
                  </>
              }>
                  <p className="k-text-center">Are you sure you want to delete the underline annotation?</p>
              </DialogNonModal>
            </div>

            <span>PDF Viewer Delete Strikethrough Annotation Dialog</span>
            <span></span>

            <div>
              <DialogNonModal title="Delete strikethrough annotation" actions={[ 'x' ]} className="k-pdf-viewer-delete-dialog" actionButtonsAlign="stretched" actionButtons={
                  <>
                      <Button themeColor="primary">Delete</Button>
                      <Button>Cancel</Button>
                  </>
              }>
                  <p className="k-text-center">Are you sure you want to delete the strikethrough annotation?</p>
              </DialogNonModal>
            </div>
        </div>
    </>
);
