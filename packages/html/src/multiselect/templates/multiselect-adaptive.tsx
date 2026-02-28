import MultiSelect from "../multiselect.spec";

export const MultiSelectAdaptive = (props) => (
    <MultiSelect
        id="ms-adaptive"
        aria-label="Select options"
        adaptive={true}
        adaptiveTitle="MultiSelect"
        adaptiveSettings={{ id: 'ms-adaptive-as' }}
        {...props}
    />
);
