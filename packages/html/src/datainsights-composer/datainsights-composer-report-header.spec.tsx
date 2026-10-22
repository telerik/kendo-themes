import { classNames } from '../misc';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_REPORT_HEADER_CLASSNAME = 'k-datainsights-composer-report-header';

export const DataInsightsComposerReportHeader: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, children, ...other } = props;
    return (
        <div className={classNames(DATA_INSIGHTS_COMPOSER_REPORT_HEADER_CLASSNAME, className)} {...other}>
            {children}
        </div>
    );
};

DataInsightsComposerReportHeader.states = [];
DataInsightsComposerReportHeader.options = {};
DataInsightsComposerReportHeader.className = DATA_INSIGHTS_COMPOSER_REPORT_HEADER_CLASSNAME;
DataInsightsComposerReportHeader.defaultOptions = {};
DataInsightsComposerReportHeader.moduleName = DATA_INSIGHTS_COMPOSER_MODULE_NAME;
DataInsightsComposerReportHeader.folderName = DATA_INSIGHTS_COMPOSER_FOLDER_NAME;

export default DataInsightsComposerReportHeader;
