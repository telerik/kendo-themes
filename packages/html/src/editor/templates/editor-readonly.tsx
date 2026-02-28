import { Editor } from '../editor.spec';
import { Button } from '../../button/button.spec';
import { ButtonGroup } from '../../button-group/button-group.spec';

export const EditorReadonly = (props) => (
    <Editor
        readonly
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
        ]}
        children={
            <>
                Editor Content
            </>
        }
        {...props}
    />
);
