import { TextButton } from "../../button/templates/text-button";
import { Chip } from "../../chip/chip.spec";
import { ChipAction } from "../../chip/chip-action";
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
