import MultiSelectTree from "../multiselecttree.spec";

export const MultiSelectTreeAdaptive = (props) => (
    <MultiSelectTree
        id="mst-adaptive"
        aria-label="Select options"
        adaptive={true}
        adaptiveTitle="MultiSelectTree"
        adaptiveSettings={{ id: 'mst-adaptive-as' }}
        {...props}
    />
);
