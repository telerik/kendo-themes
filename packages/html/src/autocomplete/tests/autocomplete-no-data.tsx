import Autocomplete from "../autocomplete.spec";
import { List } from "../../list";

const styles = `
    #test-area {
        max-width: 660px;
    }

    .k-animation-container {
        position: relative;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Autocomplete No Data</span>
            <span>Autocomplete No Data RTL</span>

            <div>
                <Autocomplete
                    id="k-autocomplete-nodata"
                    opened
                    activeDescendantId={null}
                    popup={
                        <List role="listbox" aria-label="Autocomplete options" listboxId="k-autocomplete-nodata-listbox" />
                    }
                />
            </div>
            <div dir="rtl">
                <Autocomplete
                    id="k-autocomplete-nodata-rtl"
                    opened
                    activeDescendantId={null}
                    popup={
                        <List role="listbox" aria-label="Autocomplete options" listboxId="k-autocomplete-nodata-rtl-listbox" />
                    }
                />
            </div>
        </div>
    </>
);
