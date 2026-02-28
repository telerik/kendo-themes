import DropdownList from "../dropdownlist.spec";

export const DropdownListAdaptive = (props) => (
    <DropdownList
        id="ddl-adaptive"
        aria-label="Select option"
        adaptive={true}
        adaptiveTitle="DropdownList"
        adaptiveSettings={{ id: 'ddl-adaptive-as' }}
        {...props}
    />
);

