import { DockManager, DockManagerSplitter, PaneScrollable } from "..";
import { Button } from "../../button";
import { SplitterPane } from "../../splitter";
import { TabStripNormal, TabStripItem, TabStripContent } from "../../tabstrip";

export const DockManagerNormal = (props) => (
    <DockManager
        toolbarItems={
            <Button fillMode="flat" size="small">Tools</Button>
        }
        children={
            <>
                <DockManagerSplitter>
                    <SplitterPane tabbed flexBasis="40%">
                        <TabStripNormal style={{ height: "100%" }}
                            tabStripItems={
                                <>
                                    <TabStripItem first value="File 1" active actions={
                                        <>
                                            <Button fillMode="flat" icon="pin"></Button>
                                            <Button fillMode="flat" icon="more-vertical"></Button>
                                        </>
                                    }></TabStripItem>
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
                                            <TabStripItem first value="Properties" active actions={
                                                <>
                                                    <Button fillMode="flat" icon="pin"></Button>
                                                    <Button fillMode="flat" icon="more-vertical"></Button>
                                                </>
                                            }></TabStripItem>
                                            <TabStripItem last value="History" actions={
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
