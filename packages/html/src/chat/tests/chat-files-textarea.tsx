import { ChatTextareaFile } from '..';

const styles = `
    #test-area {
        max-width: 1240px;
    }

    .k-chat {
        min-height: 500px;
        min-width: auto;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Files within the Text Area (already uploaded before submission)</span>
            <span></span>
            <section>
                <ChatTextareaFile></ChatTextareaFile>
            </section>
        </div>
    </>
);
