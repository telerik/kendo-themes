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

export default ChartWizard;
