import SegmentedControlButton from "../segmented-control-button.spec";
import SegmentedControl from "../segmented-control.spec";

export const SegmentedControlIcons = (props) => (
    <SegmentedControl {...props} children={
        <>
            <SegmentedControlButton icon="search" selected></SegmentedControlButton>
            <SegmentedControlButton icon="sparkles"></SegmentedControlButton>
            <SegmentedControlButton icon="home"></SegmentedControlButton>
        </>
    } />
);
