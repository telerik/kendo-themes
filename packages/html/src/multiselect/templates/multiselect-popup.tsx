import { List, ListItem } from "../../list";
import MultiSelect from "../multiselect.spec";

export const MultiSelectPopup = ({ firstItemState, ...others }: any) => (
    <MultiSelect
        opened
        popup={(
            <List>
                <ListItem {...{ [firstItemState]: true }}>List item</ListItem>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
            </List>
        )}
        {...others}
    />
);
