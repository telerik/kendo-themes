import { ComboboxCustomValue, ComboboxGroupingModernCustomValue, ComboboxGroupingAccessibleCustomValue } from "..";

const styles = `
    #test-area {
        grid-template-columns: repeat(2, 360px);
    }

    .k-animation-container {
        position: relative;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span>Combobox Custom Value</span>
            <span>Combobox Custom Value</span>

            <div>
                <ComboboxCustomValue focus />
            </div>
            <div dir="rtl">
                <ComboboxCustomValue focus />
            </div>

            <span>Custom Value and Modern Combobox Grouping</span>
            <span>Custom Value and Modern Combobox Grouping RTL</span>

            <div>
                <ComboboxGroupingModernCustomValue focus />
            </div>
            <div dir="rtl">
                <ComboboxGroupingModernCustomValue focus />
            </div>

            <span>Custom Value and Accessible Combobox Grouping</span>
            <span>Custom Value and Accessible Combobox Grouping RTL</span>

            <div>
                <ComboboxGroupingAccessibleCustomValue focus />
            </div>
            <div dir="rtl">
                <ComboboxGroupingAccessibleCustomValue focus />
            </div>
        </div>
    </>
);
