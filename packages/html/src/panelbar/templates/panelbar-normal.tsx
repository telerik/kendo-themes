import { PanelBar, PanelBarContent, PanelBarItem } from "..";

export const PanelBarNormal = (props) => (
    <PanelBar
        children={
            <>
                <PanelBarItem header text="Item 1" id="panelbar-item-1">
                    <PanelBarContent>content</PanelBarContent>
                </PanelBarItem>
                <PanelBarItem header text="Item 2" id="panelbar-item-2">
                    <PanelBarContent>content</PanelBarContent>
                </PanelBarItem>
                <PanelBarItem header text="Item 3" id="panelbar-item-3">
                    <PanelBarContent>content</PanelBarContent>
                </PanelBarItem>
                <PanelBarItem header text="Item 4" id="panelbar-item-4" />
            </>
        }
        {...props}
    />
);
