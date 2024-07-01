import { PanelBar, PanelBarContent, PanelBarGroup, PanelBarItem } from "..";

export const PanelBarExpandGroup = (props) => (
    <PanelBar
        children={
            <>
                <PanelBarItem header text="Item 1">
                    <PanelBarContent>content</PanelBarContent>
                </PanelBarItem>
                <PanelBarItem header expanded text="Item 2">
                    <PanelBarGroup>
                        <PanelBarItem level={1} text="Child 1" />
                        <PanelBarItem level={1} expanded text="Child 2">
                            <PanelBarGroup>
                                <PanelBarItem level={2} text="Child 2.1" />
                                <PanelBarItem level={2} text="Child 2.2" />
                            </PanelBarGroup>
                        </PanelBarItem>
                        <PanelBarItem level={1} text="Child 3">
                            <PanelBarContent>content</PanelBarContent>
                        </PanelBarItem>
                        <PanelBarItem level={1} text="Child 4" />
                    </PanelBarGroup>
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

export default PanelBarExpandGroup;
