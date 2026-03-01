import { classNames } from '../misc';
import { Window, KendoWindowProps } from '../window';


import { KendoComponent } from '../_types/component';
import { CHART_WIZARD_FOLDER_NAME, CHART_WIZARD_MODULE_NAME } from './constants';
export const CHARTWIZARD_CLASSNAME = `k-chart-wizard`;

const states = [];

const options = {};

const defaultOptions = {};

export const ChartWizard: KendoComponent<KendoWindowProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoWindowProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <Window title="Chart Preview" actions={ [ 'window', 'x' ] }
            {...other}
            className={classNames(
                props.className,
                CHARTWIZARD_CLASSNAME
            )}>
            {children}
        </Window>
    );
};

ChartWizard.states = states;
ChartWizard.options = options;
ChartWizard.className = CHARTWIZARD_CLASSNAME;
ChartWizard.defaultOptions = defaultOptions;
ChartWizard.moduleName = CHART_WIZARD_MODULE_NAME;
ChartWizard.folderName = CHART_WIZARD_FOLDER_NAME;

/**
 * Accessibility specification for ChartWizard.
 *
 * The ChartWizard is a composite component presented as a dialog.
 * It follows the Window specification and contains:
 * - Window (dialog wrapper)
 * - Chart (visualization)
 * - Splitter (layout)
 * - TabStrip (tab navigation)
 * - PanelBar (collapsible panels)
 *
 * Each sub-component implements its own ARIA spec.
 * No custom rules are needed at the ChartWizard level.
 */
ChartWizard.ariaSpec = {
    selector: '.k-chart-wizard',
    rules: []
};

export default ChartWizard;
