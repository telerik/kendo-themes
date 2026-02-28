import ExpansionPanel from "../expansion-panel.spec";

export const ExpansionPanelDisabled = (props) => (
    <ExpansionPanel
        disabled
        title="Disabled Panel"
        subtitle="Cannot expand"
        id="expander-disabled"
        children={
            <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </span>
        }
        {...props}
    >
    </ExpansionPanel>
);
