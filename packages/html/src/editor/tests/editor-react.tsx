import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { ColorPicker } from '../../colorpicker';
import { DropdownList } from '../../dropdownlist';
import { Toolbar } from '../../toolbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
/* needed for test */
.k-editor-content > .ProseMirror {
    white-space: normal;
}
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>React Editor with iFrame</span>
            <span>React Editor without iFrame</span>
            <section>
                <div className="k-widget k-editor" style={{ height: "400px" }}>
                    <Toolbar className="k-editor-toolbar">
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
                    </Toolbar>
                    <div className="k-editor-content"><iframe frameBorder="0" className="k-iframe" src="editor-iFrameContent.html"></iframe></div>
                </div>
            </section>

            <section>
                <div className="k-widget k-editor" style={{ height: "400px" }}>
                    <Toolbar className="k-editor-toolbar">
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
                            <ColorPicker value="fuchsia" valueIconName="paint"/>
                        </div>
                        <div className="k-tool-group">
                            <Button icon="clear-css"></Button>
                        </div>
                    </Toolbar>
                    <div className="k-editor-content"><div className="ProseMirror"><p>The Kendo React Editor allows your users to edit HTML in a familiar, user-friendly way.</p><p>In this version, the Editor provides the core HTML editing engine which includes basic text formatting, hyperlinks, and lists. The widget <strong>outputs identical HTML</strong> across all major browsers, follows accessibility standards, and provides API for content manipulation.</p><p>Features include:</p><ul><li>Text formatting</li><li>Bulleted and numbered lists</li><li>Hyperlinks</li><li>Cross-browser support</li><li>Identical HTML output across browsers</li></ul></div></div>
                </div>
            </section>

            <section></section>
            <section>
                <div className="k-widget k-editor">
                    <Toolbar className="k-editor-toolbar">
                        <div className="k-tool-group">
                            <div className="k-button-group">
                                <Button icon="bold"></Button>
                                <Button icon="italic"></Button>
                                <Button icon="underline"></Button>
                            </div>
                        </div>
                    </Toolbar>
                    <div className="k-editor-content"><div contentEditable="true" className="ProseMirror"><p data-placeholder="Enter some content ..." className="k-placeholder"><br /></p></div></div>
                </div>
            </section>
        </div>
    </>
);
