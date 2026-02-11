import { ActionButtons } from "../../action-buttons/action-buttons.spec";
import { IconButton } from "../../button/templates/icon-button";
import { IconTextButton } from "../../button/templates/icon-text-button";
import { Toolbar } from "../../toolbar/toolbar.spec";
import { Prompt } from "../prompt.spec";
import { PromptContent } from "../prompt-content";
import { PromptHeader } from "../prompt-header";
import { PromptStopFloatingActionButton } from "../prompt-stop-fab";
import { PromptView } from "../prompt-view";
import { Card } from "../../card/card.spec";
import { CardHeader } from "../../card/card-header";
import { CardBody } from "../../card/card-body";

export const PromptOutput = (props) => (
    <Prompt
        {...props}
    >
        <PromptHeader>
            <Toolbar fillMode="flat">
                <IconTextButton fillMode="flat" themeColor="primary" icon="sparkles" rounded="full">Ask AI</IconTextButton>
                <IconTextButton fillMode="flat" themeColor="primary" icon="comment" rounded="full" selected>Output</IconTextButton>
                <IconButton fillMode="flat" themeColor="primary" icon="more-horizontal" rounded="full"></IconButton>
            </Toolbar>
        </PromptHeader>
        <PromptContent>
            <PromptStopFloatingActionButton />
            <PromptView>
                <div className="k-card-list">
                    <Card>
                        <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
                        <CardBody>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </CardBody>
                        <ActionButtons className="k-card-actions" alignment="start">
                            <IconTextButton fillMode="flat" themeColor="primary" icon="copy">Copy</IconTextButton>
                            <IconTextButton fillMode="flat" icon="arrow-rotate-cw">Retry</IconTextButton>
                            <IconButton fillMode="flat" themeColor="primary" icon="more-horizontal"></IconButton>
                            <span className="k-spacer"></span>
                            <IconButton fillMode="flat" icon="thumb-up-outline"></IconButton>
                            <IconButton fillMode="flat" icon="thumb-down-outline"></IconButton>
                        </ActionButtons>
                    </Card>

                    <Card>
                        <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
                        <CardBody>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </CardBody>
                        <ActionButtons className="k-card-actions" alignment="start">
                            <IconTextButton fillMode="flat" themeColor="primary" icon="copy">Copy</IconTextButton>
                            <IconTextButton fillMode="flat" icon="arrow-rotate-cw">Retry</IconTextButton>
                            <IconButton fillMode="flat" themeColor="primary" icon="more-horizontal"></IconButton>
                            <span className="k-spacer"></span>
                            <IconButton fillMode="flat" icon="thumb-up-outline"></IconButton>
                            <IconButton fillMode="flat" icon="thumb-down-outline"></IconButton>
                        </ActionButtons>
                    </Card>
                </div>
            </PromptView>
        </PromptContent>
    </Prompt>
);
