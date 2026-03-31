import { PaneScrollable, DockManagerSplitter, DockManagerUnpinnedPane } from "../";
import { Button } from "../../button";
import { SplitterPane } from "../../splitter";
import { TabStripNormal, TabStripItem, TabStripContent } from "../../tabstrip";

const styles = `
    #test-area {
        max-width: 1040px;
    }

    .k-dock-manager {
        height: 800px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <DockManagerUnpinnedPane>
                <DockManagerSplitter orientation="vertical" panes={[
                    <SplitterPane flexBasis="70%" key="pane-1">
                        <DockManagerSplitter panes={[
                            <SplitterPane tabbed flexBasis="40%" key="nested-1">
                                <TabStripNormal style={{ height: "100%" }}
                                    tabStripItems={
                                        <>
                                            <TabStripItem first value="File 1" active actions={
                                                <>
                                                    <Button fillMode="flat" size="xsmall" icon="pin"></Button>
                                                    <Button fillMode="flat" size="xsmall" icon="more-vertical"></Button>
                                                </>
                                            }></TabStripItem>
                                            <TabStripItem last value="File 2" actions={
                                                <>
                                                    <Button fillMode="flat" size="xsmall" icon="pin"></Button>
                                                    <Button fillMode="flat" size="xsmall" icon="more-vertical"></Button>
                                                </>
                                            }></TabStripItem>
                                        </>
                                    }
                                >
                                    <TabStripContent active>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit porro optio veritatis obcaecati nostrum molestias dolor maxime! Molestias ducimus placeat quia possimus esse atque odio, a recusandae iste exercitationem. Sapiente fugit assumenda at explicabo quos consequuntur dicta cumque ex aspernatur, nesciunt itaque doloremque exercitationem eaque iusto. Iste non officia consequatur quis veritatis magni, quo autem dolores numquam dignissimos nemo.
                                    </TabStripContent>
                                </TabStripNormal>
                            </SplitterPane>,
                            <SplitterPane key="nested-2">
                                <DockManagerSplitter orientation="vertical" panes={[
                                    <SplitterPane tabbed flexBasis="50%" key="deep-1">
                                        <TabStripNormal style={{ height: "100%" }}
                                            tabStripItems={
                                                <>
                                                    <TabStripItem first value="File 5" active actions={
                                                        <>
                                                            <Button fillMode="flat" size="xsmall" icon="pin"></Button>
                                                            <Button fillMode="flat" size="xsmall" icon="more-vertical"></Button>
                                                        </>
                                                    }></TabStripItem>
                                                    <TabStripItem last value="File 6" actions={
                                                        <>
                                                            <Button fillMode="flat" size="xsmall" icon="pin"></Button>
                                                            <Button fillMode="flat" size="xsmall" icon="more-vertical"></Button>
                                                        </>
                                                    }></TabStripItem>
                                                </>
                                            }
                                        >
                                            <TabStripContent active>
                                                    Properties content.
                                            </TabStripContent>
                                        </TabStripNormal>
                                    </SplitterPane>,
                                    <SplitterPane pinned key="deep-2">
                                        <PaneScrollable title="Layers">Layers content.</PaneScrollable>
                                    </SplitterPane>
                                ]} />
                            </SplitterPane>
                        ]} />
                    </SplitterPane>,
                    <SplitterPane pinned key="pane-2">
                        <PaneScrollable title="Console">Console content.</PaneScrollable>
                    </SplitterPane>
                ]} />
            </DockManagerUnpinnedPane>
        </div>
    </>
);
