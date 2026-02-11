import { Chat } from "../chat.spec";
import { ChatMessage } from "../chat-message";
import { ChatMessageGroup } from "../chat-message-group";
import { FileBoxWrapper } from "../../file-box/file-box-wrapper.spec";
import { FileBox } from "../../file-box/file-box.spec";

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
                <FileBoxWrapper scrollingPosition="start">
                    <FileBox removeButton></FileBox>
                    <FileBox icon="file-psd" name="File with long name" size="5MB" removeButton></FileBox>
                    <FileBox icon="file-txt" name="Another file with longer name" removeButton></FileBox>
                    <FileBox icon="file-csv" name="Another file with even longer name" size="5MB" removeButton></FileBox>
                </FileBoxWrapper>
            </>
        }
    {...props}
    />
);
