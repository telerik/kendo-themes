import MultiSelectTree from "../multiselecttree.spec";

export const MultiSelectTreeDisabled = (props) => (
    <MultiSelectTree
        id="mst-disabled"
        aria-label="Disabled multiselect tree"
        disabled
        {...props}
    />
);
