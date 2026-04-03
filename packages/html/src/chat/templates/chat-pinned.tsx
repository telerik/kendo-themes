import { Chat, ChatMessage, ChatMessageGroup, ChatMessageReference } from "..";

export const ChatPinned = (props) => (
    <Chat
        pinned={<ChatMessageReference pinned closeable content="Pinned message content" />}
        children={
            <>
                <ChatMessageGroup>
                    <ChatMessage />
                </ChatMessageGroup>
                <ChatMessageGroup type="sender">
                    <ChatMessage />
                </ChatMessageGroup>
            </>
        }
    {...props}
    />
);
