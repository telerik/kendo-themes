import { IconButton } from '../../button/templates/icon-button';
import { Prompt } from "../prompt.spec";
import { PromptContent } from "../prompt-content";
import { PromptView } from "../prompt-view";
import { PromptSendButton } from "../prompt-send-button";
import { Textarea } from "../../textarea/textarea.spec";
import { SpeechToTextButton } from "../../speech-to-text-button/speech-to-text-button.spec";

export const PromptInlineInputOnly = ({ ...other }: any) => (
    <Prompt {...other} >
        <PromptContent>
            <PromptView>
                <Textarea rows={1} placeholder="Edit, generate or explain ..." resize="none" flow="horizontal" suffixSeparator={false}
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
