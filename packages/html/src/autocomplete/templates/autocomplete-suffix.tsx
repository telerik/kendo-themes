import Autocomplete from "../autocomplete.spec";
import { TextButton } from '../../button';

export const AutocompleteSuffix = (props) => (
    <Autocomplete
        id="ac-suffix"
        aria-label="Search options"
        suffix={
            <>
                <TextButton fillMode="clear">Search</TextButton>
            </>
        }
        {...props}
    />
);
