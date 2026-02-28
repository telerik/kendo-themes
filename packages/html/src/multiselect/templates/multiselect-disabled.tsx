import MultiSelect from "../multiselect.spec";

export const MultiSelectDisabled = (props) => (
    <MultiSelect
        id="ms-disabled"
        aria-label="Disabled multiselect"
        disabled
        {...props}
    />
);
