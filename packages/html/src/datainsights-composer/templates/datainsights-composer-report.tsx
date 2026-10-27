import { IconButton } from '../../button';
import {
    DataInsightsComposer,
    DataInsightsComposerActions,
    DataInsightsComposerOutput,
    DataInsightsComposerPreview,
    DataInsightsComposerReportContent,
    DataInsightsComposerReportHeader,
    DataInsightsComposerTitle,
} from '..';

export const DataInsightsComposerReport = (props: any) => {
    const { className, ...other } = props;
    return (
        <DataInsightsComposer className={className} {...other}>
            <DataInsightsComposerPreview>
                <DataInsightsComposerReportContent>
                    <DataInsightsComposerReportHeader>
                        <DataInsightsComposerTitle id="datainsights-composer-report-title">Revenue by region</DataInsightsComposerTitle>
                        <DataInsightsComposerActions>
                            <IconButton icon="pencil" fillMode="flat" aria-label="Edit" title="Edit" />
                            <IconButton icon="trash" fillMode="flat" themeColor="error" aria-label="Delete" title="Delete" />
                        </DataInsightsComposerActions>
                    </DataInsightsComposerReportHeader>
                    <DataInsightsComposerOutput titleId="datainsights-composer-report-title" />
                </DataInsightsComposerReportContent>
            </DataInsightsComposerPreview>
        </DataInsightsComposer>
    );
};

export default DataInsightsComposerReport;
