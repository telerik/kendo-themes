import { ComboboxGrouping, ComboboxGroupingModern, ComboboxGroupingAccessible } from "../../combobox";

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
            <span>Classic Combobox Grouping</span>
            <span>Classic Combobox Grouping RTL</span>

            <div>
                <ComboboxGrouping placeholder="Combobox..." />
            </div>
            <div dir="rtl">
                <ComboboxGrouping placeholder="Combobox..." />
            </div>

            <span>Modern Combobox Grouping</span>
            <span>Modern Combobox Grouping RTL</span>

            <div>
                <ComboboxGroupingModern placeholder="Combobox..." />
            </div>
            <div dir="rtl">
                <ComboboxGroupingModern placeholder="Combobox..." />
            </div>

            <span>Accessible Combobox Grouping</span>
            <span>Accessible Combobox Grouping RTL</span>

            <div>
                <ComboboxGroupingAccessible placeholder="Combobox..." />
            </div>
            <div dir="rtl">
                <ComboboxGroupingAccessible placeholder="Combobox..." />
            </div>
        </div>
    </>
);
