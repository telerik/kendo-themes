import DropdownTree from "../dropdowntree.spec";

export const DropdownTreeDisabled = (props) => (
    <DropdownTree
        id="ddt-disabled"
        aria-label="Disabled dropdown tree"
        disabled
        value="Disabled value"
        {...props}
    />
);
