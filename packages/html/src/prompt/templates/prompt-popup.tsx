import { ActionButtons } from "../../action-buttons/action-buttons.spec";
import { IconButton } from "../../button/templates/icon-button";
import { IconTextButton } from "../../button/templates/icon-text-button";
import { Toolbar } from "../../toolbar/toolbar.spec";
import { Prompt } from "../prompt.spec";
import { PromptContent } from "../prompt-content";
import { PromptHeader } from "../prompt-header";
import { PromptView } from "../prompt-view";
import { PromptFooter } from "../prompt-footer";
import { Popup } from "../../popup/popup.spec";
import { SpeechToTextButton } from "../../speech-to-text-button/speech-to-text-button.spec";
import { Textarea } from "../../textarea/textarea.spec";

export const PromptInPopup = (props) => (
    <Popup className="k-prompt-popup">
        <Prompt
            {...props}
        >
            <PromptHeader>
                <Toolbar fillMode="flat">
                    <IconTextButton fillMode="flat" themeColor="primary" icon="sparkles" rounded="full" selected>Ask AI</IconTextButton>
                    <IconTextButton fillMode="flat" themeColor="primary" icon="comment" rounded="full">Output</IconTextButton>
                    <IconButton fillMode="flat" themeColor="primary" icon="more-horizontal" rounded="full"></IconButton>
                    <span className="k-spacer"></span>
                    <IconButton fillMode="flat" icon="x" rounded="full"></IconButton>
                </Toolbar>
            </PromptHeader>
            <PromptContent>
                <PromptView>
                    <Textarea
                        resize="y"
                        rows={1}
                        suffixSeparator={false}
                        placeholder="Ask or generate content with AI"
                        suffix={
                            <>
                                <SpeechToTextButton fillMode="flat" />
                            </>
                        }
                    />
                </PromptView>
            </PromptContent>
            <PromptFooter>
                <ActionButtons className="k-prompt-actions" alignment="start">
                    <IconTextButton icon="sparkles" themeColor="primary" rounded="full">Generate</IconTextButton>
                </ActionButtons>
            </PromptFooter>
        </Prompt>
    </Popup>
);
