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
                    <Button fillMode="flat" icon="unpin" aria-label="Unpin pane"></Button>
                    <Button fillMode="flat" icon="more-vertical" aria-label="More actions"></Button>
                </>
            }>
            Some tools.
            </PaneScrollable>
        }
        children={
            <>
                <DockManagerSplitter panes={[
                    <SplitterPane tabbed flexBasis="40%" key="pane-1">
                        <TabStripNormal style={{ height: "100%" }}
                            tabStripItems={
                                <>
                                    <TabStripItem first value="File 1" active actions={
                                        <>
                                            <Button as="span" icon="pin" fillMode="flat" aria-hidden="true" />
                                            <Button as="span" icon="more-vertical" fillMode="flat" aria-hidden="true" />
                                        </>
                                    }></TabStripItem>
                                </>
                            }
                        >
                            <TabStripContent active>
                            File 1
                            </TabStripContent>
                        </TabStripNormal>
                    </SplitterPane>,
                    <SplitterPane key="pane-2">
                        <DockManagerSplitter orientation="vertical" panes={[
                            <SplitterPane tabbed flexBasis="50%" key="nested-1">
                                <TabStripNormal style={{ height: "100%" }}
                                    tabStripItems={
                                        <>
                                            <TabStripItem first value="Properties" active actions={
                                                <>
                                                    <Button as="span" icon="pin" fillMode="flat" aria-hidden="true" />
                                                    <Button as="span" icon="more-vertical" fillMode="flat" aria-hidden="true" />
                                                </>
                                            }></TabStripItem>
                                            <TabStripItem last value="History" actions={
                                                <>
                                                    <Button as="span" icon="pin" fillMode="flat" aria-hidden="true" />
                                                    <Button as="span" icon="more-vertical" fillMode="flat" aria-hidden="true" />
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
                            <SplitterPane pinned key="nested-2">
                                <PaneScrollable title="Layers">Layers content.</PaneScrollable>
                            </SplitterPane>
                        ]} />
                    </SplitterPane>
                ]} />
            </>
        }
        {...props}
    />
);
