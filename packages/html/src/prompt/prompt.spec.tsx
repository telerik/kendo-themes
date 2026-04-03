import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { PROMPT_FOLDER_NAME, PROMPT_MODULE_NAME } from './constants';
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

Prompt.ariaSpec = {
    selector: '.k-prompt',
    rules: [
        // TextArea adornment buttons
        { selector: '.k-input-prefix > .k-button', attribute: 'role=button or nodeName=button', usage: 'The buttons must have appropriate role.' },
        { selector: '.k-input-prefix > .k-button', attribute: 'aria-label or title', usage: 'The buttons must be properly labelled.' },
        { selector: '.k-input-suffix > .k-button', attribute: 'role=button or nodeName=button', usage: 'The buttons must have appropriate role.' },
        { selector: '.k-input-suffix > .k-button', attribute: 'aria-label or title', usage: 'The buttons must be properly labelled.' },
        { selector: '.k-input-suffix > .k-prompt-send.k-disabled', attribute: 'disabled', usage: 'Announces send action as disabled if necessary.' },
        // Suggestion component
        { selector: '.k-prompt-expander .k-button', attribute: 'aria-controls (when present)', usage: 'Points to the controlled element based on the given id.' },
        { selector: '.k-prompt-expander .k-button', attribute: 'aria-expanded', usage: 'Indicates the expanded state of the prompt expander content.' },
        { selector: '.k-prompt-expander .k-suggestion-group', attribute: 'role=group', usage: 'Indicates that the suggestion container element is a group.' },
        { selector: '.k-prompt-expander .k-suggestion', attribute: 'role=button', usage: 'Indicates that the suggestion element is a button.' },
        { selector: '.k-prompt-expander .k-suggestion', attribute: 'aria-label or title', usage: 'The suggestion elements must be properly labelled.' },
        { selector: '.k-prompt-expander .k-suggestion', attribute: 'tabindex=0', usage: 'The suggestion element should be focusable.' },
    ]
};

export default Prompt;
