import { classNames } from '../misc';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_PREVIEW_CLASSNAME = 'k-datainsights-composer-preview';

export const DataInsightsComposerPreview: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, children, ...other } = props;
    return (
        <div className={classNames(DATA_INSIGHTS_COMPOSER_PREVIEW_CLASSNAME, className)} {...other}>
            {children}
        </div>
    );
};

DataInsightsComposerPreview.states = [];
DataInsightsComposerPreview.options = {};
DataInsightsComposerPreview.className = DATA_INSIGHTS_COMPOSER_PREVIEW_CLASSNAME;
DataInsightsComposerPreview.defaultOptions = {};
DataInsightsComposerPreview.moduleName = DATA_INSIGHTS_COMPOSER_MODULE_NAME;
DataInsightsComposerPreview.folderName = DATA_INSIGHTS_COMPOSER_FOLDER_NAME;

export default DataInsightsComposerPreview;
