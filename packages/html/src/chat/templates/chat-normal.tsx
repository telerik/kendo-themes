import { Chat, ChatMessage, ChatMessageGroup } from "..";

export const ChatNormal = (props) => (
    <Chat children={
        <>
            <div className="k-timestamp">Day, Month 7, 2023</div>
            <ChatMessageGroup>
                <ChatMessage />
            </ChatMessageGroup>
            <ChatMessageGroup type="sender">
                <ChatMessage />
            </ChatMessageGroup>
            <ChatMessageGroup>
                <ChatMessage text="Very long message text that tests message overflowing behavior. Very long message text that tests message overflowing behavior."/>
            </ChatMessageGroup>
            <ChatMessageGroup type="sender">
                <ChatMessage text="Unusually_long_word_that_tests_word_break_behavior__unusually_long_word_that_tests_word_break_behavior"/>
            </ChatMessageGroup>
        </>
    }
    {...props}
    />
);
