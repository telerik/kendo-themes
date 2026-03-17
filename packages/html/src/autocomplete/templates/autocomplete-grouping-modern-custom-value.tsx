import Autocomplete from "../autocomplete.spec";
import { List, ListContent, ListUl, ListItem, ListGroupItem, ListCustomValue } from "../../list";
import { nextId } from "../../misc";

export const AutocompleteGroupingModernCustomValue = ({ value="Custom value", ...other }: any) => {
    const acId = nextId('ac');
    const group1Id = nextId('ac-group');
    const group2Id = nextId('ac-group');

    return (
        <Autocomplete value={value}
            id={acId}
            aria-label="Search options"
            opened
            popup={
                <List header="Group 1" customValue={<ListCustomValue text={`Use "${value}"`}/>} >
                    <ListContent grouping listboxId={`${acId}-listbox`} aria-label="Options">
                        <ListUl role="group" aria-labelledby={group1Id}>
                            <ListGroupItem id={group1Id}>Group 1</ListGroupItem>
                            <ListItem id={nextId('ac-item')}>List group 1 item 1</ListItem>
                            <ListItem id={nextId('ac-item')}>List group 1 item 2</ListItem>
                            <ListItem id={nextId('ac-item')}>List group 1 item 3</ListItem>
                        </ListUl>
                        <ListUl role="group" aria-labelledby={group2Id}>
                            <ListGroupItem id={group2Id}>Group 2</ListGroupItem>
                            <ListItem id={nextId('ac-item')}>List group 1 item 1</ListItem>
                            <ListItem id={nextId('ac-item')}>List group 1 item 2</ListItem>
                            <ListItem id={nextId('ac-item')}>List group 1 item 3</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            }
            {...other}
        />
    );
};
