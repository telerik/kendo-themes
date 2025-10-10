import { SuggestionGroupNormal, SuggestionGroupWrap, SuggestionScrollableButtons, Suggestion } from '..';

const style = ``;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>Suggestion - horizontal scroll (Default)</span>
            <span>Suggestion - horizontal scroll with buttons</span>
            <span>Suggestions - wrap</span>

            {[...Suggestion.options.themeColor].map((themeColor) => (
                <>
                    <section>
                        <SuggestionGroupNormal>
                            <Suggestion themeColor={themeColor} text="Suggestion" />
                            <Suggestion themeColor={themeColor} text="Hover" hover />
                            <Suggestion themeColor={themeColor} text="Focus" focus />
                            <Suggestion themeColor={themeColor} text="Active" active />
                            <Suggestion themeColor={themeColor} text="Suggestion with very very very very very very very very very very very very very very very long text" />
                        </SuggestionGroupNormal>
                    </section>
                    <section>
                        <SuggestionScrollableButtons>
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
