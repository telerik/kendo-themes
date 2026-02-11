import { ActionButtons } from "../../action-buttons/action-buttons.spec";
import { IconButton } from "../../button/templates/icon-button";
import { IconTextButton } from "../../button/templates/icon-text-button";
import { Prompt } from "../prompt.spec";
import { PromptContent } from "../prompt-content";
import { PromptView } from "../prompt-view";
import { PromptSendButton } from "../prompt-send-button";
import { Card } from "../../card/card.spec";
import { CardBody } from "../../card/card-body";
import { Textarea } from "../../textarea/textarea.spec";
import { SpeechToTextButton } from "../../speech-to-text-button/speech-to-text-button.spec";

export const PromptInline = ({ text, ...other }: any) => (
    <Prompt {...other} >
        <PromptContent>
            <PromptView>
                <Card>
                    <CardBody style={{maxHeight: "150px", overflowY: "auto" }}>{text}</CardBody>
                    <ActionButtons className="k-card-actions" alignment="start">
                        <IconTextButton fillMode="flat" themeColor="primary" icon="copy">Copy</IconTextButton>
                        <IconTextButton fillMode="flat" themeColor="primary" icon="insert-bottom">Insert</IconTextButton>
                        <IconTextButton fillMode="flat" themeColor="primary" icon="check">Replace</IconTextButton>
                        <IconTextButton fillMode="flat" icon="cancel-outline">Discard</IconTextButton>
                    </ActionButtons>
                </Card>
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
