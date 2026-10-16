import { ListNormal, ListVirtualization, ListItem } from '..';

const style = `
    .k-virtual-list > .k-item,
    .k-virtual-list .k-list-item {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Static list</span>
            <span>Virtual list</span>
            <span>Static list (rtl)</span>
            <span>Virtual list (rtl)</span>

            <section>
                <ListNormal>
                    <ListItem>List item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                    <ListItem>List item with very long text, that spans on multiple lines</ListItem>
                    <ListItem showCheckbox>Checkbox</ListItem>
                </ListNormal>
            </section>

            <section>
                <ListVirtualization>
                    <ListItem>List item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                    <ListItem>List item with very long text, that spans on multiple lines</ListItem>
                    <ListItem showCheckbox>Checkbox</ListItem>
                </ListVirtualization>
            </section>

            <section dir="rtl">
                <ListNormal>
                    <ListItem>List item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                    <ListItem>List item with very long text, that spans on multiple lines</ListItem>
                    <ListItem showCheckbox>Checkbox</ListItem>
                </ListNormal>
            </section>

            <section dir="rtl">
                <ListVirtualization>
                    <ListItem>List item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                    <ListItem>List item with very long text, that spans on multiple lines</ListItem>
                    <ListItem showCheckbox>Checkbox</ListItem>
                </ListVirtualization>
            </section>

            <span>Static list with description</span>
            <span>Virtual list with description</span>
            <span>Static list with description (rtl)</span>
            <span>Virtual list with description (rtl)</span>

            <section>
                <ListNormal>
                    <ListItem description="Description text">List item</ListItem>
                    <ListItem hover description="Description text">Hover</ListItem>
                    <ListItem focus description="Description text">Focus</ListItem>
                    <ListItem selected description="Description text">Selected</ListItem>
                    <ListItem hover selected description="Description text">Hover selected</ListItem>
                    <ListItem disabled description="Description text">Disabled</ListItem>
                    <ListItem description="Description text">List item with very long text, that spans on multiple lines</ListItem>
                    <ListItem showCheckbox description="Description text">Checkbox</ListItem>
                </ListNormal>
            </section>

            <section>
                <ListVirtualization>
                    <ListItem description="Description text">List item</ListItem>
                    <ListItem hover description="Description text">Hover</ListItem>
                    <ListItem focus description="Description text">Focus</ListItem>
                    <ListItem selected description="Description text">Selected</ListItem>
                    <ListItem hover selected description="Description text">Hover selected</ListItem>
                    <ListItem disabled description="Description text">Disabled</ListItem>
                    <ListItem description="Description text">List item with very long text, that spans on multiple lines</ListItem>
                    <ListItem showCheckbox description="Description text">Checkbox</ListItem>
                </ListVirtualization>
            </section>

            <section dir="rtl">
                <ListNormal>
                    <ListItem description="Description text">List item</ListItem>
                    <ListItem hover description="Description text">Hover</ListItem>
                    <ListItem focus description="Description text">Focus</ListItem>
                    <ListItem selected description="Description text">Selected</ListItem>
                    <ListItem hover selected description="Description text">Hover selected</ListItem>
                    <ListItem disabled description="Description text">Disabled</ListItem>
                    <ListItem description="Description text">List item with very long text, that spans on multiple lines</ListItem>
                    <ListItem showCheckbox description="Description text">Checkbox</ListItem>
                </ListNormal>
            </section>

            <section dir="rtl">
                <ListVirtualization>
                    <ListItem description="Description text">List item</ListItem>
                    <ListItem hover description="Description text">Hover</ListItem>
                    <ListItem focus description="Description text">Focus</ListItem>
                    <ListItem selected description="Description text">Selected</ListItem>
                    <ListItem hover selected description="Description text">Hover selected</ListItem>
                    <ListItem disabled description="Description text">Disabled</ListItem>
                    <ListItem description="Description text">List item with very long text, that spans on multiple lines</ListItem>
                    <ListItem showCheckbox description="Description text">Checkbox</ListItem>
                </ListVirtualization>
            </section>
        </div>
    </>
);
