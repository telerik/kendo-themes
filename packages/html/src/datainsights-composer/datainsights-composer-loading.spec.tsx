import { classNames } from '../misc';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_LOADING_CLASSNAME = 'k-datainsights-composer-loading';

/** Loading state container: a Loader plus a status message. */
export const DataInsightsComposerLoading: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, children, ...other } = props;
    return (
        <div className={classNames(DATA_INSIGHTS_COMPOSER_LOADING_CLASSNAME, className)} {...other}>
            {children}
        </div>
    );
};

DataInsightsComposerLoading.states = [];
DataInsightsComposerLoading.options = {};
DataInsightsComposerLoading.className = DATA_INSIGHTS_COMPOSER_LOADING_CLASSNAME;
DataInsightsComposerLoading.defaultOptions = {};
DataInsightsComposerLoading.moduleName = DATA_INSIGHTS_COMPOSER_MODULE_NAME;
DataInsightsComposerLoading.folderName = DATA_INSIGHTS_COMPOSER_FOLDER_NAME;

export default DataInsightsComposerLoading;
