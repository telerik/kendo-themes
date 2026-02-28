import Autocomplete from "../autocomplete.spec";

export const AutocompleteDisabled = (props) => (
    <Autocomplete
        id="ac-disabled"
        aria-label="Disabled autocomplete"
        disabled
        value="Disabled value"
        {...props}
    />
);
