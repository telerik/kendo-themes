import ExpansionPanel from "../expansion-panel.spec";

export const ExpansionPanelNormal = (props) => (
    <ExpansionPanel
        children={[
            <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text.
            </span>
        ]}
        {...props}
    >
    </ExpansionPanel>
);
