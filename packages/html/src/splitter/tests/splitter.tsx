import { Splitter, SplitterPane, SplitterNormal, SplitterVertical } from '../../splitter';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Splitter horizontal</span>
            <SplitterNormal />

            <span>Splitter vertical</span>
            <SplitterVertical />

            <span>Splitter nested</span>
            <Splitter orientation="vertical" style={{ height: "280px" }}>
                <SplitterPane flex>
                    <Splitter>
                        <SplitterPane flexBasis="20%" collapsible>
                            <p>Collapsible pane - 20%</p>
                        </SplitterPane>
                        <SplitterPane scrollable>
                            <p>Fluid, scollable pane</p>
                            <p>Content</p>
                            <p>Content</p>
                            <p>Content</p>
                            <p>Content</p>
                            <p>Content</p>
                            <p>Content</p>
                        </SplitterPane>
                        <SplitterPane flexBasis="30%" collapsible>
                            <p>Collapsible pane - 30%</p>
                        </SplitterPane>
                    </Splitter>
                </SplitterPane>
                <SplitterPane flexBasis="80px" >
                    <p>Pane - 80px</p>
                </SplitterPane>
                <SplitterPane flexBasis="80px" resizable={false}>
                    <p>Non resizable pane - 80px</p>
                </SplitterPane>
                <SplitterPane hidden>
                    <h2>Hidden pane, should be invisible!</h2>
                </SplitterPane>
            </Splitter>
        </div>
    </>
);
