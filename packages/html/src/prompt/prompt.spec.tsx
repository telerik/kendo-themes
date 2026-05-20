import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { PROMPT_FOLDER_NAME, PROMPT_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
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
Prompt.moduleName = PROMPT_MODULE_NAME;
Prompt.folderName = PROMPT_FOLDER_NAME;

Prompt.ariaSpec = a11ySpec.ariaSpec;

export default Prompt;
