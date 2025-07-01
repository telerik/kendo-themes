import { SuggestionGroup, Suggestion } from "..";

export const SuggestionGroupNormal = (props: any) => (
    <SuggestionGroup children={(
        <>
            <Suggestion text="Suggestion" />
            <Suggestion text="Suggestion" />
            <Suggestion text="Suggestion" />
        </>
    )}
    {...props}
    />
);
