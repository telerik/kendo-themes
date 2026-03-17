import MultiSelectTree from "../multiselecttree.spec";
import { nextId } from "../../misc";

export const MultiSelectTreeAdaptive = (props) => (
    <MultiSelectTree
        id={nextId('mst')}
        aria-label="Select options"
        adaptive={true}
        adaptiveTitle="MultiSelectTree"
        adaptiveSettings={{ id: nextId('mst-as') }}
        {...props}
    />
);
