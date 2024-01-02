import { ActionButtons } from "../../action-buttons";
import { IconTextButton, IconButton } from "../../button";
import { Toolbar } from "../../toolbar";
import { Prompt, PromptContent, PromptHeader, PromptView } from "..";
import { Card, CardHeader, CardBody } from "../../card";

export const PromptOutput = (props) => (
    <Prompt
        {...props}
    >
        <PromptHeader>
            <Toolbar className="k-toolbar-flat">
                <IconTextButton fillMode="flat" themeColor="primary" icon="sparkles" rounded="full">Ask AI</IconTextButton>
                <IconTextButton fillMode="flat" themeColor="primary" icon="comment" rounded="full" selected>Output</IconTextButton>
                <IconButton fillMode="flat" themeColor="primary" icon="more-horizontal" rounded="full"></IconButton>
            </Toolbar>
        </PromptHeader>
        <PromptContent>
            <PromptView>
                <div className="k-card-list">
                    <Card>
                        <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
                        <CardBody>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </CardBody>
                        <ActionButtons className="k-card-actions" alignment="start">
                            <IconTextButton fillMode="flat" themeColor="primary" icon="copy">Copy</IconTextButton>
                            <IconTextButton fillMode="flat" themeColor="base" icon="arrow-rotate-cw">Retry</IconTextButton>
                            <IconButton fillMode="flat" themeColor="primary" icon="more-horizontal"></IconButton>
                            <span className="k-spacer"></span>
                            <IconButton fillMode="flat" themeColor="base" icon="thumb-up-outline"></IconButton>
                            <IconButton fillMode="flat" themeColor="base" icon="thumb-down-outline"></IconButton>
                        </ActionButtons>
                    </Card>

                    <Card>
                        <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
                        <CardBody>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </CardBody>
                        <ActionButtons className="k-card-actions" alignment="start">
                            <IconTextButton fillMode="flat" themeColor="primary" icon="copy">Copy</IconTextButton>
                            <IconTextButton fillMode="flat" themeColor="base" icon="arrow-rotate-cw">Retry</IconTextButton>
                            <IconButton fillMode="flat" themeColor="primary" icon="more-horizontal"></IconButton>
                            <span className="k-spacer"></span>
                            <IconButton fillMode="flat" themeColor="base" icon="thumb-up-outline"></IconButton>
                            <IconButton fillMode="flat" themeColor="base" icon="thumb-down-outline"></IconButton>
                        </ActionButtons>
                    </Card>
                </div>
            </PromptView>
        </PromptContent>
    </Prompt>
);
