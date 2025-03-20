import { TextButton } from "../../button";
import { Chip, ChipAction } from "../../chip";
import MultiSelect from "../multiselect.spec";

export const MultiSelectSuffix = (props) => (
    <MultiSelect
        suffix={
            <>
                <TextButton fillMode="clear">Cc</TextButton>
            </>
        }
        tags={(
            <>
                <Chip text="Suffix" actions={ <ChipAction type="remove"/> } />
            </>
        )}
        {...props}
    />
);
