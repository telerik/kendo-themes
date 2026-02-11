import Autocomplete from "../autocomplete.spec";
import { Icon } from '../../icon/icon.spec';

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
