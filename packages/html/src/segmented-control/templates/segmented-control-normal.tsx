import { Button } from "../../button";
import SegmentedControl from "../segmented-control.spec";

export const SegmentedControlNormal = (props) => (
    <SegmentedControl children={
        <>
            <Button icon="search" {...props}>Search</Button>
            <Button icon="sparkles" {...props}> AI Assisstant</Button>
        </>
    } />
);
