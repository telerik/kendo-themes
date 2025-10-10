import { SuggestionGroup, Suggestion } from "..";

export const SuggestionScrollableButtons = (props: any) => (
    <SuggestionGroup layout="scrollButtons" children={(
        <>
            <Suggestion text="Suggestion" />
            <Suggestion text="Suggestion" />
            <Suggestion text="Suggestion" />
        </>
    )}
    {...props}
    />
);
