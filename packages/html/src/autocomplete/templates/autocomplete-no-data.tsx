import Autocomplete from "../autocomplete.spec";
import { List } from "../../list";

export const AutocompleteNoData = (props) => {
    const { id = 'k-autocomplete-nodata', ...other } = props;

    return (
        <Autocomplete
            id={id}
            opened
            activeDescendantId={null}
            popup={
                <List role="listbox" aria-label="Autocomplete options" listboxId={`${id}-listbox`} />
            }
            {...other}
        />
    );
};
