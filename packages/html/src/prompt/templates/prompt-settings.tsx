import { ActionButtons } from "../../action-buttons";
import { IconTextButton, IconButton } from "../../button";
import { ChipList, Chip } from "../../chip";
import { Toolbar } from "../../toolbar";
import { Prompt, PromptHeader, PromptFooter, PromptContent, PromptSetting, PromptView, PromptExpander } from "..";
import { SpeechToTextButton } from "../../speech-to-text-button";
import { Textarea } from "../../textarea";

export const PromptSettings = (props) => (
    <Prompt {...props}>
        <PromptHeader>
            <Toolbar fillMode="flat">
                <IconTextButton fillMode="flat" themeColor="primary" icon="sparkles" rounded="full" selected>Ask AI</IconTextButton>
                <IconTextButton fillMode="flat" themeColor="primary" icon="comment" rounded="full">Output</IconTextButton>
                <IconButton fillMode="flat" themeColor="primary" icon="more-horizontal" rounded="full" aria-label="More actions"></IconButton>
            </Toolbar>
        </PromptHeader>
        <PromptContent>
            <PromptView>
                <Textarea
                    resize="y"
                    rows={1}
                    suffixSeparator={false}
                    placeholder="Ask or generate content with AI"
                    aria-label="Ask or generate content with AI"
                    suffix={
                        <>
                            <SpeechToTextButton fillMode="flat" />
                        </>
                    }
                />
                <PromptExpander expanded title="Settings">
                    <PromptSetting>
                        Length:
                        <ChipList ariaLabel="Length">
                            <Chip text="Small" role="option" />
                            <Chip text="Medium" role="option" />
                            <Chip text="Large" role="option" />
                        </ChipList>
                    </PromptSetting>
                    <PromptSetting>
                        Tone:
                        <ChipList ariaLabel="Tone">
                            <Chip text="Professional" role="option" />
                            <Chip text="Friendly" role="option" />
                            <Chip text="Casual" role="option" />
                            <Chip text="Straightforward" role="option" />
                            <Chip text="Confident" role="option" />
                        </ChipList>
                    </PromptSetting>
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
