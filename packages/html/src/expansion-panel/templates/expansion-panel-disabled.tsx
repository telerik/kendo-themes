import ExpansionPanel from "../expansion-panel.spec";
import { nextId } from "../../misc";

export const ExpansionPanelDisabled = (props) => (
    <ExpansionPanel
        disabled
        title="Disabled Panel"
        subtitle="Cannot expand"
        id={nextId('expander')}
        children={
            <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </span>
        }
        {...props}
    >
    </ExpansionPanel>
);
