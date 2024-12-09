import { Button } from "../../button";
import { MenuButton } from "../../menu-button";
import { TabStripNormal, TabStripItem, TabStripContent } from "../../tabstrip";
import { WindowNormal } from "../../window";

export const DockManagerFloatingPaneWithTabStrip = (props) => (
    <WindowNormal
        className="k-floating-pane"
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
    }
    {...props}
    />
);
