import { Editor, EditorNormal } from '../../editor';


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
                        <p className="ProseMirror">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus mollitia obcaecati dignissimos beatae ipsam voluptatem pariatur consectetur culpa asperiores veniam?</p>
                    </EditorNormal>
                </section>
            ))}

        </div>
    </>
);
