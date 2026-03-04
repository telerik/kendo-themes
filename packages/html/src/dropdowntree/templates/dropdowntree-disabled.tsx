import DropdownTree from "../dropdowntree.spec";
import { nextId } from "../../misc";

export const DropdownTreeDisabled = (props) => (
    <DropdownTree
        id={nextId('ddt')}
        aria-label="Disabled dropdown tree"
        disabled
        value="Disabled value"
        {...props}
    />
);
