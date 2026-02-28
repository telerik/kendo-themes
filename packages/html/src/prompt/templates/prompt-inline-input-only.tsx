import { IconButton } from "../../button";
import { Prompt, PromptContent, PromptView, PromptSendButton } from "..";
import { Textarea } from "../../textarea";
import { SpeechToTextButton } from "../../speech-to-text-button";

export const PromptInlineInputOnly = ({ ...other }: any) => (
    <Prompt {...other} >
        <PromptContent>
            <PromptView>
                <Textarea rows={1} placeholder="Edit, generate or explain ..." resize="none" flow="horizontal" suffixSeparator={false}
                    aria-label="Edit, generate or explain"
                    prefix={<>
                        <IconButton fillMode="flat" icon="menu" aria-label="Menu" />
                        <SpeechToTextButton fillMode="flat" />
                    </>}
                    suffix={<>
                        <PromptSendButton disabled />
                    </>} />
            </PromptView>
        </PromptContent>
    </Prompt>
);
