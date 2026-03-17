import MultiSelect from "../multiselect.spec";
import { nextId } from "../../misc";

export const MultiSelectNormal = (props) => <MultiSelect id={nextId('ms')} aria-label="Select items" {...props} />;
