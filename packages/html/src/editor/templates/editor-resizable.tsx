import { Editor } from '../editor.spec';
import { Button } from '../../button/button.spec';
import { ButtonGroup } from '../../button-group/button-group.spec';

export const EditorResizable = (props) => (
    <Editor
        resizable
        toolbarItems={[
            <ButtonGroup>
                <Button className="k-group-start" disabled icon="undo"></Button>
                <Button className="k-group-end" disabled icon="redo"></Button>
            </ButtonGroup>,
            <ButtonGroup>
                <Button className="k-group-start" icon="bold"></Button>
                <Button icon="italic"></Button>
                <Button icon="underline"></Button>
                <Button className="k-group-end" icon="strikethrough"></Button>
            </ButtonGroup>,
            <ButtonGroup>
                <Button className="k-group-start" icon="subscript"></Button>
                <Button className="k-group-end" icon="supscript"></Button>
            </ButtonGroup>,
            <ButtonGroup>
                <Button className="k-group-start" icon="indent"></Button>
                <Button disabled className="k-group-end" icon="outdent"></Button>
            </ButtonGroup>,
            <ButtonGroup>
                <Button className="k-group-start" icon="align-left"></Button>
                <Button icon="align-center"></Button>
                <Button icon="align-right"></Button>
                <Button className="k-group-end" icon="align-justify"></Button>
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
