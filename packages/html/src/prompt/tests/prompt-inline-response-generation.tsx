import { ActionButtons } from "../../action-buttons";
import { IconButton, IconTextButton } from "../../button";
import { Card, CardBody } from "../../card";
import { Popup } from "../../popup";
import { Prompt, PromptContent, PromptView, PromptSendButton } from "../../prompt";
import { SpeechToTextButton } from "../../speech-to-text-button";
import { Textarea } from "../../textarea";

const styles = `
    .k-animation-container:first-child {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <section>
                <Popup className="k-prompt-popup" animationStyle={{width: "550px"}}>
                        <Prompt>
                            <PromptContent>
                                <PromptView>
                                    <Textarea
                                        rows={5}
                                        value="Here is a link to my portfolio. I'm a Full-stack developer with 10 years of experience. Would love your input for improvement."
                                        resize="none"
                                        flow="horizontal"
                                        suffixSeparator={false}
                                        prefix={<>
                                            <IconButton fillMode="flat" icon="menu" />
                                            <SpeechToTextButton fillMode="flat" />
                                        </>}
                                        suffix={<>
                                            <PromptSendButton />
                                        </>} />
                                </PromptView>
                            </PromptContent>
                        </Prompt>
                </Popup>
            </section>

            <section>
                <Popup className="k-prompt-popup" animationStyle={{width: "550px"}}>
                    <Prompt>
                        <PromptContent>
                            <PromptView>
                                <Card>
                                    <CardBody style={{maxHeight: "150px", overflowY: "auto" }}>Here is an advice on what to include:</CardBody>
                                    <ActionButtons className="k-card-actions" alignment="start">
                                        <IconTextButton fillMode="flat" themeColor="primary" icon="copy">Copy</IconTextButton>
                                        <IconTextButton fillMode="flat" themeColor="primary" icon="insert-bottom">Insert</IconTextButton>
                                        <IconTextButton fillMode="flat" themeColor="primary" icon="check">Replace</IconTextButton>
                                        <IconTextButton fillMode="flat" themeColor="base" icon="cancel-outline">Discard</IconTextButton>
                                    </ActionButtons>
                                </Card>
                                <Textarea rows={3} value="Here is a link to my portfolio. I'm a Full-stack developer with 10 years of experience. Would love your input for improvement." resize="none" flow="horizontal" suffixSeparator={false}
                                    prefix={<>
                                        <IconButton fillMode="flat" icon="menu" />
                                        <SpeechToTextButton fillMode="flat" />
                                    </>}
                                    suffix={<>
                                        <PromptSendButton generating />
                                    </>} />
                            </PromptView>
                        </PromptContent>
                    </Prompt>
                </Popup>
            </section>

            <section>
                <Popup className="k-prompt-popup" animationStyle={{width: "550px"}}>
                    <Prompt>
                        <PromptContent>
                            <PromptView>
                                <Card>
                                    <CardBody style={{maxHeight: "150px", overflowY: "auto" }}>
                                        Here is an advice on what to include: Portfolio Essentials for a Senior Full-Stack Developer:
                                        Professional Summary: Brief intro with years of experience, core sills, and
                                    </CardBody>
                                    <ActionButtons className="k-card-actions" alignment="start">
                                        <IconTextButton fillMode="flat" themeColor="primary" icon="copy">Copy</IconTextButton>
                                        <IconTextButton fillMode="flat" themeColor="primary" icon="insert-bottom">Insert</IconTextButton>
                                        <IconTextButton fillMode="flat" themeColor="primary" icon="check">Replace</IconTextButton>
                                        <IconTextButton fillMode="flat" themeColor="base" icon="cancel-outline">Discard</IconTextButton>
                                    </ActionButtons>
                                </Card>
                                <Textarea rows={3} value="Here is a link to my portfolio. I'm a Full-stack developer with 10 years of experience. Would love your input for improvement." resize="none" flow="horizontal" suffixSeparator={false}
                                    prefix={<>
                                        <IconButton fillMode="flat" icon="menu" />
                                        <SpeechToTextButton fillMode="flat" />
                                    </>}
                                    suffix={<>
                                        <PromptSendButton />
                                    </>} />
                            </PromptView>
                        </PromptContent>
                    </Prompt>
                </Popup>
            </section>
        </div>
    </>
);
