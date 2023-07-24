import { MultiSelectGrouping } from "../../multiselect";

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
            <span>MultiSelect Grouping</span>
            <span>MultiSelect Grouping RTL</span>

            <div>
                <MultiSelectGrouping placeholder="MultiSelect..." />
            </div>
            <div dir="rtl">
                <MultiSelectGrouping placeholder="MultiSelect..." />
            </div>
        </div>
    </>
);
