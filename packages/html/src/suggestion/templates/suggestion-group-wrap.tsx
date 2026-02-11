import { SuggestionGroup } from '../suggestion-group.spec';
import { Suggestion } from '../suggestion';

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
