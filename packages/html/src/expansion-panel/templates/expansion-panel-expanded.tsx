import ExpansionPanel from "../expansion-panel.spec";
import { nextId } from "../../misc";

export const ExpansionPanelExpanded = (props) => (
    <ExpansionPanel
        expanded
        title="Expanded Panel"
        subtitle="With content visible"
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
