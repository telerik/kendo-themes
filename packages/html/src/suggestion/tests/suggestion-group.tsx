import { SuggestionGroupNormal, SuggestionGroupWrap, Suggestion } from '..';

const style = `
    #test-area {
        grid-template-columns: 400px 300px;
    }
`;


export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Suggestion - horizontal scroll (Default)</span>
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
