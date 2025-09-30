import { ChatNormal, ChatMessage, ChatMessageGroup } from '..';
import { SuggestionGroup, Suggestion } from '../../suggestion';

const styles = `
    .k-chat {
        height: 350px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">


            <span>Suggested actions - horizontal scroll (Default)</span>
            <span>Suggested actions - horizontal scroll with buttons</span>
            <span>Suggested actions - wrap</span>
            <section>
                <ChatNormal suggestedActions={
                    <SuggestionGroup>
                        <Suggestion text="Suggestion" />
                        <Suggestion text="Hover" hover />
                        <Suggestion text="Focus" focus />
                        <Suggestion text="Active" active />
                        <Suggestion text="Suggestion with very very very very very very very very very very very very very very very long text" />
                    </SuggestionGroup>
                    }>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                 <ChatNormal suggestedActions={
                    <SuggestionGroup layout="scrollButtons">
                        <Suggestion text="Suggestion" />
                        <Suggestion text="Hover" hover />
                        <Suggestion text="Focus" focus />
                        <Suggestion text="Active" active />
                        <Suggestion text="Suggestion with very very very very very very very very very very very very very very very long text" />
                    </SuggestionGroup>
                    }>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal suggestedActions={
                    <SuggestionGroup layout="wrap">
                        <Suggestion text="Suggestion" />
                        <Suggestion text="Hover" hover />
                        <Suggestion text="Focus" focus />
                        <Suggestion text="Active" active />
                        <Suggestion text="Suggestion with very very very very very very very very very very very very very very very long text" />
                    </SuggestionGroup>
                    }>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
        </div>
    </>
);
