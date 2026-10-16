import SegmentedControlButton from "../segmented-control-button.spec";
import SegmentedControl from "../segmented-control.spec";

export const SegmentedControlEndIcons = (props) => (
    <SegmentedControl {...props} children={
        <>
            <SegmentedControlButton endIcon="search" selected>Option 1</SegmentedControlButton>
            <SegmentedControlButton endIcon="sparkles">Option 2</SegmentedControlButton>
            <SegmentedControlButton endIcon="home">Option 3</SegmentedControlButton>
        </>
    } />
);
