import MultiSelect from "../multiselect.spec";
import { nextId } from "../../misc";

export const MultiSelectAdaptive = (props) => (
    <MultiSelect
        id={nextId('ms')}
        aria-label="Select options"
        adaptive={true}
        adaptiveTitle="MultiSelect"
        adaptiveSettings={{ id: nextId('ms-as') }}
        {...props}
    />
);
