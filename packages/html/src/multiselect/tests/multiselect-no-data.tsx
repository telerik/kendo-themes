import { MultiSelect } from '../../multiselect';
import { List } from '../../list';

const styles = `
    #test-area {
        max-width: 420px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">
            <MultiSelect
                id="multiselect-no-data"
                opened
                activeDescendantId={null}
                popup={(
                    <List role="listbox" aria-label="MultiSelect options" aria-multiselectable="true" listboxId="multiselect-no-data-listbox" />
                )}
            />
        </div>
    </>
);
