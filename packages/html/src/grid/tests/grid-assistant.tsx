import { Grid, GridToolbar, GridHeader, GridHeaderCell, GridHeaderTable, GridContainer, GridContent, GridTable } from "..";
import { TableThead, TableTbody, TableRow, TableTd } from "../../table";
import { Button, IconTextButton } from "../../button";
import { WindowNormal } from "../../window";
import { Prompt, PromptContent, PromptExpander, PromptFooter, PromptHeader, PromptView } from "../../prompt";
import { Toolbar } from "../../toolbar";
import { ActionButtons } from "../../action-buttons";
import { Suggestion, SuggestionGroup } from "../../suggestion";
import { SpeechToTextButton } from "../../speech-to-text-button";
import { Textarea } from "../../textarea";

const styles = `
    .k-grid {
        width: 840px;
    }

    .k-window {
        width: 437px;
        position: relative;
        bottom: 155px;
        left: 39px;
    }

    .k-notification {
        width: 489px;
        position: relative;
        bottom: 70px;
        left: 176px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <section>
                <span>Tool and Window</span>
                <Grid
                    className="k-grid-no-scrollbar"
                    toolbar={
                        <>
                            <GridToolbar>
                                <Button themeColor="primary" rounded="full" icon="sparkles" />
                            </GridToolbar>
                        </>
                    }
                    children={
                        <>
                            <GridHeader>
                                <div className="k-grid-header-wrap">
                                    <GridHeaderTable>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <TableThead>
                                            <TableRow>
                                                <GridHeaderCell columnTitle="Header Name 1"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header Name 2"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header Name 3"></GridHeaderCell>
                                                <GridHeaderCell columnTitle="Header Name 4"></GridHeaderCell>
                                            </TableRow>
                                        </TableThead>
                                    </GridHeaderTable>
                                </div>
                            </GridHeader>
                            <GridContainer>
                                <GridContent>
                                    <GridTable>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow className="k-master-row">
                                                <TableTd>Value 1</TableTd>
                                                <TableTd>Value 1</TableTd>
                                                <TableTd>Value 1</TableTd>
                                                <TableTd>Value 1</TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row" alt>
                                                <TableTd>Value 2</TableTd>
                                                <TableTd>Value 2</TableTd>
                                                <TableTd>Value 2</TableTd>
                                                <TableTd>Value 2</TableTd>
                                            </TableRow>
                                            <TableRow className="k-master-row">
                                                <TableTd>Value 3</TableTd>
                                                <TableTd>Value 3</TableTd>
                                                <TableTd>Value 3</TableTd>
                                                <TableTd>Value 3</TableTd>
                                            </TableRow>
                                        </TableTbody>
                                    </GridTable>
                                </GridContent>
                            </GridContainer>
                        </>
                    }
                />

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
                                <PromptExpander expanded={false} title="Prompt Suggestions">
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
        </div>
    </>
);
