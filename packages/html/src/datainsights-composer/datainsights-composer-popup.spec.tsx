import { classNames } from '../misc';
import { Popup } from '../popup';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_POPUP_CLASSNAME = 'k-datainsights-composer-popup';

/** Popup shell used by the Composer data-source and history views. */
export const DataInsightsComposerPopup: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, children, ...other } = props;
    return (
        <Popup
            {...other}
            className={classNames(DATA_INSIGHTS_COMPOSER_POPUP_CLASSNAME, className)}
            containerRole="region"
            containerAriaLabel="Data sources"
        >
            {children}
        </Popup>
    );
};

DataInsightsComposerPopup.states = [];
DataInsightsComposerPopup.options = {};
DataInsightsComposerPopup.className = DATA_INSIGHTS_COMPOSER_POPUP_CLASSNAME;
DataInsightsComposerPopup.defaultOptions = {};
DataInsightsComposerPopup.moduleName = DATA_INSIGHTS_COMPOSER_MODULE_NAME;
DataInsightsComposerPopup.folderName = DATA_INSIGHTS_COMPOSER_FOLDER_NAME;

export default DataInsightsComposerPopup;
