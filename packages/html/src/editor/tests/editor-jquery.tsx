import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { ColorPicker } from '../../colorpicker';
import { Combobox } from '../../combobox';
import { DropdownList } from '../../dropdownlist';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-editor-toolbar .k-overflow-anchor {
        position: absolute;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>jQuery Editor with iFrame; responsive toolbar</span>
            <span>jQuery Editor without iFrame; responsive toolbar</span>

            <section>
                <table cellSpacing="0" cellPadding="0" className="k-widget k-editor k-resizable" style={{ height: "100px" }}>
                    <tbody>
                        <tr>
                            <td className="k-editor-toolbar-wrap">
                                <div className="k-toolbar k-editor-toolbar k-toolbar-resizable">
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="bold"></Button>
                                        <Button icon="italic"></Button>
                                        <Button icon="underline"></Button>
                                        <Button icon="strikethrough"></Button>
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="align-left"></Button>
                                        <Button icon="align-center"></Button>
                                        <Button icon="align-right"></Button>
                                        <Button icon="align-justify"></Button>
                                    </div>
                                    <Button icon="more-vertical" className="k-overflow-anchor" fillMode="flat" rounded={null}></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="k-editor-content k-editable-area">
                                <iframe src="editor-iFrameContent.html" frameBorder="0" className="k-iframe"></iframe>
                                <div className="k-resize-handle"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <table cellSpacing="0" cellPadding="0" className="k-widget k-editor k-resizable" style={{ height: "100px" }}>
                    <tbody>
                        <tr>
                            <td className="k-editor-toolbar-wrap">
                                <div className="k-toolbar k-editor-toolbar k-toolbar-resizable">
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="bold"></Button>
                                        <Button icon="italic"></Button>
                                        <Button icon="underline"></Button>
                                        <Button icon="strikethrough"></Button>
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="align-left"></Button>
                                        <Button icon="align-center"></Button>
                                        <Button icon="align-right"></Button>
                                        <Button icon="align-justify"></Button>
                                    </div>
                                    <Button icon="more-vertical" className="k-overflow-anchor" fillMode="flat" rounded={null}></Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="k-editor-content k-editable-area">
                                <iframe frameBorder="0" className="k-iframe"></iframe>
                                <div className="k-resize-handle"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <span>jQuery Editor with iFrame; NO-responsive toolbar</span>
            <span>jQuery Editor without iFrame; NO-responsive toolbar</span>
            <section>
                <table cellSpacing="0" cellPadding="0" className="k-widget k-editor k-resizable" style={{ height: "100px" }}>
                    <tbody>
                        <tr>
                            <td className="k-editor-toolbar-wrap">
                                <div className="k-toolbar k-editor-toolbar">
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="bold"></Button>
                                        <Button icon="italic"></Button>
                                        <Button icon="underline"></Button>
                                        <Button icon="strikethrough"></Button>
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="align-left"></Button>
                                        <Button icon="align-center"></Button>
                                        <Button icon="align-right"></Button>
                                        <Button icon="align-justify"></Button>
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="sub-script"></Button>
                                        <Button icon="sup-script"></Button>
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="list-unordered"></Button>
                                        <Button icon="list-ordered"></Button>
                                        <Button icon="indent-increase"></Button>
                                        <Button icon="indent-decrease"></Button>
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="link-horizontal"></Button>
                                        <Button icon="unlink-horizontal"></Button>
                                        <Button icon="image"></Button>
                                        <Button icon="file-add"></Button>
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="table-properties"></Button>
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="table-insert"></Button>
                                        <Button icon="table-column-insert-left"></Button>
                                        <Button icon="table-column-insert-right"></Button>
                                        <Button icon="table-row-insert-above"></Button>
                                        <Button icon="table-row-insert-below"></Button>
                                        <Button icon="table-row-delete"></Button>
                                        <Button icon="table-column-delete"></Button>
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="html"></Button>
                                        <Button icon="print"></Button>
                                    </div>
                                    <div className="k-tool-group k-toolbar-group">
                                        <ColorPicker value="red" valueIconName="foreground-color" />
                                        <ColorPicker value="fuchsia" valueIconName="paint" />
                                    </div>
                                    <div className="k-tool-group">
                                        <DropdownList value="Format" />
                                    </div>
                                    <div className="k-tool-group k-toolbar-group">
                                        <Combobox placeholder="Font family..." className="k-editor-widget k-fontName" />
                                        <Combobox placeholder="Font size..." className="k-editor-widget k-fontSize" />
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="clear-css"></Button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="k-editor-content k-editable-area">
                                <iframe src="editor-iFrameContent.html" frameBorder="0" className="k-iframe"></iframe>
                                <div className="k-resize-handle"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <table cellSpacing="0" cellPadding="0" className="k-widget k-editor k-resizable" style={{ height: "100px" }}>
                    <tbody>
                        <tr>
                            <td className="k-editor-toolbar-wrap">
                                <div className="k-toolbar k-editor-toolbar">
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="bold"></Button>
                                        <Button icon="italic"></Button>
                                        <Button icon="underline"></Button>
                                        <Button icon="strikethrough"></Button>
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="align-left"></Button>
                                        <Button icon="align-center"></Button>
                                        <Button icon="align-right"></Button>
                                        <Button icon="align-justify"></Button>
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="sub-script"></Button>
                                        <Button icon="sup-script"></Button>
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="list-unordered"></Button>
                                        <Button icon="list-ordered"></Button>
                                        <Button icon="indent-increase"></Button>
                                        <Button icon="indent-decrease"></Button>
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="link-horizontal"></Button>
                                        <Button icon="unlink-horizontal"></Button>
                                        <Button icon="image"></Button>
                                        <Button icon="file-add"></Button>
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="table-properties"></Button>
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="table-insert"></Button>
                                        <Button icon="table-column-insert-left"></Button>
                                        <Button icon="table-column-insert-right"></Button>
                                        <Button icon="table-row-insert-above"></Button>
                                        <Button icon="table-row-insert-below"></Button>
                                        <Button icon="table-row-delete"></Button>
                                        <Button icon="table-column-delete"></Button>
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="html"></Button>
                                        <Button icon="print"></Button>
                                    </div>
                                    <div className="k-tool-group k-toolbar-group">
                                        <ColorPicker value="red" valueIconName="foreground-color" />
                                        <ColorPicker value="fuchsia" valueIconName="paint" />
                                    </div>
                                    <div className="k-tool-group">
                                        <DropdownList value="Format" />
                                    </div>
                                    <div className="k-tool-group k-toolbar-group">
                                        <Combobox placeholder="Font family..." className="k-editor-widget k-fontName" />
                                        <Combobox placeholder="Font size..." className="k-editor-widget k-fontSize" />
                                    </div>
                                    <div className="k-tool-group k-button-group">
                                        <Button icon="clear-css"></Button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="k-editor-content k-editable-area">
                                <iframe frameBorder="0" className="k-iframe"></iframe>
                                <div className="k-resize-handle"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
