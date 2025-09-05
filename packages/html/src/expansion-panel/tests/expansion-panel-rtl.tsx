import { ExpansionPanel, ExpansionPanelNormal, ExpansionPanelExpanded } from '../../expansion-panel';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <div>
                {[ 'normal', ...ExpansionPanel.states.filter(state => state !== 'expanded') ].map((state) => (
                    <ExpansionPanelExpanded { ...{ [state]: true }} expanded title={"Expanded panel - " + state} subtitle="Subtitle" dir="rtl" />
                ))}

                <ExpansionPanelExpanded title="Expanded panel - hover & focus" hover focus subtitle="Subtitle" dir="rtl" />
            </div>

            <div>
                {[ 'normal', ...ExpansionPanel.states.filter(state => state !== 'expanded') ].map((state) => (
                    <ExpansionPanelNormal { ...{ [state]: true }} title={"Collapsed panel - " + state} subtitle="Subtitle" dir="rtl" />
                ))}

                <ExpansionPanelNormal title="Collapsed panel - hover & focus" hover focus subtitle="Subtitle" dir="rtl" />

                <ExpansionPanelExpanded title="Content with fixed height" subtitle="Subtitle" contentStyle={ { height: "100px" } } dir="rtl">
                    <div style={ { height: "100%", overflow: "auto" } }>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </ExpansionPanelExpanded>
            </div>
        </div>
    </>
);
