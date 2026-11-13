import { classNames } from '../misc';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_LOADING_MESSAGE_CLASSNAME = 'k-datainsights-composer-loading-message';

export const DataInsightsComposerLoadingMessage: KendoComponent<React.HTMLAttributes<HTMLSpanElement>> = (props) => {
    const { className, children, ...other } = props;
    return (
        <span className={classNames(DATA_INSIGHTS_COMPOSER_LOADING_MESSAGE_CLASSNAME, className)} {...other}>
            {children}
        </span>
    );
};

DataInsightsComposerLoadingMessage.states = [];
DataInsightsComposerLoadingMessage.options = {};
DataInsightsComposerLoadingMessage.className = DATA_INSIGHTS_COMPOSER_LOADING_MESSAGE_CLASSNAME;
DataInsightsComposerLoadingMessage.defaultOptions = {};
DataInsightsComposerLoadingMessage.moduleName = DATA_INSIGHTS_COMPOSER_MODULE_NAME;
DataInsightsComposerLoadingMessage.folderName = DATA_INSIGHTS_COMPOSER_FOLDER_NAME;

export default DataInsightsComposerLoadingMessage;
