import MultiSelect from "../multiselect.spec";
import { Chip, ChipAction, TextButton } from "../..";

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
