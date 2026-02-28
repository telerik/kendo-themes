import { ListBox } from "..";
import { ListItem } from '../../list';

export const ListBoxNormal = (props) => (
    <ListBox
        id="listbox-1"
        aria-label="Available items"
        actions={[ 'up', 'down', 'left', 'right', 'to', 'from', 'x' ]}
        children={
            [
                <ListItem key="ListItem1" id="listbox-1-item-1" focus>List item 1</ListItem>,
                <ListItem key="ListItem2" id="listbox-1-item-2" selected>List item 2</ListItem>,
                <ListItem key="ListItem3" id="listbox-1-item-3">List item 3</ListItem>,
                <ListItem key="ListItem4" id="listbox-1-item-4">List item 4</ListItem>,
                <ListItem key="ListItem5" id="listbox-1-item-5">List item 5</ListItem>,
                <ListItem key="ListItem6" id="listbox-1-item-6">List item 6</ListItem>
            ]
        }
        {...props}
    />
);
