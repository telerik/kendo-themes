import { TabStrip, TabStripContent, TabStripItem, TabStripItems, TabStripItemsWrapper } from "../..";
import { Button } from "../../button";
import { Toolbar, ToolbarSeparator } from '../../toolbar';

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
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <section className="k-col-span-full">
                <div className="k-dock-manager">
                    <Toolbar className="k-dock-manager-toolbar k-toolbar-left">
                        <Button fillMode="flat" size="medium">File 3</Button>
                        <ToolbarSeparator className="k-separator-horizontal"></ToolbarSeparator>
                        <Button fillMode="flat" size="medium">File 4</Button>
                    </Toolbar>
                    <div className="k-dock-manager-pane-container">
                        <div className="k-splitter k-splitter-flex k-splitter-vertical k-dock-manager-splitter">
                            <div className="k-pane k-pane-static" style={{ flexBasis: "70%" }}>
                                <div className="k-splitter k-splitter-flex k-splitter-horizontal k-dock-manager-splitter">
                                    <div className="k-pane k-pane-static k-pane-pinned" style={{ flexBasis: "20%" }}>
                                        <div className="k-pane-scrollable">
                                            <div className="k-pane-header">
                                                <span className="k-pane-title">Tools</span>
                                                <div className="k-pane-actions">
                                                    <Button fillMode="flat" icon="pin"></Button>
                                                    <Button fillMode="flat" icon="more-vertical"></Button>
                                                </div>
                                            </div>
                                            <div className="k-pane-content">Some tools.</div>
                                        </div>
                                    </div>
                                    <div className="k-splitbar k-splitbar-horizontal k-splitbar-draggable-horizontal">
                                        <div className="k-resize-handle"></div>
                                    </div>
                                    <div className="k-pane k-pane-static k-pane-tabbed" style={{ flexBasis: "40%" }}>
                                        <TabStrip style={{ height: "100%" }}>
                                            <TabStripItemsWrapper>
                                                <TabStripItems>
                                                    <TabStripItem first value="File 1" active>
                                                        <Button fillMode="flat" icon="pin"></Button>
                                                        <Button fillMode="flat" icon="more-vertical"></Button>
                                                    </TabStripItem>
                                                    <TabStripItem value="File 2">
                                                        <Button fillMode="flat" themeColor="primary" icon="pin"></Button>
                                                        <Button fillMode="flat" themeColor="primary" icon="more-vertical"></Button>
                                                    </TabStripItem>
                                                </TabStripItems>
                                            </TabStripItemsWrapper>
                                            <TabStripContent active>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit porro optio veritatis obcaecati nostrum molestias dolor maxime! Molestias ducimus placeat quia possimus esse atque odio, a recusandae iste exercitationem. Sapiente fugit assumenda at explicabo quos consequuntur dicta cumque ex aspernatur, nesciunt itaque doloremque exercitationem eaque iusto. Iste non officia consequatur quis veritatis magni, quo autem dolores numquam dignissimos nemo.
                                            </TabStripContent>
                                        </TabStrip>
                                    </div>
                                    <div className="k-splitbar k-splitbar-horizontal k-splitbar-draggable-horizontal">
                                        <div className="k-resize-handle"></div>
                                    </div>
                                    <div className="k-pane">
                                        <div className="k-splitter k-splitter-flex k-splitter-vertical k-dock-manager-splitter">
                                            <div className="k-pane k-pane-static k-pane-tabbed" style={{ flexBasis: "50%" }}>
                                                <TabStrip style={{ height: "100%" }}>
                                                    <TabStripItemsWrapper>
                                                        <TabStripItems>
                                                            <TabStripItem first value="File 5" active>
                                                                <Button fillMode="flat" icon="pin"></Button>
                                                                <Button fillMode="flat" icon="more-vertical"></Button>
                                                            </TabStripItem>
                                                            <TabStripItem value="File 6">
                                                                <Button fillMode="flat" themeColor="primary" icon="pin"></Button>
                                                                <Button fillMode="flat" themeColor="primary" icon="more-vertical"></Button>
                                                            </TabStripItem>
                                                        </TabStripItems>
                                                    </TabStripItemsWrapper>
                                                    <TabStripContent active>
                                                    Properties content.
                                                    </TabStripContent>
                                                </TabStrip>
                                            </div>
                                            <div className="k-splitbar k-splitbar-vertical k-splitbar-draggable-vertical">
                                                <div className="k-resize-handle"></div>
                                            </div>
                                            <div className="k-pane k-pane-pinned">
                                                <div className="k-pane-scrollable">
                                                    <div className="k-pane-header">
                                                        <span className="k-pane-title">Layers</span>
                                                        <div className="k-pane-actions">
                                                            <Button fillMode="flat" icon="pin"></Button>
                                                            <Button fillMode="flat" icon="more-vertical"></Button>
                                                        </div>
                                                    </div>
                                                    <div className="k-pane-content">Layers content.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="k-splitbar k-splitbar-vertical k-splitbar-draggable-vertical">
                                <div className="k-resize-handle"></div>
                            </div>
                            <div className="k-pane k-pane-pinned">
                                <div className="k-pane-scrollable">
                                    <div className="k-pane-header">
                                        <span className="k-pane-title">Console</span>
                                        <div className="k-pane-actions">
                                            <Button fillMode="flat" icon="pin"></Button>
                                            <Button fillMode="flat" icon="more-vertical"></Button>
                                        </div>
                                    </div>
                                    <div className="k-pane-content">Console content.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
);
