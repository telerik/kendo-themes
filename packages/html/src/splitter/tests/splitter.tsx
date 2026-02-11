import { Splitter } from '../../splitter/splitter.spec';
import { SplitterPane } from '../../splitter/splitter-pane';
import { SplitterNormal } from '../../splitter/templates/splitter-normal';
import { SplitterVertical } from '../../splitter/templates/splitter-vertical';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Splitter horizontal</span>
            <SplitterNormal />

            <span>Splitter vertical</span>
            <SplitterVertical />

            <span>Splitter nested</span>
            <Splitter orientation="vertical" style={{ height: "280px" }} panes={[
                <SplitterPane flex key="pane-1">
                    <Splitter panes={[
                        <SplitterPane flexBasis="20%" collapsible key="nested-1">
                            <p>Collapsible pane - 20%</p>
                        </SplitterPane>,
                        <SplitterPane scrollable key="nested-2">
                            <p>Fluid, scollable pane</p>
                            <p>Content</p>
                            <p>Content</p>
                            <p>Content</p>
                            <p>Content</p>
                            <p>Content</p>
                            <p>Content</p>
                        </SplitterPane>,
                        <SplitterPane flexBasis="30%" collapsible key="nested-3">
                            <p>Collapsible pane - 30%</p>
                        </SplitterPane>
                    ]} />
                </SplitterPane>,
                <SplitterPane flexBasis="80px" key="pane-2">
                    <p>Pane - 80px</p>
                </SplitterPane>,
                <SplitterPane flexBasis="80px" resizable={false} key="pane-3">
                    <p>Non resizable pane - 80px</p>
                </SplitterPane>,
                <SplitterPane hidden key="pane-4">
                    <h2>Hidden pane, should be invisible!</h2>
                </SplitterPane>
            ]} />
        </div>
    </>
);
