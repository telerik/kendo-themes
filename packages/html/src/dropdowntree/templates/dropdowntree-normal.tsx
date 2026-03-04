import DropdownTree from "../dropdowntree.spec";
import { nextId } from "../../misc";

export const DropdownTreeNormal = (props) => <DropdownTree id={nextId('ddt')} aria-label="Select item" {...props} />;
