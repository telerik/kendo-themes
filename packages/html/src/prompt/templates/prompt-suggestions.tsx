import { ActionButtons } from "../../action-buttons";
import { IconTextButton, IconButton } from "../../button";
import { Toolbar } from "../../toolbar";
import { Prompt, PromptHeader, PromptFooter, PromptContent, PromptView, PromptExpander } from "..";
import { SpeechToTextButton } from "../../speech-to-text-button";
import { Textarea } from "../../textarea";
import { SuggestionGroup, Suggestion } from "../../suggestion";


export const PromptSuggestions = (props) => (
    <Prompt {...props}>
        <PromptHeader>
            <Toolbar fillMode="flat">
                <IconTextButton fillMode="flat" themeColor="primary" icon="sparkles" rounded="full" selected>Ask AI</IconTextButton>
                <IconTextButton fillMode="flat" themeColor="primary" icon="comment" rounded="full">Output</IconTextButton>
                <IconButton fillMode="flat" themeColor="primary" icon="more-horizontal" rounded="full"></IconButton>
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
                <PromptExpander expanded title="Prompt Suggestions">
                    <SuggestionGroup layout="wrap">
                        <Suggestion text="Suggestion 1" />
                        <Suggestion text="Suggestion 2" />
                        <Suggestion text="Reply with very very very very very very very long text" />
                    </SuggestionGroup>
                </PromptExpander>
            </PromptView>
        </PromptContent>
        <PromptFooter>
            <ActionButtons className="k-prompt-actions" alignment="start">
                <IconTextButton icon="sparkles" themeColor="primary" rounded="full">Generate</IconTextButton>
            </ActionButtons>
        </PromptFooter>
    </Prompt>
);
