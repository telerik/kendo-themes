import MultiSelect from "../multiselect.spec";
import { nextId } from "../../misc";

export const MultiSelectArrowButton = (props) => <MultiSelect id={nextId('ms')} aria-label="Select options" {...props} showArrowButton />;
