import { ChatNormal } from '../templates/chat-normal';
import { ChatMessage } from '../chat-message';
import { ChatMessageGroup } from '../chat-message-group';
import { Suggestion } from '../../suggestion/suggestion';
import { SuggestionGroup } from '../../suggestion/suggestion-group.spec';

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
                    <SuggestionGroup scrollingPosition = "start">
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
                    <SuggestionGroup layout='scrollButtons' scrollingPosition = "start">
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
