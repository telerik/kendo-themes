import { Badge } from '../../badge';
import { Button } from '../../button';
import { Chip, ChipList } from '../../chip';
import { IconButton } from '../../button';
import { PromptBox } from '../../prompt-box';
import {
    DataInsightsComposer,
    DataInsightsComposerActions,
    DataInsightsComposerCardPanel,
    DataInsightsComposerFields,
    DataInsightsComposerOutput,
    DataInsightsComposerReportHeader,
    DataInsightsComposerReportTitle,
    DataInsightsComposerTitle,
} from '..';

export const DataInsightsComposerReportEditPanel = (props: any) => (
    <DataInsightsComposer {...props}>
        <DataInsightsComposerCardPanel>
            <DataInsightsComposerReportHeader>
                <DataInsightsComposerTitle>Refine this report</DataInsightsComposerTitle>
            </DataInsightsComposerReportHeader>
            <div className="k-datainsights-composer-promptbox-group">
                <PromptBox
                    lineMode="auto"
                    isExpanded
                    speechToTextButtonConfig={false}
                    actionButtonConfig={{ icon: 'paper-plane', text: 'Generate' }}
                    placeholder="Describe the report you want to generate..."
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
                        <Chip tabIndex={0} aria-haspopup="true" rounded="full" size="small" icon="data-json" text="sales_orders" />
                        <Chip tabIndex={-1} aria-haspopup="true" rounded="full" size="small" icon="data-json" text="sales_persona" />
                    </ChipList>
                </DataInsightsComposerFields>
            </div>
            <div className="k-datainsights-composer-report-content">
                <DataInsightsComposerReportHeader>
                    <DataInsightsComposerReportTitle id="datainsights-composer-report-title">Revenue by region</DataInsightsComposerReportTitle>
                    <DataInsightsComposerActions>
                        <IconButton icon="check" text="Confirm" fillMode="flat" title="Confirm" aria-label="Confirm" />
                        <IconButton icon="x" text="Discard" fillMode="flat" title="Discard" aria-label="Discard" />
                        <IconButton icon="clock-arrow-rotate" text="History" fillMode="flat" title="Version History" aria-label="History" />
                    </DataInsightsComposerActions>
                </DataInsightsComposerReportHeader>
                <DataInsightsComposerOutput titleId="datainsights-composer-report-title" />
            </div>
        </DataInsightsComposerCardPanel>
    </DataInsightsComposer>
);

export default DataInsightsComposerReportEditPanel;
