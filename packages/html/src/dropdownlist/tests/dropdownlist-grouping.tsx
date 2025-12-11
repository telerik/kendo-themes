import { DropdownListGrouping } from "../templates/dropdownlist-grouping";

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
        </div>
    </>
);
