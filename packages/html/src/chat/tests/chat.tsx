import { ChatHeader, ChatMessage, ChatNormal, ChatTimestamp, ChatMessageGroup, ChatEvent } from '..';


const styles = `
    .k-chat {
        min-height: 370px;
        min-width: auto;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>Chat normal</span>
            <span>Link in sender message</span>
            <span>Link in receiver message</span>
            <section>
                <ChatNormal>
                    <ChatMessageGroup>
                        <ChatMessage />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage text={
                            <>
                                Here you go, mate <a href="https://www.myportfolio.com/alex_barton" target="_blank" rel="noopener noreferrer">www.myportfolio.com/alex_barton</a> Let me know if you have any problem opening it.
                            </>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage text={
                            <>
                                Here you go, mate <a href="https://www.myportfolio.com/alex_barton" target="_blank" rel="noopener noreferrer">www.myportfolio.com/alex_barton</a> Let me know if you have any problem opening it.
                            </>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <span>Chat with Header</span>
            <span>Chat with Time stamp</span>
            <span>Chat with Header and Time stamp</span>
            <section>
                <ChatNormal header={
                    <ChatHeader>
                        Alex
                    </ChatHeader>
                }>
                    <ChatMessageGroup>
                        <ChatMessage />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal>
                    <ChatTimestamp>Day, Month 7, 2023</ChatTimestamp>
                    <ChatMessageGroup>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatTimestamp>Day, Month 7, 2023</ChatTimestamp>
                    <ChatMessageGroup type="sender">
                        <ChatMessage />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal header={
                    <ChatHeader>
                        Alex
                    </ChatHeader>
                }>
                    <ChatTimestamp>Day, Month 7, 2023</ChatTimestamp>
                    <ChatMessageGroup>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender">
                        <ChatMessage />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <span>Chat with typing indicator</span>
            <span>Chat with event</span>
            <span></span>

            <section>
                <ChatNormal>
                    <ChatTimestamp>Day, Month 7, 2023</ChatTimestamp>
                    <ChatMessageGroup type="sender">
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup>
                        <ChatMessage typing />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal>
                    <ChatTimestamp>Day, Month 7, 2023</ChatTimestamp>
                    <ChatEvent></ChatEvent>
                    <ChatTimestamp>Day, Month 7, 2023</ChatTimestamp>
                </ChatNormal>
            </section>

        </div>
    </>
);
