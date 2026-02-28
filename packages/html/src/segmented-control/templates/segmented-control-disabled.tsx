import SegmentedControlButton from "../segmented-control-button.spec";
import SegmentedControl from "../segmented-control.spec";

export const SegmentedControlDisabled = (props) => (
    <SegmentedControl {...props} children={
        <>
            <SegmentedControlButton icon="search" selected>Search</SegmentedControlButton>
            <SegmentedControlButton icon="sparkles" disabled> AI Assistant</SegmentedControlButton>
        </>
    } />
);
