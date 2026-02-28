import DropdownTree from "../dropdowntree.spec";

export const DropdownTreeAdaptive = (props) => (
    <DropdownTree
        id="ddt-adaptive"
        aria-label="Select option"
        adaptive={true}
        adaptiveTitle="DropdownTree"
        adaptiveSettings={{ id: 'ddt-adaptive-as' }}
        {...props}
    />
);