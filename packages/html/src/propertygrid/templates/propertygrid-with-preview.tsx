import { PropertyGridNormal } from "..";
import { Button } from "../../button";
import { Splitter, SplitterPane } from "../../splitter";

export const PropertyGridWithPreview = ({ content, ...other }: any) => (
    <Splitter>
        <SplitterPane scrollable flexBasis="215px">
            <Button icon="star">Button</Button>
        </SplitterPane>
        <SplitterPane scrollable>
            <PropertyGridNormal {...other} content={content} />
        </SplitterPane>
    </Splitter>
);
