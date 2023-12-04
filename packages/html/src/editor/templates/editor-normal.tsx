import { EditorContent, EditorToolbar, Editor } from '../../editor';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';

export const EditorNormal = (props) => (
    <Editor children={[
        <>
            <EditorToolbar resizable>
                <ButtonGroup>
                    <Button icon="undo"></Button>
                    <Button icon="redo"></Button>
                </ButtonGroup>
                <Button icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded={null}></Button>
            </EditorToolbar>
            <EditorContent>
                <iframe className="k-iframe" frameBorder="0" src="editor-iFrameContent.html"></iframe>
            </EditorContent>
        </>
    ]}
    {...props}>
    </Editor>
);
