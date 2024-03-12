import { PanelBar, PanelBarContent, PanelBarItem } from "..";

export const PanelBarNormal = (props) => (
    <PanelBar
        children={
            <>
                <PanelBarItem header text="Item 1">
                    <PanelBarContent>content</PanelBarContent>
                </PanelBarItem>
                <PanelBarItem header text="Item 2">
                    <PanelBarContent>content</PanelBarContent>
                </PanelBarItem>
                <PanelBarItem header text="Item 3">
                    <PanelBarContent>content</PanelBarContent>
                </PanelBarItem>
                <PanelBarItem header text="Item 4" />
            </>
        }
        {...props}
    />
);
