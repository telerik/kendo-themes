import DropdownList from "../dropdownlist.spec";
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
            <span>DropdownList No Data</span>
            <span>DropdownList No Data RTL</span>

            <div>
                <DropdownList
                    id="dropdownlist-nodata"
                    opened
                    activeDescendantId={null}
                    popup={
                        <List role="listbox" aria-label="DropdownList options" listboxId="dropdownlist-nodata-listbox" listboxAriaLive="polite" />
                    }
                />
            </div>
            <div dir="rtl">
                <DropdownList
                    id="dropdownlist-nodata-rtl"
                    opened
                    activeDescendantId={null}
                    popup={
                        <List role="listbox" aria-label="DropdownList options" listboxId="dropdownlist-nodata-rtl-listbox" listboxAriaLive="polite" />
                    }
                />
            </div>
        </div>
    </>
);
