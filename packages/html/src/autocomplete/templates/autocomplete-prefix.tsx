import Autocomplete from "../autocomplete.spec";
import { Icon } from '../../icon';

export const AutocompletePrefix = (props) => (
    <Autocomplete
        id="ac-prefix"
        aria-label="Search options"
        prefix={
            <>
                <Icon icon="search" />
            </>
        }
        {...props}
    />
);
