import { SuggestionGroup, Suggestion } from "..";

export const SuggestionGroupWrap = (props: any) => (
    <SuggestionGroup scrollable={false} children={(
        <>
            <Suggestion text="Suggestion" />
            <Suggestion text="Suggestion" />
            <Suggestion text="Suggestion" />
        </>
    )}
    {...props}
    />
);
