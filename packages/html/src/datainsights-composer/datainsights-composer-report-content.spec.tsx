import { classNames } from '../misc';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_REPORT_CONTENT_CLASSNAME = 'k-datainsights-composer-report-content';

export const DataInsightsComposerReportContent: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, children, ...other } = props;
    return (
        <div className={classNames(DATA_INSIGHTS_COMPOSER_REPORT_CONTENT_CLASSNAME, className)} {...other}>
            {children}
        </div>
    );
};

DataInsightsComposerReportContent.states = [];
DataInsightsComposerReportContent.options = {};
DataInsightsComposerReportContent.className = DATA_INSIGHTS_COMPOSER_REPORT_CONTENT_CLASSNAME;
DataInsightsComposerReportContent.defaultOptions = {};
DataInsightsComposerReportContent.moduleName = DATA_INSIGHTS_COMPOSER_MODULE_NAME;
DataInsightsComposerReportContent.folderName = DATA_INSIGHTS_COMPOSER_FOLDER_NAME;

export default DataInsightsComposerReportContent;
