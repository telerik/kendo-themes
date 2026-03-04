import MultiSelectTree from "../multiselecttree.spec";
import { nextId } from "../../misc";

export const MultiSelectTreeArrowButton = (props) => (
    <MultiSelectTree
        id={nextId('mst')}
        aria-label="Select options"
        showArrowButton
        {...props}
    />
);
