import { Chat, ChatMessage, ChatMessageGroup } from "..";

export const ChatStopResponse = (props) => (
    <Chat generating children={
        <>
            <div className="k-timestamp">Day, Month 7, 2023</div>
            <ChatMessageGroup fullWidth avatar={null}>
                <ChatMessage />
            </ChatMessageGroup>
        </>
    }
    {...props}
    />
);
