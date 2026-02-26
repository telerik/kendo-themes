import Combobox from "../combobox.spec";

export const ComboboxDisabled = (props) => (
    <Combobox
        id="combobox-disabled"
        aria-label={props['aria-label'] || "Disabled combobox"}
        disabled
        value="Disabled value"
        {...props}
    />
);
