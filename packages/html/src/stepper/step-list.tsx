import { classNames } from '../misc';

const STEPLIST_CLASSNAME = 'k-step-list';

const states = [];

const options = {};

export type KendoStepListProps = {
    style?: React.CSSProperties;
    orientation?: "horizontal" | "vertical";
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
            )}>
            {props.children}
        </ol>
    );
};

StepList.options = options;
StepList.states = states;
StepList.className = STEPLIST_CLASSNAME;
StepList.defaultOptions = defaultOptions;

export default StepList;
