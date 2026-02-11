import { Grid } from "../grid.spec";
import { GridToolbar } from "../grid-toolbar.spec";
import { GridHeader } from "../grid-header.spec";
import { GridHeaderCell } from "../grid-header-cell.spec";
import { GridHeaderTable } from "../grid-header-table.spec";
import { GridContainer } from "../grid-container.spec";
import { GridContent } from "../grid-content.spec";
import { GridTable } from "../grid-table.spec";
import { TableThead } from '../../table/table-thead';
import { TableTbody } from '../../table/table-tbody';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';
import { Button } from "../../button/button.spec";
import { IconTextButton } from "../../button/templates/icon-text-button";
import { WindowNormal } from "../../window/templates/window-normal";
import { Prompt } from "../../prompt/prompt.spec";
import { PromptContent } from "../../prompt/prompt-content";
import { PromptExpander } from "../../prompt/prompt-expander";
import { PromptFooter } from "../../prompt/prompt-footer";
import { PromptHeader } from "../../prompt/prompt-header";
import { PromptView } from "../../prompt/prompt-view";
import { Toolbar } from "../../toolbar/toolbar.spec";
import { ActionButtons } from "../../action-buttons/action-buttons.spec";
import { Suggestion } from "../../suggestion/suggestion";
import { SuggestionGroup } from "../../suggestion/suggestion-group.spec";
import { SpeechToTextButton } from "../../speech-to-text-button/speech-to-text-button.spec";
import { Textarea } from "../../textarea/textarea.spec";

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
