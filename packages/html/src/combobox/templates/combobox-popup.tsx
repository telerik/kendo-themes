import { List, ListItem } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxPopup = ({ firstItemState, ...others }: any) => (
    <Combobox
        opened
        popup={
            <List>
                <ListItem {...{ [firstItemState]: true }}>List item</ListItem>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
            </List>
        }
        {...others}
    />
);
