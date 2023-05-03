import ReactDOM from "react-dom/client";
import { DropdownListGrouping } from "../../dropdownlist";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>DropdownList Filtering</span>
            <span>DropdownList Filtering RTL</span>

            <div>
                <DropdownListGrouping placeholder="DropdownList..." />
            </div>
            <div dir="rtl">
                <DropdownListGrouping placeholder="DropdownList..." />
            </div>
        </div>
    </>
);
