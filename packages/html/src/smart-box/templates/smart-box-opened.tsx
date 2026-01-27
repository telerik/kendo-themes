import { List, ListItem } from "../../list";
import SmartBox from "../smart-box.spec";

export const SmartBoxOpened = (props) => (
    <SmartBox
        opened
        popup={
            <>
                <List>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                </List>
            </>
        }
        {...props}
    />
);
