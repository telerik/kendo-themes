import { classNames } from '../misc';
import { Popup } from '../popup';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_POPUP_CLASSNAME = 'k-datainsights-composer-popup';

/**
 * Popup shell used by the Composer data-source and history views.
 * @aria {role="presentation"} Removes button semantics from field-label chips in data-source popups.
 * @aria {tabindex="0" or "-1"} Uses roving tabindex for a standalone field list; chips embedded in TreeView items stay out of the tab order.
 */
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

/**
 * @keyboard {ArrowDown} Moves to the next chip in a data-source field list, or from the browser search box to the first TreeView item.
 * @keyboard {ArrowUp} Moves to the previous chip in a data-source field list, or from the first browser TreeView item to the search box.
 * @keyboard {Tab} In a data-source field-list popup, moves focus into the list through its active roving-tabindex chip; pressing Tab again moves focus outside the popup.
 * @keyboard {Shift+Tab} From the active chip in a data-source field-list popup, moves focus to the previous focusable element outside the popup.
 * @keyboard {Escape} Closes the popup and returns focus to the element that opened it.
 */

export default DataInsightsComposerPopup;
