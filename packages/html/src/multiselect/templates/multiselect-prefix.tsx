import MultiSelect from "../multiselect.spec";
import { Icon } from '../../icon';
import { Chip, ChipAction } from "../../chip";

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
