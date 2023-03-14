import { classNames, stateClassNames, States, } from '../utils-new';

export const PROGRESSBAR_CLASSNAME = `k-progressbar`;

const states = [
    States.disabled,
    States.indeterminate
];

const options = {};

export type KendoProgressBarProps = {
    height?: string;
    label?: boolean;
    labelPosition?: 'start' | 'center' | 'end';
    orientation?: 'horizontal' | 'vertical';
    reverse?: boolean;
    value?: string;
    width?: string;
};

export type KendoProgressBarState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    indeterminate: false,
    label: true,
    labelPosition: 'start',
    orientation: 'horizontal',
    reverse: false,
    value: "0"
};

export const ProgressBar = (
    props: KendoProgressBarProps &
        KendoProgressBarState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        disabled,
        height,
        indeterminate = defaultProps.indeterminate,
        label = defaultProps.label,
        labelPosition = defaultProps.labelPosition,
        orientation = defaultProps.orientation,
        reverse = defaultProps.reverse,
        value = defaultProps.value,
        width,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                PROGRESSBAR_CLASSNAME,
                stateClassNames(PROGRESSBAR_CLASSNAME, {
                    disabled,
                }),
                {
                    [`${PROGRESSBAR_CLASSNAME}-${orientation}`]: orientation,
                    [`${PROGRESSBAR_CLASSNAME}-indeterminate`]: indeterminate,
                    [`${PROGRESSBAR_CLASSNAME}-reverse`]: reverse,
                }
            )} style={ orientation === "horizontal" ? { "--kendo-progressbar-value": value, height: height } as React.CSSProperties : { "--kendo-progressbar-value": value, width: width } as React.CSSProperties } >
            <span className={classNames(
                'k-progress-status-wrap',
                {
                    [`k-progress-${labelPosition}`]: labelPosition && !indeterminate
                }
            )}>
                {label && <span className="k-progress-status">{value}%</span>}
            </span>
            {!indeterminate &&
            <div className="k-progressbar-value k-selected">
                <span className={classNames(
                    'k-progress-status-wrap',
                    {
                        [`k-progress-${labelPosition}`]: labelPosition
                    }
                )}>
                    {label && <span className="k-progress-status">{props.value}%</span>}
                </span>
            </div>
            }
        </div>
    );
};

ProgressBar.states = states;
ProgressBar.options = options;
ProgressBar.className = PROGRESSBAR_CLASSNAME;

export default ProgressBar;
