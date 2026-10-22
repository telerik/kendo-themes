import { ChartDemo } from '../chart/demos/chart';
import { classNames } from '../misc';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_OUTPUT_CLASSNAME = 'k-datainsights-composer-report-output';

export interface DataInsightsComposerOutputProps extends React.HTMLAttributes<HTMLDivElement> {
    titleId?: string;
}

/**
 * @aria {role="group"} Groups the chart with its visible report title.
 * @aria {aria-labelledby} Names the chart output from the associated report title.
 */
export const DataInsightsComposerOutput: KendoComponent<DataInsightsComposerOutputProps> = (props) => {
    const { className, titleId, ...other } = props;

    return (
        <div
            {...other}
            className={classNames(DATA_INSIGHTS_COMPOSER_OUTPUT_CLASSNAME, className)}
            role="group"
            aria-labelledby={titleId}
        >
            <ChartDemo />
        </div>
    );
};

DataInsightsComposerOutput.states = [];
DataInsightsComposerOutput.options = {};
DataInsightsComposerOutput.className = DATA_INSIGHTS_COMPOSER_OUTPUT_CLASSNAME;
DataInsightsComposerOutput.defaultOptions = {};
DataInsightsComposerOutput.moduleName = DATA_INSIGHTS_COMPOSER_MODULE_NAME;
DataInsightsComposerOutput.folderName = DATA_INSIGHTS_COMPOSER_FOLDER_NAME;

export default DataInsightsComposerOutput;
