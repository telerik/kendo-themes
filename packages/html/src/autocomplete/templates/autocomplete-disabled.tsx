import Autocomplete from "../autocomplete.spec";
import { nextId } from "../../misc";

export const AutocompleteDisabled = (props) => (
    <Autocomplete
        id={nextId('ac')}
        aria-label="Disabled autocomplete"
        disabled
        value="Disabled value"
        {...props}
    />
);
