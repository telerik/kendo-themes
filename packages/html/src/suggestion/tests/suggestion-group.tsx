import { SuggestionGroupNormal } from '../templates/suggestion-group-normal';
import { SuggestionGroupWrap } from '../templates/suggestion-group-wrap';
import { SuggestionScrollableButtons } from '../templates/suggestion-group-scrollable-buttons';
import { Suggestion } from '../suggestion';

const style = `
    #test-area {
        grid-template-columns: 60px repeat(3, minmax(0, 1fr))
    }
`;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">
            <span></span>
            <span>Suggestion - horizontal scroll (Default)</span>
            <span>Suggestion - horizontal scroll with buttons</span>
            <span>Suggestions - wrap</span>

            {[...Suggestion.options.themeColor].map((themeColor) => (
                <>
                    <section>{`${themeColor}`}</section>
                    <section>
                        <SuggestionGroupNormal scrollingPosition = "start">
                            <Suggestion themeColor={themeColor} text="Suggestion" />
                            <Suggestion themeColor={themeColor} text="Hover" hover />
                            <Suggestion themeColor={themeColor} text="Focus" focus />
                            <Suggestion themeColor={themeColor} text="Active" active />
                            <Suggestion themeColor={themeColor} text="Suggestion with very very very very very very very very very very very very very very very long text" />
                        </SuggestionGroupNormal>
                    </section>
                    <section>
                        <SuggestionScrollableButtons scrollingPosition = "start">
                            <Suggestion themeColor={themeColor} text="Suggestion" />
                            <Suggestion themeColor={themeColor} text="Hover" hover />
                            <Suggestion themeColor={themeColor} text="Focus" focus />
                            <Suggestion themeColor={themeColor} text="Active" active />
                            <Suggestion themeColor={themeColor} text="Suggestion with very very very very very very very very very very very very very very very long text" />
                        </SuggestionScrollableButtons>
                    </section>
                    <section>
                        <SuggestionGroupWrap>
                            <Suggestion themeColor={themeColor} text="Suggestion" />
                            <Suggestion themeColor={themeColor} text="Hover" hover />
                            <Suggestion themeColor={themeColor} text="Focus" focus />
                            <Suggestion themeColor={themeColor} text="Active" active />
                            <Suggestion themeColor={themeColor} text="Suggestion with very very very very very very very very very very very very very very very long text" />
                        </SuggestionGroupWrap>
                    </section>
                </>
            ))}
        </div >
    </>
);
