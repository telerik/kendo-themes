import { classNames } from '../misc';

export const PROMPT_CLASSNAME = `k-prompt`;

const states = [];

const options = {};

const defaultOptions = {};

export const Prompt = (
    props:
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;


    return (
        <div {...other} className={classNames(props.className, PROMPT_CLASSNAME)}>
            <>{props.children}</>
        </div>
    );
};

Prompt.states = states;
Prompt.options = options;
Prompt.className = PROMPT_CLASSNAME;
Prompt.defaultOptions = defaultOptions;

export default Prompt;
