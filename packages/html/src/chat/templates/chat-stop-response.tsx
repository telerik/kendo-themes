import { Chat } from '../chat.spec';
import { ChatMessage } from '../chat-message';
import { ChatMessageGroup } from '../chat-message-group';

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
