import { Chat, ChatMessage, ChatFileWrapper, ChatFile, ChatMessageGroup } from "..";

export const ChatTextareaFile = (props) => (
    <Chat
        children={
            <>
                <ChatMessageGroup>
                    <ChatMessage />
                </ChatMessageGroup>
            </>
        }
        files={
            <>
                <ChatFileWrapper>
                    <ChatFile removeButton></ChatFile>
                    <ChatFile icon="file-psd" name="File with long name" size="5MB" removeButton></ChatFile>
                    <ChatFile icon="file-txt" name="Another file with longer name" removeButton></ChatFile>
                    <ChatFile icon="file-csv" name="Another file with even longer name" size="5MB" removeButton></ChatFile>
                </ChatFileWrapper>
            </>
        }
    {...props}
    />
);
