import NumericTextbox from "../numerictextbox.spec";

export const NumericTextboxDisabled = (props) => (
    <NumericTextbox aria-label={props['aria-label'] || "Disabled numeric textbox"} {...props} disabled />
);
