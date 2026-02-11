import Autocomplete from "../autocomplete.spec";
import { TextButton } from '../../button/templates/text-button';

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
