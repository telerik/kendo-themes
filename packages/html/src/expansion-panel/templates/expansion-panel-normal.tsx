import ExpansionPanel from "../expansion-panel.spec";
import { nextId } from "../../misc";

export const ExpansionPanelNormal = (props) => (
    <ExpansionPanel
        title="Panel Title"
        subtitle="Optional subtitle"
        id={nextId('expander')}
        children={
            <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text.
            </span>
        }
        {...props}
    >
    </ExpansionPanel>
);
