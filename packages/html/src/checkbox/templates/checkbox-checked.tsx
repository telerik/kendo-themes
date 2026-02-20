import Checkbox from "../checkbox.spec";

export const CheckboxChecked = (props: any) => (
    <Checkbox
        checked
        aria-label={props['aria-label'] || "Checkbox"}
        {...props}
    />
);
