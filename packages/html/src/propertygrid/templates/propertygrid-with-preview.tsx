import { PropertyGridNormal } from "..";
import { Button } from "../../button";
import { Splitter, SplitterPane } from "../../splitter";

export const PropertyGridWithPreview = ({ content, ...other }: any) => (
    <Splitter panes={[
        <SplitterPane scrollable flexBasis="215px" key="pane-1">
            <Button icon="star">Button</Button>
        </SplitterPane>,
        <SplitterPane scrollable key="pane-2">
            <PropertyGridNormal {...other} content={content} />
        </SplitterPane>
    ]} />
);
