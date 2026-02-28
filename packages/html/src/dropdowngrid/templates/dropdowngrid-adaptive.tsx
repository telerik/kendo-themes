import DropdownGrid from "../dropdowngrid.spec";

export const DropdownGridAdaptive = (props) => (
    <DropdownGrid
        id="ddg-adaptive"
        aria-label="Select option"
        adaptive={true}
        adaptiveTitle="DropdownGrid"
        adaptiveSettings={{ id: 'ddg-adaptive-as' }}
        {...props}
    />
);

