import { DropdownListGroupingFiltering } from "../../dropdownlist/templates/dropdownlist-grouping-filtering";

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
            <span>Classic DropdownList Grouping Filtering</span>
            <span>Classic DropdownList Grouping Filtering RTL</span>

            <div>
                <DropdownListGroupingFiltering placeholder="DropdownList..." />
            </div>
            <div dir="rtl">
                <DropdownListGroupingFiltering placeholder="DropdownList..." />
            </div>
        </div>
    </>
);
