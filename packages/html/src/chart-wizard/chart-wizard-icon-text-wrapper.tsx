import { classNames, stateClassNames, States } from '../misc';
import { Icon } from '../icon';

export const CHARTWIZARDICONTEXTWRAPPER_CLASSNAME = `k-icon-text-wrapper`;

const states = [
    States.focus,
    States.selected
];

const options = {};

export type ChartWizardIconTextWrapperProps = {
    icon: string,
    text: string
};

export type ChartWizardIconTextWrapperState = { [K in (typeof states)[number]]?: boolean };

export const ChartWizardIconTextWrapper = (
    props: ChartWizardIconTextWrapperProps &
        ChartWizardIconTextWrapperState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        focus,
        selected,
        icon,
        text,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CHARTWIZARDICONTEXTWRAPPER_CLASSNAME,
                stateClassNames(CHARTWIZARDICONTEXTWRAPPER_CLASSNAME, {
                    focus,
                    selected,
                }),
            )}
        >
            <div className="k-icon-background-area">
                <Icon icon={icon} size="xlarge" />
            </div>
            {text}
        </div>
    );
};

ChartWizardIconTextWrapper.states = states;
ChartWizardIconTextWrapper.options = options;
ChartWizardIconTextWrapper.className = CHARTWIZARDICONTEXTWRAPPER_CLASSNAME;

export default ChartWizardIconTextWrapper;
