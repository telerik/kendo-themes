import { classNames, stateClassNames, States, } from '../misc';

import { KendoComponent } from '../_types/component';
import { PROGRESSBAR_FOLDER_NAME, PROGRESSBAR_MODULE_NAME } from './constants';
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

const defaultOptions = {
    indeterminate: false,
    label: true,
    labelPosition: 'start',
    orientation: 'horizontal',
    reverse: false,
    value: "0"
};

export const ProgressBar: KendoComponent<KendoProgressBarProps & KendoProgressBarState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoProgressBarProps &
        KendoProgressBarState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        disabled,
        height,
        indeterminate = defaultOptions.indeterminate,
        label = defaultOptions.label,
        labelPosition = defaultOptions.labelPosition,
        orientation = defaultOptions.orientation,
        reverse = defaultOptions.reverse,
        value = defaultOptions.value,
        width,
        style,
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
            )}
            style={{
                ...style,
                "--kendo-progressbar-value": value,
                [orientation === "horizontal" ? "height" : "width"]: orientation === "horizontal" ? height : width
            } as React.CSSProperties}
        >
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
ProgressBar.defaultOptions = defaultOptions;
ProgressBar.moduleName = PROGRESSBAR_MODULE_NAME;
ProgressBar.folderName = PROGRESSBAR_FOLDER_NAME;

export default ProgressBar;
