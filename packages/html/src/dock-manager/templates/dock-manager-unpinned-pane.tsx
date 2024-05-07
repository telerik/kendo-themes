import { DockManager, DockManagerSplitter, PaneScrollable } from "..";
import { Button } from "../../button";
import { SplitterPane } from "../../splitter";
import { TabStripNormal, TabStripItem, TabStripContent } from "../../tabstrip";

export const DockManagerUnpinnedPane = (props) => (
    <DockManager
        toolbarItems={
            <Button selected fillMode="flat" size="small">Tools</Button>
        }
        unpinnedPane={
            <PaneScrollable title="Tools" actions={
                <>
                    <Button fillMode="flat" icon="unpin"></Button>
                    <Button fillMode="flat" icon="more-vertical"></Button>
                </>
            }>
            Some tools.
            </PaneScrollable>
        }
        children={
            <>
                <DockManagerSplitter>
                    <SplitterPane tabbed flexBasis="40%">
                        <TabStripNormal style={{ height: "100%" }}
                            tabStripItems={
                                <>
                                    <TabStripItem first value="File 1" active>
                                        <Button fillMode="flat" icon="pin"></Button>
                                        <Button fillMode="flat" icon="more-vertical"></Button>
                                    </TabStripItem>
                                </>
                            }
                        >
                            <TabStripContent active>
                            File 1
                            </TabStripContent>
                        </TabStripNormal>
                    </SplitterPane>
                    <SplitterPane>
                        <DockManagerSplitter orientation="vertical">
                            <SplitterPane tabbed flexBasis="50%">
                                <TabStripNormal style={{ height: "100%" }}
                                    tabStripItems={
                                        <>
                                            <TabStripItem first value="Properties" active>
                                                <Button fillMode="flat" icon="pin"></Button>
                                                <Button fillMode="flat" icon="more-vertical"></Button>
                                            </TabStripItem>
                                            <TabStripItem value="History">
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
            </>
        }
        {...props}
    />
);
