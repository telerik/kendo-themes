import { classNames } from '../misc';

const STEPLIST_CLASSNAME = 'k-step-list';

const states = [];

const options = {};

export type KendoStepListProps = {
    style?: React.CSSProperties;
    orientation?: "horizontal" | "vertical";
    /** @aria When true, renders with role=tablist for wizard context */
    wizardContext?: boolean;
}

const defaultOptions = {
    orientation: "horizontal",
};

export const StepList = (
    props: KendoStepListProps &
        React.HTMLAttributes<HTMLOListElement>
) => {
    const {
        style,
        orientation = defaultOptions.orientation,
        wizardContext,
        ...other
    } = props;

    return (
        <ol
            {...other}
            style={style}
            className={classNames(
                props.className,
                STEPLIST_CLASSNAME,
                {
                    [`${STEPLIST_CLASSNAME}-${orientation}`]: orientation,
                }
            )}
            {...(wizardContext && { role: 'tablist' })}
        >
            {props.children}
        </ol>
    );
};

StepList.options = options;
StepList.states = states;
StepList.className = STEPLIST_CLASSNAME;
StepList.defaultOptions = defaultOptions;

export default StepList;
