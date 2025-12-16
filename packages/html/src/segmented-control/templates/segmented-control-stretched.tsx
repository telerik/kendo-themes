import SegmentedControlButton from "../segmented-control-button.spec";
import SegmentedControl from "../segmented-control.spec";

export const SegmentedControlStretched = (props) => (
    <SegmentedControl {...props} stretched children={
        <>
            <SegmentedControlButton icon="search" selected>Search</SegmentedControlButton>
            <SegmentedControlButton icon="sparkles" iconClassName="k-accent-icon"> AI Assisstant</SegmentedControlButton>
        </>
    } />
);
