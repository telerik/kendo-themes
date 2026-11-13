import { classNames } from '../misc';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_CLASSNAME = 'k-datainsights-composer';

/** Root container for every state of the datainsights-composer component. */
export const DataInsightsComposer: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, children, ...other } = props;
    return (
        <div className={classNames(DATA_INSIGHTS_COMPOSER_CLASSNAME, className)} {...other}>
            {children}
        </div>
    );
};

DataInsightsComposer.states = [];
DataInsightsComposer.options = {};
DataInsightsComposer.className = DATA_INSIGHTS_COMPOSER_CLASSNAME;
DataInsightsComposer.defaultOptions = {};
DataInsightsComposer.moduleName = DATA_INSIGHTS_COMPOSER_MODULE_NAME;
DataInsightsComposer.folderName = DATA_INSIGHTS_COMPOSER_FOLDER_NAME;

export default DataInsightsComposer;
