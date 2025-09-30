import { ChatNormal, ChatMessage, ChatMessageGroup } from '..';
import { Suggestion, SuggestionGroup } from '../../suggestion';

const styles = `
    .k-chat {
        height: 550px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>Quick replies - horizontal scroll (Default)</span>
            <span>Quick replies - horizontal scroll with buttons</span>
            <span>Quick replies - wrap</span>
            <section>
                <ChatNormal>
                    <div className="k-timestamp">Quick Replies</div>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <SuggestionGroup>
                        <Suggestion themeColor="primary" text="Quick" />
                        <Suggestion themeColor="primary" text="Hovered" hover />
                        <Suggestion themeColor="primary" text="Focused" focus />
                        <Suggestion themeColor="primary" text="Active" active />
                        <Suggestion themeColor="primary" text="Suggestion with very very very very very very very very very very very very very very very long text" />
                    </SuggestionGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal>
                    <div className="k-timestamp">Quick Replies</div>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <SuggestionGroup layout='scrollButtons'>
                        <Suggestion themeColor="primary" text="Quick" />
                        <Suggestion themeColor="primary" text="Hovered" hover />
                        <Suggestion themeColor="primary" text="Focused" focus />
                        <Suggestion themeColor="primary" text="Active" active />
                        <Suggestion themeColor="primary" text="Suggestion with very very very very very very very very very very very very very very very long text" />
                    </SuggestionGroup>
                </ChatNormal>
            </section>
            <section>
                 <ChatNormal>
                    <div className="k-timestamp">Quick Replies</div>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <SuggestionGroup layout="wrap">
                        <Suggestion themeColor="primary" text="Quick" />
                        <Suggestion themeColor="primary" text="Hovered" hover />
                        <Suggestion themeColor="primary" text="Focused" focus />
                        <Suggestion themeColor="primary" text="Active" active />
                        <Suggestion themeColor="primary" text="Suggestion with very very very very very very very very very very very very very very very long text" />
                    </SuggestionGroup>
                </ChatNormal>
            </section>
        </div>
    </>
);
