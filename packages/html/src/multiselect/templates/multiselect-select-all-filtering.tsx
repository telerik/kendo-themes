import { List, ListContent, ListItem, ListSelectAll } from "../../list";
import { Searchbox } from "../../searchbox";
import { nextId } from "../../misc";
import MultiSelect from "../multiselect.spec";

export const MultiSelectSelectAllFiltering = (props) => {
    const msId = nextId('ms');
    const listboxId = nextId('ms-listbox');

    return (
        <MultiSelect
            id={msId}
            aria-label="Select items"
            opened
            popup={
                <>
                    <div className="k-list-filter">
                        <Searchbox aria-label="Search" />
                    </div>
                    <List
                        selectAll={<ListSelectAll {...props.selectAllProps} />}
                    >
                        <ListContent listboxId={listboxId} aria-label="Options">
                            <ListItem id={nextId('ms-saf-item')} {...props.listItemProps}>Option 1</ListItem>
                            <ListItem id={nextId('ms-saf-item')} {...props.listItemProps}>Option 2</ListItem>
                            <ListItem id={nextId('ms-saf-item')} {...props.listItemProps}>Option 3</ListItem>
                            <ListItem id={nextId('ms-saf-item')} {...props.listItemProps}>Option 4</ListItem>
                            <ListItem id={nextId('ms-saf-item')} {...props.listItemProps}>Option 5</ListItem>
                        </ListContent>
                    </List>
                </>
            }
            {...props}
        />
    );
};
