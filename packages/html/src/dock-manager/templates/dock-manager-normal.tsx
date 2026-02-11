import { DockManager } from "../dock-manager.spec";
import { DockManagerSplitter } from "../dock-manager-splitter";
import { PaneScrollable } from "../pane-scrollable";
import { Button } from "../../button/button.spec";
import { SplitterPane } from "../../splitter/splitter-pane";
import { TabStripNormal } from "../../tabstrip/templates/tabstrip-normal";
import { TabStripItem } from "../../tabstrip/tabstrip-item";
import { TabStripContent } from "../../tabstrip/tabstrip-content";

export const DockManagerNormal = (props) => (
    <DockManager
        toolbarItems={
            <Button fillMode="flat" size="small">Tools</Button>
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
                    </SplitterPane>,
                    <SplitterPane key="pane-2">
                        <DockManagerSplitter orientation="vertical" panes={[
                            <SplitterPane tabbed flexBasis="50%" key="nested-1">
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
