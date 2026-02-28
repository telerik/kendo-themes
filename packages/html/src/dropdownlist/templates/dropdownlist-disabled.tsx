import DropdownList from "../dropdownlist.spec";

export const DropdownListDisabled = (props) => (
    <DropdownList
        id="ddl-disabled"
        aria-label="Disabled dropdown"
        disabled
        value="Disabled value"
        {...props}
    />
);
