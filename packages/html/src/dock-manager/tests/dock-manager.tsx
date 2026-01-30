import { DockManagerNormal, PaneScrollable, DockManagerSplitter } from "../";
import { Button } from "../../button";
import { SplitterPane } from "../../splitter";
import { TabStripNormal, TabStripItem, TabStripContent } from "../../tabstrip";
import { ToolbarSeparator } from "../../toolbar";

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
                    <Button fillMode="flat" size="small">File 3</Button>,
                    <ToolbarSeparator className="k-separator-horizontal"></ToolbarSeparator>,
                    <Button fillMode="flat" size="small">File 4</Button>
                ]}>
                    <DockManagerSplitter orientation="vertical" panes={[
                        <SplitterPane flexBasis="70%" key="pane-1">
                            <DockManagerSplitter panes={[
                                <SplitterPane pinned flexBasis="20%" key="nested-1">
                                    <PaneScrollable title="Tools">Some tools.</PaneScrollable>
                                </SplitterPane>,
                                <SplitterPane tabbed flexBasis="40%" key="nested-2">
                                    <TabStripNormal style={{ height: "100%" }}
                                        tabStripItems={
                                            <>
                                                <TabStripItem first value="File 1" active actions={
                                                    <>
                                                        <Button fillMode="flat" icon="pin"></Button>
                                                        <Button fillMode="flat" icon="more-vertical"></Button>
                                                    </>
                                                }></TabStripItem>
                                                <TabStripItem last value="File 2" actions={
                                                    <>
                                                        <Button fillMode="flat" icon="pin"></Button>
                                                        <Button fillMode="flat" icon="more-vertical"></Button>
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
                                <SplitterPane key="nested-3">
                                    <DockManagerSplitter orientation="vertical" panes={[
                                        <SplitterPane tabbed flexBasis="50%" key="deep-1">
                                            <TabStripNormal style={{ height: "100%" }}
                                                tabStripItems={
                                                    <>
                                                        <TabStripItem first value="File 5" active actions={
                                                            <>
                                                                <Button fillMode="flat" icon="pin"></Button>
                                                                <Button fillMode="flat" icon="more-vertical"></Button>
                                                            </>
                                                        }></TabStripItem>
                                                        <TabStripItem last value="File 6" actions={
                                                            <>
                                                                <Button fillMode="flat" icon="pin"></Button>
                                                                <Button fillMode="flat" icon="more-vertical"></Button>
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
                </DockManagerNormal>
            </section>
        </div>
    </>
);
