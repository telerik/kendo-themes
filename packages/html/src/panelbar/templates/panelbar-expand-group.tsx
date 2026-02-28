import { PanelBar, PanelBarContent, PanelBarGroup, PanelBarItem } from "..";

export const PanelBarExpandGroup = (props) => (
    <PanelBar
        activeDescendant="panelbar-eg-item-2"
        children={
            <>
                <PanelBarItem header text="Item 1" id="panelbar-eg-item-1">
                    <PanelBarContent>content</PanelBarContent>
                </PanelBarItem>
                <PanelBarItem header expanded text="Item 2" id="panelbar-eg-item-2" ariaSelected focus>
                    <PanelBarGroup>
                        <PanelBarItem level={1} text="Child 1" id="panelbar-eg-child-1" />
                        <PanelBarItem level={1} expanded text="Child 2" id="panelbar-eg-child-2">
                            <PanelBarGroup>
                                <PanelBarItem level={2} text="Child 2.1" id="panelbar-eg-child-2-1" />
                                <PanelBarItem level={2} text="Child 2.2" id="panelbar-eg-child-2-2" />
                            </PanelBarGroup>
                        </PanelBarItem>
                        <PanelBarItem level={1} text="Child 3" id="panelbar-eg-child-3">
                            <PanelBarGroup>
                                <PanelBarItem level={2} text="Child 3.1" id="panelbar-eg-child-3-1" />
                            </PanelBarGroup>
                        </PanelBarItem>
                        <PanelBarItem level={1} text="Child 4" id="panelbar-eg-child-4" />
                    </PanelBarGroup>
                </PanelBarItem>
                <PanelBarItem header text="Item 3" id="panelbar-eg-item-3">
                    <PanelBarContent>content</PanelBarContent>
                </PanelBarItem>
                <PanelBarItem header text="Item 4" id="panelbar-eg-item-4" />
            </>
        }
        {...props}
    />
);
