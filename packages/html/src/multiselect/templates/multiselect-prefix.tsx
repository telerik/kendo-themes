import MultiSelect from "../multiselect.spec";
import { nextId } from "../../misc";
import { Icon } from '../../icon';
import { Chip, ChipAction } from "../../chip";

export const MultiSelectPrefix = (props) => (
    <MultiSelect
        id={nextId('ms')}
        aria-label="Select options"
        prefix={
            <>
                <Icon icon="user" />
            </>
        }
        tags={(
            <>
                <Chip text="Prefix" role="option" aria-selected="true" actions={ <ChipAction type="remove"/> } />
            </>
        )}
        {...props}
    />
);
