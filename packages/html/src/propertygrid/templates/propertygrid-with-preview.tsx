import { PropertyGridNormal } from '../templates/propertygrid-normal';
import { Button } from "../../button/button.spec";
import { Splitter } from "../../splitter/splitter.spec";
import { SplitterPane } from "../../splitter/splitter-pane";

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
