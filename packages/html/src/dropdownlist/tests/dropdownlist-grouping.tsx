import { DropdownListGrouping } from "../templates/dropdownlist-grouping";
import { DropdownListGroupingModern } from "../templates/dropdownlist-grouping-modern";

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
            <span>Classic DropdownList Grouping</span>
            <span>Classic DropdownList Grouping RTL</span>

            <div>
                <DropdownListGrouping placeholder="DropdownList..." />
            </div>
            <div dir="rtl">
                <DropdownListGrouping placeholder="DropdownList..." />
            </div>

            <span>Modern DropdownList Grouping</span>
            <span>Modern DropdownList Grouping RTL</span>

            <div>
                <DropdownListGroupingModern placeholder="DropdownList..." />
            </div>
            <div dir="rtl">
                <DropdownListGroupingModern placeholder="DropdownList..." />
            </div>
        </div>
    </>
);
