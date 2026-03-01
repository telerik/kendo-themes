import { Chat, ChatMessage, ChatMessageGroup } from "..";

export const ChatFailed = (props) => (
    <Chat children={
        <>
            <ChatMessageGroup type="sender">
                <ChatMessage failed text="Failed message" />
            </ChatMessageGroup>
        </>
    }
    {...props}
    />
);
