import { Splitter } from "../splitter.spec";
import { SplitterPane } from "../splitter-pane";

export const SplitterVertical = (props) => (
    <Splitter
        panes={[
            <SplitterPane key="pane-1" flexBasis="20%" collapsible>
                <p>Collapsible pane - 20%</p>
            </SplitterPane>,
            <SplitterPane key="pane-2">
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
            </SplitterPane>,
            <SplitterPane key="pane-3" flexBasis="30%" collapsible>
                <p>Collapsible pane - 30%</p>
            </SplitterPane>
        ]}
        orientation="vertical"
        {...props}>
    </Splitter>
);
