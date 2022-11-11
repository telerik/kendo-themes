import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { ColorPicker } from '../../colorpicker';
import { DropdownList } from '../../dropdownlist';
import { Editor } from '..';
import { EditorContent } from '../editor-content';
import { EditorToolbar } from '../editor-toolbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-editor .k-dialog-wrapper {
        position: static;
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
            <span>Editor with iFrame; responsive toolbar</span>
            <span>Editor without iFrame; responsive toolbar</span>
            <section>
                <Editor style={{ height: "200px" }}>
                    <EditorToolbar resizable>
                        <ButtonGroup>
                            <Button icon="undo"></Button>
                            <Button icon="redo"></Button>
                        </ButtonGroup>
                        <Button icon="more-vertical" className="k-overflow-anchor" fillMode="flat" rounded={null}></Button>
                    </EditorToolbar>
                    <EditorContent>
                        <iframe className="k-iframe" frameBorder="0" src="editor-iFrameContent.html"></iframe>
                    </EditorContent>
                </Editor>
            </section>
            <section>
                <Editor style={{ height: "200px" }}>
                    <EditorToolbar resizable>
                        <ButtonGroup>
                            <Button icon="undo"></Button>
                            <Button icon="redo"></Button>
                        </ButtonGroup>
                        <Button icon="more-vertical" className="k-overflow-anchor" fillMode="flat" rounded={null}></Button>
                    </EditorToolbar>
                    <EditorContent>
                        <div className="ProseMirror">
                            <div style={{ position: "relative" }}>
                                <img className="ProseMirror-selectednode" src="/packages/html/assets/avatar.jpg" />
                                <div className="k-editor-resize-handles-wrapper ProseMirror-widget" style={{ width: "100px", height: "110px", top: "0", left: "0" }}>
                                    <div className="k-editor-resize-handle southeast"></div>
                                    <div className="k-editor-resize-handle east"></div>
                                    <div className="k-editor-resize-handle south"></div>
                                    <div className="k-editor-resize-handle north"></div>
                                    <div className="k-editor-resize-handle west"></div>
                                    <div className="k-editor-resize-handle southwest"></div>
                                    <div className="k-editor-resize-handle northwest"></div>
                                    <div className="k-editor-resize-handle northeast"></div>
                                </div>
                            </div>
                            <p>The Kendo UI Angular Editor allows your users to edit HTML in a familiar, user-friendly way.</p>
                            <p>In this version, the Editor provides the core HTML editing engine which includes basic text formatting, hyperlinks, and lists. The widget <strong>outputs identical HTML</strong> across all major browsers, follows accessibility standards, and provides API for content manipulation.</p><p>Features include:</p><ul><li>Text formatting</li><li>Bulleted and numbered lists</li><li>Hyperlinks</li><li>Cross-browser support</li><li>Identical HTML output across browsers</li></ul>
                        </div>
                    </EditorContent>
                </Editor>
            </section>

            <span>Editor with iFrame; NO-responsive toolbar</span>
            <span>Readonly Editor without iFrame; NO-responsive toolbar</span>
            <section>
                <Editor style={{ height: "400px" }}>
                    <EditorToolbar>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="bold"></Button>
                                <Button icon="italic"></Button>
                                <Button icon="underline"></Button>
                                <Button icon="strikethrough"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="subscript"></Button>
                                <Button icon="superscript"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="align-left"></Button>
                                <Button icon="align-center"></Button>
                                <Button icon="align-right"></Button>
                                <Button icon="align-justify"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="indent-increase"></Button>
                                <Button icon="indent-decrease"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="list-ordered"></Button>
                                <Button icon="list-unordered"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <DropdownList value="Font Size" />
                        </div>
                        <div className="k-tool-group">
                            <DropdownList value="Font Name" />
                        </div>
                        <div className="k-tool-group">
                            <DropdownList value="Paragraph" />
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="undo"></Button>
                                <Button icon="redo"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="link-horizontal"></Button>
                                <Button icon="unlink-horizontal"></Button>
                                <Button icon="image"></Button>
                                <Button icon="html"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="table-insert"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="table-row-insert-above"></Button>
                                <Button icon="table-row-insert-below"></Button>
                                <Button icon="table-column-insert-left"></Button>
                                <Button icon="table-column-insert-right"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="table-row-delete"></Button>
                                <Button icon="table-column-delete"></Button>
                                <Button icon="table-delete"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="cells-merge"></Button>
                                <Button icon="cell-split-horizontally"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <ColorPicker value="red" valueIconName="foreground-color" />
                        </div>
                        <div className="k-tool-group">
                            <ColorPicker value="fuchsia" valueIconName="paint" />
                        </div>
                        <div className="k-tool-group">
                            <Button icon="clear-css"></Button>
                        </div>
                    </EditorToolbar>
                    <EditorContent focus>
                        <iframe className="k-iframe" frameBorder="0" src="editor-iFrameContent.html"></iframe>
                    </EditorContent>
                </Editor>
            </section>

            <section>
                <Editor readonly style={{ height: "400px" }}>
                    <EditorToolbar>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="bold"></Button>
                                <Button icon="italic"></Button>
                                <Button icon="underline"></Button>
                                <Button icon="strikethrough"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="subscript"></Button>
                                <Button icon="superscript"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="align-left"></Button>
                                <Button icon="align-center"></Button>
                                <Button icon="align-right"></Button>
                                <Button icon="align-justify"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="indent-increase"></Button>
                                <Button icon="indent-decrease"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="list-ordered"></Button>
                                <Button icon="list-unordered"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <DropdownList value="Font Size" />
                        </div>
                        <div className="k-tool-group">
                            <DropdownList value="Font Name" />
                        </div>
                        <div className="k-tool-group">
                            <DropdownList value="Paragraph" />
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="undo"></Button>
                                <Button icon="redo"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="link-horizontal"></Button>
                                <Button icon="unlink-horizontal"></Button>
                                <Button icon="image"></Button>
                                <Button icon="html"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="table-insert"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="table-row-insert-above"></Button>
                                <Button icon="table-row-insert-below"></Button>
                                <Button icon="table-column-insert-left"></Button>
                                <Button icon="table-column-insert-right"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="table-row-delete"></Button>
                                <Button icon="table-column-delete"></Button>
                                <Button icon="table-delete"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="cells-merge"></Button>
                                <Button icon="cell-split-horizontally"></Button>
                            </div>
                        </div>
                        <div className="k-tool-group">
                            <ColorPicker value="red" valueIconName="foreground-color" />
                        </div>
                        <div className="k-tool-group">
                            <ColorPicker value="fuchsia" valueIconName="paint" />
                        </div>
                        <div className="k-tool-group">
                            <Button icon="clear-css"></Button>
                        </div>
                    </EditorToolbar>
                    <EditorContent focus>
                        <div className="ProseMirror"><p>The Editor allows your users to edit HTML in a familiar, user-friendly way.</p><p>In this version, the Editor provides the core HTML editing engine which includes basic text formatting, hyperlinks, and lists. The widget <strong>outputs identical HTML</strong> across all major browsers, follows accessibility standards, and provides API for content manipulation.</p><p>Features include:</p><ul><li>Text formatting</li><li>Bulleted and numbered lists</li><li>Hyperlinks</li><li>Cross-browser support</li><li>Identical HTML output across browsers</li></ul></div>
                    </EditorContent>
                </Editor>
            </section>

            <span>Table Wizard</span>
            <span></span>
            <section>
                <div className="k-animation-container" style={{ width: "166px", height: "254px", overflow: "visible", display: "inline-block", position: "relative" }}>
                    <div className="k-ct-popup k-popup k-group k-reset" style={{ display: "block", position: "absolute", width: '100%' }}>
                        <span className="k-ct-cell k-disabled k-selected"></span>
                        <span className="k-ct-cell k-disabled k-selected"></span>
                        <span className="k-ct-cell k-disabled k-selected"></span>
                        <span className="k-ct-cell k-disabled k-selected"></span>
                        <span className="k-ct-cell k-disabled k-selected"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled k-selected"></span>
                        <span className="k-ct-cell k-disabled k-selected"></span>
                        <span className="k-ct-cell k-disabled k-selected"></span>
                        <span className="k-ct-cell k-disabled k-selected"></span>
                        <span className="k-ct-cell k-disabled k-selected"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled k-selected"></span>
                        <span className="k-ct-cell k-disabled k-selected"></span>
                        <span className="k-ct-cell k-disabled k-selected"></span>
                        <span className="k-ct-cell k-disabled k-selected"></span>
                        <span className="k-ct-cell k-disabled k-selected"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <span className="k-ct-cell k-disabled"></span>
                        <div className="k-status">Create a 3 x 5 table</div>
                        <div>
                            <Button icon="table-wizard">Table Wizard</Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
