import Checkbox from "../checkbox.spec";

export const CheckboxInvalid = (props: any) => (
    <Checkbox
        invalid
        aria-label={props['aria-label'] || "Invalid checkbox"}
        {...props}
    />
);
