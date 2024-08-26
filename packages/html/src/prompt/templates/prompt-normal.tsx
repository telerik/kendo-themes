import { ActionButtons } from "../../action-buttons";
import { IconTextButton, IconButton } from "../../button";
import { Toolbar } from "../../toolbar";
import { Prompt, PromptHeader, PromptFooter, PromptContent, PromptView } from "..";

export const PromptNormal = (props) => (
    <Prompt
        {...props}
    >
        <PromptHeader>
            <Toolbar className="k-toolbar-flat">
                <IconTextButton fillMode="flat" themeColor="primary" icon="sparkles" rounded="full" selected>Ask AI</IconTextButton>
                <IconTextButton fillMode="flat" themeColor="primary" icon="comment" rounded="full">Output</IconTextButton>
                <IconButton fillMode="flat" themeColor="primary" icon="more-horizontal" rounded="full"></IconButton>
            </Toolbar>
        </PromptHeader>
        <PromptContent>
            <PromptView showSearch></PromptView>
        </PromptContent>
        <PromptFooter>
            <ActionButtons className="k-prompt-actions" alignment="start">
                <IconTextButton icon="sparkles" themeColor="primary" rounded="full">Generate</IconTextButton>
            </ActionButtons>
        </PromptFooter>
    </Prompt>
);

export default PromptNormal;
