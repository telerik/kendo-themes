import { Badge } from '../../badge';
import { Button } from '../../button';
import { Chip, ChipList } from '../../chip';
import { MessageBox } from '../../message-box';
import { PromptBox } from '../../prompt-box';
import { DataInsightsComposer, DataInsightsComposerCardPanel, DataInsightsComposerFields, DataInsightsComposerTitle } from '..';

export const DataInsightsComposerFollowUpState = (props: any) => (
    <DataInsightsComposer {...props}>
        <DataInsightsComposerCardPanel>
            <DataInsightsComposerTitle>What would you like to explore?</DataInsightsComposerTitle>
            <MessageBox themeColor="info">
                Add more detail to your prompt to generate a visualization.
            </MessageBox>
            <div className="k-datainsights-composer-promptbox-group">
                <PromptBox
                    speechToTextButtonConfig={false}
                    lineMode="auto"
                    isExpanded
                    placeholder="Describe the report you want to generate..."
                    actionButtonConfig={{ icon: "paper-plane", text: "Generate" }}
                    endAffix={(
                        <>
                            <Button icon="data" size="small" fillMode="flat" text="Data Source">
                                <Badge rounded="full" themeColor="base" size="small">2</Badge>
                            </Button>
                            <span className="k-spacer" />
                        </>
                    )}
                />
                <DataInsightsComposerFields>
                    <ChipList role="group" ariaLabel="Data sources">
                        <Chip tabIndex={0} aria-haspopup="true" rounded="full" size="small" icon="file-data" text="sales_orders" />
                        <Chip tabIndex={-1} aria-haspopup="true" rounded="full" size="small" icon="file-data" text="sales_persona" />
                    </ChipList>
                </DataInsightsComposerFields>
            </div>
        </DataInsightsComposerCardPanel>
    </DataInsightsComposer>
);

export default DataInsightsComposerFollowUpState;
