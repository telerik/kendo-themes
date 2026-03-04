import Autocomplete from "../autocomplete.spec";
import { nextId } from "../../misc";

export const AutocompleteAdaptive = (props) => {
    const acId = nextId('ac');
    return (
        <Autocomplete
            id={acId}
            aria-label="Search options"
            adaptive={true}
            adaptiveTitle="Autocomplete"
            adaptiveSettings={{ id: `${acId}-as` }}
            {...props}
        />
    );
};
