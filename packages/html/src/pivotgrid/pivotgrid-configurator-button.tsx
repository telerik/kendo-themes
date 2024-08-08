import { Icon } from '../icon';
import { classNames } from '../misc';

export const PIVOTGRIDCONFIGURATORBUTTON_CLASSNAME = `k-pivotgrid-configurator-button`;

const states = [];

const options = {};

const defaultOptions = {};

export const PivotGridConfiguratorButton = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                PIVOTGRIDCONFIGURATORBUTTON_CLASSNAME,
            )}>
            <span>
                Change settings
                <Icon icon="gear" />
            </span>
        </div>
    );
};

PivotGridConfiguratorButton.states = states;
PivotGridConfiguratorButton.options = options;
PivotGridConfiguratorButton.className = PIVOTGRIDCONFIGURATORBUTTON_CLASSNAME;
PivotGridConfiguratorButton.defaultOptions = defaultOptions;

export default PivotGridConfiguratorButton;
