import { Button } from '../../button';
import { Textbox } from '../../textbox';


const styles = `
    #test-area .k-pdf-viewer {
        height: 600px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <div className="k-window" style={{ position: "relative", display: "flex", alignSelf: "flex-start", width: "430px" }}>
                <div className="k-pdf-viewer-search-dialog k-window-content">
                    <div className="k-search-container">
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
                </div>
            </div>
        </div>
    </>
);
