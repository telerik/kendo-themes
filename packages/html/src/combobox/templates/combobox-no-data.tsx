import Combobox from "../combobox.spec";
import { List } from "../../list";

export const ComboboxNoData = (props) => {
    const { id = 'combobox-nodata', ...other } = props;

    return (
        <Combobox
            id={id}
            opened
            activeDescendantId={null}
            popup={
                <List role="listbox" aria-label="Combobox options" listboxId={`${id}-listbox`} />
            }
            {...other}
        />
    );
};
