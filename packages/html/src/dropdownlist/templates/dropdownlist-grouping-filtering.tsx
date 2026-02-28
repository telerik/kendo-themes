import { List, ListContent, ListUl, ListItem, ListGroupItem } from "../../list";
import { nextId } from "../../misc";
import { Searchbox } from "../../searchbox";
import DropdownList from "../dropdownlist.spec";

export const DropdownListGroupingFiltering = (props) => {
    const group1Id = nextId('ddl-gf-group');
    const group2Id = nextId('ddl-gf-group');

    return (
        <DropdownList
            id="ddl-group-filter"
            aria-label="Filter group options"
            opened
            popup={
                <>
                    <div className="k-list-filter">
                        <Searchbox aria-label="Search" />
                    </div>
                    <List header="Group 1">
                        <ListContent grouping listboxId="ddl-gf-listbox" aria-label="Options">
                            <ListUl role="group" aria-labelledby={group1Id}>
                                <ListGroupItem id={group1Id}>Group 1</ListGroupItem>
                                <ListItem id={nextId('ddl-gf-item')}>List group 1 item 1</ListItem>
                                <ListItem id={nextId('ddl-gf-item')}>List group 1 item 2</ListItem>
                                <ListItem id={nextId('ddl-gf-item')}>List group 1 item 3</ListItem>
                            </ListUl>
                            <ListUl role="group" aria-labelledby={group2Id}>
                                <ListGroupItem id={group2Id}>Group 2</ListGroupItem>
                                <ListItem id={nextId('ddl-gf-item')}>List group 1 item 1</ListItem>
                                <ListItem id={nextId('ddl-gf-item')}>List group 1 item 2</ListItem>
                                <ListItem id={nextId('ddl-gf-item')}>List group 1 item 3</ListItem>
                            </ListUl>
                        </ListContent>
                    </List>
                </>
            }
            {...props}
        />
    );
};
