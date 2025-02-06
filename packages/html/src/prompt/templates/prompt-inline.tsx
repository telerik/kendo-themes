import { ActionButtons } from "../../action-buttons";
import { IconButton, IconTextButton } from "../../button";
import { Prompt, PromptContent, PromptView } from "..";
import { Card, CardBody } from "../../card";
import { Textbox } from "../../textbox";

export const PromptInline = ({ text, ...other }: any) => (
    <Prompt {...other} >
        <PromptContent>
            <PromptView>
                <Card>
                    <CardBody style={{maxHeight: "150px", overflowY: "auto" }}>{text}</CardBody>
                    <ActionButtons className="k-card-actions" alignment="start">
                        <IconTextButton fillMode="flat" themeColor="primary" icon="insert-bottom">Insert</IconTextButton>
                        <IconTextButton fillMode="flat" themeColor="primary" icon="check">Replace</IconTextButton>
                        <IconTextButton fillMode="flat" themeColor="base" icon="cancel-outline">Discard</IconTextButton>
                    </ActionButtons>
                </Card>
                <Textbox placeholder="Edit, generate or explain ..." separators={false}
                    prefix={<>
                        <IconButton fillMode="flat" icon="sparkles" />
                    </>}
                    suffix={<>
                        <IconButton fillMode="flat" icon="paper-plane" />
                    </>} />
            </PromptView>
        </PromptContent>
    </Prompt>
);
