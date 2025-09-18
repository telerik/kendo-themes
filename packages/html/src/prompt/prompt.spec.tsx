import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
export const PROMPT_CLASSNAME = `k-prompt`;

const states = [];

const options = {};

const defaultOptions = {};

export const Prompt: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
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
Prompt.moduleName = "prompt";
Prompt.folderName = Prompt.moduleName;

export default Prompt;
