import SplitterPane from '../splitter-pane';
import Splitter from '../splitter.spec';

const style = `
    .content {
        text-align: center;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Splitbar horizontal</span>
            <Splitter style={{ height: "150px" }}>
                <SplitterPane resizable={false}>
                    <div className="content">
                        <p>Splitter static</p>
                    </div>
                </SplitterPane>
                <SplitterPane>
                    <div className="content">
                        <p>Splitter draggable</p>
                    </div>
                </SplitterPane>
                <SplitterPane>
                    <div className="content">
                        <p>Splitter draggable - collapse right</p>
                    </div>
                </SplitterPane>
                <SplitterPane collapsible>
                    <div className="content">
                        <p>Splitter draggable - collapse left & right</p>
                    </div>
                </SplitterPane>
                <SplitterPane collapsible>
                    <div className="content">
                        <p>Splitter draggable - collapse left</p>
                    </div>
                </SplitterPane>
                <SplitterPane>
                </SplitterPane>
            </Splitter>

            <span>Splitbar vertical</span>
            <Splitter orientation="vertical">
                <SplitterPane resizable={false}>
                    <div className="content">
                        <p>Splitter static</p>
                    </div>
                </SplitterPane>
                <SplitterPane>
                    <div className="content">
                        <p>Splitter draggable</p>
                    </div>
                </SplitterPane>
                <SplitterPane>
                    <div className="content">
                        <p>Splitter draggable - collapse down</p>
                    </div>
                </SplitterPane>
                <SplitterPane collapsible>
                    <div className="content">
                        <p>Splitter draggable - collapse down & top</p>
                    </div>
                </SplitterPane>
                <SplitterPane collapsible>
                    <div className="content">
                        <p>Splitter draggable - collapse top</p>
                    </div>
                </SplitterPane>
                <SplitterPane>
                </SplitterPane>
            </Splitter>

        </div>
    </>
);
