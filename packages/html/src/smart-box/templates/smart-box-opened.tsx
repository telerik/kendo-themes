import { List, ListContent, ListItem } from "../../list";
import SmartBox from "../smart-box.spec";

export const SmartBoxOpened = (props) => (
    <SmartBox
        opened
        inputAriaLabel="AI-powered search"
        inputAriaControls="smart-box-listbox"
        inputAriaAutocomplete="list"
        popup={
            <>
                <List>
                    <ListContent listboxId="smart-box-listbox" aria-label="Suggestions">
                        <ListItem>List item</ListItem>
                        <ListItem>List item</ListItem>
                    </ListContent>
                </List>
            </>
        }
        {...props}
    />
);
