import Combobox from "../combobox.spec";
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
            <span>Combobox No Data</span>
            <span>Combobox No Data RTL</span>

            <div>
                <Combobox
                    id="k-combobox-nodata"
                    opened
                    activeDescendantId={null}
                    popup={
                        <List role="listbox" aria-label="Combobox options" listboxId="k-combobox-nodata-listbox" />
                    }
                />
            </div>
            <div dir="rtl">
                <Combobox
                    id="k-combobox-nodata-rtl"
                    opened
                    activeDescendantId={null}
                    popup={
                        <List role="listbox" aria-label="Combobox options" listboxId="k-combobox-nodata-rtl-listbox" />
                    }
                />
            </div>
        </div>
    </>
);
