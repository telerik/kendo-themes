import DropdownList from "../dropdownlist.spec";
import { nextId } from "../../misc";

export const DropdownListAdaptive = (props) => (
    <DropdownList
        id={nextId('ddl')}
        aria-label="Select option"
        adaptive={true}
        adaptiveTitle="DropdownList"
        adaptiveSettings={{ id: nextId('ddl-as') }}
        {...props}
    />
);

