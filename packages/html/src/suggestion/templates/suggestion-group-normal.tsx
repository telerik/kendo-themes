import { SuggestionGroup } from '../suggestion-group.spec';
import { Suggestion } from '../suggestion';

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
