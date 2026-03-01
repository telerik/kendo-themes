import { Chat, ChatMessage, ChatMessageGroup } from "..";

export const ChatExpandable = (props) => (
    <Chat children={
        <>
            <ChatMessageGroup>
                <ChatMessage expandable expanded={false} text="Compare the top 3 AI tools for an image-generation (like Midjourney, DALL·E, and Adobe Firefly). List their pricing, main features." />
            </ChatMessageGroup>
            <ChatMessageGroup type="sender">
                <ChatMessage expandable expanded text="Compare the top 3 AI tools for an image-generation (like Midjourney, DALL·E, and Adobe Firefly). List their pricing, main features." />
            </ChatMessageGroup>
        </>
    }
    {...props}
    />
);
