import { ActionButtons } from "../../action-buttons/action-buttons.spec";
import { IconButton } from "../../button/templates/icon-button";
import { IconTextButton } from "../../button/templates/icon-text-button";
import { Chip } from "../../chip/chip.spec";
import { ChipList } from "../../chip/chip-list.spec";
import { Toolbar } from "../../toolbar/toolbar.spec";
import { Prompt } from "../prompt.spec";
import { PromptContent } from "../prompt-content";
import { PromptHeader } from "../prompt-header";
import { PromptView } from "../prompt-view";
import { PromptFooter } from "../prompt-footer";
import { PromptExpander } from "../prompt-expander";
import { PromptSetting } from "../prompt-setting";
import { SpeechToTextButton } from "../../speech-to-text-button/speech-to-text-button.spec";
import { Textarea } from "../../textarea/textarea.spec";

export const PromptSettings = (props) => (
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
                <PromptExpander expanded title="Settings">
                    <PromptSetting>
                        Length:
                        <ChipList>
                            <Chip text="Small" />
                            <Chip text="Medium" />
                            <Chip text="Large" />
                        </ChipList>
                    </PromptSetting>
                    <PromptSetting>
                        Tone:
                        <ChipList>
                            <Chip text="Professional" />
                            <Chip text="Friendly" />
                            <Chip text="Casual" />
                            <Chip text="Straightforward" />
                            <Chip text="Confident" />
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
