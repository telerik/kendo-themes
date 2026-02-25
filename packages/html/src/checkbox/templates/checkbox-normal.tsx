import Checkbox from "../checkbox.spec";

export const CheckboxNormal = (props: any) => (
    <Checkbox
        aria-label={props['aria-label'] || "Checkbox"}
        {...props}
    />
);