import { List } from "../../list/list.spec";
import { ListContent } from "../../list/list-content";
import { ListItem } from "../../list/list-item.spec";
import SmartBox from "../smart-box.spec";

export const SmartBoxOpened = (props) => (
    <SmartBox
        opened
        popup={
            <>
                <List>
                    <ListContent>
                        <ListItem>List item</ListItem>
                        <ListItem>List item</ListItem>
                    </ListContent>
                </List>
            </>
        }
        {...props}
    />
);
