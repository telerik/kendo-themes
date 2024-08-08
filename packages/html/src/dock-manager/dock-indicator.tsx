import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../misc';

export const DOCKINDICATOR_CLASSNAME = `k-dock-indicator`;

const states = [
    States.hover,
    States.disabled
];

const options = {};

export type KendoDockIndicatorProps = {
    position?: "top" | "bottom" | "right" | "left" | "middle"
};

export type KendoDockIndicatorState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    position: "middle"
};

export const DockIndicator = (
    props: KendoDockIndicatorProps &
        KendoDockIndicatorState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        position = defaultOptions.position,
        hover,
        disabled,
        ...other
    } = props;

    const iconMap = {
        top: "position-top",
        bottom: "position-bottom",
        right: "position-right",
        left: "position-left",
        middle: "window"
    };

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                DOCKINDICATOR_CLASSNAME,
                stateClassNames(DOCKINDICATOR_CLASSNAME, {
                    hover,
                    disabled,
                }),
                {
                    [`${DOCKINDICATOR_CLASSNAME}-${position}`]: position
                }
            )}
        >
            <Icon icon={iconMap[position]} size="xlarge" />
        </div>
    );
};

DockIndicator.states = states;
DockIndicator.options = options;
DockIndicator.className = DOCKINDICATOR_CLASSNAME;
DockIndicator.defaultOptions = defaultOptions;

export default DockIndicator;
