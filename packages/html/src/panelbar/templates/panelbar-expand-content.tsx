import { PanelBar, PanelBarContent, PanelBarItem } from "..";

export const PanelBarExpandContent = (props) => (
    <PanelBar
        activeDescendant="panelbar-ec-item-1"
        children={
            <>
                <PanelBarItem header expanded text="Item 1" id="panelbar-ec-item-1" ariaSelected focus>
                    <PanelBarContent>
                        <p>Paragraph content in template.</p>
                    </PanelBarContent>
                </PanelBarItem>
                <PanelBarItem header text="Item 2" id="panelbar-ec-item-2">
                    <PanelBarContent>content</PanelBarContent>
                </PanelBarItem>
                <PanelBarItem header text="Item 3" id="panelbar-ec-item-3">
                    <PanelBarContent>content</PanelBarContent>
                </PanelBarItem>
                <PanelBarItem header text="Item 4" id="panelbar-ec-item-4" />
            </>
        }
        {...props}
    />
);
