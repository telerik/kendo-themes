import { Button } from "../../button";
import { MenuButton } from "../../menu-button";
import { SplitterPane } from "../../splitter";
import { WindowNormal } from "../../window";
import DockManagerSplitter from "../dock-manager-splitter";
import PaneScrollable from "../pane-scrollable";

export const DockManagerFloatingPaneWithSplitter = (props) => (
    <WindowNormal
        className="k-floating-pane"
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
    }
    {...props}
    />
);
