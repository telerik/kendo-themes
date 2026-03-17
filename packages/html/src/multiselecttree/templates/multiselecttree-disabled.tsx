import MultiSelectTree from "../multiselecttree.spec";
import { nextId } from "../../misc";

export const MultiSelectTreeDisabled = (props) => (
    <MultiSelectTree
        id={nextId('mst')}
        aria-label="Disabled multiselect tree"
        disabled
        {...props}
    />
);
