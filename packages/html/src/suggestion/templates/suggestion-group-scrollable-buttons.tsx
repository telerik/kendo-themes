import { SuggestionGroup } from '../suggestion-group.spec';
import { Suggestion } from '../suggestion';

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
