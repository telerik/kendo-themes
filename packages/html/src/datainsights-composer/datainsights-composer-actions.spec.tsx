import { classNames } from '../misc';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_ACTIONS_CLASSNAME = 'k-datainsights-composer-actions';

export const DataInsightsComposerActions: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, children, ...other } = props;
    return <div className={classNames(DATA_INSIGHTS_COMPOSER_ACTIONS_CLASSNAME, className)} {...other}>{children}</div>;
};

DataInsightsComposerActions.states = [];
DataInsightsComposerActions.options = {};
DataInsightsComposerActions.className = DATA_INSIGHTS_COMPOSER_ACTIONS_CLASSNAME;
DataInsightsComposerActions.defaultOptions = {};
DataInsightsComposerActions.moduleName = DATA_INSIGHTS_COMPOSER_MODULE_NAME;
DataInsightsComposerActions.folderName = DATA_INSIGHTS_COMPOSER_FOLDER_NAME;

export default DataInsightsComposerActions;
