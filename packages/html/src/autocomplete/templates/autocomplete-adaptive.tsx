import Autocomplete from "../autocomplete.spec";

export const AutocompleteAdaptive = (props) => (
    <Autocomplete
        id="ac-adaptive"
        aria-label="Search options"
        adaptive={true}
        adaptiveTitle="Autocomplete"
        adaptiveSettings={{ id: 'ac-adaptive-as' }}
        {...props}
    />
);