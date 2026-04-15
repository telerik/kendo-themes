import SegmentedControlButton from "../segmented-control-button.spec";
import SegmentedControl from "../segmented-control.spec";

export const SegmentedControlIcons = (props) => (
    <SegmentedControl {...props} children={
        <>
            <SegmentedControlButton icon="search" selected aria-label="Search"></SegmentedControlButton>
            <SegmentedControlButton icon="sparkles" aria-label="AI"></SegmentedControlButton>
            <SegmentedControlButton icon="home" aria-label="Home"></SegmentedControlButton>
        </>
    } />
);
