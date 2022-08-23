import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Textbox } from '../../textbox';

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
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Find Dialog</span>
            <span>Replace Dialog</span>

            <section>
                <div className="k-window">
                    <div className="k-window-titlebar">
                        <div className="k-window-title">Find and Replace</div>
                        <div className="k-window-actions">
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-window-content">
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
                                <div className="k-form k-form-horizontal">
                                    <div className="k-form-field">
                                        <div className="k-form-label">
                                            <label>Find What:</label>
                                        </div>
                                        <div className="k-form-field-wrap">
                                            <Textbox showClearButton={false} value="editor" />
                                        </div>
                                    </div>
                                    <div className="k-form-field">
                                        <div className="k-form-field-wrap">
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
                                        </div>
                                    </div>
                                    <div className="k-matches-container">
                                        <Button themeColor="primary" fillMode="flat" icon="arrow-chevron-left">Prev</Button>
                                        <span>1 of 3 matches</span>
                                        <Button themeColor="primary" fillMode="flat" icon="arrow-chevron-right">Next</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-window">
                    <div className="k-window-titlebar">
                        <div className="k-window-title">Find and Replace</div>
                        <div className="k-window-actions">
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-window-content">
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
                                <div className="k-form k-form-horizontal">
                                    <div className="k-form-field">
                                        <div className="k-form-label">
                                            <label>Find What:</label>
                                        </div>
                                        <div className="k-form-field-wrap">
                                            <Textbox showClearButton={false} value="editor" />
                                        </div>
                                    </div>
                                    <div className="k-form-field">
                                        <div className="k-form-label">
                                            <label>Replace With:</label>
                                        </div>
                                        <div className="k-form-field-wrap">
                                            <Textbox showClearButton={false} value="grid" />
                                        </div>
                                    </div>
                                    <div className="k-form-field">
                                        <ActionButtons alignment="end">
                                            <Button>Replace</Button>
                                            <Button>Replace All</Button>
                                        </ActionButtons>
                                    </div>
                                    <div className="k-form-field">
                                        <div className="k-form-field-wrap">
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
                                        </div>
                                    </div>
                                    <div className="k-matches-container">
                                        <Button themeColor="primary" fillMode="flat" icon="arrow-chevron-left">Prev</Button>
                                        <span>1 of 3 matches</span>
                                        <Button themeColor="primary" fillMode="flat" icon="arrow-chevron-right">Next</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <span>Text Highlight</span>
            <span></span>

            <section>
                <div className="k-widget k-editor" style={{ height: "150px" }}>
                    <div className="k-widget k-toolbar">
                        <span className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="bold"></Button>
                                <Button icon="italic"></Button>
                                <Button icon="underline"></Button>
                                <Button icon="find" selected></Button>
                            </div>
                        </span>
                    </div>
                    <div className="k-editor-content"><div className="ProseMirror"><span className="k-text-selected">Word</span> and few more <span className="k-text-highlighted">word</span>s. And yet again. <span className="k-text-highlighted">Word</span>.</div></div>
                </div>
            </section>
        </div>
    </>
);
