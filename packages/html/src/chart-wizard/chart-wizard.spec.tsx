import { classNames } from '../misc';
import { Window, KendoWindowProps } from '../window';


export const CHARTWIZARD_CLASSNAME = `k-chart-wizard`;

const states = [];

const options = {};

export const ChartWizard = (
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

export default ChartWizard;
