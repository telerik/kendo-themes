import { Badge } from '../../badge';
import { Button } from '../../button';
import { Chip, ChipList } from '../../chip';
import { Icon } from '../../icon';
import { Loader } from '../../loader';
import { PromptBox } from '../../prompt-box';
import {
    DataInsightsComposer,
    DataInsightsComposerFields,
    DataInsightsComposerLoading,
    DataInsightsComposerLoadingMessage,
    DataInsightsComposerReportContent,
    DataInsightsComposerCardPanel,
    DataInsightsComposerTitle,
} from '..';

export const DataInsightsComposerLoadingState = (props: any) => (
    <DataInsightsComposer {...props}>
        <DataInsightsComposerCardPanel>
            <DataInsightsComposerTitle>What would you like to explore?</DataInsightsComposerTitle>
            <div className="k-datainsights-composer-promptbox-group">
                <PromptBox
                    speechToTextButtonConfig={false}
                    className="k-datainsights-composer-promptbox-generating"
                    lineMode="auto"
                    isExpanded
                    generating
                    actionButtonConfig={{
                        text: "Generating",
                        icon: <Icon className="k-button-icon" icon="stop" variant="solid" />,
                    }}
                    value="Describe the report you want to generate..."
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
                        <Chip tabIndex={-1} aria-haspopup="true" rounded="full" size="small" icon="file-text" text="sales_persona" />
                    </ChipList>
                </DataInsightsComposerFields>
            </div>
            <DataInsightsComposerReportContent className="k-datainsights-composer-report-content-loading">
                <DataInsightsComposerLoading>
                    <Loader animation="infinite-spinner" aria-label="Generating your report" />
                    <DataInsightsComposerLoadingMessage>Generating your report...</DataInsightsComposerLoadingMessage>
                </DataInsightsComposerLoading>
            </DataInsightsComposerReportContent>
        </DataInsightsComposerCardPanel>
    </DataInsightsComposer>
);

export default DataInsightsComposerLoadingState;
