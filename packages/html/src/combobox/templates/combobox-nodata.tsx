import { List, ListContent } from "../../list";
import { NoData } from "../../nodata";
import Combobox from "../combobox.spec";

/**
 * Combobox with open popup showing no data state.
 * The listbox exists but is empty. The persistent live region announces the empty state.
 */
export const ComboboxNoData = (props) => (
    <Combobox
        id="combobox-nodata"
        opened
        message="No data found."
        popup={
            <List>
                <ListContent listboxId="combobox-nodata-listbox" aria-label="Options">
                    {/* Empty listbox - no items match filter */}
                </ListContent>
                <NoData>No data found.</NoData>
            </List>
        }
        {...props}
    />
);
