import { ComboboxGrouping } from "../../combobox";

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
            <span>Combobox Grouping</span>
            <span>Combobox Grouping RTL</span>

            <div>
                <ComboboxGrouping placeholder="Combobox..." />
            </div>
            <div dir="rtl">
                <ComboboxGrouping placeholder="Combobox..." />
            </div>
        </div>
    </>
);
