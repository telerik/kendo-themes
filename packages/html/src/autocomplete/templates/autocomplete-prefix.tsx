import Autocomplete from "../autocomplete.spec";
import { Icon } from '../../icon';

export const AutocompletePrefix = (props) => (
    <Autocomplete
        prefix={
            <>
                <Icon icon="search" />
            </>
        }
        {...props}
    />
);
