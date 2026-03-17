import { PanelBar, PanelBarContent, PanelBarGroup, PanelBarItem } from "..";
import { nextId } from "../../misc";

export const PanelBarExpandGroup = (props) => {
    const item1Id = nextId('pb-item');
    const item2Id = nextId('pb-item');
    const item3Id = nextId('pb-item');
    const item4Id = nextId('pb-item');
    const child1Id = nextId('pb-child');
    const child2Id = nextId('pb-child');
    const child21Id = nextId('pb-child');
    const child22Id = nextId('pb-child');
    const child3Id = nextId('pb-child');
    const child31Id = nextId('pb-child');
    const child4Id = nextId('pb-child');

    return (
        <PanelBar
            activeDescendant={item2Id}
            children={
                <>
                    <PanelBarItem header text="Item 1" id={item1Id}>
                        <PanelBarContent>content</PanelBarContent>
                    </PanelBarItem>
                    <PanelBarItem header expanded text="Item 2" id={item2Id} ariaSelected focus>
                        <PanelBarGroup>
                            <PanelBarItem level={1} text="Child 1" id={child1Id} />
                            <PanelBarItem level={1} expanded text="Child 2" id={child2Id}>
                                <PanelBarGroup>
                                    <PanelBarItem level={2} text="Child 2.1" id={child21Id} />
                                    <PanelBarItem level={2} text="Child 2.2" id={child22Id} />
                                </PanelBarGroup>
                            </PanelBarItem>
                            <PanelBarItem level={1} text="Child 3" id={child3Id}>
                                <PanelBarGroup>
                                    <PanelBarItem level={2} text="Child 3.1" id={child31Id} />
                                </PanelBarGroup>
                            </PanelBarItem>
                            <PanelBarItem level={1} text="Child 4" id={child4Id} />
                        </PanelBarGroup>
                    </PanelBarItem>
                    <PanelBarItem header text="Item 3" id={item3Id}>
                        <PanelBarContent>content</PanelBarContent>
                    </PanelBarItem>
                    <PanelBarItem header text="Item 4" id={item4Id} />
                </>
            }
            {...props}
        />
    );
};
