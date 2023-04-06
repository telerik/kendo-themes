import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Textbox } from '../../textbox';
import { Editor, EditorContent, EditorToolbar } from '../../editor';
import { Window } from '../../window';
import { ButtonGroup } from '../../button-group';
import { Form, FormField } from '../../form';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-window {
        width: 100%;
        position: relative;
    }
    .k-form-label {
        align-items: flex-start !important;
    }
    /* needed for test */
    .k-editor-content > .ProseMirror {
        white-space: normal;
    }
    .k-form-horizontal .k-form-field:nth-child(3) .k-form-field-wrap {
        max-width: initial;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Find Window</span>
            <span>Replace Window</span>

            <section>
                <Window title="Find and Replace" actions={[ 'close' ]}>
                    <div className="k-tabstrip k-tabstrip-top k-editor-find-replace">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-tabstrip-items k-reset">
                                <li className="k-item k-active k-tab-on-top">
                                    <span className="k-link">Find</span>
                                </li>
                                <li className="k-item">
                                    <span className="k-link">Replace</span>
                                </li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
                            <Form tag="div" orientation="horizontal">
                                <FormField label="Find What:" editor={<Textbox showClearButton={false} value="editor" />} />
                                <FormField editor={
                                    <div className="k-search-options k-checkbox-list">
                                        <span className="k-checkbox-list-item">
                                            <Checkbox />
                                            <label className="k-checkbox-label">Match case</label>
                                        </span>
                                        <span className="k-checkbox-list-item">
                                            <Checkbox />
                                            <label className="k-checkbox-label">Match whole word only</label>
                                        </span>
                                        <span className="k-checkbox-list-item">
                                            <Checkbox />
                                            <label className="k-checkbox-label">Match cyclic (Wrap around)</label>
                                        </span>
                                        <span className="k-checkbox-list-item">
                                            <Checkbox />
                                            <label className="k-checkbox-label">Regular Expression</label>
                                        </span>
                                    </div>
                                } />
                                <div className="k-matches-container">
                                    <Button themeColor="primary" fillMode="flat" icon="arrow-chevron-left">Prev</Button>
                                    <span>1 of 3 matches</span>
                                    <Button themeColor="primary" fillMode="flat" icon="arrow-chevron-right">Next</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Window>
            </section>

            <section>
                <Window className="k-editor-window" title="Find and Replace" actions={[ 'close' ]}>
                    <div className="k-tabstrip k-tabstrip-top k-editor-find-replace">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-tabstrip-items k-reset">
                                <li className="k-item">
                                    <span className="k-link">Find</span>
                                </li>
                                <li className="k-item k-active k-tab-on-top">
                                    <span className="k-link">Replace</span>
                                </li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
                            <Form tag="div" orientation="horizontal">
                                <FormField label="Find What:" editor={ <Textbox showClearButton={false} value="editor" /> } />
                                <FormField label="Replace With:" editor={ <Textbox showClearButton={false} value="grid" /> } />
                                <FormField editor={
                                    <ActionButtons alignment="end">
                                        <Button>Replace</Button>
                                        <Button>Replace All</Button>
                                    </ActionButtons>
                                } />
                                <FormField editor={
                                    <div className="k-search-options k-checkbox-list">
                                        <span className="k-checkbox-list-item">
                                            <Checkbox />
                                            <label className="k-checkbox-label">Match case</label>
                                        </span>
                                        <span className="k-checkbox-list-item">
                                            <Checkbox />
                                            <label className="k-checkbox-label">Match whole word only</label>
                                        </span>
                                        <span className="k-checkbox-list-item">
                                            <Checkbox />
                                            <label className="k-checkbox-label">Match cyclic (Wrap around)</label>
                                        </span>
                                        <span className="k-checkbox-list-item">
                                            <Checkbox />
                                            <label className="k-checkbox-label">Regular Expression</label>
                                        </span>
                                    </div>
                                } />
                                <div className="k-matches-container">
                                    <Button themeColor="primary" fillMode="flat" icon="arrow-chevron-left">Prev</Button>
                                    <span>1 of 3 matches</span>
                                    <Button themeColor="primary" fillMode="flat" icon="arrow-chevron-right">Next</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Window>
            </section>


            <span>Text Highlight</span>
            <span></span>

            <section>
                <Editor style={{ height: "150px" }}>
                    <EditorToolbar resizable>
                        <ButtonGroup>
                            <Button icon="bold"></Button>
                            <Button icon="italic"></Button>
                            <Button icon="underline"></Button>
                            <Button icon="find" selected></Button>
                        </ButtonGroup>
                    </EditorToolbar>
                    <EditorContent>
                        <div className="ProseMirror"><span className="k-text-selected">Word</span> and few more <span className="k-text-highlighted">word</span>s. And yet again. <span className="k-text-highlighted">Word</span>.</div>
                    </EditorContent>
                </Editor>
            </section>
        </div>
    </>
);
