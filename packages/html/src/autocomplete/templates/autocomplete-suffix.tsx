import Autocomplete from "../autocomplete.spec";
import { TextButton } from '../../button';

export const AutocompleteSuffix = (props) => (
    <Autocomplete
        suffix={
            <>
                <TextButton fillMode="clear">Search</TextButton>
            </>
        }
        {...props}
    />
);

export default AutocompleteSuffix;
