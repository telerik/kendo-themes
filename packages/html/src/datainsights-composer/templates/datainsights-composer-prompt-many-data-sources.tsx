import { Badge } from '../../badge';
import { Button } from '../../button';
import { Chip, ChipList } from '../../chip';
import { PromptBox } from '../../prompt-box';
import { DataInsightsComposer, DataInsightsComposerCardPanel, DataInsightsComposerFields, DataInsightsComposerTitle } from '..';

export const DataInsightsComposerPromptManyDataSources = (props: any) => (
    <DataInsightsComposer {...props}>
        <DataInsightsComposerCardPanel>
            <DataInsightsComposerTitle>What would you like to explore?</DataInsightsComposerTitle>
            <div className="k-datainsights-composer-promptbox-group">
                <PromptBox
                    speechToTextButtonConfig={false}
                    lineMode="auto"
                    isExpanded
                    actionButtonConfig={{ icon: "paper-plane", text: "Generate" }}
                    placeholder="Describe the report you want to generate..."
                    endAffix={(
                        <>
                            <Button icon="data" size="small" fillMode="flat" text="Data Source">
                                <Badge rounded="full" themeColor="base" size="small">12</Badge>
                            </Button>
                            <span className="k-spacer" />
                        </>
                    )}
                />
                <DataInsightsComposerFields className="k-datainsights-composer-fields-scrollable k-datainsights-composer-fields-scrollable-start k-datainsights-composer-fields-scrollable-end">
                    <ChipList
                        className="k-datainsights-composer-fields-scroll"
                        role="group"
                        ariaLabel="Data sources"
                    >
                        <Chip tabIndex={0} aria-haspopup="true" rounded="full" size="small" icon="file-data" text="sales_orders" />
                        <Chip tabIndex={-1} aria-haspopup="true" rounded="full" size="small" icon="file-text" text="sales_persona" />
                        <Chip tabIndex={-1} aria-haspopup="true" rounded="full" size="small" icon="file-data" text="customers" />
                        <Chip tabIndex={-1} aria-haspopup="true" rounded="full" size="small" icon="file-data" text="products" />
                        <Chip tabIndex={-1} aria-haspopup="true" rounded="full" size="small" icon="file-data" text="product_categories" />
                        <Chip tabIndex={-1} aria-haspopup="true" rounded="full" size="small" icon="file-data" text="sales_territories" />
                        <Chip tabIndex={-1} aria-haspopup="true" rounded="full" size="small" icon="file-data" text="stores" />
                        <Chip tabIndex={-1} aria-haspopup="true" rounded="full" size="small" icon="file-data" text="inventory" />
                        <Chip tabIndex={-1} aria-haspopup="true" rounded="full" size="small" icon="file-data" text="purchase_orders" />
                        <Chip tabIndex={-1} aria-haspopup="true" rounded="full" size="small" icon="file-data" text="suppliers" />
                        <Chip tabIndex={-1} aria-haspopup="true" rounded="full" size="small" icon="file-data" text="employees" />
                        <Chip tabIndex={-1} aria-haspopup="true" rounded="full" size="small" icon="file-data" text="currencies" />
                    </ChipList>
                </DataInsightsComposerFields>
            </div>
        </DataInsightsComposerCardPanel>
    </DataInsightsComposer>
);

export default DataInsightsComposerPromptManyDataSources;
