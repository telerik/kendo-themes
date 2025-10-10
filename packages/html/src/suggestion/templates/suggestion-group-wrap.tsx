import { SuggestionGroup, Suggestion } from "..";

export const SuggestionGroupWrap = (props: any) => (
    <SuggestionGroup layout="wrap" children={(
        <>
            <Suggestion text="Suggestion" />
            <Suggestion text="Suggestion" />
            <Suggestion text="Suggestion" />
        </>
    )}
    {...props}
    />
);
