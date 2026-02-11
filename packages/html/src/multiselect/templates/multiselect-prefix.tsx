import MultiSelect from "../multiselect.spec";
import { Icon } from '../../icon/icon.spec';
import { Chip } from "../../chip/chip.spec";
import { ChipAction } from "../../chip/chip-action";

export const MultiSelectPrefix = (props) => (
    <MultiSelect
        prefix={
            <>
                <Icon icon="user" />
            </>
        }
        tags={(
            <>
                <Chip text="Prefix" actions={ <ChipAction type="remove"/> } />
            </>
        )}
        {...props}
    />
);
