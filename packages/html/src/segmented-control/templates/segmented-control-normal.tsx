import SegmentedControlButton from "../segmented-control-button.spec";
import SegmentedControl from "../segmented-control.spec";

export const SegmentedControlNormal = (props) => (
    <SegmentedControl {...props} children={
        <>
            <SegmentedControlButton icon="search" selected>Option 1</SegmentedControlButton>
            <SegmentedControlButton icon="sparkles">Option 2</SegmentedControlButton>
        </>
    } />
);
