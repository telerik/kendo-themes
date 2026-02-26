import { List, ListItem, ListGroupItem, ListContent, ListUl } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxGrouping = (props) => (
    <Combobox
        id="combobox-grp"
        opened
        popup={
            <List header="Group 1">
                <ListContent grouping listboxId="combobox-grp-listbox" aria-label="Options">
                    <ListUl role="group" aria-labelledby="combobox-grp-group-1">
                        <ListItem id="combobox-grp-item-0">List group 1 item 1</ListItem>
                        <ListItem id="combobox-grp-item-1">List group 1 item 2</ListItem>
                        <ListItem id="combobox-grp-item-2">List group 1 item 3</ListItem>
                    </ListUl>
                    <ListUl role="group" aria-labelledby="combobox-grp-group-2">
                        <ListGroupItem id="combobox-grp-group-2">Group 2</ListGroupItem>
                        <ListItem id="combobox-grp-item-3">List group 1 item 1</ListItem>
                        <ListItem id="combobox-grp-item-4">List group 1 item 2</ListItem>
                        <ListItem id="combobox-grp-item-5">List group 1 item 3</ListItem>
                    </ListUl>
                </ListContent>
            </List>
        }
        {...props}
    />
);
