import { List, ListContent, ListItem } from "../../list";
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
