import { classNames, stateClassNames, States, } from '../misc';

import { KendoComponent } from '../_types/component';
import { PROGRESSBAR_FOLDER_NAME, PROGRESSBAR_MODULE_NAME } from './constants';
export const PROGRESSBAR_CLASSNAME = `k-progressbar`;

const states = [
    States.disabled,
    States.indeterminate
];

const options = {
    orientation: ['horizontal', 'vertical'],
};

export type KendoProgressBarProps = {
    height?: string;
    label?: boolean;
    labelPosition?: 'start' | 'center' | 'end';
    orientation?: 'horizontal' | 'vertical';
    reverse?: boolean;
    value?: string;
    width?: string;
    /** @aria aria-label - accessible name for the progressbar */
    ariaLabel?: string;
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
        ariaLabel,
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
            role="progressbar"
            aria-label={ariaLabel || 'progress'}
            aria-valuenow={indeterminate ? undefined : Number(value)}
            aria-valuemin={0}
            aria-valuemax={100}
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

ProgressBar.ariaSpec = {
    selector: '.k-progressbar',
    implicitRole: 'progressbar',
    rules: [
        { selector: '.k-progressbar', attribute: 'role=progressbar', usage: 'Sets the proper role for ProgressBar.' },
        { selector: '.k-progressbar', attribute: 'aria-label or aria-labelledby', usage: 'The ProgressBar needs an accessible name to be assigned to it.' },
        { selector: '.k-progressbar:not(.k-progressbar-indeterminate)', attribute: 'aria-valuenow', usage: 'Required if the value is not indeterminate. Decimal value between aria-valuemin and aria-valuemax.' },
        { selector: '.k-progressbar', attribute: 'aria-valuemin', usage: 'Minimum value. Defaults to 0.' },
        { selector: '.k-progressbar', attribute: 'aria-valuemax', usage: 'Maximum value. Defaults to 100.' },
    ]
};

export default ProgressBar;
