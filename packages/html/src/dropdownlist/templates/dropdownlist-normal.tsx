import DropdownList from "../dropdownlist.spec";
import { nextId } from "../../misc";

export const DropdownListNormal = (props) => <DropdownList id={nextId('ddl')} aria-label="Select option" {...props} />;
