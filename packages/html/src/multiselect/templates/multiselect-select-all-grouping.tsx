import { List, ListContent, ListItem, ListGroupItem, ListUl, ListSelectAll } from "../../list";
import { nextId } from "../../misc";
import MultiSelect from "../multiselect.spec";

export const MultiSelectSelectAllGrouping = (props) => {
    const msId = nextId('ms');
    const listboxId = nextId('ms-listbox');
    const group1Id = nextId('ms-sag-group');
    const group2Id = nextId('ms-sag-group');

    return (
        <MultiSelect
            id={msId}
            aria-label="Select items"
            opened
            popup={
                <List
                    header="Group 1"
                    selectAll={<ListSelectAll {...props.selectAllProps} />}
                >
                    <ListContent grouping listboxId={listboxId} aria-label="Options">
                        <ListUl role="group" aria-labelledby={group1Id}>
                            <ListGroupItem id={group1Id}>Group 1</ListGroupItem>
                            <ListItem id={nextId('ms-sag-item')} {...props.listItemProps}>Item 1</ListItem>
                            <ListItem id={nextId('ms-sag-item')} {...props.listItemProps}>Item 2</ListItem>
                        </ListUl>
                        <ListUl role="group" aria-labelledby={group2Id}>
                            <ListGroupItem id={group2Id}>Group 2</ListGroupItem>
                            <ListItem id={nextId('ms-sag-item')} {...props.listItemProps}>Item 3</ListItem>
                            <ListItem id={nextId('ms-sag-item')} {...props.listItemProps}>Item 4</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            }
            {...props}
        />
    );
};
