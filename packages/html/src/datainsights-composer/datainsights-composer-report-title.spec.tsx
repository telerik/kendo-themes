import { classNames } from '../misc';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_REPORT_TITLE_CLASSNAME = 'k-datainsights-composer-report-title';

/**
 * @aria {role="heading" aria-level="2"} Identifies the generated report title as a level-two heading.
 */
export const DataInsightsComposerReportTitle: KendoComponent<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
    const { className, children, ...other } = props;
    return <h2 className={classNames(DATA_INSIGHTS_COMPOSER_REPORT_TITLE_CLASSNAME, className)} {...other}>{children}</h2>;
};

DataInsightsComposerReportTitle.states = [];
DataInsightsComposerReportTitle.options = {};
DataInsightsComposerReportTitle.className = DATA_INSIGHTS_COMPOSER_REPORT_TITLE_CLASSNAME;
DataInsightsComposerReportTitle.defaultOptions = {};
DataInsightsComposerReportTitle.moduleName = DATA_INSIGHTS_COMPOSER_MODULE_NAME;
DataInsightsComposerReportTitle.folderName = DATA_INSIGHTS_COMPOSER_FOLDER_NAME;

export default DataInsightsComposerReportTitle;
