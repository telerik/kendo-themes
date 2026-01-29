import { List } from "../../list";
import MultiSelect from "../multiselect.spec";

export const MultiSelectNoData = (props) => {
    const { id = 'multiselect-no-data', ...other } = props;

    return (
        <MultiSelect
            id={id}
            opened
            activeDescendantId={null}
            popup={(
                <List role="listbox" aria-label="MultiSelect options" aria-multiselectable="true" listboxId={`${id}-listbox`} />
            )}
            {...other}
        />
    );
};
