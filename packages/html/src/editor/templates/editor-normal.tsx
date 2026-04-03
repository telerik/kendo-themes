import { Editor } from '../editor.spec';
import { Button } from '../../button/button.spec';
import { ButtonGroup } from '../../button-group/button-group.spec';

export const EditorNormal = (props) => (
    <Editor
        toolbarItems={[
            <ButtonGroup key="history">
                <Button className="k-group-start" disabled icon="undo" aria-label="Undo"></Button>
                <Button className="k-group-end" disabled icon="redo" aria-label="Redo"></Button>
            </ButtonGroup>,
            <ButtonGroup key="format">
                <Button className="k-group-start" icon="bold" aria-label="Bold"></Button>
                <Button icon="italic" aria-label="Italic"></Button>
                <Button icon="underline" aria-label="Underline"></Button>
                <Button className="k-group-end" icon="strikethrough" aria-label="Strikethrough"></Button>
            </ButtonGroup>,
            <ButtonGroup key="script">
                <Button className="k-group-start" icon="subscript" aria-label="Subscript"></Button>
                <Button className="k-group-end" icon="supscript" aria-label="Superscript"></Button>
            </ButtonGroup>,
            <ButtonGroup key="indent">
                <Button className="k-group-start" icon="indent" aria-label="Indent"></Button>
                <Button disabled className="k-group-end" icon="outdent" aria-label="Outdent"></Button>
            </ButtonGroup>,
            <ButtonGroup key="align">
                <Button className="k-group-start" icon="align-left" aria-label="Align left"></Button>
                <Button icon="align-center" aria-label="Align center"></Button>
                <Button icon="align-right" aria-label="Align right"></Button>
                <Button className="k-group-end" icon="align-justify" aria-label="Justify"></Button>
            </ButtonGroup>
        ]}
        children={
            <>
                Editor Content
            </>
        }
        {...props}
    />
);
