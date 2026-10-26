import { classNames } from '../misc';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_FIELDS_CLASSNAME = 'k-datainsights-composer-fields';

/**
 * Wraps the row of field chips shown in the empty/prompt state.
 * @aria {role="group"} Groups data-source chips that act as popup triggers.
 * @aria {aria-label} Names the data-source chip group.
 * @aria {aria-haspopup="true"} Indicates that each data-source chip opens a popup.
 * @aria {tabindex="0" or "-1"} Maintains one data-source chip in the tab order using roving tabindex.
 * @keyboard {Tab} Moves focus into the group through its active roving-tabindex chip, or from that chip to the next focusable element.
 * @keyboard {Shift+Tab} Moves focus from the active chip to the previous focusable element.
 * @keyboard {ArrowRight or ArrowLeft} Moves the roving tab stop between the data source chips, same as the standalone ChipList.
 * @keyboard {Enter or Space} Opens the Data Source popup for the focused chip.
 */
export const DataInsightsComposerFields: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, children, ...other } = props;
    return (
        <div className={classNames(DATA_INSIGHTS_COMPOSER_FIELDS_CLASSNAME, className)} {...other}>
            {children}
        </div>
    );
};

DataInsightsComposerFields.states = [];
DataInsightsComposerFields.options = {};
DataInsightsComposerFields.className = DATA_INSIGHTS_COMPOSER_FIELDS_CLASSNAME;
DataInsightsComposerFields.defaultOptions = {};
DataInsightsComposerFields.moduleName = DATA_INSIGHTS_COMPOSER_MODULE_NAME;
DataInsightsComposerFields.folderName = DATA_INSIGHTS_COMPOSER_FOLDER_NAME;

export default DataInsightsComposerFields;
