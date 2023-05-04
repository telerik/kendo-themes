import { Button } from '../../button';
import { Icon } from '../../icon';
import { Upload } from '../../upload';
import { Toolbar } from '../../toolbar';
import { Pager } from '../../pager';


const styles = `
    #test-area .k-pdf-viewer {
        height: 600px;
    }
    .k-dropzone {
        gap: 8px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <div className="k-widget k-pdf-viewer">
                <Toolbar resizable>
                    <Pager type="input" pageSizes={false} refresh={false} info={false} />
                    <span className="k-spacer"></span>
                    <Button fillMode="flat" icon="file-pdf"></Button>
                    <Button fillMode="flat" icon="print"></Button>
                    <Button fillMode="flat" icon="fullscreen"></Button>
                </Toolbar>
                <div className="k-canvas k-pdf-viewer-canvas k-pos-relative k-overflow-auto">
                    <div className="k-pdf-viewer-pages">
                        <div className="k-page k-blank-page">
                            <div className="k-external-dropzone">
                                <div className="k-dropzone-inner">
                                    <Icon icon="upload" className="k-dropzone-icon" size="xxxlarge" />
                                    <span className="k-dropzone-hint">Drag and drop files here to upload</span>
                                </div>
                            </div>
                            <Upload async empty status="upload"></Upload>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
