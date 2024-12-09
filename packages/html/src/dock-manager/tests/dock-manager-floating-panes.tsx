import { Button } from "../../button";
import { MenuButton } from "../../menu-button";
import { SplitterPane } from "../../splitter";
import { TabStripNormal, TabStripItem, TabStripContent } from "../../tabstrip";
import { WindowNormal } from "../../window";
import { DockManagerSplitter, PaneScrollable } from "../";

const style = `
    .k-window {
        position: relative;
        top: 1rem;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-2">
        <section>
            <span>Floating Pane</span>
            <WindowNormal
                className="k-dock-manager-window"
                title="Pane Title"
                actions={["window-minimize", "window", "more-vertical"]}
                children={
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur error repudiandaecorrupti qui. Ipsum corporis, voluptates numquam distinctio et dolorem illum. Ipsa, laborumsoluta cum asperiores sit fuga iure ad.
                    Deleniti veniam totam debitis quidem vitae id sunt, fuga at ipsa sed deserunt nulla ipsumquam!
                </p>
            }/>
        </section>
        <section>
            <span>Floating Pane with TabStrip</span>
            <WindowNormal
                style={{ width: "466px" }}
                className="k-dock-manager-window"
                title="Pane Title 1"
                actions={["window-minimize", "window", "more-vertical"]}
                children={
                <TabStripNormal
                    tabStripItems={
                        <>
                            <TabStripItem
                                first
                                value="Pane Title 1"
                                active
                                actions={
                                <>
                                    <Button fillMode="flat" icon="pin"></Button>
                                    <MenuButton
                                        fillMode="flat"
                                        icon="more-vertical"
                                        showArrow={false}
                                    ></MenuButton>
                                </>
                                }
                            ></TabStripItem>
                            <TabStripItem
                                last
                                value="Pane Title 2"
                                actions={
                                <>
                                    <Button fillMode="flat" icon="pin"></Button>
                                    <MenuButton
                                        fillMode="flat"
                                        icon="more-vertical"
                                        showArrow={false}
                                    ></MenuButton>
                                </>
                                }
                            ></TabStripItem>
                        </>
                }>
                    <TabStripContent active>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit porro optio veritatis obcaecati nostrum molestias dolor maxime! Molestias ducimus placeat quia possimus esse atque odio, a recusandae iste exercitationem.
                    </TabStripContent>
                </TabStripNormal>
            }/>
        </section>
        <section>
            <span>Floating Pane with Splitter</span>
            <WindowNormal
                className="k-dock-manager-window"
                title="Pane Title 1"
                actions={["window-minimize", "window", "more-vertical"]}
                children={
                <>
                    <DockManagerSplitter>
                        <SplitterPane>
                            <PaneScrollable title="Pane Title 1" actions={
                                <>
                                    <Button fillMode="flat" icon="pin"></Button>
                                    <MenuButton fillMode="flat" icon="more-vertical" showArrow={false}></MenuButton>
                                </>
                            }>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis mollitia dicta expedita numquam reprehenderit assumenda rem eum id voluptas laborum pariatur ab alias iure accusantium blanditiis, corporis, ut maxime?
                                </p>
                            </PaneScrollable>
                        </SplitterPane>
                        <SplitterPane>
                            <PaneScrollable title="Pane Title 2" actions={
                                <>
                                    <Button fillMode="flat" icon="pin"></Button>
                                    <MenuButton fillMode="flat" icon="more-vertical" showArrow={false}></MenuButton>
                                </>
                            }>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis mollitia dicta expedita numquam reprehenderit assumenda rem eum id voluptas laborum pariatur ab alias iure accusantium blanditiis, corporis, ut maxime?
                                </p>
                            </PaneScrollable>
                        </SplitterPane>

                    </DockManagerSplitter>
                </>
            }/>
        </section>
    </div>
  </>
);
