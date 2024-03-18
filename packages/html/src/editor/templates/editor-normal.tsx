import { Editor } from '..';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';

export const EditorNormal = (props) => (
    <Editor
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
