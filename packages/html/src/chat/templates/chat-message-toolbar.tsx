import { Chat, ChatMessage, ChatMessageGroup } from "..";

export const ChatMessageToolbar = (props) => (
    <Chat children={
        <>
            <div className="k-timestamp">Day, Month 7, 2023</div>
            <ChatMessageGroup>
                <ChatMessage toolbar text="Message with toolbar."/>
            </ChatMessageGroup>
            <ChatMessageGroup type="sender">
                <ChatMessage />
            </ChatMessageGroup>
        </>
    }
    {...props}
    />
);
