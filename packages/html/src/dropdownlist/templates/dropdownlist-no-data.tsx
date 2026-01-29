import DropdownList from "../dropdownlist.spec";
import { List } from "../../list";

export const DropdownListNoData = (props) => {
    const { id = 'dropdownlist-nodata', ...other } = props;

    return (
        <DropdownList
            id={id}
            opened
            activeDescendantId={null}
            popup={
                <List role="listbox" aria-label="DropdownList options" listboxId={`${id}-listbox`} listboxAriaLive="polite" />
            }
            {...other}
        />
    );
};
