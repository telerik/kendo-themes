import { List, ListItem, ListGroupItem, ListCustomValue, ListContent, ListUl } from "../../list";
import { nextId } from "../../misc";
import MultiSelect from "../multiselect.spec";

export const MultiSelectGroupingVirtualCustomValue = ({ value="Custom value", ...other }: any) => {
    const group1Id = nextId('ms-grpvcv-group');
    const group2Id = nextId('ms-grpvcv-group');

    return (
        <MultiSelect  value={value}
            id="ms-grp-virtual"
            aria-label="Select options"
            opened
            popup={
                <List header="Group 1" virtualization customValue={<ListCustomValue text={`Use "${value}"`}/>}>
                    <ListContent grouping virtualization listboxId="ms-grpvcv-listbox" aria-label="Options">
                        <ListUl role="group" aria-labelledby={group1Id}>
                            <ListGroupItem id={group1Id}>Group 1</ListGroupItem>
                            <ListItem id={nextId('ms-grpvcv-item')}>List group 1 item 1</ListItem>
                            <ListItem id={nextId('ms-grpvcv-item')}>List group 1 item 2</ListItem>
                        </ListUl>
                        <ListUl role="group" aria-labelledby={group2Id}>
                            <ListGroupItem id={group2Id}>Group 2</ListGroupItem>
                            <ListItem id={nextId('ms-grpvcv-item')}>List group 1 item 1</ListItem>
                            <ListItem id={nextId('ms-grpvcv-item')}>List group 1 item 2</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            }
            {...other}
            />
    );
};
