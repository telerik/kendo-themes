import { ChatMessageSkeleton } from '..';


const styles = `
    .k-chat {
        height: 500px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Chat with Text and File Skeleton</span>
            <span></span>

            <section>
                <ChatMessageSkeleton />
            </section>
        </div>
    </>
);
