import { Chat, ChatMessage, ChatMessageGroup } from "..";

export const ChatTyping = (props) => (
    <Chat children={
        <>
            <ChatMessageGroup>
                <ChatMessage />
            </ChatMessageGroup>
            <ChatMessageGroup>
                <ChatMessage typing text={null} />
            </ChatMessageGroup>
        </>
    }
    {...props}
    />
);
