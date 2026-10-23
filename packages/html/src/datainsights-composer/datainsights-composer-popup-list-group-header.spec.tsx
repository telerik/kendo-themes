import { classNames } from '../misc';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_POPUP_TITLE_CLASSNAME = 'k-datainsights-composer-popup-title';

export const DataInsightsComposerPopupListGroupHeader: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, children, ...other } = props;
    return (
        <div className={classNames(DATA_INSIGHTS_COMPOSER_POPUP_TITLE_CLASSNAME, className)} {...other}>
            {children}
        </div>
    );
};

DataInsightsComposerPopupListGroupHeader.states = [];
DataInsightsComposerPopupListGroupHeader.options = {};
DataInsightsComposerPopupListGroupHeader.className = DATA_INSIGHTS_COMPOSER_POPUP_TITLE_CLASSNAME;
DataInsightsComposerPopupListGroupHeader.defaultOptions = {};
DataInsightsComposerPopupListGroupHeader.moduleName = DATA_INSIGHTS_COMPOSER_MODULE_NAME;
DataInsightsComposerPopupListGroupHeader.folderName = DATA_INSIGHTS_COMPOSER_FOLDER_NAME;

export default DataInsightsComposerPopupListGroupHeader;
