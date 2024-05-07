import { Button, ToolbarSeparator, TabStripNormal, TabStripContent, TabStripItem, SplitterPane } from "../..";
import { DockManagerNormal, PaneScrollable, DockManagerSplitter } from "../";

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
            <section>
                <DockManagerNormal toolbarItems={[
                    <Button fillMode="flat" size="medium">File 3</Button>,
                    <ToolbarSeparator className="k-separator-horizontal"></ToolbarSeparator>,
                    <Button fillMode="flat" size="medium">File 4</Button>
                ]}>
                    <DockManagerSplitter orientation="vertical">
                        <SplitterPane flexBasis="70%">
                            <DockManagerSplitter>
                                <SplitterPane pinned flexBasis="20%">
                                    <PaneScrollable title="Tools">Some tools.</PaneScrollable>
                                </SplitterPane>
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
                </DockManagerNormal>
            </section>
        </div>
    </>
);
