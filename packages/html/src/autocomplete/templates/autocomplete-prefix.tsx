import Autocomplete from "../autocomplete.spec";
import { Icon } from '../../icon';
import { nextId } from "../../misc";

export const AutocompletePrefix = (props) => (
    <Autocomplete
        id={nextId('ac')}
        aria-label="Search options"
        prefix={
            <>
                <Icon icon="search" />
            </>
        }
        {...props}
    />
);
