import { SuggestionGroupNormal, SuggestionScrollableButtons, Suggestion } from '..';

const style = ``;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Scrollable - scrollable start</span>
            <span>Scrollable buttons - scrollable start</span>

            <section>
                <SuggestionGroupNormal scrollingPosition = "start">
                    <Suggestion text="Suggestion First" />
                    <Suggestion text="Suggestion" />
                    <Suggestion text="Suggestion" />
                    <Suggestion text="Suggestion" />
                    <Suggestion text="Suggestion Last" />
                </SuggestionGroupNormal>
            </section>
            <section>
                <SuggestionScrollableButtons scrollingPosition = "start">
                    <Suggestion text="Suggestion First" />
                    <Suggestion text="Suggestion" />
                    <Suggestion text="Suggestion" />
                    <Suggestion text="Suggestion" />
                    <Suggestion text="Suggestion Last" />
                </SuggestionScrollableButtons>
            </section>

            <span>Scrollable - scrollable end</span>
            <span>Scrollable buttons - scrollable end</span>

            <section>
                <SuggestionGroupNormal scrollingPosition="end">
                    <Suggestion text="Suggestion First" style={{ marginInlineStart: "-30px"}} />
                    <Suggestion text="Suggestion" />
                    <Suggestion text="Suggestion" />
                    <Suggestion text="Suggestion Last" />
                </SuggestionGroupNormal>
            </section>
            <section>
                <SuggestionScrollableButtons scrollingPosition="end">
                    <Suggestion text="Suggestion First"  style={{ marginInlineStart: "-30px"}} />
                    <Suggestion text="Suggestion" />
                    <Suggestion text="Suggestion Last" />
                </SuggestionScrollableButtons>
            </section>

            <span>Scrollable - scrollable both</span>
            <span>Scrollable buttons - scrollable both</span>

            <section>
                <SuggestionGroupNormal scrollingPosition="both">
                    <Suggestion text="Suggestion First" style={{ marginInlineStart: "-30px"}} />
                    <Suggestion text="Suggestion" />
                    <Suggestion text="Suggestion" />
                    <Suggestion text="Suggestion" />
                    <Suggestion text="Suggestion Last" />
                </SuggestionGroupNormal>
            </section>
            <section>
                <SuggestionScrollableButtons scrollingPosition="both">
                    <Suggestion text="Suggestion First"  style={{ marginInlineStart: "-30px"}} />
                    <Suggestion text="Suggestion" />
                    <Suggestion text="Suggestion" />
                    <Suggestion text="Suggestion" />
                    <Suggestion text="Suggestion Last" />
                </SuggestionScrollableButtons>
            </section>

            <span>Scrollable - no scrolling needed</span>
            <span>Scrollable buttons - no scrolling needed</span>

            <section>
                <SuggestionGroupNormal>
                    <Suggestion text="Suggestion First" />
                    <Suggestion text="Suggestion Last" />
                </SuggestionGroupNormal>
            </section>
            <section>
                <SuggestionScrollableButtons>
                    <Suggestion text="Suggestion First" />
                    <Suggestion text="Suggestion Last" />
                </SuggestionScrollableButtons>
            </section>
        </div >
    </>
);
