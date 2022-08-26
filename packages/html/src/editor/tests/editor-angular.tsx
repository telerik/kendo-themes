import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { DropdownList } from '../../dropdownlist';

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
            <span>Angular Editor with iFrame; responsive toolbar</span>
            <span>Angular Editor without iFrame; responsive toolbar</span>
            <section>
                <div style={{ height: "200px" }} className="k-widget k-editor">
                    <div className="k-editor-toolbar k-toolbar k-toolbar-resizable">
                        <div>
                            <ButtonGroup>
                                <Button icon="undo"></Button>
                                <Button icon="redo"></Button>
                            </ButtonGroup>
                        </div>
                        <Button icon="more-vertical" className="k-overflow-anchor" fillMode="flat" rounded={null}></Button>
                    </div>
                    <div className="k-editor-content">
                        <iframe className="k-iframe" frameBorder="0" src="editor-iFrameContent.html"></iframe>
                    </div>
                </div>
            </section>
            <section>
                <div style={{ height: "200px" }} className="k-widget k-editor">
                    <div className="k-editor-toolbar  k-toolbar k-toolbar-resizable">
                        <div>
                            <ButtonGroup>
                                <Button icon="undo"></Button>
                                <Button icon="redo"></Button>
                            </ButtonGroup>
                        </div>
                        <Button icon="more-vertical" className="k-overflow-anchor" fillMode="flat" rounded={null}></Button>
                    </div>
                    <div className="k-editor-content">
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
                    </div>
                </div>
            </section>

            <span>Angular Editor with iFrame; NO-responsive toolbar</span>
            <span>Angular Editor without iFrame; NO-responsive toolbar</span>
            <section>
                <div className="k-widget k-editor" style={{ height: "200px" }}>
                    <div className="k-editor-toolbar k-toolbar">
                        <div>
                            <ButtonGroup>
                                <Button icon="bold"></Button>
                                <Button icon="italic"></Button>
                                <Button icon="underline"></Button>
                            </ButtonGroup>
                        </div>
                        <div>
                            <DropdownList value="Format" />
                        </div>
                        <div>
                            <ButtonGroup>
                                <Button icon="align-left"></Button>
                                <Button icon="align-center"></Button>
                                <Button icon="align-right"></Button>
                                <Button icon="align-justify"></Button>
                            </ButtonGroup>
                        </div>
                        <div>
                            <ButtonGroup>
                                <Button icon="list-unordered"></Button>
                                <Button icon="list-ordered"></Button>
                                <Button icon="indent-increase"></Button>
                                <Button icon="indent-decrease"></Button>
                            </ButtonGroup>
                        </div>
                        <div>
                            <ButtonGroup>
                                <Button icon="link-horizontal"></Button>
                                <Button icon="unlink-horizontal"></Button>
                            </ButtonGroup>
                        </div>
                        <div>
                            <Button icon="image"></Button>
                        </div>
                    </div>
                    <div className="k-editor-content k-focus">
                        <iframe className="k-iframe" frameBorder="0" src="editor-iFrameContent.html"></iframe>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-editor k-readonly" style={{ height: "200px" }}>
                    <div className="k-editor-toolbar k-toolbar">
                        <div>
                            <ButtonGroup>
                                <Button icon="bold"></Button>
                                <Button icon="italic"></Button>
                                <Button icon="underline"></Button>
                            </ButtonGroup>
                        </div>
                        <div>
                            <DropdownList value="Format" />
                        </div>
                        <div>
                            <ButtonGroup>
                                <Button icon="align-left"></Button>
                                <Button icon="align-center"></Button>
                                <Button icon="align-right"></Button>
                                <Button icon="align-justify"></Button>
                            </ButtonGroup>
                        </div>
                        <div>
                            <ButtonGroup>
                                <Button icon="list-unordered"></Button>
                                <Button icon="list-ordered"></Button>
                                <Button icon="indent-increase"></Button>
                                <Button icon="indent-decrease"></Button>
                            </ButtonGroup>
                        </div>
                        <div>
                            <ButtonGroup>
                                <Button icon="link-horizontal"></Button>
                                <Button icon="unlink-horizontal"></Button>
                            </ButtonGroup>
                        </div>
                        <div>
                            <Button icon="image"></Button>
                        </div>
                    </div>
                    <div className="k-editor-content k-focus"><div className="ProseMirror"><p>The Kendo UI Angular Editor allows your users to edit HTML in a familiar, user-friendly way.</p><p>In this version, the Editor provides the core HTML editing engine which includes basic text formatting, hyperlinks, and lists. The widget <strong>outputs identical HTML</strong> across all major browsers, follows accessibility standards, and provides API for content manipulation.</p><p>Features include:</p><ul><li>Text formatting</li><li>Bulleted and numbered lists</li><li>Hyperlinks</li><li>Cross-browser support</li><li>Identical HTML output across browsers</li></ul></div></div>
                </div>
            </section>

        </div>
    </>
);
