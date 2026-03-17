import MultiSelectTree from "../multiselecttree.spec";
import { nextId } from "../../misc";

export const MultiSelectTreeNormal = (props) => <MultiSelectTree id={nextId('mst')} aria-label="Select items" {...props} />;
