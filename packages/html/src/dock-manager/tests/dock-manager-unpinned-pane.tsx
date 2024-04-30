import { Button, TabStripNormal, TabStripContent, TabStripItem, SplitterPane } from "../..";
import { PaneScrollable, DockManagerSplitter, DockManagerUnpinnedPane } from "../";

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
                <DockManagerSplitter orientation="vertical">
                    <SplitterPane flexBasis="70%">
                        <DockManagerSplitter>
                            <SplitterPane tabbed flexBasis="40%">
                                <TabStripNormal style={{ height: "100%" }}
                                    tabStripItems={
                                        <>
                                            <TabStripItem first value="File 1" active>
                                                <Button fillMode="flat" icon="pin"></Button>
                                                <Button fillMode="flat" icon="more-vertical"></Button>
                                            </TabStripItem>
                                            <TabStripItem value="File 2">
                                                <Button fillMode="flat" themeColor="primary" icon="pin"></Button>
                                                <Button fillMode="flat" themeColor="primary" icon="more-vertical"></Button>
                                            </TabStripItem>
                                        </>
                                    }
                                >
                                    <TabStripContent active>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit porro optio veritatis obcaecati nostrum molestias dolor maxime! Molestias ducimus placeat quia possimus esse atque odio, a recusandae iste exercitationem. Sapiente fugit assumenda at explicabo quos consequuntur dicta cumque ex aspernatur, nesciunt itaque doloremque exercitationem eaque iusto. Iste non officia consequatur quis veritatis magni, quo autem dolores numquam dignissimos nemo.
                                    </TabStripContent>
                                </TabStripNormal>
                            </SplitterPane>
                            <SplitterPane>
                                <DockManagerSplitter orientation="vertical">
                                    <SplitterPane tabbed flexBasis="50%">
                                        <TabStripNormal style={{ height: "100%" }}
                                            tabStripItems={
                                                <>
                                                    <TabStripItem first value="File 5" active>
                                                        <Button fillMode="flat" icon="pin"></Button>
                                                        <Button fillMode="flat" icon="more-vertical"></Button>
                                                    </TabStripItem>
                                                    <TabStripItem value="File 6">
                                                        <Button fillMode="flat" themeColor="primary" icon="pin"></Button>
                                                        <Button fillMode="flat" themeColor="primary" icon="more-vertical"></Button>
                                                    </TabStripItem>
                                                </>
                                            }
                                        >
                                            <TabStripContent active>
                                                    Properties content.
                                            </TabStripContent>
                                        </TabStripNormal>
                                    </SplitterPane>
                                    <SplitterPane pinned>
                                        <PaneScrollable title="Layers">Layers content.</PaneScrollable>
                                    </SplitterPane>
                                </DockManagerSplitter>
                            </SplitterPane>
                        </DockManagerSplitter>
                    </SplitterPane>
                    <SplitterPane pinned>
                        <PaneScrollable title="Console">Console content.</PaneScrollable>
                    </SplitterPane>
                </DockManagerSplitter>
            </DockManagerUnpinnedPane>
        </div>
    </>
);
