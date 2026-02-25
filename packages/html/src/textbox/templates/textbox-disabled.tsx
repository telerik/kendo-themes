import Textbox from "../textbox.spec";

export const TextboxDisabled = (props) => (
    <Textbox aria-label={props['aria-label'] || "Disabled textbox"} {...props} disabled />
);
