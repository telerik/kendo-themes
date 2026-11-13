import { classNames } from '../misc';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_CARD_PANEL_CLASSNAME = 'k-datainsights-composer-card';

/** Bordered card panel grouping the composer state content. */
export const DataInsightsComposerCardPanel: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, children, ...other } = props;
    return (
        <div className={classNames(DATA_INSIGHTS_COMPOSER_CARD_PANEL_CLASSNAME, className)} {...other}>
            {children}
        </div>
    );
};

DataInsightsComposerCardPanel.states = [];
DataInsightsComposerCardPanel.options = {};
DataInsightsComposerCardPanel.className = DATA_INSIGHTS_COMPOSER_CARD_PANEL_CLASSNAME;
DataInsightsComposerCardPanel.defaultOptions = {};
DataInsightsComposerCardPanel.moduleName = DATA_INSIGHTS_COMPOSER_MODULE_NAME;
DataInsightsComposerCardPanel.folderName = DATA_INSIGHTS_COMPOSER_FOLDER_NAME;

export default DataInsightsComposerCardPanel;
