import MultiSelect from "../multiselect.spec";
import { Icon } from '../../icon';
import { Chip, ChipAction } from "../../chip";

export const MultiSelectPrefix = (props) => (
    <MultiSelect
        id="ms-prefix"
        aria-label="Select options"
        prefix={
            <>
                <Icon icon="user" />
            </>
        }
        tags={(
            <>
                <Chip text="Prefix" role="option" selected actions={ <ChipAction type="remove"/> } />
            </>
        )}
        {...props}
    />
);
