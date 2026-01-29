import { List, ListItem } from "../../list";
import { Searchbox } from "../../searchbox";
import DropdownList from "../dropdownlist.spec";

export const DropdownListFiltering = (props) => {
    const { id = 'dropdownlist', ...other } = props;
    const listboxId = `${id}-listbox`;
    const activeDescendantId = `${id}-listbox-item-0`;

    return (
        <DropdownList
            id={id}
            opened={true}
            activeDescendantId={activeDescendantId}
            popup={
                <>
                    <div className="k-list-filter">
                        <Searchbox
                            inputProps={{
                                role: 'searchbox',
                                'aria-label': 'Filter options',
                                'aria-activedescendant': activeDescendantId,
                                'aria-autocomplete': 'list',
                                'aria-controls': listboxId,
                                'aria-haspopup': 'listbox'
                            }}
                        />
                    </div>
                    <List role="listbox" aria-label="DropdownList options" listboxId={listboxId} listboxAriaLive="polite">
                        <ListItem id={`${id}-listbox-item-0`} role="option" aria-selected="true" tabIndex={0} selected focus>List item</ListItem>
                        <ListItem id={`${id}-listbox-item-1`} role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                        <ListItem id={`${id}-listbox-item-2`} role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                    </List>
                </>
            }
            {...other}
        />
    );
};
