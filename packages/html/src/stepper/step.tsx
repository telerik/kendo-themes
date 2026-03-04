import { Icon } from '../icon';
import { States, classNames, stateClassNames } from '../misc';

const STEP_CLASSNAME = 'k-step';

const states = [
    States.disabled,
    States.hover,
    States.focus,
    States.invalid,
    States.valid,

];

const options = {};

export type KendoStepProps = {
    style?: React.CSSProperties;
    optional?: boolean;
    first?: boolean;
    done?: boolean;
    current?: boolean;
    last?: boolean;
    label?: string;
    text?: string;
    icon?: string;
    stepContent?: React.JSX.Element;
    /** @aria When true, Step renders with wizard tab pattern (role=none on li, role=tab on link) */
    wizardContext?: boolean;
    /** @aria aria-controls for the step link, pointing to the associated tabpanel id */
    ariaControls?: string;
}

export type StepState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

export const Step = (
    props: KendoStepProps & StepState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        style,
        disabled,
        hover,
        focus,
        invalid,
        valid,
        optional,
        first,
        done,
        current,
        last,
        label,
        text,
        icon,
        stepContent,
        wizardContext,
        ariaControls,
        ...other
    } = props;

    const iconName = invalid ? 'warning-circle' : 'check-circle';
    const renderValidationIcon = Boolean( valid || invalid );

    const stepAriaLabel = label || (text ? `Step ${text}` : (icon ? `Step` : undefined));

    return (
        <li
            {...other}
            style={style}
            className={classNames(
                props.className,
                STEP_CLASSNAME,
                {
                    [`${STEP_CLASSNAME}-done`]: done,
                    [`${STEP_CLASSNAME}-first`]: first,
                    [`${STEP_CLASSNAME}-current`]: current,
                    [`${STEP_CLASSNAME}-last`]: last,
                    [`${STEP_CLASSNAME}-optional`]: optional,
                    [`${STEP_CLASSNAME}-success`]: valid,
                    [`${STEP_CLASSNAME}-error`]: invalid,
                },
                stateClassNames(STEP_CLASSNAME, { hover, focus, disabled }),
            )}
            {...(wizardContext && { role: 'none' })}
        >

            <a href="#" className="k-step-link"
                {...(wizardContext && { role: 'tab' })}
                {...(ariaControls && { 'aria-controls': ariaControls })}
                {...(current && { 'aria-current': wizardContext ? 'true' as const : 'step' as const })}
                {...(current && wizardContext && { 'aria-selected': 'true' })}
                {...(disabled && { 'aria-disabled': 'true' })}
                tabIndex={focus || current ? 0 : -1}
                aria-label={stepAriaLabel}
            >

                { text && !icon &&
                    <span className="k-step-indicator">
                        <span className="k-step-indicator-text">
                            {text}
                        </span>
                    </span>
                }

                { icon &&
                    <span className="k-step-indicator">
                        <Icon className="k-step-indicator-icon" icon={icon}/>
                    </span>
                }

                { optional && !label &&
                    <span className="k-step-label">
                        <span className="k-step-label-optional">(Optional)</span>
                    </span>
                }

                { label &&
                    <span className="k-step-label">
                        <span className="k-step-text">{label}</span>

                        {renderValidationIcon &&
                            <Icon icon={iconName}></Icon>
                        }
                        {optional &&
                            <span className="k-step-label-optional">(Optional)</span>
                        }
                    </span>
                }
            </a>

            {stepContent &&
                <div className="k-step-content" style={{ height: "140px" }}>
                    {stepContent}
                </div>
            }
        </li>
    );
};

Step.options = options;
Step.states = states;
Step.className = STEP_CLASSNAME;
Step.defaultOptions = defaultOptions;

export default Step;
