import { TextButton } from "../../button";
import { Chip, ChipAction } from "../../chip";
import { nextId } from "../../misc";
import MultiSelect from "../multiselect.spec";

export const MultiSelectSuffix = (props) => (
    <MultiSelect
        id={nextId('ms')}
        aria-label="Select options"
        suffix={
            <>
                <TextButton fillMode="clear">Cc</TextButton>
            </>
        }
        tags={(
            <>
                <Chip text="Suffix" role="option" aria-selected="true" actions={ <ChipAction type="remove"/> } />
            </>
        )}
        {...props}
    />
);
