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
            <Splitter style={{ height: "150px" }} panes={[
                <SplitterPane resizable={false} key="pane-1">
                    <div className="content">
                        <p>Splitter static</p>
                    </div>
                </SplitterPane>,
                <SplitterPane key="pane-2">
                    <div className="content">
                        <p>Splitter draggable</p>
                    </div>
                </SplitterPane>,
                <SplitterPane key="pane-3">
                    <div className="content">
                        <p>Splitter draggable - collapse right</p>
                    </div>
                </SplitterPane>,
                <SplitterPane collapsible key="pane-4">
                    <div className="content">
                        <p>Splitter draggable - collapse left & right</p>
                    </div>
                </SplitterPane>,
                <SplitterPane collapsible key="pane-5">
                    <div className="content">
                        <p>Splitter draggable - collapse left</p>
                    </div>
                </SplitterPane>,
                <SplitterPane key="pane-6">
                </SplitterPane>
            ]} />

            <span>Splitbar vertical</span>
            <Splitter orientation="vertical" panes={[
                <SplitterPane resizable={false} key="pane-1">
                    <div className="content">
                        <p>Splitter static</p>
                    </div>
                </SplitterPane>,
                <SplitterPane key="pane-2">
                    <div className="content">
                        <p>Splitter draggable</p>
                    </div>
                </SplitterPane>,
                <SplitterPane key="pane-3">
                    <div className="content">
                        <p>Splitter draggable - collapse down</p>
                    </div>
                </SplitterPane>,
                <SplitterPane collapsible key="pane-4">
                    <div className="content">
                        <p>Splitter draggable - collapse down & top</p>
                    </div>
                </SplitterPane>,
                <SplitterPane collapsible key="pane-5">
                    <div className="content">
                        <p>Splitter draggable - collapse top</p>
                    </div>
                </SplitterPane>,
                <SplitterPane key="pane-6">
                </SplitterPane>
            ]} />

        </div>
    </>
);
