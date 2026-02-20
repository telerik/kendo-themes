import MaskedTextbox from "../maskedtextbox.spec";

export const MaskedTextboxInvalid = (props) => (
    <MaskedTextbox aria-label={props['aria-label'] || "Invalid masked textbox"} {...props} invalid />
);
