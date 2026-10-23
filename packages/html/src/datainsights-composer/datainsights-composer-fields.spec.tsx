import { classNames } from '../misc';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_FIELDS_CLASSNAME = 'k-datainsights-composer-fields';

/**
 * Wraps the row of field chips shown in the empty/prompt state.
 * @keyboard {Tab or Shift+Tab} Moves focus into or out of the chip group as a single stop (lands on the roving tab stop chip).
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
