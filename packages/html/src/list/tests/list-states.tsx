import { ListNormal } from '../templates/list-normal';
import { ListVirtualization } from '../templates/list-virtualization';
import { ListItem } from '../list-item.spec';

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
        </div>
    </>
);
