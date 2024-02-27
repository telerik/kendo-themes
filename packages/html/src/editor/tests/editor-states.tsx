import { Editor, EditorContent, EditorToolbar, EditorNormal } from '../../editor';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';


const styles = `
    #test-area {
        max-width: 660px;
    }
    /* needed for test */
    .k-editor-content > .ProseMirror {
        white-space: normal;
    }
    .k-editor {
        width: 550px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            {[ 'normal', ...Editor.states ].map((state) => (
                <section>
                    <div>{state}</div>
                    <EditorNormal { ...{ [state]: true }} >
                        <EditorToolbar resizable>
                            <ButtonGroup>
                                <Button className="k-group-start" icon="undo"></Button>
                                <Button className="k-group-end" icon="redo"></Button>
                            </ButtonGroup>
                            <Button icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded={null}></Button>
                        </EditorToolbar>
                        <EditorContent>
                            <p className="ProseMirror">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus mollitia obcaecati dignissimos beatae ipsam voluptatem pariatur consectetur culpa asperiores veniam?</p>
                        </EditorContent>
                    </EditorNormal>
                </section>
            ))}

        </div>
    </>
);
