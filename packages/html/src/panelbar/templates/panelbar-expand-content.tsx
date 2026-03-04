import { PanelBar, PanelBarContent, PanelBarItem } from "..";
import { nextId } from "../../misc";

export const PanelBarExpandContent = (props) => {
    const item1Id = nextId('pb-item');
    const item2Id = nextId('pb-item');
    const item3Id = nextId('pb-item');
    const item4Id = nextId('pb-item');

    return (
        <PanelBar
            activeDescendant={item1Id}
            children={
                <>
                    <PanelBarItem header expanded text="Item 1" id={item1Id} ariaSelected focus>
                        <PanelBarContent>
                            <p>Paragraph content in template.</p>
                        </PanelBarContent>
                    </PanelBarItem>
                    <PanelBarItem header text="Item 2" id={item2Id}>
                        <PanelBarContent>content</PanelBarContent>
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
