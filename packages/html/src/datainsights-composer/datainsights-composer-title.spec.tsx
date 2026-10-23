import { classNames } from '../misc';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_TITLE_CLASSNAME = 'k-datainsights-composer-title';

/**
 * @aria {role="heading" aria-level="2"} Identifies the prompt or panel title as a level-two heading.
 */
export const DataInsightsComposerTitle: KendoComponent<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
    const { className, children, ...other } = props;
    return <h2 className={classNames(DATA_INSIGHTS_COMPOSER_TITLE_CLASSNAME, className)} {...other}>{children}</h2>;
};

DataInsightsComposerTitle.states = [];
DataInsightsComposerTitle.options = {};
DataInsightsComposerTitle.className = DATA_INSIGHTS_COMPOSER_TITLE_CLASSNAME;
DataInsightsComposerTitle.defaultOptions = {};
DataInsightsComposerTitle.moduleName = DATA_INSIGHTS_COMPOSER_MODULE_NAME;
DataInsightsComposerTitle.folderName = DATA_INSIGHTS_COMPOSER_FOLDER_NAME;

export default DataInsightsComposerTitle;
