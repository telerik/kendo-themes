import DropdownList from "../dropdownlist.spec";
import { nextId } from "../../misc";

export const DropdownListDisabled = (props) => (
    <DropdownList
        id={nextId('ddl')}
        aria-label="Disabled dropdown"
        disabled
        value="Disabled value"
        {...props}
    />
);
