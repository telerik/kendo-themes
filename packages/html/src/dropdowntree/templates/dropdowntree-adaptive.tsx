import DropdownTree from "../dropdowntree.spec";
import { nextId } from "../../misc";

export const DropdownTreeAdaptive = (props) => (
    <DropdownTree
        id={nextId('ddt')}
        aria-label="Select option"
        adaptive={true}
        adaptiveTitle="DropdownTree"
        adaptiveSettings={{ id: nextId('ddt-as') }}
        {...props}
    />
);
