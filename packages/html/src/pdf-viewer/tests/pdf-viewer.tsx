import { Button } from '../../button';
import { Toolbar } from '../../toolbar';
import { Pager } from '../../pager';


const styles = `
    #test-area .k-pdf-viewer {
        height: 600px;
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
                <div className="k-canvas k-pdf-viewer-canvas k-pos-relative k-overflow-auto k-enable-text-select">
                    <div className="k-pdf-viewer-pages">
                        <div className="k-page" style={{ width: "720px", height: "360px" }}></div>
                        <div className="k-page" style={{ width: "720px", height: "360px" }}></div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
