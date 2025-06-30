import { IconButton } from "../../button";
import { Prompt, PromptContent, PromptView, PromptSendButton } from "..";
import { Textarea } from "../../textarea";
import { SpeechToTextButton } from "../../speech-to-text-button";

export const PromptInlineInputOnly = ({ ...other }: any) => (
    <Prompt {...other} >
        <PromptContent>
            <PromptView>
                <Textarea rows={1} placeholder="Placeholder ..." resize="none" flow="horizontal" suffixSeparator={false}
                    prefix={<>
                        <IconButton fillMode="flat" icon="menu" />
                        <SpeechToTextButton fillMode="flat" />
                    </>}
                    suffix={<>
                        <PromptSendButton disabled />
                    </>} />
            </PromptView>
        </PromptContent>
    </Prompt>
);
