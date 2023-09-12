import { Button } from '../../button';
import { Textbox } from '../../textbox';
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
                    <div className="k-search-panel k-pos-sticky k-top-center">
                        <Button fillMode="flat" icon="handle-drag" className="k-search-dialog-draghandle"></Button>
                        <Textbox
                            suffix={
                                <Button fillMode="flat" className="k-match-case-button" icon="convert-lowercase"></Button>
                            }
                        />
                        <span className="k-search-matches">
                            <span>0</span> of <span>1</span>
                        </span>
                        <Button fillMode="flat" icon="arrow-up"></Button>
                        <Button fillMode="flat" icon="arrow-down"></Button>
                        <Button fillMode="flat" icon="x"></Button>
                    </div>
                    <div className="k-pdf-viewer-pages">
                        <div className="k-page" style={{ width: "720px", height: "360px" }}></div>
                        <div className="k-page" style={{ width: "720px", height: "360px" }}></div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
