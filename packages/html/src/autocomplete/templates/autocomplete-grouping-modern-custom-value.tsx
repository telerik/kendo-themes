import Autocomplete from "../autocomplete.spec";
import { List, ListContent, ListUl, ListItem, ListGroupItem, ListCustomValue } from "../../list";

export const AutocompleteGroupingModernCustomValue = ({ value="Custom value", ...other }: any) => (
    <Autocomplete value={value}
        opened
        popup={
            <List header="Group 1" customValue={<ListCustomValue text={`Use "${value}"`}/>} >
                <ListContent grouping>
                    <ListUl>
                        <ListItem>List group 1 item 1</ListItem>
                        <ListItem>List group 1 item 2</ListItem>
                        <ListItem>List group 1 item 3</ListItem>
                    </ListUl>
                    <ListUl>
                        <ListGroupItem>Group 2</ListGroupItem>
                        <ListItem>List group 1 item 1</ListItem>
                        <ListItem>List group 1 item 2</ListItem>
                        <ListItem>List group 1 item 3</ListItem>
                    </ListUl>
                </ListContent>
            </List>
        }
        {...other}
    />
);
