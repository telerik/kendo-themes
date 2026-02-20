import Combobox from "../combobox.spec";

export const ComboboxInvalid = (props) => (
    <Combobox
        id="combobox-invalid"
        aria-label={props['aria-label'] || "Invalid combobox"}
        invalid
        value="Invalid value"
        {...props}
    />
);
