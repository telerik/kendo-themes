import SegmentedControlButton from "../segmented-control-button.spec";
import SegmentedControl from "../segmented-control.spec";

export const SegmentedControlText = (props) => (
    <SegmentedControl {...props} children={
        <>
            <SegmentedControlButton selected>Option 1</SegmentedControlButton>
            <SegmentedControlButton>Option 2</SegmentedControlButton>
        </>
    } />
);
