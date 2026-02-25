import MaskedTextbox from "../maskedtextbox.spec";

export const MaskedTextboxDisabled = (props) => (
    <MaskedTextbox aria-label={props['aria-label'] || "Disabled masked textbox"} {...props} disabled />
);
