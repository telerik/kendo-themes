import { Chat } from "../chat.spec";
import { ChatMessage } from "../chat-message";
import { ChatMessageGroup } from "../chat-message-group";
import { SkeletonNormal } from "../../skeleton/templates/skeleton-normal";
import { SkeletonRectangle } from "../../skeleton/templates/skeleton-rectangle";

export const ChatMessageSkeleton = (props) => (
    <Chat children={
        <>
            <div className="k-timestamp">Day, Month 7, 2023</div>
            <ChatMessageGroup fullWidth>
                <ChatMessage text={null} content={
                    <div className="k-skeleton-container" style={{ width: "100%" }}>
                        <SkeletonNormal style={{ width: "100%" }} />
                        <SkeletonNormal style={{ width: "100%" }} />
                        <SkeletonNormal style={{ width: "100%" }} />
                        <SkeletonNormal style={{ width: "75%" }} />
                    </div>
                } />
            </ChatMessageGroup>
            <ChatMessageGroup type="sender" fullWidth avatar={null}>
                <ChatMessage text={null} content={
                    <div className="k-skeleton-container" style={{ width: "100%", display: "flex", alignItems: "center", gap: "var( --kendo-spacing-1 )" }}>
                        <SkeletonRectangle style={{ width: "32px", height: "32px" }} />
                        <div style={{ flex: "1 1 50%" }}>
                            <SkeletonNormal style={{ width: "100%" }} />
                            <SkeletonNormal style={{ width: "50%" }} />
                        </div>
                    </div>
                } />
            </ChatMessageGroup>
        </>
    }
        {...props}
    />
);
