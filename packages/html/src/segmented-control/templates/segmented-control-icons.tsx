import SegmentedControlButton from "../segmented-control-button.spec";
import SegmentedControl from "../segmented-control.spec";

export const SegmentedControlIcons = (props) => (
    <SegmentedControl {...props} children={
        <>
            <SegmentedControlButton aria-label="Search" icon="search" selected></SegmentedControlButton>
            <SegmentedControlButton aria-label="Sparkles" icon="sparkles"></SegmentedControlButton>
            <SegmentedControlButton aria-label="Home" icon="home"></SegmentedControlButton>
        </>
    } />
);
