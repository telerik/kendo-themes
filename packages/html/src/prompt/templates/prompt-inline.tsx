import { ActionButtons } from "../../action-buttons";
import { IconButton, IconTextButton } from "../../button";
import { Prompt, PromptContent, PromptView, PromptSendButton } from "..";
import { Card, CardBody } from "../../card";
import { Textarea } from "../../textarea";
import { SpeechToTextButton } from "../../speech-to-text-button";

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
