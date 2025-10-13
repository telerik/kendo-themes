import { ChatMessage, ChatNormal, ChatMessageGroup } from '..';


const styles = `
    .k-chat {
        min-height: 200px;
    }

    .chat-ai .k-chat {
        min-height: 700px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span className="k-colspan-2">Messages - full width</span>
            <section className='chat-ai k-colspan-2'>
                <ChatNormal>
                    <ChatMessageGroup type="sender" fullWidth avatar={null} author={null}>
                        <ChatMessage text="(Full width - Sender) I’m sending you a file with my portfolio. I’m Full-stack developer with 10 years experience. Would love your input" />
                    </ChatMessageGroup>
                    <ChatMessageGroup fullWidth avatar={null} author={null}>
                        <ChatMessage text="(Full width - Receiver) I’m sending you a file with my portfolio. I’m Full-stack developer with 10 years experience. Would love your input" />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" fullWidth author={null}>
                        <ChatMessage text="(Full width with Avatar - Sender) Hey Alex, I’m unable to open the file. Could you upload it online and send me the link? I’m Full-stack developer with 10 years experience. Would love your input" />
                    </ChatMessageGroup>
                    <ChatMessageGroup fullWidth author={null}>
                        <ChatMessage text="(Full width with Avatar - Receiver) Hey Alex, I’m unable to open the file. Could you upload it online and send me the link?" />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" fullWidth avatar={null} author={null}>
                        <ChatMessage text="Try now" />
                    </ChatMessageGroup>
                    <ChatMessageGroup fullWidth avatar={null} author={null}>
                        <ChatMessage text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    </ChatMessageGroup>
                    <ChatMessageGroup fullWidth avatar={null} author={null}>
                        <ChatMessage text="(Collapsed - Full width - Receiver) Compare the top 3 AI tools for an image-generation (like Midjourney, DALL·E, and Adobe Firefly). List their pricing, main features." expandable />
                    </ChatMessageGroup>
                    <ChatMessageGroup fullWidth avatar={null} author={null}>
                        <ChatMessage text="(Expanded - Full width - Receiver) Compare the top 3 AI tools for an image-generation (like Midjourney, DALL·E, and Adobe Firefly). List their pricing, main features. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." expandable expanded={true} />
                    </ChatMessageGroup>
                    <ChatMessageGroup fullWidth type="sender" avatar={null} author={null}>
                        <ChatMessage text="(Collapsed - Full width - Sender) Compare the top 3 AI tools for an image-generation (like Midjourney, DALL·E, and Adobe Firefly). List their pricing, main features." expandable />
                    </ChatMessageGroup>
                    <ChatMessageGroup fullWidth type="sender" avatar={null} author={null}>
                        <ChatMessage text="(Expanded - Full width - Sender) Compare the top 3 AI tools for an image-generation (like Midjourney, DALL·E, and Adobe Firefly). List their pricing, main features. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." expandable expanded={true} />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

        </div>
    </>
);
