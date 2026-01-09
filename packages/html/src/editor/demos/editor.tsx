import { Editor, KendoEditorProps } from '../editor.spec';
import { EditorNormal } from '../templates/editor-normal';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { DropdownList } from '../../dropdownlist';
import { ToolbarItem } from '../../toolbar';

const options = Editor.options;
const states = Editor.states;
const defaults = Editor.defaultOptions;

const modifiers = [
    {
        name: 'resizable',
        title: 'Resizable',
    },
];
const variants = [];

export const EditorDemo = (props: KendoEditorProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
}
) => {

    const { modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: any = {};

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'resizable':
                additionalProps.resizable = mods?.[modifier] ? true : false;
                break;
            default:
                break;
        }
    });

    return (
        <EditorNormal focus {...other} {...additionalProps} style={{ width: "750px", height: "375px" }}
            toolbarItems={[
                <ButtonGroup>
                    <Button hover icon="bold"></Button>
                    <Button icon="italic"></Button>
                    <Button icon="underline"></Button>
                    <Button icon="strikethrough"></Button>
                </ButtonGroup>,
                <ButtonGroup>
                    <Button icon="subscript"></Button>
                    <Button icon="supscript"></Button>
                </ButtonGroup>,
                <ButtonGroup>
                    <Button icon="align-left"></Button>
                    <Button selected icon="align-center"></Button>
                    <Button icon="align-right"></Button>
                    <Button icon="align-justify"></Button>
                </ButtonGroup>,
                <ButtonGroup>
                    <Button icon="indent"></Button>
                    <Button disabled icon="outdent"></Button>
                </ButtonGroup>,
                <ButtonGroup>
                    <Button icon="list-ordered"></Button>
                    <Button icon="list-unordered"></Button>
                </ButtonGroup>,
                <ToolbarItem>
                    <DropdownList style={{ width: "173px" }} value="Font Size" />
                </ToolbarItem>,
                <ToolbarItem>
                    <DropdownList style={{ width: "173px" }} value="Font Name" />
                </ToolbarItem>,
                <ToolbarItem>
                    <DropdownList style={{ width: "173px" }} value="Paragraph" />
                </ToolbarItem>,
                <Button icon="table-add"></Button>,
                <ButtonGroup>
                    <Button disabled icon="undo"></Button>
                    <Button disabled icon="redo"></Button>
                </ButtonGroup>,
                <ButtonGroup>
                    <Button disabled icon="link"></Button>
                    <Button disabled icon="unlink"></Button>
                    <Button icon="image"></Button>
                    <Button icon="code"></Button>
                </ButtonGroup>,
                <ButtonGroup>
                    <Button disabled icon="table-row-insert-above"></Button>
                    <Button disabled icon="table-row-insert-below"></Button>
                    <Button disabled icon="table-column-insert-left"></Button>
                    <Button disabled icon="table-column-insert-right"></Button>
                </ButtonGroup>,
                <ButtonGroup>
                    <Button disabled icon="table-row-delete"></Button>
                    <Button disabled icon="table-column-delete"></Button>
                    <Button disabled icon="table-delete"></Button>
                </ButtonGroup>,
                <ButtonGroup>
                    <Button disabled icon="cells-merge"></Button>
                    <Button disabled icon="cell-split-horizontally"></Button>
                </ButtonGroup>,
            ]}
        >
            <div className="ProseMirror"><p>The Editor allows your users to edit HTML in a familiar, user-friendly way.</p><p>In this version, the Editor provides the core HTML editing engine which includes basic text formatting, hyperlinks, and lists. The widget <strong>outputs identical HTML</strong> across all major browsers, follows accessibility standards, and provides API for content manipulation.</p><p>Features include:</p><ul><li>Text formatting</li><li>Bulleted and numbered lists</li><li>Hyperlinks</li><li>Cross-browser support</li><li>Identical HTML output across browsers</li></ul></div>
        </EditorNormal>
    );
}


EditorDemo.options = options;
EditorDemo.states = states;
EditorDemo.variants = variants;
EditorDemo.defaultOptions = defaults;
EditorDemo.modifiers = modifiers;

export default EditorDemo;

