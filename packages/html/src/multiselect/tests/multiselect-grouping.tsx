import { MultiSelectGrouping, MultiSelectGroupingModern } from "../../multiselect";

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
            <span>Classic MultiSelect Grouping</span>
            <span>Classic MultiSelect Grouping RTL</span>

            <div>
                <MultiSelectGrouping placeholder="MultiSelect..." />
            </div>
            <div dir="rtl">
                <MultiSelectGrouping placeholder="MultiSelect..." />
            </div>

            <span>Modern MultiSelect Grouping</span>
            <span>Modern MultiSelect Grouping RTL</span>

            <div>
                <MultiSelectGroupingModern placeholder="MultiSelect..." />
            </div>
            <div dir="rtl">
                <MultiSelectGroupingModern placeholder="MultiSelect..." />
            </div>
        </div>
    </>
);
