import { ChatEmpty } from '..';

const styles = `
    #test-area {
        max-width: 1240px;
    }

    .k-chat {
        min-height: 500px;
        min-width: auto;
    }

    .k-message-list-content-empty {
        background-color: lightGray;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <div>Chat with empty content</div>
            <div></div>

            <section>
                <ChatEmpty />
            </section>
            <section>
                <ChatEmpty>
                    <div>Empty chat - custom template here</div>
                </ChatEmpty>
            </section>
        </div>
    </>
);
