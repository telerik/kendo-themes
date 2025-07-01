import { Button, KendoButtonOptions, KendoButtonState } from '../button';
import { FloatingActionButton, KendoFloatingActionButtonOptions, KendoFloatingActionButtonProps } from '../fab';
import { classNames } from "../misc";

const PROMPT_STOP_FAB_CLASS = 'k-prompt-stop-fab';

export type KendoPromptStopFloatingActionButtonOptions = KendoButtonOptions;

export type KendoPromptStopFloatingActionButtonState = KendoButtonState;

const defaultOptions = {
    generating: true,
};

export type KendoPromptStopFloatingActionButtonProps = KendoFloatingActionButtonOptions & KendoFloatingActionButtonProps & KendoPromptStopFloatingActionButtonState & {
    generating?: boolean;
};

export const PromptStopFloatingActionButton = (
    props: KendoPromptStopFloatingActionButtonProps &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        generating = defaultOptions.generating,
        icon,
        ...other
    } = props;

    return (
        <FloatingActionButton
            {...other}
            className={classNames(
                props.className,
                PROMPT_STOP_FAB_CLASS,
                {
                    ['k-generating']: generating,
                },
                'k-z-10'
            )}
            // TODO add styles for z-index
            style={{ bottom: "16px", right: "16px"}}
            position="bottom-end"
            icon={generating ? 'stop-sm' : icon}
            active={generating}
        >
        </FloatingActionButton>
    );
};

PromptStopFloatingActionButton.states = Button.states;
PromptStopFloatingActionButton.options = Button.options;
PromptStopFloatingActionButton.className = PROMPT_STOP_FAB_CLASS;
PromptStopFloatingActionButton.defaultOptions = defaultOptions;

export default PromptStopFloatingActionButton;
