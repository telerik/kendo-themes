import MultiSelect from "../multiselect.spec";
import { nextId } from "../../misc";

export const MultiSelectDisabled = (props) => (
    <MultiSelect
        id={nextId('ms')}
        aria-label="Disabled multiselect"
        disabled
        {...props}
    />
);
