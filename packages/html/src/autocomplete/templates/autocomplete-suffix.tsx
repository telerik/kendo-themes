import Autocomplete from "../autocomplete.spec";
import { TextButton } from '../../button';
import { nextId } from "../../misc";

export const AutocompleteSuffix = (props) => (
    <Autocomplete
        id={nextId('ac')}
        aria-label="Search options"
        suffix={
            <>
                <TextButton fillMode="clear">Search</TextButton>
            </>
        }
        {...props}
    />
);
