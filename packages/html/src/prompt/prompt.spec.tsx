import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { PROMPT_FOLDER_NAME, PROMPT_MODULE_NAME } from './constants';
export const PROMPT_CLASSNAME = `k-prompt`;

const states = [];

const options = {};

const defaultOptions = {};

/**
 * @aria {aria-controls} Points to the controlled element based on the given id.
 * @aria {aria-expanded} Indicates the expanded state of the prompt expander content.
 * @aria {role="group"} Indicates that the suggestion container element is a group.
 * @aria {role="button"} Indicates that the suggestion element is a button.
 * @aria {aria-label|title} The suggestion elements must be properly labelled.
 * @aria {tabindex="0"} The suggestion element should be focusable.
 */
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

/**
 * @keyboard {Escape} If generating, stops the generation process.
 * @keyboard {Enter or Space} Triggers a click action on the suggestion element.
 * @keyboard {Escape} If generating, stops the generation process. If not, closes the Inline AI Prompt popup.
 * @keyboard {Enter} Sends the message.
 * @keyboard {Shift + Enter} Starts a new line in the textarea message box.
 */

export default Prompt;
