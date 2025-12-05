import SegmentedControlButton from "../segmented-control-button.spec";
import SegmentedControl from "../segmented-control.spec";

export const SegmentedControlNormal = (props) => (
    <SegmentedControl children={
        <>
            <SegmentedControlButton icon="search" {...props}>Search</SegmentedControlButton>
            <SegmentedControlButton icon="sparkles" {...props}> AI Assisstant</SegmentedControlButton>
        </>
    } />
);
