import { EditorContent, EditorToolbar, EditorNormal } from '../../editor';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { ColorPicker } from '../../colorpicker';
import { DropdownList } from '../../dropdownlist';
import { ToolbarItem } from '../../toolbar';
import { Popup } from '../../popup';


const styles = `
    .k-editor .k-dialog-wrapper {
        position: static;
    }
    /* needed for test */
    .k-editor-content > .ProseMirror {
        white-space: normal;
    }
    .k-animation-container {
        width: 166px;
        height: 254px;
        overflow: visible;
        display: inline-block;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Editor with iFrame; responsive toolbar</span>
            <span>Editor without iFrame; responsive toolbar</span>
            <section>
                <EditorNormal style={{ height: "300px" }}/>
            </section>
            <section>
                <EditorNormal style={{ height: "300px" }}>
                    <EditorToolbar resizable>
                        <ButtonGroup>
                            <Button className="k-group-start" icon="undo"></Button>
                            <Button className="k-group-end" icon="redo"></Button>
                        </ButtonGroup>
                        <Button icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded={null}></Button>
                    </EditorToolbar>
                    <EditorContent>
                        <div className="ProseMirror">
                            <p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="selectedCell">cell 1</td>
                                            <td>cell 2</td>
                                            <td>cell 3</td>
                                        </tr>
                                        <tr>
                                            <td>cell 4</td>
                                            <td>cell 5</td>
                                            <td>cell 6</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
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
                </EditorNormal>
            </section>

            <span>Editor with iFrame; NO-responsive toolbar</span>
            <span>Readonly Editor without iFrame; NO-responsive toolbar</span>
            <section>
                <EditorNormal style={{ height: "350px" }}>
                    <EditorToolbar>
                        <ButtonGroup>
                            <Button className="k-group-start" icon="bold"></Button>
                            <Button icon="italic"></Button>
                            <Button icon="underline"></Button>
                            <Button className="k-group-end" icon="strikethrough"></Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button className="k-group-start" icon="subscript"></Button>
                            <Button className="k-group-end" icon="supscript"></Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button className="k-group-start" icon="align-left"></Button>
                            <Button icon="align-center"></Button>
                            <Button icon="align-right"></Button>
                            <Button className="k-group-end" icon="align-justify"></Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button className="k-group-start" icon="indent"></Button>
                            <Button className="k-group-end" icon="outdent"></Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button className="k-group-start" icon="list-ordered"></Button>
                            <Button className="k-group-end" icon="list-unordered"></Button>
                        </ButtonGroup>
                        <ToolbarItem>
                            <DropdownList value="Font Size" />
                        </ToolbarItem>
                        <ToolbarItem>
                            <DropdownList value="Font Name" />
                        </ToolbarItem>
                        <ToolbarItem>
                            <DropdownList value="Paragraph" />
                        </ToolbarItem>
                        <ButtonGroup>
                            <Button className="k-group-start" icon="undo"></Button>
                            <Button className="k-group-end" icon="redo"></Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button className="k-group-start" icon="link"></Button>
                            <Button icon="unlink"></Button>
                            <Button icon="image"></Button>
                            <Button className="k-group-end" icon="code"></Button>
                        </ButtonGroup>
                        <Button icon="table-add"></Button>
                        <ButtonGroup>
                            <Button className="k-group-start" icon="table-row-insert-above"></Button>
                            <Button icon="table-row-insert-below"></Button>
                            <Button icon="table-column-insert-left"></Button>
                            <Button className="k-group-end" icon="table-column-insert-right"></Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button className="k-group-start" icon="table-row-delete"></Button>
                            <Button icon="table-column-delete"></Button>
                            <Button className="k-group-end" icon="table-delete"></Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button className="k-group-start" icon="cells-merge"></Button>
                            <Button className="k-group-end" icon="cell-split-horizontally"></Button>
                        </ButtonGroup>
                        <ToolbarItem>
                            <ColorPicker value="red" valueIconName="foreground-color" />
                        </ToolbarItem>
                        <ToolbarItem>
                            <ColorPicker value="fuchsia" valueIconName="droplet" />
                        </ToolbarItem>
                        <Button icon="clear-css"></Button>
                    </EditorToolbar>
                    <EditorContent focus>
                        <iframe className="k-iframe" frameBorder="0" src="editor-iFrameContent.html"></iframe>
                    </EditorContent>
                </EditorNormal>
            </section>

            <section>
                <EditorNormal readonly style={{ height: "350px" }}>
                    <EditorToolbar>
                        <ButtonGroup disabled>
                            <Button className="k-group-start" icon="bold" disabled></Button>
                            <Button icon="italic" disabled></Button>
                            <Button icon="underline" disabled></Button>
                            <Button className="k-group-end" icon="strikethrough" disabled></Button>
                        </ButtonGroup>
                        <ButtonGroup disabled>
                            <Button className="k-group-start" icon="subscript" disabled></Button>
                            <Button className="k-group-end" icon="supscript" disabled></Button>
                        </ButtonGroup>
                        <ButtonGroup disabled>
                            <Button className="k-group-start" icon="align-left" disabled></Button>
                            <Button icon="align-center" disabled></Button>
                            <Button icon="align-right" disabled></Button>
                            <Button className="k-group-end" icon="align-justify" disabled></Button>
                        </ButtonGroup>
                        <ButtonGroup disabled>
                            <Button className="k-group-start" icon="indent" disabled></Button>
                            <Button className="k-group-end" icon="outdent" disabled></Button>
                        </ButtonGroup>
                        <ButtonGroup disabled>
                            <Button className="k-group-start" icon="list-ordered" disabled></Button>
                            <Button className="k-group-end" icon="list-unordered" disabled></Button>
                        </ButtonGroup>
                        <ToolbarItem>
                            <DropdownList value="Font Size" disabled />
                        </ToolbarItem>
                        <ToolbarItem>
                            <DropdownList value="Font Name" disabled />
                        </ToolbarItem>
                        <ToolbarItem>
                            <DropdownList value="Paragraph" disabled />
                        </ToolbarItem>
                        <ButtonGroup disabled>
                            <Button className="k-group-start" icon="undo" disabled></Button>
                            <Button className="k-group-end" icon="redo" disabled></Button>
                        </ButtonGroup>
                        <ButtonGroup disabled>
                            <Button className="k-group-start" icon="link" disabled></Button>
                            <Button icon="unlink" disabled></Button>
                            <Button icon="image" disabled></Button>
                            <Button className="k-group-end" icon="code" disabled></Button>
                        </ButtonGroup>
                        <Button icon="table-add" disabled />
                        <ButtonGroup disabled>
                            <Button className="k-group-start" icon="table-row-insert-below" disabled></Button>
                            <Button icon="table-column-insert-left" disabled></Button>
                            <Button className="k-group-end" icon="table-column-insert-right" disabled></Button>
                        </ButtonGroup>
                        <ButtonGroup disabled>
                            <Button className="k-group-start" icon="table-row-delete" disabled></Button>
                            <Button icon="table-column-delete" disabled></Button>
                            <Button className="k-group-end" icon="table-delete" disabled></Button>
                        </ButtonGroup>
                        <ButtonGroup disabled>
                            <Button className="k-group-start" icon="cells-merge" disabled></Button>
                            <Button className="k-group-end" icon="cell-split-horizontally" disabled></Button>
                        </ButtonGroup>
                        <ToolbarItem>
                            <ColorPicker value="red" valueIconName="foreground-color" disabled />
                        </ToolbarItem>
                        <ToolbarItem>
                            <ColorPicker value="fuchsia" valueIconName="droplet" disabled />
                        </ToolbarItem>
                        <Button icon="clear-css" disabled />
                    </EditorToolbar>
                    <EditorContent focus>
                        <div className="ProseMirror"><p>The Editor allows your users to edit HTML in a familiar, user-friendly way.</p><p>In this version, the Editor provides the core HTML editing engine which includes basic text formatting, hyperlinks, and lists. The widget <strong>outputs identical HTML</strong> across all major browsers, follows accessibility standards, and provides API for content manipulation.</p><p>Features include:</p><ul><li>Text formatting</li><li>Bulleted and numbered lists</li><li>Hyperlinks</li><li>Cross-browser support</li><li>Identical HTML output across browsers</li></ul></div>
                    </EditorContent>
                </EditorNormal>
            </section>

            <span>Table Wizard</span>
            <span></span>
            <section>
                <Popup className="k-ct-popup k-group k-reset" style={{ display: "block", position: "absolute", width: '100%' }}>
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
                </Popup>
            </section>

        </div>
    </>
);
