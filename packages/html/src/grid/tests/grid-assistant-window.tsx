import { Button, IconButton, IconTextButton } from "../../button";
import { WindowNormal } from "../../window";
import { Prompt, PromptContent, PromptExpander, PromptFooter, PromptHeader, PromptStopFloatingActionButton, PromptView } from "../../prompt";
import { Toolbar } from "../../toolbar";
import { ActionButtons } from "../../action-buttons";
import { Suggestion, SuggestionGroup } from "../../suggestion";
import { SpeechToTextButton } from "../../speech-to-text-button";
import { Textarea } from "../../textarea";
import { Card, CardHeader, CardBody } from "../../card";
import { Skeleton, SkeletonRectangle } from "../../skeleton";

const styles = `

    .k-window {
        width: 437px;
        position: relative;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <span>Ask AI normal</span>
                <WindowNormal className="k-grid-assistant-window" actions={[ 'window-minimize', 'window', 'x' ]} title="AI Assistant">
                    <Prompt>
                        <PromptHeader>
                            <Toolbar fillMode="flat">
                                <IconTextButton fillMode="flat" themeColor="primary" icon="sparkles" rounded="full" selected>Ask AI</IconTextButton>
                                <IconTextButton fillMode="flat" themeColor="primary" icon="comment" rounded="full">Output</IconTextButton>
                            </Toolbar>
                        </PromptHeader>
                        <PromptContent>
                            <PromptView>
                                <Textarea
                                    resize="y"
                                    rows={1}
                                    placeholder="Filter, sort, group or highlight with AI..."
                                    suffix={
                                        <>
                                            <SpeechToTextButton fillMode="flat" />
                                            <Button icon="paperclip" fillMode="flat" />
                                        </>
                                    }
                                />
                                <PromptExpander title="Prompt Suggestions">
                                    <SuggestionGroup layout="wrap">
                                        <Suggestion text="Suggestion 1" />
                                        <Suggestion text="Suggestion 2" />
                                        <Suggestion text="Suggestion 3" />
                                    </SuggestionGroup>
                                </PromptExpander>
                            </PromptView>
                        </PromptContent>
                        <PromptFooter>
                            <ActionButtons className="k-prompt-actions" alignment="start">
                                <IconTextButton disabled icon="table-wizard" themeColor="primary" rounded="full">Apply</IconTextButton>
                            </ActionButtons>
                        </PromptFooter>
                    </Prompt>
                </WindowNormal >
            </section>

            <section>
                <span>Ask AI with Suggestions</span>
                <WindowNormal className="k-grid-assistant-window" actions={[ 'window-minimize', 'window', 'x' ]} title="AI Assistant">
                    <Prompt>
                        <PromptHeader>
                            <Toolbar fillMode="flat">
                                <IconTextButton fillMode="flat" themeColor="primary" icon="sparkles" rounded="full" selected>Ask AI</IconTextButton>
                                <IconTextButton fillMode="flat" themeColor="primary" icon="comment" rounded="full">Output</IconTextButton>
                            </Toolbar>
                        </PromptHeader>
                        <PromptContent>
                            <PromptView>
                                <Textarea
                                    resize="y"
                                    rows={1}
                                    placeholder="Filter, sort, group or highlight with AI..."
                                    suffix={
                                        <>
                                            <SpeechToTextButton fillMode="flat" />
                                            <Button icon="paperclip" fillMode="flat" />
                                        </>
                                    }
                                />
                                <PromptExpander expanded title="Prompt Suggestions">
                                    <SuggestionGroup layout="wrap">
                                        <Suggestion text="Suggestion 1" />
                                        <Suggestion text="Suggestion 2" />
                                        <Suggestion text="Suggestion 3" />
                                    </SuggestionGroup>
                                </PromptExpander>
                            </PromptView>
                        </PromptContent>
                        <PromptFooter>
                            <ActionButtons className="k-prompt-actions" alignment="start">
                                <IconTextButton disabled icon="table-wizard" themeColor="primary" rounded="full">Apply</IconTextButton>
                            </ActionButtons>
                        </PromptFooter>
                    </Prompt>
                </WindowNormal >
            </section>

            <section>
                <span>Ask AI with Textarea value</span>
                <WindowNormal className="k-grid-assistant-window" actions={[ 'window-minimize', 'window', 'x' ]} title="AI Assistant">
                    <Prompt>
                        <PromptHeader>
                            <Toolbar fillMode="flat">
                                <IconTextButton fillMode="flat" themeColor="primary" icon="sparkles" rounded="full" selected>Ask AI</IconTextButton>
                                <IconTextButton fillMode="flat" themeColor="primary" icon="comment" rounded="full">Output</IconTextButton>
                            </Toolbar>
                        </PromptHeader>
                        <PromptContent>
                            <PromptView>
                                <Textarea
                                    resize="y"
                                    rows={1}
                                    value="Group employees based on birthday date"
                                    placeholder="Filter, sort, group or highlight with AI..."
                                    suffix={
                                        <>
                                            <SpeechToTextButton fillMode="flat" />
                                            <Button icon="paperclip" fillMode="flat" />
                                        </>
                                    }
                                />
                                <PromptExpander title="Prompt Suggestions">
                                    <SuggestionGroup layout="wrap">
                                        <Suggestion text="Suggestion 1" />
                                        <Suggestion text="Suggestion 2" />
                                        <Suggestion text="Suggestion 3" />
                                    </SuggestionGroup>
                                </PromptExpander>
                            </PromptView>
                        </PromptContent>
                        <PromptFooter>
                            <ActionButtons className="k-prompt-actions" alignment="start">
                                <IconTextButton icon="table-wizard" themeColor="primary" rounded="full">Apply</IconTextButton>
                            </ActionButtons>
                        </PromptFooter>
                    </Prompt>
                </WindowNormal >
            </section>

            <section>
                <span>Output Loading</span>
                <WindowNormal className="k-grid-assistant-window" actions={[ 'window-minimize', 'window', 'x' ]} title="AI Assistant">
                    <Prompt>
                        <PromptHeader>
                            <Toolbar fillMode="flat">
                                <IconTextButton fillMode="flat" themeColor="primary" icon="sparkles" rounded="full">Ask AI</IconTextButton>
                                <IconTextButton fillMode="flat" themeColor="primary" icon="comment" rounded="full" selected >Output</IconTextButton>
                            </Toolbar>
                        </PromptHeader>
                        <PromptContent>
                            <PromptStopFloatingActionButton />
                            <PromptView>
                                <div className="k-card-list">
                                    <Card>
                                        <CardHeader title={<Skeleton style={{ width: '200px' }} />} subtitle={<Skeleton style={{ width: '100%' }} />}></CardHeader>
                                        <CardBody>
                                            <SkeletonRectangle style={{ height: '80px' }} />
                                        </CardBody>
                                        <ActionButtons className="k-card-actions" alignment="start">
                                            <Skeleton style={{ width: '100%' }} />
                                        </ActionButtons>
                                    </Card>
                                </div>
                            </PromptView>
                        </PromptContent>
                    </Prompt>
                </WindowNormal >
            </section>

            <section>
                <span>Output Normal</span>
                <WindowNormal className="k-grid-assistant-window" actions={[ 'window-minimize', 'window', 'x' ]} title="AI Assistant">
                    <Prompt>
                        <PromptHeader>
                            <Toolbar fillMode="flat">
                                <IconTextButton fillMode="flat" themeColor="primary" icon="sparkles" rounded="full">Ask AI</IconTextButton>
                                <IconTextButton fillMode="flat" themeColor="primary" icon="comment" rounded="full" selected >Output</IconTextButton>
                            </Toolbar>
                        </PromptHeader>
                        <PromptContent>
                            <PromptView>
                                <div className="k-card-list">
                                    <Card>
                                        <CardHeader title="Generated with AI" subtitle="Group employees based on birthday date"></CardHeader>
                                        <CardBody>
                                            <p>Operation is successful. Data is: ...</p>
                                        </CardBody>
                                        <ActionButtons className="k-card-actions" alignment="start">
                                            <IconTextButton fillMode="flat" themeColor="primary" icon="copy">Copy</IconTextButton>
                                            <IconTextButton fillMode="flat" themeColor="base" icon="arrow-rotate-cw">Retry</IconTextButton>
                                            <span className="k-spacer"></span>
                                            <IconButton fillMode="flat" themeColor="base" icon="thumb-up-outline"></IconButton>
                                            <IconButton fillMode="flat" themeColor="base" icon="thumb-down-outline"></IconButton>
                                        </ActionButtons>
                                    </Card>
                                </div>
                            </PromptView>
                        </PromptContent>
                    </Prompt>
                </WindowNormal >
            </section>

            <section>
                <span>Output Error</span>
                <WindowNormal className="k-grid-assistant-window" actions={[ 'window-minimize', 'window', 'x' ]} title="AI Assistant">
                    <Prompt>
                        <PromptHeader>
                            <Toolbar fillMode="flat">
                                <IconTextButton fillMode="flat" themeColor="primary" icon="sparkles" rounded="full">Ask AI</IconTextButton>
                                <IconTextButton fillMode="flat" themeColor="primary" icon="comment" rounded="full" selected >Output</IconTextButton>
                            </Toolbar>
                        </PromptHeader>
                        <PromptContent>
                            <PromptView>
                                <div className="k-card-list">
                                    <Card>
                                        <CardHeader title="Generated with AI" subtitle="Group employees based on birthday date"></CardHeader>
                                        <CardBody>
                                            <p className="k-text-error">Operation is not successful. Error: ...</p>
                                        </CardBody>
                                        <ActionButtons className="k-card-actions" alignment="start">
                                            <IconTextButton fillMode="flat" themeColor="primary" icon="copy">Copy</IconTextButton>
                                            <IconTextButton fillMode="flat" themeColor="base" icon="arrow-rotate-cw">Retry</IconTextButton>
                                            <span className="k-spacer"></span>
                                            <IconButton fillMode="flat" themeColor="base" icon="thumb-up-outline"></IconButton>
                                            <IconButton fillMode="flat" themeColor="base" icon="thumb-down-outline"></IconButton>
                                        </ActionButtons>
                                    </Card>
                                </div>
                            </PromptView>
                        </PromptContent>
                    </Prompt>
                </WindowNormal >
            </section>
        </div>
    </>
);
