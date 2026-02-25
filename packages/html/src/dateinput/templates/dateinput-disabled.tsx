import DateInput from "../dateinput.spec";

export const DateInputDisabled = (props) => (
    <DateInput aria-label={props['aria-label'] || "Disabled date input"} {...props} disabled />
);
