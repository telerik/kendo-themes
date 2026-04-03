import DropdownGrid from "../dropdowngrid.spec";
import { nextId } from "../../misc";

export const DropdownGridNormal = (props) => <DropdownGrid id={nextId('ddg')} aria-label="Select item" {...props} />;
